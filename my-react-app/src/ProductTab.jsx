import Product from "./Product.jsx";
import "./ProductTab.css";

export default function ProductTab() {
    return (
        <div className="product-tab">
            <Product title="iPhone 15" idx={0} />
            <Product title="Samsung Galaxy S24" idx={1} />
            <Product title="OnePlus 12" idx={2} />
            <Product title="Google Pixel 8" idx={3} />
        </div>
    );
}