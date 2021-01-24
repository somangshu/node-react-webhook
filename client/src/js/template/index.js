import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GenericNotFound from "../components/common/GenericNotFound";
import standaloneRoutes from "./routes/standaloneRoutes";
import StandaloneLayout from "./standalone";

class Template extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.user;
        return (
            <BrowserRouter>
                <Switch>
                    {_.map(standaloneRoutes, (route, key) => {
                        const { component, path } = route;
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={(route) => (
                                    <StandaloneLayout
                                        component={component}
                                        route={route}
                                        user={user}
                                    />
                                )}
                            />
                        );
                    })}

                    <Route component={GenericNotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Template;
