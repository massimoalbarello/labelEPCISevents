import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import LabeledEventsContext from './store/labeledEvents-context';

export default function LoginForm() {
    
    const labeledCtx = useContext(LabeledEventsContext);

    const [api, setApi] = useState('');
    const navigate = useNavigate();

    function handleChange(e) {
        setApi(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(api);
        labeledCtx.addApiKey(api);
        navigate('/progressList');
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