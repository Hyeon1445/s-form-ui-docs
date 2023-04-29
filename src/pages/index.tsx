import route from '@constants/route'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Sample } from 's-form-ui'

const Home = () => {
  const router = useRouter()
  return (
    <div>
      <Sample text="s-form-ui" />
      <Button
        onClick={() => {
          router.push(route.playground)
        }}
      >
        Get Started
      </Button>
    </div>
  )
}

const Button = styled.button`
  background-color: teal;
  padding: 1rem;
  color: white;
  margin: 1rem;
  border-radius: 0.5rem;
  font-weight: bold;
`

export default Home
