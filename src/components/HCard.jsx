import React, { useState } from "react";
import { CardBuilder } from "./CardBuilder";
import { PageLayout } from "./PageLayout";
import { CardPreview } from "./CardPreview";

export const HCard = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    number: "",
    street: "",
    suburb: "",
    state: "",
    postcode: "",
    country: "",
  });

  return (
    <PageLayout
      left={<CardBuilder title="hCard Builder" user={user} setUser={setUser} />}
      right={<CardPreview user={user} />}
    />
  );
};
