import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Modal from "../../Components/Modal/Modal";
import "./Home.scss";

const Home = () => {
  const [profile, setProfile] = useState([]);
  const [counter, setCounter] = useState(23);
  const [modalAction, setModalAction] = useState(false);

  //handle delete post
  const handleDeletePost = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:5050/profile/${id}`).then((res) => {
          setProfile(profile.filter((data) => data.id !== id));
        });
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5050/profile?_sort=id&_order=desc")
      .then((res) => {
        setProfile(res.data);
      });
  }, [setProfile]);

  return (
    <>
      <div className="home ">
        <div className="row mx-0">
          <div className="col-md-2 header-top my-0">
            <div className="header">
              <div className="logo">
                <Link to={"/"}>
                  <img
                    className="header-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                    alt=""
                  />
                </Link>
              </div>

              <div className="menu mt-4">
                <ul className="list-group">
                  <li className="list-group-item my-2">
                    <Link to={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bxs-home"></i>
                      <span>Home</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <Link to={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bx-search"></i>
                      <span>Search</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <Link to={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bx-time"></i>
                      <span>Explore</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <Link to={"/"} className="d-flex gap-3">
                      <i
                        style={{ fontSize: "25px" }}
                        class="bx bx-movie-play"
                      ></i>
                      <span>Reels</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <Link to={"/"} className="d-flex gap-3">
                      <i
                        style={{ fontSize: "25px" }}
                        class="bx bx-message-rounded-dots"
                      ></i>
                      <span>Messages</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <Link to={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bx-heart"></i>
                      <span>Notifications</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2">
                    <Link to={"/create"} className="d-flex gap-3">
                      <i
                        style={{ fontSize: "25px" }}
                        class="bx bx-plus-circle"
                      ></i>
                      <span>Create</span>
                    </Link>
                  </li>

                  <li className="list-group-item my-2 mb-2">
                    <Link to={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bx-user"></i>
                      <span>Profile</span>
                    </Link>
                  </li>

                  <li className="list-group-item mt-5">
                    <Link to={"/"} className="d-flex gap-3">
                      <i style={{ fontSize: "25px" }} class="bx bx-menu"></i>
                      <span>More</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-7 me-5">
            <div className="main-body">
              <div className="story-box mb-4 ">
                <div className="story-item ">
                  <img
                    className="story-photo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiPICw0MvHj_wo8CMy5anGtsvBzqAJSQtDFw&usqp=CAU"
                    alt=""
                  />
                  <span>Anis Ahad</span>
                </div>

                <div className="story-item ">
                  <img
                    className="story-photo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiv3_7feBQf5fP_TSXxW4Nz-NOhsx9JA-_6Q&usqp=CAU"
                    alt=""
                  />
                  <span>Sarmin Sultana</span>
                </div>

                <div className="story-item ">
                  <img
                    className="story-photo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMQU5OOJ8XrMGxRz-tynm0hOLru2aa2H6Vg&usqp=CAU"
                    alt=""
                  />
                  <span>AR Sabbir</span>
                </div>

                <div className="story-item ">
                  <img
                    className="story-photo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4P5FDXigA7NZ1Epe2vRE7CyJfyI4rrKfDg&usqp=CAU"
                    alt=""
                  />
                  <span>Raza Miya</span>
                </div>

                <div className="story-item ">
                  <img
                    className="story-photo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KXEB-S2jZ4g9Ae7U-8CRWzzIFTXGuiiPUg&usqp=CAU"
                    alt=""
                  />
                  <span>Golam Rabbani</span>
                </div>

                <div className="story-item ">
                  <img
                    className="story-photo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlxZjAx9guVVi5EmtciN8lppcBwBjFsUUf2A&usqp=CAU"
                    alt=""
                  />
                  <span>Jibon Roy</span>
                </div>
              </div>

              {profile.map((profile, index) => {
                return (
                  <div className="user-box" key={index}>
                    <div className="user-info d-flex justify-content-between">
                      <div className="user-title d-flex gap-3 align-content-center ">
                        <div className="profile-photo ">
                          <img
                            className="mt-1"
                            src={profile.profilePhoto}
                            alt=""
                          />
                        </div>
                        <div className="user-bio">
                          <span>
                            {profile.name}
                            <span style={{ fontWeight: "200", color: "#777" }}>
                              • 2d
                            </span>
                          </span>
                          <p>{profile.title}</p>
                        </div>
                      </div>

                      <div className="action-bar  text-right">
                        <div class="dropdown my-3">
                          <button class="dropbtn">
                            <i class="bx bx-dots-horizontal-rounded"></i>
                          </button>
                          <div class="dropdown-content">
                            <Link to={`/edit/${profile.id}`}>Edit</Link>
                            <Link onClick={() => handleDeletePost(profile.id)}>
                              Delete
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="post">
                      <div className="post-photo">
                        <img className="w-100" src={profile.postPhoto} alt="" />

                        <div className="reactions-box ">
                          <div className="reactions d-flex gap-2 mt-2 ">
                            <div className="left-bar">
                              <button onClick={() => setCounter(counter + 1)}>
                                <i class="bx bx-heart"></i>
                              </button>
                              <button>
                                <i class="bx bx-message-rounded"></i>
                              </button>
                              <button>
                                <i class="bx bx-paper-plane"></i>
                              </button>
                            </div>
                            <div className="right-bar">
                              <button>
                                <i class="bx bx-bookmark"></i>
                              </button>
                            </div>
                          </div>
                          <div className="likes mt-2">
                            <p>{counter} likes</p>
                          </div>
                          <div className="comment-box">
                            <input type="text" placeholder="Add a comment..." />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-md-3" style={{ width: "350px" }}>
            <div className="right-sidebar">
              <div className="user-info d-flex justify-content-between">
                <div className="user-title d-flex gap-3 align-content-center ">
                  <div className="profile-photo ">
                    <img
                      className="mt-1"
                      src="https://media.licdn.com/dms/image/C5603AQFbgqZZIBGG5Q/profile-displayphoto-shrink_100_100/0/1660416892075?e=1681344000&v=beta&t=aUaewDpRYc78VzIWWz7G-5hA-vcosCude_6dbyZ5FvY"
                      alt=""
                    />
                  </div>
                  <div className="user-bio mt-2">
                    <span>sufia_akter22</span>
                    <p>Sufia Akter</p>
                  </div>
                </div>

                <div className="action-bar text-right mt-2">
                  <Link>switch</Link>
                </div>
              </div>

              <div className="suggestions-box d-flex justify-content-between">
                <p>Suggestions for you</p>
                <Link>See All</Link>
              </div>

              <div className="follow">
                <div className="user-info d-flex justify-content-between">
                  <div className="user-title d-flex gap-3 align-content-center ">
                    <div className="profile-photo ">
                      <img
                        className="mt-1"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMQU5OOJ8XrMGxRz-tynm0hOLru2aa2H6Vg&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="user-bio">
                      <span>almahdimuntasir</span>
                      <p>Followed by _asraful_haq_</p>
                    </div>
                  </div>
                  <div className="action-bar text-right">
                    <Link>Follow</Link>
                  </div>
                </div>

                <div className="user-info d-flex justify-content-between">
                  <div className="user-title d-flex gap-3 align-content-center ">
                    <div className="profile-photo ">
                      <img
                        className="mt-1"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLQoEtOfDFUBw5qWRgRr8jvAWbXDzvUNO3w&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="user-bio">
                      <span>sushic.nl</span>
                      <p>Followed by programmerrabbani</p>
                    </div>
                  </div>
                  <div className="action-bar text-right">
                    <Link>Follow</Link>
                  </div>
                </div>

                <div className="user-info d-flex justify-content-between">
                  <div className="user-title d-flex gap-3 align-content-center ">
                    <div className="profile-photo ">
                      <img
                        className="mt-1"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZx-N1OkLrWHmQA9ek1e6_ngH3K415kgv_Tw&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="user-bio">
                      <span>irinafrose10</span>
                      <p>Followed by programmerrabbani</p>
                    </div>
                  </div>
                  <div className="action-bar text-right">
                    <Link>Follow</Link>
                  </div>
                </div>
              </div>

              <div className="footer">
                <p>© 2023 Instagram from Meta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
