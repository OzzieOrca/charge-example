export const Card = ({ title, children }) => (
  <div
    style={{
      backgroundColor: 'lightyellow',
      border: '1px solid gold',
      padding: '2em',
      borderRadius: '1em',
    }}
  >
    <h2>{title}</h2>
    {children}
  </div>
);
