import { Box, Button, Paper } from "@material-ui/core";
import React, { useState } from "react";

const Home = (props) => {
    const { route } = props;
    const { history } = route;
    const [invokeAction, setInvokeAction] = useState(false);

    const goToMeeting = () => {
        var id = _.random(10, 1000, false);
        var link = "/meeting/" + id + "/host";
        history.push(link);
    };

    return (
        <Box height="inherit" display="flex" alignItems="center" justifyContent="center">
            <Paper>
                <Box p={5}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={invokeAction}
                        onClick={goToMeeting}
                    >
                        Create new meeting
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default Home;
