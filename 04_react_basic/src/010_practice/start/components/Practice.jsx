import "./Practice.css";

const Practice = () =>{
    const input = (args) => `${args} Function`;
    const array = ["item1", "item2", "item3"];
    
    return(
    <>
        <div className="component">
            <h3>練習用のcomponentです</h3>
        </div>
        <h3>{input("Test")}</h3>
        <h3>{array}</h3>
    </>
    )
}
export default Practice