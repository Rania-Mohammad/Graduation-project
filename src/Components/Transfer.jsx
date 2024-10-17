import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Transfer = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = "https://cdn03.jotfor.ms/static/prototype.forms.js?v=3.3.50539";
        script1.type = "text/javascript";
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = "https://cdn01.jotfor.ms/static/jotform.forms.js?v=3.3.50539";
        script2.type = "text/javascript";
        document.body.appendChild(script2);

        const script3 = document.createElement('script');
        script3.src = "https://cdn02.jotfor.ms/js/vendor/maskedinput_5.0.9.min.js?v=3.3.50539";
        script3.type = "text/javascript";
        document.body.appendChild(script3);

        const script4 = document.createElement('script');
        script4.src = "https://cdn03.jotfor.ms/js/punycode-1.4.1.min.js?v=3.3.50539";
        script4.type = "text/javascript";
        script4.defer = true;
        document.body.appendChild(script4);

        const script5 = document.createElement('script');
        script5.src = "https://cdn01.jotfor.ms/js/payments/validategateways.js?v=3.3.50539";
        script5.type = "text/javascript";
        document.body.appendChild(script5);

        const script6 = document.createElement('script');
        script6.src = "https://cdn01.jotfor.ms/s/umd/6f82c562e06/for-form-branding-footer.js?v=3.3.50539";
        script6.type = "text/javascript";
        script6.defer = true;
        document.body.appendChild(script6);

        const script7 = document.createElement('script');
        script7.src = "https://cdn02.jotfor.ms/js/vendor/smoothscroll.min.js?v=3.3.50539";
        script7.type = "text/javascript";
        document.body.appendChild(script7);

        const script8 = document.createElement('script');
        script8.src = "https://cdn03.jotfor.ms/js/errorNavigation.js?v=3.3.50539";
        script8.type = "text/javascript";
        document.body.appendChild(script8);

        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
            document.body.removeChild(script3);
            document.body.removeChild(script4);
            document.body.removeChild(script5);
            document.body.removeChild(script6);
            document.body.removeChild(script7);
            document.body.removeChild(script8);
        };
    }, []);

    const [patientID, setPatientID] = useState('');
    const [FromdoctorName, setFromDoctorName] = useState('');
    const [TodoctorName, setToDoctorName] = useState('');
    const [department, setDepartment] = useState('');
    const [hospital, setHospital] = useState('');

    

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation for NID to prevent negative values
        if (patientID < 0) {
            toast.error("National ID cannot be negative");
            return;
        }

        let userData = { FromdoctorName,TodoctorName, patientID, department, hospital};

        // POST
        axios.post('https://localhost:44389/api/Doctor/Transfer', userData)
            .then(res => {
                toast.success("User Registered Successfully");
            }) // 201 created Ok
            .catch(err => {
                toast.error(err.message);
            });
    }

    return (
        <div>
            <ToastContainer />

            <link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/stylebuilder/static/form-common.css?v=5ded9b4" />
            <style type="text/css">
                {`@media print {
                    * {
                        -webkit-print-color-adjust: exact !important;
                        color-adjust: exact !important;
                    }
                    .form-section {
                        display: inline !important;
                    }
                    .form-pagebreak {
                        display: none !important;
                    }
                    .form-section-closed {
                        height: auto !important;
                    }
                    .page-section {
                        position: initial !important;
                    }
                }`}
            </style>
            <link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.50539&themeRevisionID=63e6805f64383509e31513f4" />
            <link type="text/css" rel="stylesheet" href="https://cdn03.jotfor.ms/css/styles/payment/payment_styles.css?3.3.50539" />
            <link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/css/styles/payment/payment_feature.css?3.3.50539" />
            <link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/stylebuilder/static/donationBox.css?v=3.3.50539" />

            <h2 className="mb-2 title-color" style={{ marginLeft: '45%', marginTop: '10%' }}>Transfer</h2>

            <form className="jotform-form" onSubmit={handleSubmit} action="https://submit.jotform.com/submit/240234767427560" method="post" name="form_240234767427560" id="240234767427560" acceptCharset="utf-8" autoComplete="on">
                <input type="hidden" name="formID" value="240234767427560" />
                <input type="hidden" id="JWTContainer" value="" />
                <input type="hidden" id="cardinalOrderNumber" value="" />
                <input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1706118061123" />
                <input type="hidden" id="submitSource" name="submitSource" value="unknown" />
                <input type="hidden" id="buildDate" name="buildDate" value="1706118061123" />

                <div role="main" className="form-all">
                    <ul className="form-section page-section">
                        <li id="cid_43" className="form-input-wide" data-type="control_head"></li>

                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" id="label_39" htmlFor="doctor_name" style={{ marginLeft: '45%' }}>From Doctor Name</label>
                            <input type="text" id="doctor_name" name="doctor_name" className="form-textbox" autoComplete="off" size="15" data-component="last"
                                value={FromdoctorName} onChange={e => setFromDoctorName(e.target.value)}
                                required
                            />
                        </li>
                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" id="label_39" htmlFor="doctor_name" style={{ marginLeft: '45%' }}>To Doctor Name</label>
                            <input type="text" id="doctor_name" name="doctor_name" className="form-textbox" autoComplete="off" size="15" data-component="last"
                                value={TodoctorName} onChange={e => setToDoctorName(e.target.value)}
                                required
                            />
                        </li>

                        <li className="form-line" data-type="control_birthdate" id="id_39">
                            <label className="form-label form-label-top" id="label_39" htmlFor="patient_id" style={{ marginLeft: '45%' }}>Patient ID</label>
                            <input type="text" id="patient_id" name="patient_id" className="form-textbox" autoComplete="off" size="15" data-component="last"
                                value={patientID} onChange={e => setPatientID(e.target.value)}
                                required />
                        </li>

                        <li className="form-line" data-type="control_dropdown" id="id_39">
                            <label className="form-label form-label-top" id="label_39" htmlFor="department" style={{ marginLeft: '45%' }}>Department</label>
                            <select name="department" id="department" className="form-dropdown" aria-labelledby="label_39"
                                value={department} onChange={e => setDepartment(e.target.value)}
                                required
                            >
                                <option value="">Please select a department</option>
                                <option value="Heart">Heart</option>
                                <option value="Children">Children</option>
                                <option value="Bones">Bones</option>
                                <option value="Digestive">Digestive</option>
                            </select>
                        </li>

                        <li className="form-line" data-type="control_dropdown">
                            <label className="form-label form-label-top" id="label_hospital" htmlFor="hospital" style={{ marginLeft: '45%' }}>Hospital Name</label>
                            <select name="hospital" id="hospital" className="form-dropdown" aria-labelledby="label_hospital"
                                value={hospital} onChange={e => setHospital(e.target.value)}
                                required
                            >
                                <option value="">Please select a hospital</option>
                                <option value="university_hospital">University Hospital</option>
                                <option value="dar_el_salam_hospital">Dar El-Salam Hospital</option>
                                <option value="women_health_hospital">Women Health Hospital</option>
                                <option value="children_university_hospital">Children University Hospital</option>
                                <option value="Raghi">Raghi</option>
                                <option value="Shamla">Shamla</option>

                            </select>
                        </li>
                    </ul>

                    <button type="submit" className="nav-link allBtn" style={{ color: 'white', padding: '10px', marginLeft: 'auto', marginRight: 'auto', display: 'block', textAlign: 'center', backgroundColor: '#332a7e', border: 'none', borderRadius: '5px', marginBottom: '25px', width: '150px' }}>Transfer</button>
                </div>
            </form>
        </div>
    );
};

export default Transfer;