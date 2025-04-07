import { Link } from "react-router-dom";
import "../styles/Items.scss";
import { formatMiles } from "../utils/generalUtils";
import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { IProductsResponse } from "../models/IProducts";
interface ItemsProps {
  searchQuery: string | null;
}
export function ItemsComponent({ searchQuery }: ItemsProps) {
  const { getProducts } = useProducts();

  const [resultProducts, setResultProducts] = useState<IProductsResponse>();

  const getData = async () => {
    const products = await getProducts(searchQuery);
    setResultProducts(products);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="items-container">
      {resultProducts && resultProducts.items.length > 0 ? (
        resultProducts.items.slice(0, 4).map((item) => {
          return (
            <Link className="item-card" key={item.id} to={`/items/${item.id}`}>
              <div className="item-container-image">
                <img
                  src={item.picture}
                  alt={item.title}
                  className="item-image"
                />
              </div>

              <div className="item-info">
                <span className="item-price">
                  ${formatMiles(item.price.amount)}
                </span>
                <span className="item-name">{item.title}</span>
              </div>

              <div className="item-extra">
                <span>{item.condition}</span>
              </div>
            </Link>
          );
        })
      ) : (
        <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
      )}
    </div>
  );
}
