<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        {{-- Fonts --}}
        {{-- <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" /> --}}
        {{-- Scripts --}}
        {{-- @routes --}}

        @viteReactRefresh

        {{-- @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"]) --}}

        {{-- @vite(['resources/js/index.tsx']) --}}

        @vite('resources/js/index.tsx')

        <!-- <script type="module" src="http://localhost:5121/resources/js/index.tsx"></script> -->
        
        @inertiaHead
    </head>
    <body class="antialiased">
        {{-- @inertia --}}

        <div id="app"></div>
    </body>
</html>
