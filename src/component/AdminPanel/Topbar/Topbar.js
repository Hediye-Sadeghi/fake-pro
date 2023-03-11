import React, { useEffect, useState } from "react";

export default function Topbar() {
  const [adminInfo, setAdminInfo] = useState({});
  const [adminNotifications, setAdminNotifications] = useState([]);
  const [isShowNotificationsBox, setIsShowNotificationsBox] = useState(false);
  const [notification, setNotification] = useState([]);



 

  return (
    <div class="container-fluid"> 
      <div class="container px-10">
        <div
          class={`home-header ${
            isShowNotificationsBox && "active-modal-notfication"
          }`}
        >
          <div class="home-right">
            <div class="home-searchbar">
              <input type="text" class="search-bar" placeholder="جستجو..." />
            </div>
            <div class="home-notification">
              <button
                type="button"
                onMouseEnter={() => setIsShowNotificationsBox(true)}
              >
                <i class="far fa-bell"></i>
              </button>
            </div>
            <div
              class="home-notification-modal"
              onMouseEnter={() => setIsShowNotificationsBox(true)}
              onMouseLeave={() => setIsShowNotificationsBox(false)}
            >
              <ul class="home-notification-modal-list">
                {adminNotifications.length === 0 ? (
                  <li class="home-notification-modal-item">
                    نوتیفکیشنی برای نمایش وجود ندارد
                  </li>
                ) : (
                  <>
                    {adminNotifications.map((notification) => (
                      <li class="home-notification-modal-item">
                        <span class="home-notification-modal-text">
                          {notification.msg}
                        </span>
                        <label class="switch">
                          <a
                            href="javascript:void(0)"
                            onClick={() => setNotification(notification._id)}
                          >
                            دیدم
                          </a>
                        </label>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
          <div class="home-left">
            <div class="home-profile">
              <div class="home-profile-image">
                <a href="#">
                  <img src='/images/nazari.jpg' alt="" />
                </a>
              </div>
              <div class="home-profile-name">
                <a href="#">حامد نظری</a>
              </div>
              <div class="home-profile-icon">
                <i class="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
