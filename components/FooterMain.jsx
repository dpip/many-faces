import Link from 'next/link'

const FooterMain = () => {
    return (
        <footer className="page-footer d-flex justify-content-between pb-4 pt-3">
            <div>Logo</div>
            <div className={'text-sm'}>
                <small>&copy; 2021 The Many Faces Initiative</small>
            </div>
            <div>   
                <Link href='/contact'>
                    <a className="fj-navbar-item fj-navbar-link text-capitalize"><small>Contact</small></a>
                </Link>
            </div>
        </footer>
    )
}

export default FooterMain;
