import "../css/footer.css";
function footer() {
  return (
    <div className="footer">
      <p
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        Footer
      </p>
    </div>
  );
}
export default footer;
