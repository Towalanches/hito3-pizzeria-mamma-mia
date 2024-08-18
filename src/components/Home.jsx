import { pizzas } from '../assets/pizzas.js'
import CardPizza from './CardPizza'

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="col-md-4">
                        <CardPizza pizza={pizza} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
