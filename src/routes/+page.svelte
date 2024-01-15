<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { onMount } from 'svelte';

    const handleOnMouseMove = (e: MouseEvent) => {
        const { currentTarget: target} = e;

        if(!target) return;

        const rect = (target as HTMLElement).getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        (target as HTMLElement).style.setProperty('--mouse-x', `${ x }px`);
        (target as HTMLElement).style.setProperty('--mouse-y', `${ y }px`);
    }

    onMount(() => {
        for(const card of document.querySelectorAll(".group")){
            (card as HTMLElement).onmousemove = e => handleOnMouseMove(e);
        }
    });
</script>

<section
	class="flex relative flex-col items-center justify-start p-4 lg:flex-row lg:justify-around text-white"
	id="banner">
	<div>
		<div>
			<h3 class="text-md">Hi, my name is</h3>
			<h1 class="text-5xl md:text-8xl">Benedict Mondini</h1>
			<h2>I build and deploy projects for the web</h2>
		</div>
		<div class="absolute bottom-4 flex gap-2 md:bottom-8">
			<p class="w-full max-w-60">
				I'm a fullstack developer from Germany. I love to build and deploy projects for the web.
			</p>
			<p class="w-full max-w-60">
				I'm currently working on <Button variant="link" size="link" href="/projects/cauth">
					C-Auth
				</Button>,
				<Button variant="link" size="link" href="/projects/moneyman">MoneyMan</Button> and <Button
					variant="link"
					size="link"
					href="/projects/PMS">
					PMS
				</Button> and even more...
			</p>
			<p class="w-full max-w-60">
                I manage my own infrastructure and host all my projects on my own servers.
            </p>
		</div>
	</div>
	<img src="/images/Face.svg" alt="This is me" class="h-[40vh] lg:h-[70vh]" />
</section>
<section class="flex justify-center py-8">
	<div class="w-full max-w-[1000px]">
		<h1>My career</h1>
		<ul class="timeline mt-10">
			<li>
				<div class="timeline-start">2018</div>
				<div class="timeline-content">
					<h3>Technical University of Darmstadt</h3>
					I started studying computer science at the Technical University of Darmstadt.
				</div>
			</li>
			<li>
				<div class="timeline-start">2019</div>
				<div class="timeline-content">
					<h3>Fresenius Nephrocare</h3>
					Employed by the company <Button variant="link" size="link" href="//univativ.de">
						Univativ
					</Button> I worked at Fresenius and helped to build an intranet website.
				</div>
			</li>
			<li>
				<div class="timeline-start">2020</div>
				<div class="timeline-content">
					<h3>SOKA Dach</h3>
					Again emplyed by <Button variant="link" size="link" href="//univativ.de">
						Univativ
					</Button> I worked at <Button variant="link" size="link" href="https://soka-dach.de/">SOKA Dach</Button> and realised various projects, like a Raspberry
					Pi based email attachment virus scanner, a Raspberry Pi based mediaserver for the entrance
					hall and various web projects.
				</div>
			</li>
			<li>
				<div class="timeline-start">2021</div>
				<div class="timeline-content">
					<h3>Brandhands</h3>
					While still working at SOKA Dach i helped <Button variant="link" size="link" href="https://brandhands.de/">Brandhands</Button> on various web projects.
				</div>
			</li>
			<li>
				<div class="timeline-start">2021</div>
				<div class="timeline-content">
					<h3>Boreus <Badge variant="outline" class="ml-3 absolute mt-1">current</Badge></h3>
					In July 2021 I started working at <Button variant="link" size="link" href="https://boreus.de">Boreus</Button> as a Frontend Developer. Here I worked on their monitoring
					platform BigMoDo.
				</div>
			</li>
		</ul>
	</div>
</section>
<section id="skills">
	<div class="w-full max-w-[1000px]">
		<h1>My Skills</h1>
    </div>
    <div class="w-full max-w-[1000px] mx-auto text-xl mt-6">
        <p>
            Over the time I have experimented with many different pieces of tech. Mostly fascinated by programming itself I
            have tried many different languages and frameworks. Starting with Java in 2011 and soon after moving to web development
            I have gone back and forth many times. I extended my knowledge with every step along the way. And I will continue to strive
            to learn new things and improve my skills.
        </p>
        <p class="mt-2">
            I learned not only how to code, but also how to deploy it and make it publicly available. Renting servers and managing them
            myself I learned a lot about server management and the Linux operating system. To this day I manage my own infrastructure
            and host all my projects on my own servers. From Proxmox as a hypervisor for my virtual machines to OPNSense as a firewall,
            from Apache2 as a ReverseProxy to all of the NodeJS applications I host. My deep understanding of the underlying
            technologies helps me to quickly identify and fix problems.
        </p>
        <p class="mt-2">
            Many say you should not reinvent the wheel. I say, that in doing so you can learn way more than in just using the technologies
            that are already there. Thats why I often build proof-of-concepts that <i>of course</i> do not go into production. But they help me
            to understand the underlying technologies and to learn new things. It helps me understand the design decisions that were made
            and compare similar technologies.
        </p>
        <p class="mt-2">
            Below you can find a list of technologies I have worked with. 
        </p>
    </div>
    <div class="skillportfolio">
        <div class="group">
            <h2>Languages</h2>
            <div class="items">
                <a href="https://de.wikipedia.org/wiki/Hypertext_Markup_Language">
                    <img src="/images/skills/html.svg" alt="HTML" />
                    <span>HTML</span>
                </a>
                <a href="https://de.wikipedia.org/wiki/Cascading_Style_Sheets">
                    <img src="/images/skills/css.svg" alt="CSS" />
                    <span>CSS</span>
                </a>
                <a href="https://sass-lang.com/">
                    <img src="/images/skills/sass.svg" alt="SASA" />
                    <span>SASS</span>
                </a>
                <a href="https://www.php.net/">
                    <img src="/images/skills/php.svg" alt="PHP" />
                    <span>PHP</span>
                </a>
                <a href="https://de.wikipedia.org/wiki/JavaScript">
                    <img src="/images/skills/js.svg" alt="JavaScript" />
                    <span>JavaScript</span>
                </a>
                <a href="https://jquery.com/">
                    <img src="/images/skills/jquery.svg" alt="jQuery" />
                    <span>jQuery</span>
                </a>
                <a href="https://www.json.org/">
                    <img src="/images/skills/json.svg" alt="JSON" />
                    <span>JSON</span>
                </a>
                <a href="https://www.java.com/">
                    <img src="/images/skills/java.svg" alt="Java" />
                    <span>Java</span>
                </a>
                <a href="https://isocpp.org/">
                    <img src="/images/skills/c.svg" alt="C++" />
                    <span>C++</span>
                </a>
                <a href="https://www.mysql.com/">
                    <img src="/images/skills/mysql.svg" alt="MySQL" />
                    <span>MySQL</span>
                </a>
                <a href="https://www.python.org/">
                    <img src="/images/skills/python.svg" alt="Python" />
                    <span>Python</span>
                </a>
            </div>
        </div>
        <div class="group">
            <h2>IDEs</h2>
            <div class="items">
                <a href="https://www.eclipse.org/">
                    <img src="/images/skills/eclipse.svg" alt="Eclipse" />
                    <span>Eclipse</span>
                </a>
                <a href="https://visualstudio.microsoft.com/">
                    <img src="/images/skills/vs.svg" alt="Visual Studio" />
                    <span>Visual Studio</span>
                </a>
                <a href="https://code.visualstudio.com/">
                    <img src="/images/skills/vscode.svg" alt="VS Code" />
                    <span>VS Code</span>
                </a>
                <a href="https://www.mysql.com/de/products/workbench/" class="doubleline">
                    <img src="/images/skills/mysqlworkbench.svg" alt="MySQL Workbench" />
                    <span>
                        MySQL
                        <br />
                        Workbench
                    </span>
                </a>
                <a href="https://www.jetbrains.com/de-de/idea/">
                    <img src="/images/skills/intellij-idea.svg" alt="IntelliJ Idea" />
                    <span>IntelliJ Idea</span>
                </a>
                <a href="https://www.jetbrains.com/datagrip/">
                    <img src="/images/skills/DataGrip.svg" alt="DataGrip" />
                    <span>DataGrip</span>
                </a>
            </div>
        </div>
        <div class="group">
            <h2>Version & Build Management</h2>
            <div class="items">
                <a href="https://git-scm.com/">
                    <img src="/images/skills/git.svg" alt="Git" />
                    <span>Git</span>
                </a>
                <a href="https://github.com/">
                    <img src="/images/skills/github.svg" alt="Github" />
                    <span>Github</span>
                </a>
                <a href="https://gitlab.com/">
                    <img src="/images/skills/gitlab.svg" alt="GitLab" />
                    <span>GitLab</span>
                </a>
                <a href="https://ant.apache.org/">
                    <img src="/images/skills/ant.svg" alt="Apache Ant" />
                    <span>Apache Ant</span>
                </a>
                <a href="https://gradle.org/">
                    <img src="/images/skills/gradle.svg" alt="Gradle" />
                    <span>Gradle</span>
                </a>
                <a href="https://premake.github.io/">
                    <img src="/images/skills/premake.png" alt="Premake5" />
                    <span>Premake5</span>
                </a>
            </div>
        </div>
        <div class="group">
            <h2>Server & Server-Management</h2>
            <div class="items">
                <a href="https://termius.com/">
                    <img src="/images/skills/termius.svg" alt="Termius" />
                    <span>Termius</span>
                </a>
                <a href="https://winscp.net/">
                    <img src="/images/skills/winscp.png" alt="WinSCP" />
                    <span>WinSCP</span>
                </a>
                <a href="https://httpd.apache.org/">
                    <img src="/images/skills/apache2.png" alt="Apache2" />
                    <span>Apache2</span>
                </a>
                <a href="https://pve.proxmox.com/">
                    <img src="/images/skills/proxmox.png" alt="Proxmox" />
                    <span>Proxmox</span>
                </a>
                <a href="https://opnsense.org/">
                    <img src="/images/skills/opnsense.png" alt="OPNSense" />
                    <span>OPNSense</span>
                </a>
                <a href="https://www.docker.com/">
                    <img src="/images/skills/docker.png" alt="Docker" />
                    <span>Docker</span>
                </a>
                <a href="https://www.raspberrypi.org/">
                    <img src="/images/skills/rpi.svg" alt="Raspberry Pi" />
                    <span>Raspberry Pi</span>
                </a>
            </div>
        </div>
        <div class="group">
            <h2>Operating Systems</h2>
            <div class="items">
                <a href="https://www.microsoft.com/de-de/windows">
                    <img src="/images/skills/windows.svg" alt="Windows" />
                    <span>Windows</span>
                </a>
                <a href="https://www.debian.org/">
                    <img src="/images/skills/debian.svg" alt="Debian" />
                    <span>Debian</span>
                </a>
                <a href="https://ubuntu.com/">
                    <img src="/images/skills/ubuntu.svg" alt="Ubuntu" />
                    <span>Ubuntu</span>
                </a>
            </div>
        </div>
        <div class="group">
            <h2>Libraries & Frameworks</h2>
            <div class="items">
                <a href="https://nodejs.org/">
                    <img src="/images/skills/nodejs.svg" alt="NodeJS" />
                    <span>NodeJS</span>
                </a>
                <a href="https://svelte.dev/">
                    <img src="/images/skills/svelte.svg" alt="Svelte" />
                    <span>Svelte</span>
                </a>
                <a href="https://kit.svelte.dev/">
                    <img src="/images/skills/svelte.svg" alt="SvelteKit" />
                    <span>SvelteKit</span>
                </a>
                <a href="https://daisyui.com/">
                    <img src="/images/skills/daisyui.svg" alt="DaisyUI" />
                    <span>DaisyUI</span>
                </a>
                <a href="https://ui.shadcn.com/">
                    <img src="/images/skills/shadcn.svg" alt="shadcn/ui" />
                    <span>shadcn/ui</span>
                </a>
                <a href="https://typo3.org/">
                    <img src="/images/skills/typo3.svg" alt="Typo3" />
                    <span>Typo3</span>
                </a>
                <a href="http://tomcat.apache.org/" class="doubleline">
                    <img src="/images/skills/tomcat.svg" alt="Apache Tomcat" />
                    <span>
                        Apache
                        <br />
                        Tomcat
                    </span>
                </a>
                <a href="https://wordpress.com/">
                    <img src="/images/skills/wordpress.svg" alt="Wordpress" />
                    <span>Wordpress</span>
                </a>
            </div>
        </div>
        <div class="group">
            <h2>Databases</h2>
            <div class="items">
                <a href="https://surrealdb.com">
                    <img src="https://raw.githubusercontent.com/surrealdb/.github/main/img/icon.png" alt="SurrealDB" />
                    <span>SurrealDB</span>
                </a>
                <a href="https://mariadb.org/">
                    <img src="/images/skills/mariadb.png" alt="MariaDB" />
                    <span>MariaDB</span>
                </a>
            </div>
        </div>
        <div class="group">
            <h2>Other</h2>
            <div class="items">
                <a href="https://www.office.com/">
                    <img src="/images/skills/office.svg" alt="Office" />
                    <span>Office</span>
                </a>
                <a href="https://www.adobe.com/products/photoshop.html">
                    <img src="/images/skills/photoshop.svg" alt="Photoshop" />
                    <span>Photoshop</span>
                </a>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
	#banner {
		background-image: linear-gradient(
			to right bottom,
			#c2886a,
			#ae7a66,
			#9a6c61,
			#84605b,
			#6e5453,
			#634d4e,
			#574649,
			#4c4043,
			#483c41,
			#43383e,
			#3e353c,
			#39313a
		);
		height: calc(100vh - 53px);
        min-height: 460px;
	}
	#skills {
        background-image: linear-gradient(to top, #c2886a44, transparent);
		@apply flex flex-wrap justify-center py-8;
	}
    section > div > h1 {
        margin-left: 1rem;
    }
	.timeline {
		list-style: none;
		padding: 0;
		position: relative;
		li {
			display: flex;
			@apply items-start;
			.timeline-start {
				width: 100px;
				padding: 2px;
				border: 1px solid #c2886a;
				width: 40px;
				font-size: 12px;
				font-weight: bold;
				text-align: center;
				border-radius: 5px;
				margin-top: 20px;
				margin-right: 1rem;
				@apply shrink-0 bg-background;
			}
			.timeline-content {
				margin: 5px;
				@apply border border-muted-foreground rounded-md p-4 w-full bg-secondary;
			}
		}
		&::before {
			content: '';
			position: absolute;
			background-color: #c2886a;
			top: 0;
			left: 20px;
			width: 2px;
			height: 100%;
			z-index: -1;
		}
	}
    .skillportfolio {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 90%;
		margin-top: 1rem;

		img {
			height: 70px;
			margin: 10px;
			cursor: pointer;
			transition: transform 0.2s;
			display: block;
		}
		.group {
			display: block;
			padding: 5px;
			border-radius: 10px;
			border: 1px solid #c2886a;
			margin: 10px;
			overflow: hidden;
            position: relative;
			> * {
				z-index: 3;
			}
            &::before {
                border-radius: inherit;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                background-image: radial-gradient(1200px circle at var(--mouse-x) var(--mouse-y), #c2886a33, transparent 50%);
                opacity: 0;
                transition: opacity 0.5s;
            }
            &:hover::before {
                opacity: 1;
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
                line-height: unset;
				font-size: 14px;
				padding: 5px 10px;
				margin: 0 !important;
				margin-top: 0 !important;
			}
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
	}
</style>
