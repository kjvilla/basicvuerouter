<template>
    <div class="bg-zinc-900 text-purple-200">
        <div class="container mx-auto flex items-center justify-between">
            <h1 class="tracking-tighter text-3xl font-thin"><span class="text-lg font-bold">SHOP</span>LOCAL<span class="font-normal">Weslaco</span></h1>
            <nav>
                <ul class="flex space-x-4">
                    <router-link to="/">
                    <li class="py-8 px-4 hover:cursor-pointer hover:bg-purple-500 hover:text-purple-800">Home 
                    </li>
                    </router-link>
                    <router-link to="/About">
                    <li class="py-8 px-4 hover:cursor-pointer hover:bg-purple-500 hover:text-purple-800">About
                    </li>
                    </router-link>
                    <router-link to="/FAQS">
                    <li class="py-8 px-4 hover:cursor-pointer hover:bg-purple-500 hover:text-purple-800">FAQS
                    </li>
                    </router-link>
                    <router-link to="/Contact">
                    <li class="py-8 px-4 hover:cursor-pointer hover:bg-purple-500 hover:text-purple-800">Contact
                    </li>
                    </router-link>
                </ul>
            </nav>
        </div>
    </div>
</template>