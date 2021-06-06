import { FaExclamationTriangle } from 'react-icons/fa'
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css'
import Link from 'next/link'
export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className={styles.error}>
                <h1><FaExclamationTriangle color="red"/> 404</h1>
                <h4>Sorry !! Page not found</h4>
                <Link href='/'><a>Go Back Home</a></Link>
            </div>
        </Layout>
    )
}
