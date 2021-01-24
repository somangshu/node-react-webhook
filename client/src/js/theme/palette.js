import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#253858";

export default {
	black,
	white,
	grey: {
		main: "#E5E9F4",
	},
	primary: {
		contrastText: white,
		dark: "#00002b",
		main: "#192954",
		light: "#475181",
	},
	secondary: {
		contrastText: white,
		dark: "#321d89",
		main: "#6647ba",
		light: "#9974ed",
	},
	success: {
		contrastText: white,
		dark: colors.green[900],
		main: colors.green[600],
		light: colors.green[400],
	},
	info: {
		contrastText: white,
		dark: colors.blue[900],
		main: colors.blue[600],
		light: colors.blue[400],
	},
	warning: {
		contrastText: white,
		dark: colors.orange[900],
		main: colors.orange[600],
		light: colors.orange[400],
	},
	error: {
		contrastText: white,
		dark: colors.red[900],
		main: colors.red[600],
		light: colors.red[400],
	},
	text: {
		primary: colors.blueGrey[900],
		secondary: colors.blueGrey[600],
		link: colors.blue[600],
	},
	background: {
		default: "#F5F6F8",
		paper: white,
	},
	icon: colors.blueGrey[400],
	divider: colors.grey[200],
};
