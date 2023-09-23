import { useRoutes } from 'react-router-dom';
import router from 'router';

function App() {
    return <div className='overflow-hidden'>{useRoutes(router)}</div>;
}

export default App;
