export default function Price({ oldPrice, newPrice }) {
    let styles = {
        backgroundColor: "#e0c367",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        padding: "10px",
        marginTop: "20px"
    };

    return (
        <div style={styles}>
            <span style={{ textDecoration: "line-through", color: "#666" }}>
                ₹{oldPrice}
            </span>

            <span
                style={{
                    fontWeight: "bold",
                    marginLeft: "15px",
                    fontSize: "18px"
                }}
            >
                ₹{newPrice}
            </span>
        </div>
    );
}