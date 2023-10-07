const Map = () => {
    // https://www.npmjs.com/package/google-map-react
    return (
        <section>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2122.7183884909355!2d-8.309470825612404!3d41.200472088105585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd248e21de5960e5%3A0xc0532eaae997ac09!2sCavipor%20-%20Vinhos%20De%20Portugal%2C%20Lda.!5e0!3m2!1spt-PT!2spt!4v1628034503929!5m2!1spt-PT!2spt"
                width="100%"
                height="600"
                loading="lazy"
            ></iframe>
        </section>
    );
};

export default Map;
