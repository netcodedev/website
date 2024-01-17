<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs";
	import type { PageData } from "../$types";

    export let data: PageData;
</script>

<div class="p-4">
    <Tabs.Root value="contact" class="w-[400px]">
        <Tabs.List>
            <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
            <Tabs.Trigger value="blog">Blog</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="contact">
            <h1>Messages</h1>
            <div class="flex flex-wrap mt-4">
                {#each data.messages as message}
                    <div class="border rounded-lg p-4">
                        <h2>{message.name}</h2>
                        <p>{message.email} - {new Date(message.createdAt).toLocaleDateString("de")}</p>
                        <hr>
                        <p>{message.message}</p>
                    </div>
                {/each}
            </div>
        </Tabs.Content>
        <Tabs.Content value="blog">
            Change your password here.
        </Tabs.Content>
    </Tabs.Root>
</div>
