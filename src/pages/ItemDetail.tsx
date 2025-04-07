import { useParams } from "react-router-dom";
import { ItemDetailComponent } from "../components/ItemDetailComponent";

export function ItemDetail() {
  const { id } = useParams(); // Captura el ID de la URL

  return (
    <div>
      {id ? <ItemDetailComponent id={id} /> : <p>Ítem no encontrado</p>}
    </div>
  );
}
