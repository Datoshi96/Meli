import { useSearchParams } from "react-router-dom";
import { ItemsComponent } from "../components/ItemsComponent";

export function Items() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  return (
    <div>
      <ItemsComponent searchQuery={searchQuery} />
    </div>
  );
}
