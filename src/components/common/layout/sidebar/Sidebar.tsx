import route from '@constants/route'
import { useRouter } from 'next/router'
import * as S from './Sidebar.style'

export enum PageEnum {
  FormBox = 'FormBox',
  Button = 'Button',
  Input = 'Input',
  Select = 'Select',
  Radio = 'Radio',
  Checkbox = 'Checkbox',
  Switch = 'Switch',
  Color = 'Color',
  DatePicker = 'DatePicker',
  Stack = 'Stack',
  Playground = 'Playground',
}

interface SidebarProps {
  selectedTab: PageEnum
}

const components = [
  PageEnum.FormBox,
  PageEnum.Button,
  PageEnum.Input,
  PageEnum.Select,
  PageEnum.Radio,
  PageEnum.Checkbox,
  PageEnum.Switch,
  PageEnum.Color,
  PageEnum.DatePicker,
  PageEnum.Stack,
]

const Sidebar = ({ selectedTab }: SidebarProps) => {
  const router = useRouter()

  return (
    <S.Container>
      <S.ComponentTab isSelected={selectedTab !== PageEnum.Playground}>
        Components
      </S.ComponentTab>
      {components.map((component) => (
        <S.ComponentDetailTab
          key={component}
          isSelected={component === selectedTab}
          onClick={() => {
            router.push(route.components(component))
          }}
        >
          {component}
        </S.ComponentDetailTab>
      ))}
      <S.PlaygroundTab
        isSelected={PageEnum.Playground === selectedTab}
        onClick={() => {
          router.push(route.playground)
        }}
      >
        Playground
      </S.PlaygroundTab>
    </S.Container>
  )
}

export default Sidebar
