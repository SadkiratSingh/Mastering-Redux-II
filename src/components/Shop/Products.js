import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: 1,
      title: "Immortals Of Meluha",
      price: 11.5,
      description: "Shiva Trilogy I -Amish Tripathi",
    },
    {
      id: 2,
      title: "Secret Of Nagas",
      price: 15.75,
      description: "Shiva Trilogy II -Amish Tripathi",
    },
    {
      id: 3,
      title: "Oath of Vayuputras",
      price: 22.75,
      description: "Shiva Trilogy III -Amish Tripathi",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(({ id, title, price, description }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
