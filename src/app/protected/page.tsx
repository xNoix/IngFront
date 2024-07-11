import withAuth from '../../HOC/withAuth';
import LogoutButton from '../../components/LogoutButton';

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>Only authenticated users can see this.</p>
      <LogoutButton />
    </div>
  );
};

export default withAuth(ProtectedPage);
