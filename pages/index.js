import Layout from '../components/Layouts/Layout';

export default function Home() {

  return (
    <div>
      <Layout title="Home">
        <h3 style={{ textAlign: 'center' }}>
          Welcome to Ame'x Door.
        </h3>
        <div className='profile'>
          <img src="/tw-icon.jpg" height="90" width="90"/>
          <h4><a href="https://twitter.com/amex2189">@Amex 2189</a></h4>
        </div>
      </Layout>
      <style scoped>
        {`
        .profile {
          display: flex;
          justify-content: center;
          align-items: end;
        }

        .profile img {
          border-radius: 25%;
        }

        .profile h4 {
          margin-left: 10px;
          font-size: 1.25rem;
          font-weight: bold;
        }
        `}
      </style>
    </div>
  )
}
