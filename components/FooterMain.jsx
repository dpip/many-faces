import Link from 'next/link'
import Image from 'next/image'

import footerImg from './../assets/images/footer.png';

const FooterMain = () => {
    return (
        <footer className="page-footer d-flex justify-content-between align-items-center pb-4 pt-3 flex-column flex-md-row">
            <div>
                <Link href="/">
                    <a>
                        <Image src={footerImg || '/footer.png'} alt="Many Faces" width="42" height="42" />
                    </a>
                </Link>
              </div>
            <div className={'text-sm d-flex justisy-content-center align-items-center pt-3 pt-md-0'}>
                <small>&copy; 2020 The Many Faces Initiative</small>
            </div>
            <div className={'text-sm pt-3 pt-md-0'}>   
                <Link href='/contact'>
                    <a className="fj-navbar-item fj-navbar-link text-capitalize h-100 w-100 d-flex justisy-content-center align-items-center"><small>Contact</small></a>
                </Link>
            </div>
        </footer>
    )
}

export default FooterMain;