import Home from "../../views/home";
import Host from "../../views/host";
import Participant from "../../views/participant";

export default {
    Home: {
        component: Home,
        path: "/",
    },
    Host: {
        component: Host,
        path: "meeting/:id/host",
    },
    Participant: {
        component: Participant,
        path: "meeting/:id/participant/",
    },
};
