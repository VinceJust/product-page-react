import Footer from "./components/Footer";
import Header from "./components/header";
import ProductList from "./components/ProductList";



function App() {
    return (
        <div className="bg-blue-500 text-white p-4">
            <Header />
            <ProductList />
            <Footer />
        </div>
    );
}
export default App;