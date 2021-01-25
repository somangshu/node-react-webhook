import { Box, Chip, Fab, Grid, Paper } from "@material-ui/core";
import CallEndIcon from "@material-ui/icons/CallEnd";
import GroupIcon from "@material-ui/icons/Group";
import MicOffIcon from "@material-ui/icons/MicOff";
import PersonIcon from "@material-ui/icons/Person";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import React, { useEffect, useState } from "react";
import Countdown from "./countdown";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

const Participant = (props) => {
    const [participants, setParticipants] = useState([1, 2, 3, 4]);
    const [openDialog, setOpenDialog] = useState(false);
    const [duration, setDuration] = useState(0);

    const closeDialog = () => setOpenDialog(false);

    useEffect(() => {
        client.onopen = () => {
            console.log("WebSocket Client Connected - Participant");
        };
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            setDuration(parseInt(dataFromServer.timer_duration));
        };
    }, []);

    useEffect(() => {
        if (duration > 0) {
            setOpenDialog(true);
        }
    }, [duration]);

    return (
        <Box height="inherit">
            <Countdown handleClose={closeDialog} open={openDialog} time={duration} />
            <Grid container>
                {_.map(participants, (v) => {
                    return (
                        <Grid key={v} item sm={6}>
                            <Paper variant="outlined">
                                <Box style={{ backgroundColor: "#333" }}>
                                    <Box p={2}>
                                        <Chip label={"Participant " + v} />
                                    </Box>
                                    <Box fontSize="30em" display="flex" justifyContent="center">
                                        <PersonIcon fontSize="inherit" color="secondary" />
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
            <Box display="flex" justifyContent="center" p={2}>
                <Fab color="default" size="medium" className="mrg-2">
                    <VideocamOffIcon />
                </Fab>
                <Fab color="default" size="medium" className="mrg-2">
                    <MicOffIcon />
                </Fab>
                <Fab color="default" size="medium" className="mrg-2">
                    <GroupIcon />
                </Fab>
                <Fab color="default" size="medium" className="mrg-2">
                    <CallEndIcon />
                </Fab>
            </Box>
        </Box>
    );
};

export default Participant;
