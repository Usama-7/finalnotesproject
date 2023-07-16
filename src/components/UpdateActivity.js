import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";




const UpdateActivity = () => {


  const navigate = useNavigate();
  const params = useParams();

  const [name, setName] = useState('')
  const [disc, setDisc] = useState('')
  const [duration, setDuration] = useState('')
  const [dateof, setDateof] = useState('')
  const [activity, setActivity] = useState('')

  useEffect(() => {
    getUserData();
  }, [])

  // Getting Notes on the basis of Id for editing purpose as pre-filled form data
  const getUserData = async () => {
    console.log(params)
    let result = await fetch(`http://localhost:5000/singleActivity/${params.id}`);
    result = await result.json();
    setName(result.name)
    setDisc(result.disc)
    setActivity(result.activity)
    setDuration(result.duration)
    setDateof(result.dateof)


  }

  // Updating / Editing Activity on the basis of dynamic id
  const updatingData = async (e) => {
    e.preventDefault();
    let result = await fetch(`http://localhost:5000/activityDetail/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, disc, activity, dateof, duration }),
      headers: {
        'Content-Type': "Application/json"
      }
    })
    result = await result.json()
    if (result) {
      navigate('/activities')
    }
  }

  return (
    <>
      <div className="py-5" style={{ backgroundColor: "#e9e4db" }}>
        <div className="container ps-5 py-3 my-3" style={{ backgroundColor: '#eee', textAlign: "left" }}>
          <h2 className='my-3' style={{ textAlign: "center", color: "#554c86" }}><span style={{ borderBottom: "5px solid #554c86" }}>Add Activity</span></h2> <br />
          <div className="col-md-7">
            <div className="well">
              <form className='my-3' acceptCharset="UTF-8" action method="POST"> Name
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter note Title" className="form-control input-lg mb-3" /> Date
                <input value={dateof} onChange={(e) => setDateof(e.target.value)} type="date" placeholder="Enter note Title" className="form-control input-lg mb-3" /> Duration
                <input value={duration} onChange={(e) => setDuration(e.target.value)} type="Number" placeholder="Duration in minutes" className="form-control input-lg mb-3" /> Discription
                <textarea value={disc} onChange={(e) => setDisc(e.target.value)} className="form-control mb-3" id="text" name="text" placeholder="Enter Your Note" rows={5} defaultValue={""} />
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Activity</label>
                      <div className="col-sm-3">
                        <select value={activity} onChange={(e) => setActivity(e.target.value)} className="form-control">
                          <option selected>Select Activity</option>
                          <option value="Run" style={{ backgroundColor: "lightblue" }}>Run</option>
                          <option value="Bicycle ride" style={{ backgroundColor: "#baa9ba" }}>Bicycle ride</option>
                          <option value="Swim" style={{ backgroundColor: "lightgreen" }}>Swim</option>
                          <option value="Walk" style={{ backgroundColor: "yellow" }}>Walk</option>
                          <option value="Hike" style={{ backgroundColor: "orange" }}>Hike </option>
                        </select>
                      </div>
                    </div>
                  </div></div>
                <h6 className="pull-right" id="count_message" />
                <button onClick={updatingData} className="btn  mt-4" style={{ backgroundColor: "#554c86", color: "white" }} type="submit">Update Activity</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateActivity;