import React from "react";

import PageDefault from "../../components/PageDefault";
import { NotFoundWrapper } from "./style";

const Erro404 = () => (
  <PageDefault>
    <NotFoundWrapper>
      <p>
        Voce quiz dizer flappy moderfocka bird?
      </p>
      <iframe
        title="Fla**y Baby"
        src="https://mariosouto.com/flappy-bird-devsoutinho/"
        scrolling="no"
      />
    </NotFoundWrapper>
  </PageDefault>
);

export default Erro404;
