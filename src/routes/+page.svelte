<script>
	import ArrowDown from 'svelte-material-icons/ChevronDown.svelte';
</script>

<div class="banner fullscreen">
	<div class="opacity-overlay" />
	<div id="particles-js" />
	<div id="banner-content" class="old">
		<div class="image-wrapper big portrait"><img src="/images/ben.png" alt="Ben" /></div>
		<span id="main-text-animate" class="text">Hello World!</span>
	</div>
	<button class="scroll-down text-5xl"><ArrowDown /></button>
</div>
<div id="main-content">
	<div id="profile">
		<div class="content">
			<center><h1>About me</h1></center>
			<div class="about-me">
				<img src="/images/Face.svg" alt="Ben" />
				<div class="inner">
					<b>I'm Ben. Loving father.<br /> Student. Coder. Human.</b>
					<span>
						I started coding when I was 12. Now I'm 23 and I learned a lot and still not enough.<br
						/>
						<br />
						Over the past years I've learned multiple programming languages like Java, C++, Python and
						more. I built a lot of websites and webcomponents using HTML, CSS and JavaScript. Even server
						virtualisation and linux server administration is part of my repertoire, which makes me able
						to plan, code and deploy websites and other projects all by myself.
					</span>
				</div>
			</div>
		</div>
	</div>
	<div id="skills">
		<div class="content">
			<center><h1>Skills</h1></center>
			<h2>
				These are some of the programming languages,<br /> software and other pieces of tech I've learned
				and worked with over the years
			</h2>
		</div>
		<div class="skillportfolio">
			<div class="group">
				<h2>Languages</h2>
				<div class="items">
					<a href="https://de.wikipedia.org/wiki/Hypertext_Markup_Language"
						><img src="/images/skills/html.svg" alt="HTML" /><span>HTML</span></a
					>
					<a href="https://de.wikipedia.org/wiki/Cascading_Style_Sheets"
						><img src="/images/skills/css.svg" alt="CSS" /><span>CSS</span></a
					>
					<a href="https://sass-lang.com/"
						><img src="/images/skills/sass.svg" alt="SASA" /><span>SASS</span></a
					>
					<a href="https://www.php.net/"
						><img src="/images/skills/php.svg" alt="PHP" /><span>PHP</span></a
					>
					<a href="https://de.wikipedia.org/wiki/JavaScript"
						><img src="/images/skills/js.svg" alt="JavaScript" /><span>JavaScript</span></a
					>
					<a href="https://jquery.com/"
						><img src="/images/skills/jquery.svg" alt="jQuery" /><span>jQuery</span></a
					>
					<a href="https://www.json.org/"
						><img src="/images/skills/json.svg" alt="JSON" /><span>JSON</span></a
					>
					<a href="https://www.java.com/"
						><img src="/images/skills/java.svg" alt="Java" /><span>Java</span></a
					>
					<a href="https://isocpp.org/"
						><img src="/images/skills/c.svg" alt="C++" /><span>C++</span></a
					>
					<a href="https://www.mysql.com/"
						><img src="/images/skills/mysql.svg" alt="MySQL" /><span>MySQL</span></a
					>
					<a href="https://www.python.org/"
						><img src="/images/skills/python.svg" alt="Python" /><span>Python</span></a
					>
				</div>
			</div>
			<div class="group">
				<h2>IDEs</h2>
				<div class="items">
					<a href="https://www.eclipse.org/"
						><img src="/images/skills/eclipse.svg" alt="Eclipse" /><span>Eclipse</span></a
					>
					<a href="https://visualstudio.microsoft.com/"
						><img src="/images/skills/vs.svg" alt="Visual Studio" /><span>Visual Studio</span></a
					>
					<a href="https://code.visualstudio.com/"
						><img src="/images/skills/vscode.svg" alt="VS Code" /><span>VS Code</span></a
					>
					<a href="https://www.mysql.com/de/products/workbench/" class="doubleline"
						><img src="/images/skills/mysqlworkbench.svg" alt="MySQL Workbench" /><span
							>MySQL<br />Workbench</span
						></a
					>
					<a href="https://www.jetbrains.com/de-de/idea/"
						><img src="/images/skills/intellij-idea.svg" alt="IntelliJ Idea" /><span
							>IntelliJ Idea</span
						></a
					>
					<a href="https://www.jetbrains.com/datagrip/"
						><img src="/images/skills/DataGrip.svg" alt="DataGrip" /><span>DataGrip</span></a
					>
				</div>
			</div>
			<div class="group">
				<h2>Version & Build Management</h2>
				<div class="items">
					<a href="https://git-scm.com/"
						><img src="/images/skills/git.svg" alt="Git" /><span>Git</span></a
					>
					<a href="https://github.com/"
						><img src="/images/skills/github.svg" alt="Github" /><span>Github</span></a
					>
					<a href="https://gitlab.com/"
						><img src="/images/skills/gitlab.svg" alt="GitLab" /><span>GitLab</span></a
					>
					<a href="https://ant.apache.org/"
						><img src="/images/skills/ant.svg" alt="Apache Ant" /><span>Apache Ant</span></a
					>
					<a href="https://gradle.org/"
						><img src="/images/skills/gradle.svg" alt="Gradle" /><span>Gradle</span></a
					>
					<a href="https://premake.github.io/"
						><img src="/images/skills/premake.png" alt="Premake5" /><span>Premake5</span></a
					>
				</div>
			</div>
			<div class="group">
				<h2>Server & Server-Management</h2>
				<div class="items">
					<a href="https://termius.com/"
						><img src="/images/skills/termius.svg" alt="Termius" /><span>Termius</span></a
					>
					<a href="https://winscp.net/"
						><img src="/images/skills/winscp.png" alt="WinSCP" /><span>WinSCP</span></a
					>
					<a href="https://httpd.apache.org/"
						><img src="/images/skills/apache2.png" alt="Apache2" /><span>Apache2</span></a
					>
					<a href="https://pve.proxmox.com/"
						><img src="/images/skills/proxmox.png" alt="Proxmox" /><span>Proxmox</span></a
					>
					<a href="https://www.docker.com/"
						><img src="/images/skills/docker.png" alt="Docker" /><span>Docker</span></a
					>
					<a href="https://www.raspberrypi.org/"
						><img src="/images/skills/rpi.svg" alt="Raspberry Pi" /><span>Raspberry Pi</span></a
					>
				</div>
			</div>
			<div class="group">
				<h2>Operating Systems</h2>
				<div class="items">
					<a href="https://www.microsoft.com/de-de/windows"
						><img src="/images/skills/windows.svg" alt="Windows" /><span>Windows</span></a
					>
					<a href="https://www.debian.org/"
						><img src="/images/skills/debian.svg" alt="Debian" /><span>Debian</span></a
					>
					<a href="https://ubuntu.com/"
						><img src="/images/skills/ubuntu.svg" alt="Ubuntu" /><span>Ubuntu</span></a
					>
				</div>
			</div>
			<div class="group">
				<h2>Libraries & Frameworks</h2>
				<div class="items">
					<a href="https://typo3.org/"
						><img src="/images/skills/typo3.svg" alt="Typo3" /><span>Typo3</span></a
					>
					<a href="http://tomcat.apache.org/" class="doubleline"
						><img src="/images/skills/tomcat.svg" alt="Apache Tomcat" /><span
							>Apache<br />Tomcat</span
						></a
					>
					<a href="https://wordpress.com/"
						><img src="/images/skills/wordpress.svg" alt="Wordpress" /><span>Wordpress</span></a
					>
				</div>
			</div>
			<div class="group">
				<h2>Other</h2>
				<div class="items">
					<a href="https://www.office.com/"
						><img src="/images/skills/office.svg" alt="Office" /><span>Office</span></a
					>
					<a href="https://www.adobe.com/products/photoshop.html"
						><img src="/images/skills/photoshop.svg" alt="Photoshop" /><span>Photoshop</span></a
					>
				</div>
			</div>
		</div>
	</div>
	<div id="employers">
		<div class="content">
			<center><h1>Employers</h1></center>
			<h2>Companies I've worked for</h2>
		</div>
		<div class="companies">
			<div id="nephrocare" class="box-rotate">
				<div class="teaser">
					<img src="/images/skills/nephrocare.png" alt="Nephrocare Deutschland" />
				</div>
				<div class="description">
					<h3>Nephrocare Deutschland GmbH</h3>
					My first job in the IT sector I got soon after starting studying at Technical University Darmstadt.
					Mediated by<a href="https://www.univativ.de/">univativ</a>, a job agency for students, I
					had the chance to work in a large company for the first time. There my primary task was to
					develop and maintain plugins for wordpress. But I also occasionally had to make settings
					on the server.
					<div class="skillportfolio">
						<div class="group" style="height:100px">
							<h2>3 Technologies I used here the most</h2>
							<div class="items small">
								<a href="https://www.php.net/"
									><img src="/images/skills/php.svg" alt="PHP" /><span>PHP</span></a
								>
								<a href="https://www.debian.org/"
									><img src="/images/skills/debian.svg" alt="Debian" /><span>Debian</span></a
								>
								<a href="https://wordpress.com/"
									><img src="/images/skills/wordpress.svg" alt="Wordpress" /><span>Wordpress</span
									></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="soka" class="box-rotate">
				<div class="teaser">
					<img src="/images/skills/soka.svg" alt="SOKA-Dach" />
				</div>
				<div class="description">
					<h3>SOKA-Dach GmbH</h3>
					Again mediated by<a href="https://www.univativ.de/">univativ</a>, my second Job was at
					<a href="https://soka-dach.de">SOKA Dach</a>, a social fund for roofers. But my work here
					had less todo with roofing. Starting with small web-tool projects in the form of Java
					Servlets and a USB-stick virus scanner written in Java i was later responsible for the
					conception and implementation of multimedia systems based on Raspberry Pi, which should
					play videos and tv-streams on tvs. After that I continued the development of a portal
					based on Typo3.
					<div class="skillportfolio">
						<div class="group" style="height:100px">
							<h2>3 Technologies I used here the most</h2>
							<div class="items small">
								<a href="https://www.java.com/"
									><img src="/images/skills/java.svg" alt="Java" /><span>Java</span></a
								>
								<a href="https://typo3.org/"
									><img src="/images/skills/typo3.svg" alt="Tpo3" /><span>Typo3</span></a
								>
								<a href="http://tomcat.apache.org/" class="doubleline"
									><img src="/images/skills/tomcat.svg" alt="Apache Tomcat" /><span
										>Apache<br />Tomcat</span
									></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="companies" style="margin-top: 0px">
			<div id="brandhands" class="box-rotate">
				<div class="teaser" style="background-color: black">
					<img src="/images/skills/brandhands-white-logo.png" alt="BRANDHANDS" />
				</div>
				<div class="description">
					<h3>BRANDHANDS</h3>
					Here I assisted the BRANDHANDS Team on a few of their customer websites. I mostly helped with
					my CSS knowledge, but I also had to edit settings in the wordpress backends.
					<div class="skillportfolio">
						<div class="group">
							<h2>3 Technologies I used here the most</h2>
							<div class="items small">
								<a href="https://wordpress.com/"
									><img src="/images/skills/wordpress.svg" alt="Wordpress" /><span>Wordpress</span
									></a
								>
								<a href="https://de.wikipedia.org/wiki/Cascading_Style_Sheets"
									><img src="/images/skills/css.svg" alt="CSS" /><span>CSS</span></a
								>
								<a href="https://de.wikipedia.org/wiki/Hypertext_Markup_Language"
									><img src="/images/skills/html.svg" alt="HTML" /><span>HTML</span></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="boreus" class="box-rotate">
				<div class="teaser">
					<img
						src="https://www.boreus.de/wp-content/uploads/2020/04/boreus_member4.png"
						alt="boreus"
					/>
				</div>
				<div class="description">
					<h3>Boreus</h3>
					Recommended by someone at BRANDHANDS I started working here mid 2021, mainly focussed on frontend-development
					of their Monitoring Tool "bigmodo".
					<div class="skillportfolio">
						<div class="group">
							<h2>3 Technologies I used here the most</h2>
							<div class="items small">
								<a href="https://sass-lang.com/"
									><img src="/images/skills/sass.svg" alt="SASA" /><span>SASS</span></a
								>
								<a href="https://gitlab.com/"
									><img src="/images/skills/gitlab.svg" alt="GitLab" /><span>GitLab</span></a
								>
								<a href="https://jquery.com/"
									><img src="/images/skills/jquery.svg" alt="jQuery" /><span>jQuery</span></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#main-content {
		.content > h2 {
			font-weight: 100;
			font-size: 20px;
			margin: 0px;
			text-align: center;
		}
		h1::after {
			content: '';
			position: absolute;
			left: 0px;
			bottom: 5px;
			height: 5px;
			background-color: hsl(219, 83%, 59%);
			width: 50px;
			transition: width 0.2s, transform 0.5s;
			z-index: -1;
		}
		div:hover > div > center > h1 {
			color: #ddd;
			transform: translateX(10px) scale(1.03);
			&::after {
				width: calc(100% + 20px);
				transform: translateX(-20px);
			}
		}
	}
	#employers {
		padding: 0px !important;

		h1 {
			line-height: unset;
		}
		h2:not(.group > h2) {
			margin-top: 10px !important;
		}
	}
	#profile {
		.about-me {
			width: 70%;
			margin-left: 15%;
			> img {
				width: 25%;
				border-radius: 25px;
				vertical-align: top;
				display: inline-block;
			}
			> .inner {
				width: 60%;
				min-width: 280px;
				display: inline-block;
				margin-top: 8.5px;
				margin-left: -5px;
				padding-left: 20px;
				vertical-align: middle;
				> b {
					font-size: 26px;
				}
				> span {
					font-size: 16px;
					margin-top: 10px;
					display: block;
				}
			}
		}
	}
	#skills {
		background-color: var(--color-bg-12-5);
	}
	.skillportfolio {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 90%;
		margin-left: 5%;

		img {
			height: 70px;
			margin: 10px;
			cursor: pointer;
			transition: transform 0.2s;
			display: block;
			&.white {
				background-color: white;
			}
		}
		.group {
			display: block;
			padding: 5px;
			border-radius: 10px;
			border: 2px solid var(--color-bg-20);
			margin: 10px;
			background-size: 100% 200%;
			background-image: linear-gradient(to bottom, var(--color-bg-20) 50%, transparent 50%);
			background-position: 0 -100%;
			transition: background-position 0.5s;
			overflow: hidden;

			&:hover {
				background-position: 0 0;
			}
			> * {
				z-index: 3;
			}
			.items {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				a {
					text-decoration: none;
					overflow-x: hidden;
					overflow-y: hidden;
					position: relative;
					span {
						color: var(--color-fg-1);
						font-weight: bold;
						text-decoration: none;
						text-align: center;
						display: block;
						font-size: 12px;
						opacity: 0;
						transition: transform 0.2s, opacity 0.2s 0.1s;
						position: absolute;
						width: 100%;
					}
				}
				&.small {
					img {
						height: 30px;
					}
					a.doubleline:hover > span {
						transform: translateY(-33px);
					}
				}
			}
			> h2 {
				font-size: 14px;
				padding: 5px 10px;
				margin: 0 !important;
				margin-top: 0 !important;
			}
		}
		img.round {
			border-radius: 50%;
		}
		a:hover {
			> img {
				transform: scale(0.8) translateY(-10px);
			}
			> span {
				transform: translateY(-20px);
				opacity: 1 !important;
				transition: transform 0.2s, opacity 0.2s !important;
			}
		}
		a.doubleline:hover {
			> img {
				transform: scale(0.6) translateY(-25px);
			}
			> span {
				transform: translateY(-35px);
				opacity: 1 !important;
			}
		}
		.companies & {
			position: absolute;
			bottom: 10px;
			margin-left: 0px;
		}
	}
	.companies {
		display: flex;
		height: 400px;
		position: relative;
		perspective: 600px;
		margin-top: 20px;

		@-moz-document url-prefix() {
			overflow-x: hidden;
			overflow-y: hidden;
		}

		> div {
			width: 50%;
			height: 100%;
			/*overflow: hidden;*/
			background-color: white;
			> div {
				width: 100%;
				height: 100%;
			}
		}
		.teaser img {
			width: 50%;
			margin-left: 25%;
			margin-top: 200px;
			transform: translateY(-50%);
			position: absolute;
		}
		.description {
			background-color: var(--color-bg-12-5);
			padding: 20px;

			a {
				color: var(--color-bg-75);
			}
		}
	}
	.box-rotate {
		width: 100%;
		position: relative;
		transform-style: preserve-3d;
		transition-duration: 0.5s;
		transform-origin: 0px 200px -200px;

		&:hover {
			transform: rotateX(90deg);

			> .teaser {
				opacity: 0;
				transition: opacity 0s 0.5s;
			}
		}
		> div {
			display: block;
			position: absolute;
			&:nth-child(1) {
				transform: rotateY(0deg) translateZ(0px);
			}
			&:nth-child(2) {
				transform: rotateX(-90deg) translateZ(200px) translateY(200px);
			}
		}
	}
	@media (max-width: 1016px) {
		#main-content h1 {
			font-size: 18vw;
		}
		#profile > .about-me {
			width: calc(100% - 40px);
			margin-left: 20px;
		}
		.skillportfolio img {
			height: 50px;
		}
	}
	@media (max-width: 890px) {
		#profile .about-me {
			> img {
				display: block;
				width: 250px;
				margin-left: calc(50% - 125px);
			}
			> .inner {
				display: block;
				width: 100%;
				margin-left: 0;
				padding-left: 0px;
			}
		}
		.skillportfolio img {
			height: 50px;
		}
		.companies {
			display: block;
			width: 100%;
			height: auto;
			overflow-x: hidden;
			> div {
				width: 100%;
				height: 450px;
			}
		}
		.box-rotate {
			transform-origin: 0px 225px -225px;
			> div:nth-child(2) {
				transform: rotateX(-90deg) translateZ(225px) translateY(225px);
			}
		}
		#main-content div:hover > div > center > h1 {
			color: #ddd;
			transform: translateX(10px) scale(1.02);
		}
	}
</style>
