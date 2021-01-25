import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Fab,
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";
import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import CallEndIcon from "@material-ui/icons/CallEnd";
import GroupIcon from "@material-ui/icons/Group";
import MicOffIcon from "@material-ui/icons/MicOff";
import PersonIcon from "@material-ui/icons/Person";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import React, { useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

const Host = (props) => {
    const { route } = props;
    const { id } = route.match.params;
    const [participants, setParticipants] = useState([1, 2, 3, 4]);
    const [userInvite, setUserInvite] = useState(true);

    const relayCountdown = (sec) => {
        client.send(
            JSON.stringify({
                timer_duration: sec,
                type: "userevent",
            })
        );
    };

    return (
        <Box height="inherit">
            <Dialog
                onClose={() => setUserInvite(false)}
                aria-labelledby="customized-dialog-title"
                open={userInvite}
            >
                <DialogTitle
                    id="customized-dialog-title"
                    align="center"
                    onClose={() => setUserInvite(false)}
                >
                    Invite participants to the meeting
                </DialogTitle>
                <DialogContent dividers>
                    <Typography variant="body2">
                        <a target="_blank" href={"/meeting/" + id + "/participant"}>
                            {"/meeting/" + id + "/participant"}
                        </a>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setUserInvite(false)} color="primary">
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
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
                <Box ml="auto" mr={2}>
                    <Fab color="default" size="medium">
                        <VideocamOffIcon />
                    </Fab>
                </Box>
                <Fab color="default" size="medium" className="mrg-2">
                    <MicOffIcon />
                </Fab>
                <Fab color="default" size="medium" className="mrg-2">
                    <GroupIcon />
                </Fab>
                <Fab color="default" size="medium" className="mrg-2">
                    <CallEndIcon />
                </Fab>
                <Box ml="auto" display="flex" alignItems="center" mr={2}>
                    <AddAlarmIcon />
                </Box>
                <Fab
                    color="default"
                    size="medium"
                    onClick={() => relayCountdown(15)}
                    className="mrg-2"
                >
                    +15
                </Fab>
                <Fab
                    color="default"
                    size="medium"
                    onClick={() => relayCountdown(30)}
                    className="mrg-2"
                >
                    +30
                </Fab>
                <Fab
                    color="default"
                    size="medium"
                    onClick={() => relayCountdown(45)}
                    className="mrg-2"
                >
                    +45
                </Fab>
            </Box>
        </Box>
    );
};

export default Host;
