<template lang="pug">
  #app
    .el-menu.el-menu-demo.el-menu--horizontal.el-menu--dark
      div(:class="{ 'container': !$route.meta.mainNavFull }")
        router-link.el-menu-branding.pl-0.pr-0(to="/")
          i.el-icon-share

        router-link.el-menu-branding.pr-5(to="/") branding

        router-link.el-menu-item(to="/") Foo
        router-link.el-menu-item(to="/") Bar

        template(v-if="$store.getters.getIsUserSignedIn")
          el-dropdown.el-menu-item.pull-right(style="padding-top: 9px")
            span.el-dropdown-link
              img.img-circle(:src="$store.state.usersStore.currentUser.avatarUrl" width="40" height="40" v-if="$store.state.usersStore.currentUser.avatarUrl")
              .currentuser-avatar-placeholder

            el-dropdown-menu(slot="dropdown")
              el-dropdown-item
                router-link.link-inherit(to="/")
                  | Foo
              el-dropdown-item
                router-link.link-inherit(to="/")
                  | Bar
              el-dropdown-item(divided)
                a.link-inherit
                  | Foo

          router-link.el-menu-item.pull-right.el-menu-item-icon(to="/")
            i.el-icon-star-on

          router-link.el-menu-item.pull-right.el-menu-item-icon(to="/")
            el-badge(:value="3")
              i.el-icon-message

        template(v-else)
          a.el-menu-item.pull-right(@click.prevent="signOutClicked" href="#") Foo
          a.el-menu-item.pull-right(@click.prevent="signInClicked" href="#") Bar

    router-view
</template>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {
  }
}
</script>

<style>
.el-menu-branding {
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0;
  padding: 0 20px;
  color: #bfcbd9;
  text-decoration: none;
}

.el-menu-item-icon {
  font-size: 1.3rem !important;
  padding: 0 15px !important;
}

.el-menu-item-icon sup {
  transform: translateY(68%) translateX(100%) !important;
  font-size: 10px;
  height: 16px;
  line-height: 16px;
  padding: 0 5px;
  border: 0px;
}

a.el-menu-item {
  text-decoration: none;
}

.el-menu-item-icon i {
  margin-right: 0 !important;
}

.el-menu .currentuser-avatar-placeholder {
  width: 40;
  height: 40;
  display: block;
  border-radius: 50%;
  background: #eee;
  overflow: hidden;
}
</style>
