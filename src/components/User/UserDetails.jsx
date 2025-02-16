import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

function UserDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userDoc = await getDoc(doc(db, "users", "uQitomeIcY2bG8UCEDx4")); 
      if (userDoc.exists()) {
        setUser(userDoc.data());
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      
      <div className="user-profile-grid">
        
        <div className="user-card">
          <div className="profile-header">
            
            <h3>{user.name}</h3>
            <p className="membership-badge">{user.membershipType} Member</p>
          </div>
          
          <div className="profile-details">
            <div className="detail-item">
              <span>Email:</span>
              <p>{user.email}</p>
            </div>
            <div className="detail-item">
              <span>Joined:</span>
              <p>{user.joinDate}</p>
            </div>
          </div>
        </div>

        
        <div className="user-card">
          <h3>Membership Status</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "75%" }}></div>
          </div>
          <div className="membership-info">
            <p>Days Remaining: <strong>90</strong></p>
            <p>Expiry Date: <strong>2024-01-15</strong></p>
          </div>
          <button className="cta-button full-width">Upgrade Membership</button>
        </div>
      </div>

      
      <div className="user-card activity-card">
        <h3>Recent Activity</h3>
        <ul className="activity-list">
          <li>
            <span className="activity-icon">🏋️</span>
            <div className="activity-text">
              <p>Completed Strength Training</p>
              <small>{user.lastCheckIn} at 09:30 AM</small>
            </div>
          </li>
          <li>
            <span className="activity-icon">🧘</span>
            <div className="activity-text">
              <p>Attended Yoga Class</p>
              <small>2023-10-04 at 07:00 AM</small>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDetails;