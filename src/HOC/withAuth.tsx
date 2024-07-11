import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import cookies from 'next-cookies';
import axios from '../utils/axios';

const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => <WrappedComponent {...props} />;

  Wrapper.getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { token } = cookies(ctx);

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    try {
      // Verificar el token en el backend
      await axios.post('/auth/verify', {}, {
        headers: {
          Cookie: `token=${token}`
        }
      });
    } catch (error) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    const componentProps =
      WrappedComponent.getServerSideProps &&
      (await WrappedComponent.getServerSideProps(ctx));

    return { props: { ...componentProps } };
  };

  return Wrapper;
};

export default withAuth;
