import AppBar from "@material-ui/core/AppBar";

function Nav() {
	return (
		<AppBar>
			<nav class='bg-dark p-2'>
				<ul class='nav text-light justify-content-center'>
					<li class='nav-item'>
						<a class='nav-link' href='#aboutMe'>
							About Me
						</a>
					</li>
					<li class='nav-item'>
						<a class='nav-link active' href='#myPortfolio'>
							My Portfolio
						</a>
					</li>
					<li class='nav-item'>
						<a class='nav-link' href='#mySkills'>
							My Skills
						</a>
					</li>
				</ul>
			</nav>
		</AppBar>
	);
}

export default Nav;
