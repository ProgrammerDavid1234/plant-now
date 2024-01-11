import imageLettuce from "../assets/lettuce.jpg";

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="about-us-container">
        <div className="about-text">
          <h1>About Us</h1>

          <p>
            Here at PlantNow, we champion the force of community and
            collaboration, recognizing that real transformation blooms when
            shared values and visions unite. Our active engagement with local
            communities, environmental bodies, and passionate gardening
            enthusiasts fosters a network of kindred spirits striving for a
            greener, sustainable tomorrow.
          </p>

          <p>
            We believe in making gardening an inclusive experience, irrespective
            of space or expertise. Be it a sprawling backyard or a cozy
            apartment balcony, our offerings cater to all. Our team of seasoned
            experts equips you with invaluable resources, tips, and guides,
            nurturing your plants and crafting vibrant green sanctuaries.
          </p>
        </div>

        <div className="image">
          <img src={imageLettuce} alt="Image" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
