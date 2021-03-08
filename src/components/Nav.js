import React from "react";
import {
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemText,
	Avatar,
	Divider,
	List,
	Typography,
	Box,
	Icon,
} from "@material-ui/core";
import {
	Menu,
	ArrowBack,
	AssignmentInd,
	Home,
	Apps,
	ContactMail,
} from "@material-ui/icons";

export default function Nav() {
	return (
		<Box component='nav'>
			<AppBar>
				<Toolbar>
					<IconButton>
						<Menu />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
