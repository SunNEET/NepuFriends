import React, {Component} from 'react';

class ConfigPage extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            bossList: ["Lv75 シュヴァリエ・マグナ", "Lv120 シヴァ", "Lv90 ネプチューン", "Lv90 アグニス"], 
        };
    }

    render() {
        const bossList = this.state.bossList.map((boss) => {
            return (
                <li key={boss} onClick={(event) => 
                    this.props.add(event.target.textContent)} className="gbfrf-js-bossSelect gbfrf-follow__boss-box mdl-list__item" >
                    <span className="mdl-list__item-primary-content">
                        <span>
                            {boss}
                        </span>
                    </span>
                </li>
            );
        });
        
        return(
            <dialog className="mdl-dialog gbfrf-dialog" open={this.props.showDialog ? 'open': ''}>
                <div className="mdl-layout__container">
                    <div className="gbfrf-main-dialog gbfrf-dialog__container mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs is-upgraded is-small-screen">
                        <header className="mdl-layout__header is-casting-shadow">
                            <div className="mdl-layout__header-row gbfrf-column__header-row">
                                <div className="mdl-layout-spacer"></div>
                                <div className="mdl-button mdl-js-button mdl-button--icon material-icons js-close-dialog">
                                    <i className="material-icons" onClick={this.props.hide}>clear</i>
                                </div>
                            </div>
                        </header>
                        <section className="gbfrf-dialog__content mdl-layout__tab-panel is-active">
                            <ul className="mdl-list" >
                                {bossList}
                            </ul>
                        </section>
                    </div>
                </div>
            </dialog>
        );
    }
}

export default ConfigPage;

// onClick={()=> {document.getElementsByClassName("mdl-dialog")[0].removeAttribute("open") }}