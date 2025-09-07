export const StarRating = () => {
  return (
    <div style={{ display: "flex", gap: "2px", fontSize: "25px", color: "gray", textDecoration: "none",alignItems:"center",justifyContent:"center" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          ★
        </span>
      ))}
    </div>
  );
};
