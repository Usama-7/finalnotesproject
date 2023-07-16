import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Activities = () => {
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  // Getting Activities from Server Side
  const getUserData = async () => {
    let result = await fetch("http://localhost:5000/activities");
    result = await result.json();
    setUserData(result);
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Deleting Activity on the bases of id

  const deleteUser = async (id) => {
    let res = await fetch(`http://localhost:5000/activities/${id}`, {
      method: "delete",
    });
    res = await res.json();
    console.log(res);
    if (res) {
      getUserData();
    }
  };

  return (
    <>

      <div className="py-5" style={{ backgroundColor: "#e9e4db" }}>
        <div className="container bootstrap snippets bootdeys " style={{ backgroundColor: '#eee' }}>
          <h2 style={{ color: "#554c86" }} className="pt-3"><span style={{ borderBottom: "5px solid #554c86" }}>Activities</span></h2>
          <div className="row">
            {userData.length ?
              userData.map((x) => {
                return (
                  <>
                    <div className="col-md-4 col-sm-6 content-card">
                      <div className="card-big-shadow">
                        <div
                          className="card card-just-text rounded"
                          data-background="color"
                          data-color="blue"
                          data-radius="none"
                        >
                          <p id="duration" className="mt-4">Activity Duration: <b>{x.duration}{' '}min</b> <br />Activity Date: <b>{x.dateof}</b></p>
                          <div className="content text-black"><hr />
                            <h4 ><span className="" >Name:</span> {x.name}</h4> <hr />
                            <h5 className="align-left"><b>Discription:</b></h5>
                            <h5 > {x.disc}</h5> <br />
                            <h5 className="align-left mb-3"><b>Activity:</b></h5>
                            <b id="activitybtn" >{x.activity}</b>
                            <p className="mt-4" style={{ marginBottom: "1px" }}>Posted on: {x.date.split('T')[0]} , {x.time}</p>
                            <div
                              style={{
                                position: "absolute",
                                top: "7px",
                                right: "10px",
                              }}
                            >
                              <a
                                className="me-3"
                                onClick={() => navigate(`/activities/${x._id}`)}
                              >
                                <img
                                  src="./images/eedit.png"
                                  width={20}
                                  height={20}
                                />
                              </a>
                              <a onClick={() => deleteUser(x._id)}>
                                <img
                                  src="./images/delete.png"
                                  width={20}
                                  height={20}
                                />
                              </a>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end card */}
                      </div>
                    </div>
                  </>
                );
              })
              : <Link to="/addactivity" className="btn  mt-4" style={{ backgroundColor: "#554c86", color: "white" }} type="submit">Add Your First Activity</Link>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
