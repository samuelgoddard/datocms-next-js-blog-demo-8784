import Alert from '../components/alert'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Layout({ preview, children }) {
  return (
    <>
      <div>
        <Alert preview={preview} />
        <Header />
        <main>{children}</main>
      </div>
      
      <Footer />
    </>
  )
}
