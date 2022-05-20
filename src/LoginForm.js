import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';


export default function LoginForm() {

    let [api, setApi] = useState('');
    let navigate = useNavigate();

    function handleChange(e) {
        setApi(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(api);
        navigate('/overview', { state: { api } });
    }

    return (
        <section>
            <MainNavigation />
            <form onSubmit={handleSubmit}>
            <label>
                API Key:
                <input type="text" value={api} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
        </section>
        );
}