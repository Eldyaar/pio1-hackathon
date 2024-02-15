import Chat from '../entities/Chat/ui/Chat/Chat'
import AppLayout from './layout/AppLayout'
import './styles/index.css'

const App = ():JSX.Element => {

  return (
    <AppLayout>
      <Chat/>
    </AppLayout>
  )
}

export default App