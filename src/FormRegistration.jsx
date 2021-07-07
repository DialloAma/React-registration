import React from 'react'
import './Forme.css'
function FormRegistration() {
    return (
        <div className="body">

            <form > 
                <div className="fom1">
                    <h2>Codetrain Registration Form</h2> <br />
                    <p>this form is the first step to register for Codetrain's starting on 25th july 2020. our admissions team will reach out to you after successfully submitting your form.</p>
                    <span style={{ color: "red" }}>*Required</span>
                </div>
                <div className="fom2">
                    <label>Email address<span style={{ color: 'red' }}>*</span></label> <br />
                    <input type="Email" name="mail" style={{ border: 'none', borderBottom: '1px solid black' }} placeholder="Your email" />
                </div>
                <div className="fom3">
                    <label>Full Name<span style={{ color: 'red' }}>*</span></label> <br />
                    <input type="text" name="name" style={{ border: 'none', borderBottom: '1px solid black' }} placeholder="Your answer" />
                </div>
                <div className="fom4">
                    <label>Phone Number <span style={{ color: 'red' }}>*</span></label> <br />
                    <input type="Number" name="tel" style={{ border: 'none', borderBottom: '1px solid black' }} placeholder="Your answer" />
                </div>
                <div className="fom5">
                    <h3>Phone number of next of kin</h3>
                    <p>Phone Number of someone we can reach out to in case your phone is off or not reachable. Eg, your parent,guardian or sibling, or spouse </p>
                    <input type="Number" name="tel" style={{ border: 'none', borderBottom: '1px solid black' }} placeholder="Your answer" />
                </div>
                <div className="fom6">
                    <p>Can you pay 60% or more of the full codetrain fees (GHS6000 for Ghanaian applicants or $1.200 for international applicants) <span style={{ color: 'red' }}>*</span></p> <br />
                    <input type="checkbox" name="checkbox" value="No" /> No <br />
                    <input type="checkbox" name="checkbox" value="Yes" /> Yes

                </div>
                <div className="fom7">
                    <p>Plase indicate who is going to pay your fees<span style={{ color: 'red' }}>*</span></p> <br />
                    <input type="checkbox" name="checkbox" value="yourself" /> Yourself <br />
                    <input type="checkbox" name="checkbox" value="Parent/Sponsor" /> Parent/Sponsor <br />
                    <input type="checkbox" name="checkbox" value="Organization" /> Organizaton
                </div>
                <div className="fom8">
                    <label>Location<span style={{ color: 'red' }}>*</span></label> <br />
                    <input type="text" name="name" style={{ border: 'none', borderBottom: '1px solid black' }} placeholder="Your answer" />
                </div>
                <div className="fom9">
                    <label>Current or previous school<span style={{ color: 'red' }}>*</span></label> <br />
                    <input type="text" name="name" style={{ border: 'none', borderBottom: '1px solid black' }} placeholder="Your answer" />
                </div>
                <div className="fom10">
                    <label>Why do you want to join Codetrain<span style={{ color: 'red' }}>*</span></label> <br />
                    <input type="text" name="name" style={{ border: 'none', borderBottom: '1px solid black' }} placeholder="Your answer" />
                </div>
                <div className="fom11">
                    <label>How did you hear about Codetrain?<span style={{ color: 'red' }}>*</span></label> <br />
                    <input type="text" name="name" style={{ border: 'none', borderBottom: '1px solid black' }} placeholder="Your answer" />
                </div>
            </form>
        </div>
    )
}
export default FormRegistration
