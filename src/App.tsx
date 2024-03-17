import { useRecoilValue } from 'recoil';
import Header from './components/header/Header';
import Dashboard from './pages/Dashboard';
import { currentTabState } from './atom/currentTabStore';
import Map from './pages/Map';
import Apply from './pages/Apply';

function App() {
    const currentTab = useRecoilValue(currentTabState);

    return (
        <>
            <Header />
            {currentTab === 'Map' ? (
                <Map />
            ) : currentTab === 'Dashboard' ? (
                <Dashboard />
            ) : currentTab === 'Apply' ? (
                <Apply />
            ) : null}
        </>
    );
}

export default App;
