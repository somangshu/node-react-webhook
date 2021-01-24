import React, { Component } from "react";

export default class StandaloneLayout extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        return (
            <div
                style={{
                    height: "inherit",
                }}
            >
                <Component route={route} />
            </div>
        );
    }
}
