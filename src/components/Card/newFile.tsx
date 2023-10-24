import List from "../List/List.astro";
import { ListItems } from "./Card.astro";

<Fragment>
  <div class="card_wrapper">
    {ListItems.map((item) => (
      <Fragment>
        <List url={item.url} image={item.image} content={item.content} />
      </Fragment>
    ))}
  </div>
</Fragment>;
