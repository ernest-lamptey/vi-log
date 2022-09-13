import React, {useState, useEffect} from 'react';
import '../styles/SignOut.scss'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const SignOut = () => {
    const [visitors, setVisitors] = useState([]);
    const [id, setId] = useState();
    const history = useHistory();

    const notify = (notification) => {
        toast(notification, {position: "top-center",
        autoClose: 3000})
    }

    const getVisitors = async () => {
        const response = await axios.get('/admin/visits')
            .then((res) => res.data)
            .then((data) => data.filter((item) => item.sign_out === null))
            .catch((err) => console.log(err))
        setVisitors(response)
    }

    const signOut = (id) => {
        console.log('called')
        axios.put('/visitors', {id})
            .then((res) => notify("Signed Out Succesfully"))
            .then((data) => setTimeout(() => 
                {history.push('/')
            }, 3000))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getVisitors()
    }, [])
    
    return (
        <div className='signout-page-container'>
            <div className='signout-body'>
                <ToastContainer />
                <h3>Enter your name and confirm your details to sign out</h3>
                <div className="input-box">
                <input required list='signout-data' placeholder="eg. John Smith" onInput={(e) => {
                        setId(e.target.value.split(' ')[0])
                }}/>
                <datalist id='signout-data'>
                    { visitors && visitors.map((item, index) => (
                        <option className='signout-option' key={item.id} value={`${item.id} ${item.visitor_name}`}>
                            {`${item.company} ${item.phone}`}
                        </option>
                    ))}
                </datalist>
                <button onClick={(e) => {
                        id ? signOut(id) : notify("Select your details before signing out")
                    }}>Sign Out</button>
                </div>
            </div>
        </div>

    );
};

export default SignOut;