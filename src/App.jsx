function App() {
  // 1. Header
  // 2. Menu
  //    a. PizzaCard
  // 3. Footer
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Fast React Pizza Co.</h1>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint et quod
        alias eius at illum, quidem libero cupiditate architecto delectus?
      </p>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <div className="pizza__img">
        <img src="./pizzas/focaccia.jpg" alt="pizza01" />
      </div>
      <div className="details">
        <p className="name">PizzaName</p>
        <p className="ingredients">ing01, ing02, ing03</p>
        <p className="pizzaCount">0</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <p>we&apos;r open untill 20:00. Come Visit and Order Online.</p>
      <button>Order Now</button>
    </div>
  );
}

export default App;
