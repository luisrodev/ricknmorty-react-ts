import { Route } from "react-router-dom";

interface RouteWithLayoutProps {
  Layout: any;
  Component: any;
  [x: string]: any;
}

export const RouteWithLayout = ({
  Component,
  Layout,
  ...rest
}: RouteWithLayoutProps) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};
