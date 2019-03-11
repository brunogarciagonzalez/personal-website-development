import React, { Component } from 'react';

class Blog extends Component {

    openInNewTab = () => {
        let win = window.open(this.props.url, '_blank');
        win.focus();
    }

    render() {
        return (
                <div className="ui card tarjeta" onClick={this.openInNewTab} >
                    <div className="content">
                        <div className="header">{this.props.title}</div>
                        <div className="meta">
                            {this.props.date}
                        </div>
                        <br /><br />
                        <img alt="paragraph wireframe" className="ui wireframe image" src="%PUBLIC_URL%/website/favicon.ico"></img>
                        <p></p>
                    </div>
               </div>
         
        )
    }
}

export default Blog