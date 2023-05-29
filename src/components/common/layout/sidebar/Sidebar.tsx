import route from '@constants/route'
import { useRouter } from 'next/router'
import * as S from './Sidebar.style'

export enum PageEnum {
  Installation = 'Installation',
  Form = 'Form',
  Button = 'Button',
  Input = 'Input',
  Select = 'Select',
  Radio = 'Radio',
  Checkbox = 'Checkbox',
  DatePicker = 'DatePicker',
  MonthPicker = 'MonthPicker',
  TimePicker = 'TimePicker',
  Array = 'Array',
  Stack = 'Stack',
  Playground = 'Playground',
}

interface SidebarProps {
  selectedTab: PageEnum
}

const components = [
  PageEnum.Form,
  PageEnum.Button,
  PageEnum.Input,
  PageEnum.Select,
  PageEnum.Radio,
  PageEnum.Checkbox,
  PageEnum.DatePicker,
  PageEnum.MonthPicker,
  PageEnum.TimePicker,
  PageEnum.Array,
  PageEnum.Stack,
]

const Sidebar = ({ selectedTab }: SidebarProps) => {
  const router = useRouter()

  return (
    <S.Container>
      <S.InstallationTab
        isSelected={selectedTab === PageEnum.Installation}
        onClick={() => router.push(route.main)}
      >
        Installation
      </S.InstallationTab>
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
