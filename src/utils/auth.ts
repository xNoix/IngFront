import cookies from 'next-cookies';

export function getServerSideAuth(ctx: any) {
  const { token } = cookies(ctx);
  return token;
}
