
const ContactUsSection = () => {
  return (
    <div
      className="flex flex-col lg:flex-row"
      style={{
        // backgroundColor: "#120224",
        color: "#ffffff",
        padding: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left side with two white colored rectangle boxes */}
      <div>
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            marginBottom: "20px",
            width: "750px",
            color: "black", // Set text color to black
          }}
        >
          {/* Content of the first white rectangle box */}
          <h3>Contact Information</h3>
          <p>Email: example@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            color: "black", // Set text color to black
          }}
        >
          {/* Content of the second white rectangle box */}
          <h3>Address</h3>
          <p>123 Street Name</p>
          <p>City, Country</p>
        </div>
      </div>

      {/* Right side with a photo */}
      <div>
        <img
          src="src\assets\images\Picture1.png" // Replace with the actual URL of your photo
          alt="Contact"
          style={{
            borderRadius: "10px",
            height: "450px",
            width: "450px",
          }}
        />
      </div>
    </div>
  );
};

export default ContactUsSection;
