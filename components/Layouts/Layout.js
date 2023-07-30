import Head from 'next/head';
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';

export default function Layout(props) {

    return (
        <div className='parent'>
            <Head>
                <title>{props.title ? props.title + " - Amex Door" : 'Amex Door'}</title>
                <meta name="description" content={props.description ? props.description : 'Amex Door | ProfileSite'} />
                <link rel="shortcut icon" href={props.icon ? props.icon : '/icon.ico'} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charset="UTF-8" />

                {/* <!-- OGP --> */}

                <meta property="og:title" content={props.title ? props.title : 'Amex Door'} />
                <meta property="og:description" content={props.description ? props.description : 'Amex Door | ProfileSite'} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={props.url ? props.url : 'null'} />

                <meta property="og:image" content={props.image ? props.image : '/favicon.ico'} />
                <meta property="og:image:secure_url" content={props.image ? props.image : '/favicon.ico'} />
            </Head>
            <SideBar />
            <div className='child'>
                <Header />
                <div className='mgo'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
