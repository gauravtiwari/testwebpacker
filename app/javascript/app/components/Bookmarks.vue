<template lang="pug">
  div

    div(style="background: #eee; padding: 2rem 0")
      .container
        el-row
          el-col(:span="18" :offset="3")
            el-card
              ul.list-unstyled.m-0.bookmarks-list
                li(v-for="i in 25")
                  el-row(:gutter="15")
                    el-col(:span="4")
                      img.bookmarks-list-photo(src="//placehold.it/150x150" width="100%")

                    el-col(:span="7")
                      p.mb-1
                        a.h3.text-primary Jekyll M.

                      p.sitter-location.text-muted
                        | Foo bar

                    el-col(:span="6")
                      p.text-muted Foo

                    el-col.text-right(:span="7")
                      el-button(type="primary" size="large" icon="message") Bar
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
.bookmarks-list {
  margin: -20px !important;
}

.bookmarks-list li {
  border-bottom: 1px solid #eee;
  padding: 15px;
}

.bookmarks-list-photo {
  border-radius: 3px;
}
</style>
