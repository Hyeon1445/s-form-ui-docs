import { PageEnum } from '@components/common/layout/sidebar/Sidebar'

const route = {
  main: '/',
  components: (component: PageEnum) =>
    `/components/${component.toLocaleLowerCase()}`,
  playground: '/playground',
}

export default route
