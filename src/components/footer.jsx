export default function () {
  return (
    <section id="footer" className="bg-black relative z-0 h-[400px] w-full">
      <div className="flex h-full w-full justify-between">
        <div className="text-white text-[45px] font-bold align-text-bottom self-end p-8">
          LOGO
        </div>
        <div className="text-white font-bold align-text-bottom self-end p-8 flex gap-8">
          <a href="">
            <img
              src="contact/github.png"
              alt=""
              className="w-10 hover:opacity-70"
            />
          </a>
          <a href="">
            <img
              src="contact/facebook.png"
              alt=""
              className="w-10 hover:opacity-70"
            />
          </a>
          <a href="">
            <img
              src="contact/instagram.png"
              alt=""
              className="w-10 hover:opacity-70"
            />
          </a>
          <a href="">
            <img
              src="contact/linkedin.png"
              alt=""
              className="w-10 hover:opacity-70"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
