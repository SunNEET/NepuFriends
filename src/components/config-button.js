import React from 'react';

const ConfigButton = (props) => {
    // debugger;
    return (
        <div className="gbfrf-settings-fab__container">
            <button onClick={props.addList} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--primary">
                <i className="material-icons">+</i>
                <span className="mdl-button__ripple-container">
                    <span className="mdl-ripple is-animating">
                    </span>
                </span>
            </button>
        </div>
    );
};

export default ConfigButton;