import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

export default function App() {

 

  return <>
    <Navbar/>

    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
      </div>
    </div>

    
  </>
}








{/* functional component/component */}
//1 - All tags must have corresponding closing tag
//2 - We cannot return more than one element (if we want we can use fragment tags)
//3 - we can have custom tags

