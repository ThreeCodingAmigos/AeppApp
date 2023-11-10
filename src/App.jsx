import { InputContainer } from './components/Input/InputContainer.jsx';
import { Header } from "./components/UI/Header.jsx";
import { OutputContainer } from "./components/Output/OutputContainer.jsx";
import { Button } from './components/Input/Button.jsx';

export const App = () => {
    return (
        <>
            <Header/>
            <InputContainer />
            <OutputContainer/>
        </>
    );
}
