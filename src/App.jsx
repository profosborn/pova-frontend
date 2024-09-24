import AuthorProvider from './context api/AuthorProvider'
import Router from './router/Router'

function App() {

  return (
    <>
      <AuthorProvider>
        <Router />
      </AuthorProvider>
    </>
  )
}

export default App
