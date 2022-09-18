import React from "react";
import { LocaleConsumer } from "../../contexts/LocaleContext";

const EmptyList = () => {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <>
            <div>
              <p className="note-list_empty">
                {locale === "id"
                  ? "Anda Tidak Memiliki Catatan"
                  : "You Dont Have Any Notes"}
              </p>
              <p style={{ textAlign: "center" }}>
                {locale === "id"
                  ? "Silahkan buat terlebih dahulu"
                  : "Please Create Some Note"}
              </p>
            </div>
          </>
        );
      }}
    </LocaleConsumer>
  );
};

export default EmptyList;
