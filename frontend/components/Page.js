import PropTypes, { any } from 'prop-types';

function Page({ children }) {
  return (
    <div>
      <h1>Page component called</h1>
      {children}
    </div>
  );
}
export default Page;

Page.propTypes = {
  children: any,
};
