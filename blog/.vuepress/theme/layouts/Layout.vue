<template>
    <div>
        <header class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ $site.title }}</h1>
                </div>
            </div>
        </header>
        <section class="section">
            <div class="content container">
                <h1>{{ $page.frontmatter.title }}</h1>
                <Content />
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>