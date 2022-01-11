import PropTypes, { any } from 'prop-types';
import Header from './Header';

function Page({ children }) {
  return (
    <div>
      <Header />
      <h1>Page component called</h1>
      {children}
    </div>
  );
}
export default Page;

Page.propTypes = {
  children: any,
};
