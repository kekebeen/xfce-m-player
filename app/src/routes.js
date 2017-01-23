export default [
  {
    path: '/',
    name: 'Home',
    component: require('components/HomeView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
