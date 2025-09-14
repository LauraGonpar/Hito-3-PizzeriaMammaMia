import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container my-3 p-4">
        <div className="d-flex flex-wrap justify-content-center gap-4 bg-light p-4 ">
          {pizzas.map((p, i) => (
            <CardPizza
              key={i}
              name={p.name}
              img={p.img}
              ingredients={p.ingredients}
              price={p.price}
              desc={p.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
