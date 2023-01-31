import { useRoutes } from 'react-router';
import First from './my-app/component/first';
import Welcome from './my-app/component/welcome';
const routes=[
  {
    children:[
      {
        path: '/',
      element: <Welcome />
      },
      {
        path: '/welcome',
      element: <Welcome />
      } ,
      {
        path: '/first',
      element: <First />
      }
    ]
  }
]
function App() {
 const element = useRoutes(routes);
  return element
}

export default App;
