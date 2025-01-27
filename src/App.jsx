import Footer from "./components/Footer";
import Header from "./components/header";
import ProductList from "./components/ProductList";

function App() {
    return (
        <div className="bg-gray-100">
            <Header />
            <ProductList />
            <Footer />
        </div>
    );
}
export default App;