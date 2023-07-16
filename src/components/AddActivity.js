import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddActivity = () => {


    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [disc, setDisc] = useState('')
    const [duration, setDuration] = useState('')
    const [dateof, setDateof] = useState('')
    const [activity, setActivity] = useState('')


    const postingData = async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:5000/addactivity', {
            method: "POST",
            body: JSON.stringify({ name, disc, activity, duration, dateof }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        result = await result.json();
        console.log(result)
        navigate("/activities")

    }

    return (

        <>

            <div className="py-5" style={{ backgroundColor: "#e9e4db" }}>
                <div className="container ps-5 py-3 my-3" style={{ backgroundColor: '#eee', textAlign: "left" }}>
                    <h2 className='my-3' style={{ textAlign: "center", color: "#554c86" }}><span style={{ borderBottom: "5px solid #554c86" }}>Add Activity</span></h2> <br />
                    <div className="col-md-7">
                        <div className="well">
                            <form className='my-3' acceptCharset="UTF-8" action method="POST"> Name
                                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Activity Name" className="form-control input-lg mb-3" /> Date
                                <input onChange={(e) => setDateof(e.target.value)} type="date" placeholder="Enter Date" className="form-control input-lg mb-3" /> Duration
                                <input onChange={(e) => setDuration(e.target.value)} type="Number" placeholder="Duration in minutes" className="form-control input-lg mb-3" /> Discription
                                <textarea onChange={(e) => setDisc(e.target.value)} className="form-control mb-3" id="text" name="text" placeholder="Enter Discription" rows={5} defaultValue={""} />
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Activity</label>
                                            <div className="col-sm-3">
                                                <select onChange={(e) => setActivity(e.target.value)} className="form-control">
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
                                <button onClick={postingData} className="btn  mt-4" style={{ backgroundColor: "#554c86", color: "white" }} type="submit">Add New Activity</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddActivity

