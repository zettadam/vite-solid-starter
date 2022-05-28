import { useParams } from 'solid-app-router'

const UnknownModule = () => {
  const params = useParams()
  
  return (
    <main>
      <header class="main-header">
        <h2 class="main-heading">Unknown Module</h2>
      </header>
      <p>Ooops! Cannot route this URL to a module.</p>
      <code style="color: red">{ params.all }</code>
    </main>
  )
}

export default UnknownModule
