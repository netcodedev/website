<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { onMount } from 'svelte';

	const handleOnMouseMove = (e: MouseEvent) => {
		const { currentTarget: target } = e;

		if (!target) return;

		const rect = (target as HTMLElement).getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		(target as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
		(target as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
	};

	onMount(() => {
		for (const card of document.querySelectorAll('.group')) {
			(card as HTMLElement).onmousemove = (e) => handleOnMouseMove(e);
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
				I'm currently working on BuMAcS, a CRM solution for my business.
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
					Again emplyed by <Button variant="link" size="link" href="//univativ.de">Univativ</Button>
					I worked at <Button variant="link" size="link" href="https://soka-dach.de/">
						SOKA Dach
					</Button> and realised various projects, like a Raspberry Pi based email attachment virus scanner,
					a Raspberry Pi based mediaserver for the entrance hall and various web projects.
				</div>
			</li>
			<li>
				<div class="timeline-start">2021</div>
				<div class="timeline-content">
					<h3>Brandhands</h3>
					While still working at SOKA Dach i helped <Button
						variant="link"
						size="link"
						href="https://brandhands.de/">
						Brandhands
					</Button> on various web projects.
				</div>
			</li>
			<li>
				<div class="timeline-start">2021</div>
				<div class="timeline-content">
					<h3>Boreus</h3>
					In July 2021 I started working at <Button
						variant="link"
						size="link"
						href="https://boreus.de">
						Boreus
					</Button> as a Frontend Developer. Here I worked on their monitoring platform BigMoDo.
				</div>
			</li>
			<li>
				<div class="timeline-start">2024</div>
				<div class="timeline-content">
					<h3>WIIT <Badge variant="outline" class="ml-3 absolute mt-1">current</Badge></h3>
					In early 2024 Boreus merged with <Button
						variant="link"
						size="link"
						href="https://www.wiit.cloud/">
						WIIT
					</Button>. I'm still working on BigMoDo.
				</div>
			</li>
			<li>
				<div class="timeline-start">2026</div>
				<div class="timeline-content">
					<h3>Side Business</h3>
					I started my own side business. I develop Softwaresolutions for small and medium sized businesses.
				</div>
			</li>
		</ul>
	</div>
</section>
<section id="skills">
	<div class="w-full max-w-[1000px]">
		<h1>My Skills</h1>
	</div>
	<div class="w-full max-w-[1000px] mx-auto text-xl mt-6 p-4">
		<p>
			Over the time I have experimented with many different pieces of tech. Mostly fascinated by
			programming itself I have tried many different languages and frameworks. Starting with Java in
			2011 and soon after moving to web development I have gone back and forth many times. I
			extended my knowledge with every step along the way. And I will continue to strive to learn
			new things and improve my skills.
		</p>
		<p class="mt-2">
			I learned not only how to code, but also how to deploy it and make it publicly available.
			Renting servers and managing them myself I learned a lot about server management and the Linux
			operating system. To this day I manage my own infrastructure and host all my projects on my
			own servers. From Proxmox as a hypervisor for my virtual machines to OPNSense as a firewall,
			from Apache2 as a ReverseProxy to all of the NodeJS applications I host. My deep understanding
			of the underlying technologies helps me to quickly identify and fix problems.
		</p>
		<p class="mt-2">
			Many say you should not reinvent the wheel. I say, that in doing so you can learn way more
			than in just using the technologies that are already there. Thats why I often build
			proof-of-concepts that <i>of course</i>
			do not go into production. But they help me to understand the underlying technologies and to learn
			new things. It helps me understand the design decisions that were made and compare similar technologies.
		</p>
		<p class="mt-2">Below you can find a list of technologies I have worked with.</p>
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
				<a href="https://de.wikipedia.org/wiki/JavaScript">
					<img src="/images/skills/js.svg" alt="JavaScript" />
					<span>JavaScript</span>
				</a>
				<a href="https://www.rust-lang.org/">
					<img src="/images/skills/rust.svg" alt="Rust" />
					<span>Rust</span>
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
			</div>
		</div>
		<div class="group">
			<h2>IDEs</h2>
			<div class="items">
				<a href="https://code.visualstudio.com/">
					<img src="/images/skills/vscode.svg" alt="VS Code" />
					<span>VS Code</span>
				</a>
				<a href="https://antigravity.google/">
					<img src="/images/skills/antigravity.svg" alt="Antigravity" />
					<span>Antigravity</span>
				</a>
				<a href="https://www.eclipse.org/">
					<img src="/images/skills/eclipse.svg" alt="Eclipse" />
					<span>Eclipse</span>
				</a>
				<a href="https://visualstudio.microsoft.com/">
					<img src="/images/skills/vs.svg" alt="Visual Studio" />
					<span>Visual Studio</span>
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
				<a href="https://doc.rust-lang.org/cargo/">
					<img src="/images/skills/cargo.png" alt="Cargo" />
					<span>Cargo</span>
				</a>
				<a href="https://gradle.org/">
					<img src="/images/skills/gradle.svg" alt="Gradle" />
					<span>Gradle</span>
				</a>
			</div>
		</div>
		<div class="group">
			<h2>Server & Server-Management</h2>
			<div class="items">
				<a href="https://httpd.apache.org/">
					<img src="/images/skills/apache2.png" alt="Apache2" />
					<span>Apache2</span>
				</a>
				<a href="https://traefik.io/">
					<img src="/images/skills/traefik.svg" alt="Traefik" />
					<span>Traefik</span>
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
				<a href="https://kubernetes.io/">
					<img src="/images/skills/kubernetes.svg" alt="Kubernetes" />
					<span>Kubernetes</span>
				</a>
				<a href="https://www.terraform.io/">
					<img src="/images/skills/terraform.svg" alt="Terraform" />
					<span>Terraform</span>
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
				<a href="https://www.archlinux.org/">
					<img src="/images/skills/archlinux.svg" alt="Arch Linux" />
					<span>Arch Linux</span>
				</a>
				<a href="https://www.debian.org/">
					<img src="/images/skills/debian.svg" alt="Debian" />
					<span>Debian</span>
				</a>
				<a href="https://ubuntu.com/">
					<img src="/images/skills/ubuntu.svg" alt="Ubuntu" />
					<span>Ubuntu</span>
				</a>
				<a href="https://www.microsoft.com/de-de/windows">
					<img src="/images/skills/windows.svg" alt="Windows" />
					<span>Windows</span>
				</a>
			</div>
		</div>
		<div class="group">
			<h2>Databases</h2>
			<div class="items">
				<a href="https://surrealdb.com">
					<img
						src="https://raw.githubusercontent.com/surrealdb/.github/main/img/icon.png"
						alt="SurrealDB" />
					<span>SurrealDB</span>
				</a>
				<a href="https://mariadb.org/">
					<img src="/images/skills/mariadb.png" alt="MariaDB" />
					<span>MariaDB</span>
				</a>
			</div>
		</div>
	</div>
</section>
<section class="bg-accent-foreground">
	<div class="w-full max-w-[1000px] p-4 mx-auto">
		<h1>You have reached the end of the page</h1>
		<p>
			Wanna contact me? Feel free to send me an email at <a href="mailto:benmondini@netcode.dev">
				benmondini@netcode.dev
			</a>
		</p>
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
		@apply flex flex-col items-center py-8;
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
				background-image: radial-gradient(
					1200px circle at var(--mouse-x) var(--mouse-y),
					#c2886a33,
					transparent 50%
				);
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
						transition:
							transform 0.2s,
							opacity 0.2s 0.1s;
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
				transition:
					transform 0.2s,
					opacity 0.2s !important;
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
