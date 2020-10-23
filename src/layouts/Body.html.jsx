const Body = ({ title, children }) => {
  return (
    <html>
      <head>
        <title>Charge Example | {title}</title>
      </head>

      <body>{children}</body>
    </html>
  );
};

export default Body;
