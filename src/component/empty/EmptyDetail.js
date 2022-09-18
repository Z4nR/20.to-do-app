import React from "react";
import { LocaleConsumer } from "../../contexts/LocaleContext";

const EmptyDetail = () => {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <p className="note-detail_empty">
            {locale === "id" ? "Catatan Tidak Ditemukan" : "Note not found!!"}
          </p>
        );
      }}
    </LocaleConsumer>
  );
};

export default EmptyDetail;
