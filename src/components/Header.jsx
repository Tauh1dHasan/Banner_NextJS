import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="container-fluid pe-0">
          <div className="d-flex align-items-center justify-content-between">
            <div className="header_left_part d-flex align-items-center">
              <div className="logo">
                <a href="/" className="light_logo">
                  <Image
                    src="https://wpthemebooster.com/demo/themeforest/html/kimono/assets/img/logo.svg"
                    alt="logo"
                    width={100}
                    height={50}
                  />
                </a>
                <a href="/" className="dark_logo">
                  <Image
                    src="https://wpthemebooster.com/demo/themeforest/html/kimono/assets/img/logo-dark.svg"
                    alt="logo"
                    width={100}
                    height={50}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
