<script>
    import { Button } from "$lib/components/ui/button";
    import { Badge } from "$lib/components/ui/badge";
</script>

<section id="header" class="flex flex-col items-center justify-center gap-4 p-4 text-white">
    <h1 class="text-7xl sm:text-8xl">My Projects</h1>
    <p class="text-center">
        This is a collection of projects, I have worked on over the years. <br>
        Some of them are finished, some are in development.
    </p>
</section>
<section id="projects">
    <div>
        <div>
            <h1><img src="https://c-auth.com/images/CAuth-logo.svg" alt="C-Auth Logo"> C-Auth</h1>
            <h4>an authentication service for Websites</h4>
            <div class="flex gap-2 items-center">
                <Badge variant="outline" title="This project is live">Live</Badge>
                <Badge variant="outline" title="This project is still actively developed">In development</Badge>
                <Button variant="link" size="link" href="https://c-auth.com" class="text-lg">https://c-auth.com</Button>
            </div>
            
            <p class="mt-2">
                Every year millions of accounts get hacked, because of weak or leaked passwords. Often the reason for this is,
                that the website does not store the passwords securely, sometimes even unencrypted.
            </p>
            <p class="mb-2">
                C-Auth aims to solve this problem by not relying on passwords at all. Instead it uses on-device authentication
                using biometrics or authentication devices. This way the user does not have to remember a password.
                This is achieved using the <Button variant="link" size="link" href="https://www.w3.org/TR/webauthn/">webauthn standard</Button>.
            </p>
            <div class="flex justify-end mt-2">
                <Button size="sm" href="/projects/cauth">Read more</Button>
            </div>
        </div>
    </div>
    <div>
        <div>
            <h1><img src="https://moneyman.netcode.dev/logo_256x256.png" alt="MoneyMan Logo"> MoneyMan</h1>
            <h4>a money-management tool</h4>
            <div class="flex gap-2 items-center">
                <Badge variant="outline" title="This project is live">Live</Badge>
                <Badge variant="outline" title="This project is still actively developed">In development</Badge>
                <Button variant="link" size="link" href="https://moneyman.netcode.dev" class="text-lg">https://moneyman.netcode.dev</Button>
            </div>
            <p class="mt-2">
                The more transactions move in and out of your bank-account, the harder it gets to keep track of your finances.<br>
                MoneyMans goal is to make this easier by providing a simple and intuitive interface to keep track of your finances.
            </p>
            <div class="flex justify-end mt-2">
                <Button size="sm" href="/projects/moneyman">Read more</Button>
            </div>
        </div>
    </div>
    <div>
        <div>
            <h1>PMS</h1>
            <h4>a project-management tool</h4>
            <div class="flex gap-2 items-center">
                <Badge variant="outline" title="This project is live">Live</Badge>
                <Badge variant="outline" title="This project is still actively developed">In development</Badge>
                <Button variant="link" size="link" href="https://pms.netcode.dev" class="text-lg">https://pms.netcode.dev</Button>
            </div>
            <p class="mt-2">
                My mind is always full of ideas for projects to simplify my life. But I often forget about them, because I don't write them down.<br>
                PMS is a project-management tool, that aims to solve this problem by providing a place to keep track of your projects and ideas.
            </p>
            <div class="flex justify-end mt-2">
                <Button size="sm" href="/projects/pms">Read more</Button>
            </div>
        </div>
    </div>
    <div>
        <div>
            <h1>Tracy</h1>
            <h4>a monitoring tool</h4>
            <div class="flex gap-2 items-center">
                <Badge variant="outline" title="This project is still actively developed">In development</Badge>
            </div>
            <p class="mt-2">
                With the number of projects that have gone live growing, it becomes increasingly difficult to monitor errors and performance.<br>
                Tracy is made to help me keep track of the uptime and occuring errors of my projects.
            </p>
            <div class="flex justify-end mt-2">
                <Button size="sm" href="/projects/tracy">Read more</Button>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
    #header {
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
        min-height: 40vh;
    }
    #projects {
        @apply flex flex-col items-center gap-4 p-4;
        > div {
            @apply w-full max-w-[1000px];
            @apply border rounded-lg;
            border-color: #c2886a;
            background-color: #c2886a1A;
            @apply flex items-start justify-start gap-2;
            > div {
                @apply p-4 w-full;
                > h1 {
                    @apply flex items-center gap-2;
                    img {
                        max-height: 40px;
                        max-width: 40px;
                    }
                }
            }
        }
    }
</style>