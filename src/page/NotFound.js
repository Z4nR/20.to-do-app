import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";

const NotFound = () => {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div>
            <p className="note-found-page">
              {locale === "id" ? "Halaman Tidak Ditemukan" : "Page Not Found"}
            </p>
            <p style={{ textAlign: "center" }}>
              {locale === "id"
                ? "Silahkan kembali ke Beranda atau Masukkan URL yang Valid"
                : "Please go Home or Input Valid URL"}
            </p>
          </div>
        );
      }}
    </LocaleConsumer>
  );
};

export default NotFound;
