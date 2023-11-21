

import React, { useState } from 'react'

const UserInterestHobbies = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        image: 'https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png',
        details: 'Web Developer',
        interests: [
          'Reading',
          'Traveling',
          'Coding',
          'Photography',
          'Cooking',
          'Gaming',
          'Hiking',
          'Music',
        ],
      });
    
      const handleEditInterest = (index, value) => {
        const newInterests = [...user.interests];
        newInterests[index] = value;
        setUser({ ...user, interests: newInterests });
      };
    
      return (
        <div className="user-profile">
          <div className="profile-header">
            <img src={user.image} alt="Profile" className="profile-image" />
            <div className="profile-details">
              <h2>{user.name}</h2>
              <p>{user.details}</p>
            </div>
          </div>
          <div className="interests-section">
            <h3>Interests and Hobbies</h3>
            <div className="interests-container">
              <div className="column">
                <ul>
                  {user.interests.slice(0, 4).map((interest, index) => (
                    <li key={index}>
                      <input
                        type="text"
                        value={interest}
                        onChange={(e) => handleEditInterest(index, e.target.value)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="column">
                <ul>
                  {user.interests.slice(4, 8).map((interest, index) => (
                    <li key={index + 4}>
                      <input
                        type="text"
                        value={interest}
                        onChange={(e) =>
                          handleEditInterest(index + 4, e.target.value)
                        }
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    };
  export default UserInterestHobbies