import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/views/Home/Home';
// // import Projects from '@/components/Projects';
// import Intro from '@/components/Intro';
// import Map from '@/views/Sphere/Map';
// import Map_for_display from '@/views/Sphere/Map_for_display';
import Whole_view from '@/views/Sphere/Whole_view';
// import KT14_list from '@/views/Work/KT14/KT14_list';
// import KT15_list from '@/views/Work/KT15/KT15_list';
// import KT14 from '@/views/Work/KT14/KT14';
// // import Flower from '@/views/Work/Flower/Flower';
// import Animate_list from '@/views/Work/Animate/Animate_list';
// import Animate from '@/views/Work/Animate/Animate';
// import Game_list from '@/views/Work/Game/Game_list';
// import Game from '@/views/Work/Game/Game';
// import Techart_list from '@/views/Work/Techart/Techart_list';
// import Techart from '@/views/Work/Techart/Techart';




Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'Intro',
    //   component: Intro
    // },
    // {
    //   path: '/map',
    //   name: 'Map',
    //   component: Map
    // },
    // {
    //   path: '/map2',
    //   name: 'Map_for_display',
    //   component: Map_for_display
    // },
    {
      path: '/panorama',
      name: 'Whole_view',
      component: Whole_view
    },
    // {
    //   path: '/Bitter_Spring_and_Fruity_Fall_Exhibition',
    //   name: 'KT15_list',
    //   component: KT15_list
    // },
    // {
    //   path: '/Buds_about_to_Blossom_Exhibition',
    //   name: 'KT14_list',
    //   component: KT14_list,
    //   children: [
    //     {
    //       path: 'work/:workid',
    //       name: 'KT14',
    //       component: KT14
    //     }
    //   ]
    // },
    // {
    //   path: '/Digital_Animation',
    //   name: 'Animate_list',
    //   component: Animate_list,
    //   children: [
    //     {
    //       path: 'work/:workid',
    //       name: 'Animate',
    //       component: Animate
    //     }
    //   ]
    // },
    // {
    //   path: '/Digital_Game',
    //   name: 'Game_list',
    //   component: Game_list,
    //   children: [
    //     {
    //       path: 'work/:workid',
    //       name: 'Game',
    //       component: Game
    //     }
    //   ]
    // },
    // {
    //   path: '/Interactive_Technology_Art',
    //   name: 'Techart_list',
    //   component: Techart_list,
    //   children: [
    //     {
    //       path: 'work/:workid',
    //       name: 'Techart',
    //       component: Techart
    //     }
    //   ]
    // },
    
    
  ]
})