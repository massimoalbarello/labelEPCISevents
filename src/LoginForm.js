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

    function handleLogin(event) {
        event.preventDefault();
        // console.log(api);
        labeledCtx.addApiKey(api);
        labeledCtx.resetTotalLabeledCollections();
        navigate('/progressList', { state: { requestBatch: true } });
    }

    return (
        <section>
            <MainNavigation />
            <form onSubmit={handleLogin}>
            <label>
                API Key:
                <input type="text" value={api} onChange={handleChange}/>
            </label>
            <input type="submit" value="Login" />
        </form>
        </section>
        );
}