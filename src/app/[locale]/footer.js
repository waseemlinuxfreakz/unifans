import { useTranslations } from 'next-intl';
import React from 'react';
import Link from 'next/link'
function Footer() {
     const t = useTranslations("Footer");
    return ( 
        <footer>
            <div className="container">
                <div className="footerRow">
                    <div className="footerCol">
                        <div className="footerAbout">
                            {/* <a href="#"><img src={Logo} alt="Unifans" /></a> */}
                            <ul className="social">
                                <li><a href="#"><img src="/img/twiter.svg" alt="Social Icons" /></a></li>
                                <li><a href="#"><img src="/img/inst.svg" alt="Social Icons" /></a></li>
                                <li><a href="#"><img src="/img/fb.svg" alt="Social Icons" /></a></li>
                            </ul>
                            <div className="languageDrop">
                                <div className="languageDrop">
                                    <img src="/img/globe.svg" alt="Globe" />
                                    <span className='textEng'>{t('lang')}</span>
                                    <ul>
                                        <li><Link href="/en" locale="en" >English</Link></li>
                                        <li><Link href="/ar" locale="ar" >Arabic</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footerCol">
                        <div className="quickLinkWidget">
                            <h3>{t('pages')}</h3>
                            <ul className="quickLinks">
                                <li><a href="#">{t('about')}</a></li>
                                <li><a href="#">{t('contact')}</a></li>
                                <li><a href="#">{t('termsOfService')}  </a></li>
                                <li><a href="#">{t('dmca')}</a></li>
                                <li><a href="#">{t('help')}</a></li>
                                <li><a href="#">{t('store')}</a></li>
                                <li><a href="#">{t('cookieNotice')} </a></li>
                                <li><a href="#">{t('antiSlavery')}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerCol">
                        <div className="quickLinkWidget">
                            <h3>{t('others')}</h3>
                            <ul className="quickLinks">
                                <li><a href="#">{t('blog')}</a></li>
                                <li><a href="#">{t('privacy')}</a></li>
                                <li><a href="#">{t('usc')}</a></li>
                                <li><a href="#">{t('fanAndCreator')}  </a></li>
                                <li><a href="#">{t('branding')}</a></li>
                                <li><a href="#">{t('complaintsPolicy')} </a></li>
                                <li><a href="#">{t('standardContractBetween')}  </a></li>
                                <li><a href="#">{t('acceptableUsePolicy')}  </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                Copyright © 2023 | Designed by Lorem Ipsum.
            </div>
        </footer>
     );
}

export default Footer;