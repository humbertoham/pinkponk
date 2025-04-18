import { useTranslation } from 'react-i18next';
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-darkgreen pt-11 shadow text-white">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* Redes sociales */}
                    <div className="flex py-2 lg:py-0  space-x-4 items-center">
                        <a href="https://www.facebook.com/pinkponkstdio" target='blank_' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/pinkponk.lol" target='blank_' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaInstagram className='text-xl'/>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://x.com/pinkponklol" target='blank_' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter</span>
                        </a>
                    </div>    

                    {/* Links del footer */}
                    <ul className="flex flex-wrap items-center py-2 text-sm font-medium text-gray-400 lg:py-0">
                        
                        <li>
                            <Link href="/services#FAQ" className="hover:underline me-4 md:me-6">FAQ</Link>
                        </li>
                        <li>
                            <Link href="/privacypolicy" className="hover:underline me-4 md:me-6">{t('privacy')}</Link>
                        </li>
                        <li>
                            <Link href="/termsandconditions" className="hover:underline me-4 md:me-6">{t('terms')}</Link>
                        </li>
                        <li>
                            <Link href="/licensing" className="hover:underline me-4 md:me-6">{t('licen')}</Link>
                        </li>
                        <li>
                            <Link href="/legalterms" className="hover:underline me-4 md:me-6">{t('legal')}</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">{t('contact')}</Link>
                        </li>
                    </ul>
                </div>

                <hr className="my-4 line sm:mx-auto lg:my-8" />

                <span className="block text-sm text-white text-center">© 2025 <Link href="/" className="hover:underline">Pink Ponk</Link>. {t('all')}</span>
            </div>
        </footer>
    );
};

export default Footer;

