interface ItemDetailProps {
  id: string;
}

import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { IProductResponse } from "../models/IProducts";
import "../styles/ItemDetail.scss";
import { formatMiles } from "../utils/generalUtils";

export function ItemDetailComponent({ id }: ItemDetailProps) {
  const { getProductId } = useProducts();

  const [resultProduct, setResultProduct] = useState<IProductResponse>();

  const getData = async () => {
    const product = await getProductId(id);
    setResultProduct(product);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="items-container-d">
      <div className="item-card-d">
        <div className="item-container-image-d">
          <img
            src={resultProduct?.item.picture}
            alt={"nombre"}
            className="item-image-d"
          />
        </div>

        <div className="item-info-d">
          <div className="item-extra-d">
            <span>{resultProduct?.item.sold_quantity} vendidos</span>
          </div>
          <span className="item-name-d">{resultProduct?.item.title}</span>
          <span className="item-price-d">
            ${formatMiles(resultProduct?.item.price.amount)}
          </span>
          <button>Comprar</button>
        </div>
      </div>
      <div className="item-description">
        <span className="item-title-description">Descripción del producto</span>
        <span className="item-text-description">
          {resultProduct?.item.description}
        </span>
      </div>
    </div>
  );
}
