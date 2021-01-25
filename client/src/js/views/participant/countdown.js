import { Box, CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import React, { useEffect, useState } from "react";

const path = require("path");

let refreshInterval = null;
let audio = new Audio(path.resolve("../js/notification.mp3"));

function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress
                variant="determinate"
                value={props.value}
                thickness={2.0}
                size={120}
                color="secondary"
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="h5" component="div" color="secondary">
                    {props.timer}
                </Typography>
            </Box>
        </Box>
    );
}

const Countdown = (props) => {
    const { handleClose, open, time } = props;

    const [timer, setTimer] = useState();
    const [countdown, setCountdown] = useState();
    const [active, setActive] = useState(true);

    const startTimer = (duration) => {
        var timer = duration,
            minutes,
            seconds;

        refreshInterval = setInterval(function () {
            minutes = parseInt(timer / 60);
            seconds = parseInt(timer % 60);

            var minutesD = minutes < 10 ? "0" + minutes : minutes;
            var secondsD = seconds < 10 ? "0" + seconds : seconds;

            setTimer(minutesD + ":" + secondsD);

            var timeLeft = minutes * 60 + seconds;
            var totalTime = duration;
            var percentage = parseFloat(((timeLeft / totalTime) * 100).toFixed(1));

            setCountdown(percentage);

            if (--timer < 0) {
                setActive(false);
                clearInterval(refreshInterval);
                playSound();
            }
        }, 1000);
    };

    const playSound = () => {
        audio.play();
    };

    useEffect(() => {
        if (time > 0) {
            refreshInterval && clearInterval(refreshInterval);
            setActive(true);
            startTimer(time);
        }
    }, [time]);

    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" align="center" onClose={handleClose}>
                Countdown {active ? "Running" : "Completed"}
            </DialogTitle>
            <DialogContent dividers>
                <Grid container alignItems="center" justify="center">
                    <Grid item sm={4}>
                        {active ? (
                            <Box
                                px={5}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                            >
                                <Box pb={1}>
                                    <CircularProgressWithLabel value={countdown} timer={timer} />
                                </Box>
                                <Typography
                                    variant="caption"
                                    color="secondary"
                                    align="center"
                                    paragraph
                                >
                                    Your countdown is ending in
                                </Typography>
                            </Box>
                        ) : (
                            <Box fontSize="15em" display="flex" justifyContent="center">
                                <CheckCircleIcon fontSize="inherit" color="primary" />
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Done
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Countdown;
