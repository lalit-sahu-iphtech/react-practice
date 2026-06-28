import Price from "./Price";
import "./Product.css"
export default function Product({title,idx}){
    let oldPrice = ["100", "200", "300", "400"];
    let newPrice = ["90", "180", "270", "360"];
    let description = [
        ["128GB Storage", "48MP Camera"],
    
        ["256GB Storage", "50MP Camera"],
    
        ["Fast Charging", "120Hz Display"],
    
        ["Google AI Features", "Excellent Camera"]
    ];
    return(
        <div className="product">
            <h1>{title}</h1>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>

            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}