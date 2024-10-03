import { useState } from 'react'
import Display from './components/calculator/display'
import Btn from './components/calculator/btn'

function App() {
    const [num, setNum] = useState("0")
    const [prevNum, setPrevNum] = useState("")
    const [operator, setOperator] = useState(null)

    const btnType = [
      "AC", "DEL", "/", "*",   
      "7", "8", "9", "-",      
      "4", "5", "6", "+",      
      "1", "2", "3", "=",      
      "0", "."
    ];

    function handleClick(btn) {
        if (!isNaN(btn) || btn === ".") {
            setNum((prev) => (prev === "0" ? btn : prev + btn));
        } else if (btn === "AC") {
            setNum("0");
            setPrevNum("");
            setOperator(null);
        } else if (btn === "DEL") {
            setNum((prev) => prev.slice(0, -1) || "0")
        } else if (["+", "-", "*", "/"].includes(btn)) {
            setOperator(btn);
            setPrevNum(num);
            setNum("");
        } else if (btn === "=") {
            // Calculate the result
            if (operator && prevNum) {
              calculate();
            }
        }
    }

    function calculate() {
        const currNum = parseFloat(num);
        const prev = parseFloat(prevNum);
        if (operator === "+") {
            setNum(String(prev + currNum));
        } else if (operator === "-") {
            setNum(String(prev - currNum));
        } else if (operator === "*") {
            setNum(String(prev * currNum));
        } else if (operator === "/") {
            setNum(String(prev / currNum));
        }

        setPrevNum("");
        setOperator(null);
    }

    return (
        <section>
            <div className="container">
                <div className="calculator">
                    <Display value={num} />
                    {btnType.map((btn, idx) => (
                       <Btn
                        key={idx}
                        value={btn}
                        handleClick={handleClick}
                        className={btn === "0" ? "zero" : btn === "=" ? "equal" : ""}
                       />
                    ))}
                     
                </div>
            </div>
        </section>
    )
}

export default App
