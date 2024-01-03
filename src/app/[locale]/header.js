import { useTranslations } from 'next-intl';
import React from 'react';
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

function Header() {
      const t = useTranslations("Auth");
    return ( 
        <header>
            <div className="container">
                <div className="headerRow">
                    <div className="headerLeft">
                        <a href="#" className="navBrand">
                            <img src="/img/logo.svg" alt="" />
                        </a>
                    </div>
                    <div className="headerRight">
                        {/* <div className="headerGroupBtn">
                            <a href="#" className='fan'>Fan</a>
                            <a href="#" className='contentCreator'>Content Creator</a>
                        </div> */}
                        {/* <a href="#" className='login'>{t("login")}</a> */}
                        <LoginModal/>
                        <SignUpModal/>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;