import React from 'react';
import ReactDOM from 'react-DOM';
import Page from "./page.jsx";

const element = <h1 className="element">Чатик</h1>;

ReactDOM.render(
    <div>
        { element }
        <Page/>
    </div>,
    document.getElementById('root'),
);

