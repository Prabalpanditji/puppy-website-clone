/* eslint-disable */
// @ts-nocheck
import PupLayer from "../PupLayer";
export default function P_index() {
  return (
    <>
      <main
        id="main"
        tabIndex="-1"
        className="relative pt-[var(--header-h)] outline-none"
      >
        <div data-page="home" className="tp-page">
          <div data-section="hero">
            <section
              data-pup-scene="true"
              data-tone="light"
              className="tp-scene tp-hero"
              style={{
                "--sky-top": "#fffdf8",
                "--sky-bottom": "#fff1d8",
                "--quilt": "#fff1d8",
              }}
              aria-labelledby="hero-title"
              data-here="false"
              data-visited="false"
            >
              <span aria-hidden="true" className="tp-hero__sun"></span>
              <div className="tp-hero__copy gutter">
                <p className="tp-hero__note font-scrawl">
                  every puppy is family
                  <svg
                    viewBox="0 0 220 24"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-3 w-full text-toffee"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 14c18-10 30 8 48-1s28-9 46 0 30 8 48-1 30-9 48 0 18 2 22 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </p>
                <h1 id="hero-title" className="tp-hero__title font-plush">
                  <span className="tp-hero__line">Premium teacup</span>
                  <span className="tp-hero__line tp-hero__line--2">
                    puppies in Dubai
                  </span>
                </h1>
                <p className="tp-hero__lede">
                  Meet your new best friend in our Dubai showroom, or order a
                  rare miniature breed from trusted breeders worldwide.
                </p>
                <div className="tp-hero__actions">
                  <a className="btn btn-primary" href="/puppies">
                    View available puppies
                  </a>
                  <a
                    href="https://wa.me/15550000000?text=Hi%20InstaBiz!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
              <div className="tp-hero__stage">
                <ul
                  className="tp-lineup"
                  aria-label="Some of the puppies in our showroom"
                >
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "9%",
                      "--w": "8.6rem",
                      "--peek": "0.62",
                      "--tilt": "-5deg",
                      "--i": "0",
                    }}
                  >
                    <a
                      className="tp-lineup__pup"
                      data-pup-friend="true"
                      aria-label="Meet Max, Maltipoo"
                      href="/puppies/maltipoo-max-male"
                    >
                      <span className="tp-lineup__photo">
                        <img
                          alt="Max, male Maltipoo puppy"
                          fetchPriority="high"
                          loading="eager"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            objectFit: "cover",
                            objectPosition: "53.8% 44.3%",
                            color: "transparent",
                            backgroundColor: "rgb(120, 88, 56)",
                          }}
                          sizes="11rem"
                          srcSet="/o/40f37596b395.webp 32w, /o/40f37596b395.webp 48w, /o/40f37596b395.webp 64w, /o/e55ec632b714.webp 96w, /o/40f37596b395.webp 128w, /o/d21ee99659c5.webp 256w, /o/949ba8079613.webp 384w, /o/40f37596b395.webp 640w, /o/40f37596b395.webp 750w, /o/40f37596b395.webp 828w, /o/40f37596b395.webp 1080w, /o/40f37596b395.webp 1200w, /o/40f37596b395.webp 1920w, /o/40f37596b395.webp 2048w, /o/40f37596b395.webp 3840w"
                          src="/o/40f37596b395.webp"
                        />
                      </span>
                    </a>
                  </li>
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "22.5%",
                      "--w": "10.4rem",
                      "--peek": "0.8",
                      "--tilt": "3deg",
                      "--i": "1",
                    }}
                  >
                    <a
                      className="tp-lineup__pup"
                      data-pup-friend="true"
                      aria-label="Meet Korean Teacup Maltipoo, Korean Teacup Maltipoo"
                      href="/puppies/korean-teacup-maltipoo-female"
                    >
                      <span className="tp-lineup__photo">
                        <img
                          alt="Female Korean Teacup Maltipoo puppy"
                          fetchPriority="high"
                          loading="eager"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            objectFit: "cover",
                            objectPosition: "52.5% 42.6%",
                            color: "transparent",
                            backgroundColor: "rgb(232, 232, 232)",
                          }}
                          sizes="11rem"
                          srcSet="/o/e64e36a98ab4.webp 32w, /o/e64e36a98ab4.webp 48w, /o/e64e36a98ab4.webp 64w, /o/e64e36a98ab4.webp 96w, /o/ee93bc86bb86.webp 128w, /o/67664119d58d.webp 256w, /o/f17f92d000f4.webp 384w, /o/e64e36a98ab4.webp 640w, /o/e64e36a98ab4.webp 750w, /o/e64e36a98ab4.webp 828w, /o/e64e36a98ab4.webp 1080w, /o/e64e36a98ab4.webp 1200w, /o/e64e36a98ab4.webp 1920w, /o/e64e36a98ab4.webp 2048w, /o/e64e36a98ab4.webp 3840w"
                          src="/o/e64e36a98ab4.webp"
                        />
                      </span>
                    </a>
                  </li>
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "35%",
                      "--w": "9.2rem",
                      "--peek": "0.7",
                      "--tilt": "-2deg",
                      "--i": "2",
                    }}
                  >
                    <a
                      className="tp-lineup__pup"
                      data-pup-friend="true"
                      aria-label="Meet Korean Teacup Poodle, Korean Teacup Poodle"
                      href="/puppies/korean-teacup-poodle-female"
                    >
                      <span className="tp-lineup__photo">
                        <img
                          alt="Female Korean Teacup Poodle puppy"
                          loading="eager"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            objectFit: "cover",
                            objectPosition: "54.5% 45.7%",
                            color: "transparent",
                            backgroundColor: "rgb(248, 216, 184)",
                          }}
                          sizes="11rem"
                          srcSet="/o/3fdd483a1fff.webp 32w, /o/3fdd483a1fff.webp 48w, /o/3fdd483a1fff.webp 64w, /o/3fdd483a1fff.webp 96w, /o/3fdd483a1fff.webp 128w, /o/453d03a29442.webp 256w, /o/9ace59bc8402.webp 384w, /o/3fdd483a1fff.webp 640w, /o/3fdd483a1fff.webp 750w, /o/3fdd483a1fff.webp 828w, /o/3fdd483a1fff.webp 1080w, /o/3fdd483a1fff.webp 1200w, /o/3fdd483a1fff.webp 1920w, /o/3fdd483a1fff.webp 2048w, /o/3fdd483a1fff.webp 3840w"
                          src="/o/3fdd483a1fff.webp"
                        />
                      </span>
                    </a>
                  </li>
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "65%",
                      "--w": "9.4rem",
                      "--peek": "0.74",
                      "--tilt": "3deg",
                      "--i": "3",
                    }}
                  >
                    <a
                      className="tp-lineup__pup"
                      data-pup-friend="true"
                      aria-label="Meet Maltipoo & Cavapoo, Maltipoo & Cavapoo"
                      href="/puppies/maltipoo-cavapoo-male"
                    >
                      <span className="tp-lineup__photo">
                        <img
                          alt="Male Maltipoo & Cavapoo puppy"
                          loading="eager"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            objectFit: "cover",
                            objectPosition: "44.7% 29.5%",
                            color: "transparent",
                            backgroundColor: "rgb(184, 168, 168)",
                          }}
                          sizes="11rem"
                          srcSet="/o/7a4558a04261.webp 32w, /o/7a4558a04261.webp 48w, /o/7a4558a04261.webp 64w, /o/7a4558a04261.webp 96w, /o/7a4558a04261.webp 128w, /o/bac9ff2034cd.webp 256w, /o/a6183d824c02.webp 384w, /o/7a4558a04261.webp 640w, /o/7a4558a04261.webp 750w, /o/7a4558a04261.webp 828w, /o/7a4558a04261.webp 1080w, /o/7a4558a04261.webp 1200w, /o/7a4558a04261.webp 1920w, /o/7a4558a04261.webp 2048w, /o/7a4558a04261.webp 3840w"
                          src="/o/7a4558a04261.webp"
                        />
                      </span>
                    </a>
                  </li>
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "77.5%",
                      "--w": "10.6rem",
                      "--peek": "0.82",
                      "--tilt": "-3deg",
                      "--i": "4",
                    }}
                  >
                    <a
                      className="tp-lineup__pup"
                      data-pup-friend="true"
                      aria-label="Meet Toy Poodle, Toy Poodle"
                      href="/puppies/toy-poodle-male-female"
                    >
                      <span className="tp-lineup__photo">
                        <img
                          alt="Toy Poodle puppy"
                          loading="eager"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            objectFit: "cover",
                            objectPosition: "65.4% 44.7%",
                            color: "transparent",
                            backgroundColor: "rgb(200, 200, 200)",
                          }}
                          sizes="11rem"
                          srcSet="/o/c3dddc8fa78c.webp 32w, /o/c3dddc8fa78c.webp 48w, /o/c3dddc8fa78c.webp 64w, /o/c3dddc8fa78c.webp 96w, /o/c3dddc8fa78c.webp 128w, /o/2a1af985e717.webp 256w, /o/b55a0cfe161a.webp 384w, /o/c3dddc8fa78c.webp 640w, /o/c3dddc8fa78c.webp 750w, /o/c3dddc8fa78c.webp 828w, /o/c3dddc8fa78c.webp 1080w, /o/c3dddc8fa78c.webp 1200w, /o/c3dddc8fa78c.webp 1920w, /o/c3dddc8fa78c.webp 2048w, /o/c3dddc8fa78c.webp 3840w"
                          src="/o/c3dddc8fa78c.webp"
                        />
                      </span>
                    </a>
                  </li>
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "91%",
                      "--w": "8.4rem",
                      "--peek": "0.6",
                      "--tilt": "4deg",
                      "--i": "5",
                    }}
                  >
                    <a
                      className="tp-lineup__pup"
                      data-pup-friend="true"
                      aria-label="Meet Maltipoo, Maltipoo"
                      href="/puppies/maltipoo-female-2"
                    >
                      <span className="tp-lineup__photo">
                        <img
                          alt="Female Maltipoo puppy"
                          loading="eager"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            objectFit: "cover",
                            objectPosition: "64.6% 42.3%",
                            color: "transparent",
                            backgroundColor: "rgb(8, 8, 8)",
                          }}
                          sizes="11rem"
                          srcSet="/o/93c62a00a195.webp 32w, /o/93c62a00a195.webp 48w, /o/93c62a00a195.webp 64w, /o/93c62a00a195.webp 96w, /o/93c62a00a195.webp 128w, /o/2db2a4d81dc5.webp 256w, /o/a97eb74b20e8.webp 384w, /o/93c62a00a195.webp 640w, /o/93c62a00a195.webp 750w, /o/93c62a00a195.webp 828w, /o/93c62a00a195.webp 1080w, /o/93c62a00a195.webp 1200w, /o/93c62a00a195.webp 1920w, /o/93c62a00a195.webp 2048w, /o/93c62a00a195.webp 3840w"
                          src="/o/93c62a00a195.webp"
                        />
                      </span>
                    </a>
                  </li>
                </ul>
                <ul aria-hidden="true" className="tp-lineup tp-lineup--tags">
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "9%",
                      "--w": "8.6rem",
                      "--peek": "0.62",
                      "--tilt": "-5deg",
                      "--i": "0",
                    }}
                  >
                    <span className="tp-lineup__ghost">
                      <span className="tp-lineup__name font-scrawl">Max</span>
                    </span>
                  </li>
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "22.5%",
                      "--w": "10.4rem",
                      "--peek": "0.8",
                      "--tilt": "3deg",
                      "--i": "1",
                    }}
                  >
                    <span className="tp-lineup__ghost">
                      <span className="tp-lineup__name font-scrawl">
                        Korean Teacup Maltipoo
                      </span>
                    </span>
                  </li>
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "35%",
                      "--w": "9.2rem",
                      "--peek": "0.7",
                      "--tilt": "-2deg",
                      "--i": "2",
                    }}
                  >
                    <span className="tp-lineup__ghost">
                      <span className="tp-lineup__name font-scrawl">
                        Korean Teacup Poodle
                      </span>
                    </span>
                  </li>
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "65%",
                      "--w": "9.4rem",
                      "--peek": "0.74",
                      "--tilt": "3deg",
                      "--i": "3",
                    }}
                  >
                    <span className="tp-lineup__ghost">
                      <span className="tp-lineup__name font-scrawl">
                        Maltipoo & Cavapoo
                      </span>
                    </span>
                  </li>
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "77.5%",
                      "--w": "10.6rem",
                      "--peek": "0.82",
                      "--tilt": "-3deg",
                      "--i": "4",
                    }}
                  >
                    <span className="tp-lineup__ghost">
                      <span className="tp-lineup__name font-scrawl">
                        Toy Poodle
                      </span>
                    </span>
                  </li>
                  <li
                    className="tp-lineup__seat"
                    style={{
                      "--x": "91%",
                      "--w": "8.4rem",
                      "--peek": "0.6",
                      "--tilt": "4deg",
                      "--i": "5",
                    }}
                  >
                    <span className="tp-lineup__ghost">
                      <span className="tp-lineup__name font-scrawl">
                        Maltipoo
                      </span>
                    </span>
                  </li>
                </ul>
                <span
                  aria-hidden="true"
                  className="tp-lineup__wings"
                  data-for="6"
                >
                  <img
                    alt=""
                    loading="eager"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      objectFit: "cover",
                      objectPosition: "40.3% 44.3%",
                      color: "transparent",
                      backgroundColor: "rgb(8, 8, 8)",
                    }}
                    sizes="11rem"
                    srcSet="/o/8586e659f872.webp 32w, /o/8586e659f872.webp 48w, /o/8586e659f872.webp 64w, /o/8586e659f872.webp 96w, /o/8586e659f872.webp 128w, /o/32fe88815a87.webp 256w, /o/4c201353815d.webp 384w, /o/8586e659f872.webp 640w, /o/8586e659f872.webp 750w, /o/8586e659f872.webp 828w, /o/8586e659f872.webp 1080w, /o/8586e659f872.webp 1200w, /o/8586e659f872.webp 1920w, /o/8586e659f872.webp 2048w, /o/8586e659f872.webp 3840w"
                    src="/o/8586e659f872.webp"
                  />
                </span>
                <div
                  data-pup-stop="true"
                  data-pose="peek"
                  data-facing="right"
                  data-act="peekaboo"
                  data-behind="true"
                  data-lane="true"
                  className="pup-stop tp-hero__teddy"
                >
                  <div className="pup-buddy " data-facing="right" data-live="">
                    <svg
                      viewBox="0 0 300 240"
                      role="img"
                      aria-label="Buddy, the InstaBiz puppy, peeking over the quilt"
                      focusable="false"
                      style={{ overflow: "visible" }}
                    >
                      <g data-p="root">
                        <ellipse
                          data-p="shadow"
                          cx="150"
                          cy="230"
                          rx="92"
                          ry="7"
                          fill="#2a170e"
                          opacity="0"
                          transform="translate(0 0) scale(1 1)"
                          style={{
                            transformBox: "fill-box",
                            transformOrigin: "center center",
                          }}
                        ></ellipse>
                        <g
                          data-p="body"
                          transform="translate(0 0) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)"
                          opacity="0"
                        >
                          <g
                            data-p="bf"
                            transform="translate(94 192) rotate(0)"
                            opacity="1"
                          >
                            <path
                              d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z"
                              fill="#e4a352"
                            ></path>
                            <path
                              d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              d="M-3.5 29 v5 M4.5 29 v5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                          <g
                            data-p="ff"
                            transform="translate(168 192) rotate(0)"
                          >
                            <path
                              d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z"
                              fill="#e4a352"
                            ></path>
                            <path
                              d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              d="M-3.5 29 v5 M4.5 29 v5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                          <g data-p="tail" transform="rotate(-20 84 150)">
                            <path
                              d="M86 152 C80 146 76 140 74 136"
                              stroke="#2a170e"
                              strokeWidth="9"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              d="M86 152 C80 146 76 140 74 136"
                              stroke="#f2be6b"
                              strokeWidth="4"
                              fill="none"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                          </g>
                          <g
                            data-p="bn"
                            transform="translate(110 194) rotate(0)"
                            opacity="1"
                          >
                            <path
                              d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z"
                              fill="#f2be6b"
                            ></path>
                            <path
                              d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              d="M-3.5 27 v5 M4.5 27 v5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                          <path
                            d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <g
                            data-p="fn"
                            transform="translate(186 194) rotate(0)"
                          >
                            <path
                              d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z"
                              fill="#f2be6b"
                            ></path>
                            <path
                              d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              d="M-3.5 27 v5 M4.5 27 v5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                        </g>
                        <g
                          data-p="haunch"
                          opacity="0"
                          transform="translate(0 0)"
                        >
                          <path
                            d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M132 222v5M139 222v5"
                            stroke="#2a170e"
                            strokeWidth="2.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                          ></path>
                        </g>
                        <g
                          data-p="head"
                          transform="translate(0 4) rotate(0 212 100)"
                        >
                          <path
                            d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z"
                            fill="#a24a1a"
                            stroke="#2a170e"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z"
                            fill="#fbe3b4"
                            stroke="#2a170e"
                            strokeWidth="2.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            data-p="earL"
                            d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"
                            fill="#e4a352"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            transform="rotate(-6 174 82)"
                          ></path>
                          <path
                            data-p="earR"
                            d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"
                            fill="#e4a352"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            transform="rotate(6 250 82)"
                          ></path>
                          <path
                            d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z"
                            fill="#fbe3b4"
                          ></path>
                          <circle
                            cx="181"
                            cy="116"
                            r="7"
                            fill="#f9b9a6"
                            opacity="0.85"
                          ></circle>
                          <circle
                            cx="243"
                            cy="116"
                            r="7"
                            fill="#f9b9a6"
                            opacity="0.85"
                          ></circle>
                          <g data-p="eyes" transform="translate(0 0)">
                            <g data-p="open" opacity="1">
                              <g
                                data-p="blink"
                                transform="translate(0 0) scale(1 1)"
                              >
                                <ellipse
                                  cx="194"
                                  cy="98"
                                  rx="7.4"
                                  ry="8.6"
                                  fill="#2a170e"
                                ></ellipse>
                                <ellipse
                                  cx="230"
                                  cy="98"
                                  rx="7.4"
                                  ry="8.6"
                                  fill="#2a170e"
                                ></ellipse>
                                <circle
                                  cx="196.6"
                                  cy="94.6"
                                  r="2.7"
                                  fill="#fff"
                                ></circle>
                                <circle
                                  cx="232.6"
                                  cy="94.6"
                                  r="2.7"
                                  fill="#fff"
                                ></circle>
                                <circle
                                  cx="192"
                                  cy="101.2"
                                  r="1.2"
                                  fill="#fff"
                                ></circle>
                                <circle
                                  cx="228"
                                  cy="101.2"
                                  r="1.2"
                                  fill="#fff"
                                ></circle>
                              </g>
                            </g>
                          </g>
                          <path
                            data-p="happy"
                            d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            data-p="shut"
                            d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z"
                            fill="#2a170e"
                          ></path>
                          <path
                            d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2"
                            stroke="#2a170e"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                          ></path>
                          <path
                            data-p="tongue"
                            d="M207.6 127.4 Q212 136.6 216.4 127.4 Z"
                            fill="#e98c8c"
                            stroke="#2a170e"
                            strokeWidth="2.2"
                            strokeLinejoin="round"
                            opacity="1"
                          ></path>
                          <g data-p="mouth" opacity="0">
                            <path
                              d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z"
                              fill="#6b2a1c"
                              stroke="#2a170e"
                              strokeWidth="2.6"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z"
                              fill="#e98c8c"
                            ></path>
                          </g>
                        </g>
                        <g data-p="ledge" opacity="1">
                          <path
                            d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5"
                            stroke="#2a170e"
                            strokeWidth="2.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span
                      aria-hidden="true"
                      className="pup-bubble"
                      data-show="false"
                    ></span>
                  </div>
                </div>
                <div aria-hidden="true" className="tp-quilt">
                  <svg
                    className="tp-quilt__edge"
                    width="100%"
                    height="40"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern
                        id="tp-scallop"
                        width="76"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M0 40V27A38 25 0 0 1 76 27V40Z"
                          style={{ fill: "var(--quilt)" }}
                        ></path>
                        <path
                          d="M0 27A38 25 0 0 1 76 27"
                          fill="none"
                          stroke="#2a170e"
                          strokeWidth="3"
                        ></path>
                        <path
                          d="M11 33A27 19 0 0 1 65 33"
                          fill="none"
                          stroke="#2a170e"
                          strokeWidth="1.6"
                          strokeDasharray="3.5 5.5"
                          strokeLinecap="round"
                          opacity=".42"
                        ></path>
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="40"
                      fill="url(#tp-scallop)"
                    ></rect>
                  </svg>
                </div>
              </div>
            </section>
          </div>
          <div data-section="meet">
            <section
              data-pup-scene="true"
              data-tone="light"
              className="tp-scene tp-meet"
              style={{ "--sky-top": "#fff1d8", "--sky-bottom": "#fbe3b4" }}
              aria-labelledby="meet-title"
              data-pinned="true"
              data-here="false"
              data-visited="false"
            >
              <div data-pin-range="true">
                <div className="tp-meet__stage" style={{}}>
                  <header className="tp-meet__head gutter">
                    <div>
                      <h2 id="meet-title" className="font-plush text-huge">
                        Meet the pups
                      </h2>
                      <p className="text-lede mt-3 max-w-[44ch] text-[var(--ink-soft)]">
                        Real puppies, real photos, looking for their families
                        right now.
                      </p>
                    </div>
                    <a className="btn btn-primary shrink-0" href="/puppies">
                      See all available puppies
                    </a>
                  </header>
                  <div className="tp-meet__hall">
                    <ol
                      className="tp-meet__track"
                      data-treadmill="true"
                      aria-label="Puppies looking for a family"
                    >
                      <li className="tp-door" data-open="true">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#a24a1a" }}
                          href="/puppies/maltipoo-max-male"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Max
                            </span>
                            <span className="tp-door__meta">
                              Maltipoo, boy, 3 months, with video
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Max, male Maltipoo puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "53.8% 44.3%",
                                  color: "transparent",
                                  backgroundColor: "rgb(120, 88, 56)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/949ba8079613.webp 384w, /o/40f37596b395.webp 640w, /o/40f37596b395.webp 750w, /o/40f37596b395.webp 828w, /o/40f37596b395.webp 1080w, /o/40f37596b395.webp 1200w, /o/40f37596b395.webp 1920w, /o/40f37596b395.webp 2048w, /o/40f37596b395.webp 3840w"
                                src="/o/40f37596b395.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#5a3a28" }}
                          href="/puppies/korean-teacup-maltipoo-female"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Korean Teacup Maltipoo
                            </span>
                            <span className="tp-door__meta">
                              girl, 2 months, with video
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Female Korean Teacup Maltipoo puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "52.5% 42.6%",
                                  color: "transparent",
                                  backgroundColor: "rgb(232, 232, 232)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/f17f92d000f4.webp 384w, /o/e64e36a98ab4.webp 640w, /o/e64e36a98ab4.webp 750w, /o/e64e36a98ab4.webp 828w, /o/e64e36a98ab4.webp 1080w, /o/e64e36a98ab4.webp 1200w, /o/e64e36a98ab4.webp 1920w, /o/e64e36a98ab4.webp 2048w, /o/e64e36a98ab4.webp 3840w"
                                src="/o/e64e36a98ab4.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#d4893f" }}
                          href="/puppies/korean-teacup-poodle-female"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Korean Teacup Poodle
                            </span>
                            <span className="tp-door__meta">
                              girl, 2 months
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Female Korean Teacup Poodle puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "54.5% 45.7%",
                                  color: "transparent",
                                  backgroundColor: "rgb(248, 216, 184)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/9ace59bc8402.webp 384w, /o/3fdd483a1fff.webp 640w, /o/3fdd483a1fff.webp 750w, /o/3fdd483a1fff.webp 828w, /o/3fdd483a1fff.webp 1080w, /o/3fdd483a1fff.webp 1200w, /o/3fdd483a1fff.webp 1920w, /o/3fdd483a1fff.webp 2048w, /o/3fdd483a1fff.webp 3840w"
                                src="/o/3fdd483a1fff.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#b8644a" }}
                          href="/puppies/maltipoo-cavapoo-male"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Maltipoo & Cavapoo
                            </span>
                            <span className="tp-door__meta">
                              boy, 3 months Maltipoo & 2 months Cavapoo, with
                              video
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Male Maltipoo & Cavapoo puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "44.7% 29.5%",
                                  color: "transparent",
                                  backgroundColor: "rgb(184, 168, 168)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/a6183d824c02.webp 384w, /o/7a4558a04261.webp 640w, /o/7a4558a04261.webp 750w, /o/7a4558a04261.webp 828w, /o/7a4558a04261.webp 1080w, /o/7a4558a04261.webp 1200w, /o/7a4558a04261.webp 1920w, /o/7a4558a04261.webp 2048w, /o/7a4558a04261.webp 3840w"
                                src="/o/7a4558a04261.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#7a4a2e" }}
                          href="/puppies/toy-poodle-male-female"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Toy Poodle
                            </span>
                            <span className="tp-door__meta">
                              boy & girl, 2 months
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Toy Poodle puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "65.4% 44.7%",
                                  color: "transparent",
                                  backgroundColor: "rgb(200, 200, 200)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/b55a0cfe161a.webp 384w, /o/c3dddc8fa78c.webp 640w, /o/c3dddc8fa78c.webp 750w, /o/c3dddc8fa78c.webp 828w, /o/c3dddc8fa78c.webp 1080w, /o/c3dddc8fa78c.webp 1200w, /o/c3dddc8fa78c.webp 1920w, /o/c3dddc8fa78c.webp 2048w, /o/c3dddc8fa78c.webp 3840w"
                                src="/o/c3dddc8fa78c.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#a24a1a" }}
                          href="/puppies/maltipoo-female-2"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Maltipoo
                            </span>
                            <span className="tp-door__meta">
                              girl, 3 months, with video
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Female Maltipoo puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "64.6% 42.3%",
                                  color: "transparent",
                                  backgroundColor: "rgb(8, 8, 8)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/a97eb74b20e8.webp 384w, /o/93c62a00a195.webp 640w, /o/93c62a00a195.webp 750w, /o/93c62a00a195.webp 828w, /o/93c62a00a195.webp 1080w, /o/93c62a00a195.webp 1200w, /o/93c62a00a195.webp 1920w, /o/93c62a00a195.webp 2048w, /o/93c62a00a195.webp 3840w"
                                src="/o/93c62a00a195.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#5a3a28" }}
                          href="/puppies/pomeranian-female"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Pomeranian
                            </span>
                            <span className="tp-door__meta">
                              girl, 3 months
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Female Pomeranian puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "40.3% 44.3%",
                                  color: "transparent",
                                  backgroundColor: "rgb(8, 8, 8)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/4c201353815d.webp 384w, /o/8586e659f872.webp 640w, /o/8586e659f872.webp 750w, /o/8586e659f872.webp 828w, /o/8586e659f872.webp 1080w, /o/8586e659f872.webp 1200w, /o/8586e659f872.webp 1920w, /o/8586e659f872.webp 2048w, /o/8586e659f872.webp 3840w"
                                src="/o/8586e659f872.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#d4893f" }}
                          href="/puppies/copper-male"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Copper
                            </span>
                            <span className="tp-door__meta">
                              Cavapoo, boy, 2 months
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Copper, male Cavapoo puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "43% 50.5%",
                                  color: "transparent",
                                  backgroundColor: "rgb(232, 216, 200)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/e77a7d4abc6d.webp 384w, /o/66640c62ec62.webp 640w, /o/66640c62ec62.webp 750w, /o/66640c62ec62.webp 828w, /o/66640c62ec62.webp 1080w, /o/66640c62ec62.webp 1200w, /o/66640c62ec62.webp 1920w, /o/66640c62ec62.webp 2048w, /o/66640c62ec62.webp 3840w"
                                src="/o/66640c62ec62.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#b8644a" }}
                          href="/puppies/shitzu-female"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Shih Tzu
                            </span>
                            <span className="tp-door__meta">
                              girl, 2 months
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Female Shih Tzu puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "44.8% 42.5%",
                                  color: "transparent",
                                  backgroundColor: "rgb(56, 56, 72)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/25e04094edc9.webp 384w, /o/67396e4e7310.webp 640w, /o/67396e4e7310.webp 750w, /o/67396e4e7310.webp 828w, /o/67396e4e7310.webp 1080w, /o/67396e4e7310.webp 1200w, /o/67396e4e7310.webp 1920w, /o/67396e4e7310.webp 2048w, /o/67396e4e7310.webp 3840w"
                                src="/o/67396e4e7310.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#7a4a2e" }}
                          href="/puppies/shitzu-male"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Shih Tzu
                            </span>
                            <span className="tp-door__meta">boy, 2 months</span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Male Shih Tzu puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "40.3% 43.6%",
                                  color: "transparent",
                                  backgroundColor: "rgb(120, 120, 136)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/9a4e649d4431.webp 384w, /o/47a5df5a3ad8.webp 640w, /o/47a5df5a3ad8.webp 750w, /o/47a5df5a3ad8.webp 828w, /o/47a5df5a3ad8.webp 1080w, /o/47a5df5a3ad8.webp 1200w, /o/47a5df5a3ad8.webp 1920w, /o/47a5df5a3ad8.webp 2048w, /o/47a5df5a3ad8.webp 3840w"
                                src="/o/47a5df5a3ad8.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#a24a1a" }}
                          href="/puppies/maltipoo-female-1"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Maltipoo
                            </span>
                            <span className="tp-door__meta">
                              girl, 2.5 months
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Female Maltipoo puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "47.5% 50.5%",
                                  color: "transparent",
                                  backgroundColor: "rgb(232, 216, 200)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/0471ee0d8a8a.webp 384w, /o/135f834aa96d.webp 640w, /o/135f834aa96d.webp 750w, /o/135f834aa96d.webp 828w, /o/135f834aa96d.webp 1080w, /o/135f834aa96d.webp 1200w, /o/135f834aa96d.webp 1920w, /o/135f834aa96d.webp 2048w, /o/135f834aa96d.webp 3840w"
                                src="/o/135f834aa96d.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#5a3a28" }}
                          href="/puppies/maltipoo-female"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Maltipoo
                            </span>
                            <span className="tp-door__meta">
                              girl, 2 months
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Female Maltipoo puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "56.9% 49.2%",
                                  color: "transparent",
                                  backgroundColor: "rgb(232, 216, 200)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/00e3efde79cc.webp 384w, /o/d0e490d2380a.webp 640w, /o/d0e490d2380a.webp 750w, /o/d0e490d2380a.webp 828w, /o/d0e490d2380a.webp 1080w, /o/d0e490d2380a.webp 1200w, /o/d0e490d2380a.webp 1920w, /o/d0e490d2380a.webp 2048w, /o/d0e490d2380a.webp 3840w"
                                src="/o/d0e490d2380a.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#d4893f" }}
                          href="/puppies/korean-teacup-pomeranian-1"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Korean Teacup Pomeranian
                            </span>
                            <span className="tp-door__meta">
                              girl, 2 months
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Female Korean Teacup Pomeranian puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "49.9% 51.3%",
                                  color: "transparent",
                                  backgroundColor: "rgb(216, 216, 216)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/3982b6ea913d.webp 384w, /o/66ba48bbb0b9.webp 640w, /o/66ba48bbb0b9.webp 750w, /o/66ba48bbb0b9.webp 828w, /o/66ba48bbb0b9.webp 1080w, /o/66ba48bbb0b9.webp 1200w, /o/66ba48bbb0b9.webp 1920w, /o/66ba48bbb0b9.webp 2048w, /o/66ba48bbb0b9.webp 3840w"
                                src="/o/66ba48bbb0b9.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#b8644a" }}
                          href="/puppies/korean-teacup-pomeranian"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Korean Teacup Pomeranian
                            </span>
                            <span className="tp-door__meta">
                              girl, 2 months
                            </span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Female Korean Teacup Pomeranian puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "49.9% 48.6%",
                                  color: "transparent",
                                  backgroundColor: "rgb(72, 72, 72)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/66cfc5f86343.webp 384w, /o/4fd81885ab4f.webp 640w, /o/4fd81885ab4f.webp 750w, /o/4fd81885ab4f.webp 828w, /o/4fd81885ab4f.webp 1080w, /o/4fd81885ab4f.webp 1200w, /o/4fd81885ab4f.webp 1920w, /o/4fd81885ab4f.webp 2048w, /o/4fd81885ab4f.webp 3840w"
                                src="/o/4fd81885ab4f.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door" data-open="false">
                        <a
                          className="tp-door__link"
                          style={{ "--door": "#7a4a2e" }}
                          href="/puppies/korean-teacup-pomeranian-male"
                        >
                          <span className="tp-door__plate">
                            <span className="font-plush tp-door__name">
                              Korean Teacup Pomeranian
                            </span>
                            <span className="tp-door__meta">boy, 2 months</span>
                          </span>
                          <span className="tp-door__frame">
                            <span className="tp-door__room">
                              <img
                                alt="Male Korean Teacup Pomeranian puppy"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "48.9% 44.1%",
                                  color: "transparent",
                                  backgroundColor: "rgb(8, 8, 8)",
                                }}
                                sizes="(min-width: 1024px) 15rem, 44vw"
                                srcSet="/o/4f692580b322.webp 384w, /o/58c7f3698c64.webp 640w, /o/58c7f3698c64.webp 750w, /o/58c7f3698c64.webp 828w, /o/58c7f3698c64.webp 1080w, /o/58c7f3698c64.webp 1200w, /o/58c7f3698c64.webp 1920w, /o/58c7f3698c64.webp 2048w, /o/58c7f3698c64.webp 3840w"
                                src="/o/58c7f3698c64.webp"
                              />
                            </span>
                            <span aria-hidden="true" className="tp-door__way">
                              <span className="tp-door__leaf">
                                <svg
                                  viewBox="0 0 64 64"
                                  className="tp-door__peephole"
                                  aria-hidden="true"
                                  fill="currentColor"
                                >
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                                </svg>
                                <span className="tp-door__knob"></span>
                              </span>
                            </span>
                            <span className="tp-door__tag font-scrawl">
                              Available
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="tp-door tp-door--all" data-open="false">
                        <a className="tp-door__link" href="/puppies">
                          <span className="tp-door__frame tp-door__frame--all">
                            <span className="font-plush tp-door__all">
                              Meet them all
                            </span>
                          </span>
                        </a>
                      </li>
                    </ol>
                    <div aria-hidden="true" className="tp-meet__floor"></div>
                    <div
                      data-pup-stop="true"
                      data-pose="walk"
                      data-facing="right"
                      className="pup-stop tp-meet__teddy"
                      data-act="treadmill"
                    >
                      <div
                        className="pup-buddy "
                        data-facing="right"
                        data-live=""
                      >
                        <svg
                          viewBox="0 0 300 240"
                          aria-hidden="true"
                          focusable="false"
                          style={{ overflow: "visible" }}
                        >
                          <g data-p="root">
                            <ellipse
                              data-p="shadow"
                              cx="150"
                              cy="230"
                              rx="92"
                              ry="7"
                              fill="#2a170e"
                              opacity="0.12"
                              transform="translate(0 0) scale(1 1)"
                              style={{
                                transformBox: "fill-box",
                                transformOrigin: "center center",
                              }}
                            ></ellipse>
                            <g
                              data-p="body"
                              transform="translate(0 0) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)"
                              opacity="1"
                            >
                              <g
                                data-p="bf"
                                transform="translate(94 192) rotate(0)"
                                opacity="1"
                              >
                                <path
                                  d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z"
                                  fill="#e4a352"
                                ></path>
                                <path
                                  d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 29 v5 M4.5 29 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <g
                                data-p="ff"
                                transform="translate(168 192) rotate(0)"
                              >
                                <path
                                  d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z"
                                  fill="#e4a352"
                                ></path>
                                <path
                                  d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 29 v5 M4.5 29 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <g data-p="tail" transform="rotate(-6 84 150)">
                                <path
                                  d="M86 152 C80 146 76 140 74 136"
                                  stroke="#2a170e"
                                  strokeWidth="9"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M86 152 C80 146 76 140 74 136"
                                  stroke="#f2be6b"
                                  strokeWidth="4"
                                  fill="none"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z"
                                  fill="#f2be6b"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                ></path>
                              </g>
                              <g
                                data-p="bn"
                                transform="translate(110 194) rotate(0)"
                                opacity="1"
                              >
                                <path
                                  d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z"
                                  fill="#f2be6b"
                                ></path>
                                <path
                                  d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 27 v5 M4.5 27 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <path
                                d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <g
                                data-p="fn"
                                transform="translate(186 194) rotate(0)"
                              >
                                <path
                                  d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z"
                                  fill="#f2be6b"
                                ></path>
                                <path
                                  d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 27 v5 M4.5 27 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                            </g>
                            <g
                              data-p="haunch"
                              opacity="0"
                              transform="translate(0 0)"
                            >
                              <path
                                d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M132 222v5M139 222v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                            <g
                              data-p="head"
                              transform="translate(0 0) rotate(0 212 100)"
                            >
                              <path
                                d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z"
                                fill="#a24a1a"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z"
                                fill="#fbe3b4"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                data-p="earL"
                                d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"
                                fill="#e4a352"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                transform="rotate(0 174 82)"
                              ></path>
                              <path
                                data-p="earR"
                                d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"
                                fill="#e4a352"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                transform="rotate(0 250 82)"
                              ></path>
                              <path
                                d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z"
                                fill="#fbe3b4"
                              ></path>
                              <circle
                                cx="181"
                                cy="116"
                                r="7"
                                fill="#f9b9a6"
                                opacity="0.85"
                              ></circle>
                              <circle
                                cx="243"
                                cy="116"
                                r="7"
                                fill="#f9b9a6"
                                opacity="0.85"
                              ></circle>
                              <g data-p="eyes" transform="translate(0 0)">
                                <g data-p="open" opacity="1">
                                  <g
                                    data-p="blink"
                                    transform="translate(0 0) scale(1 1)"
                                  >
                                    <ellipse
                                      cx="194"
                                      cy="98"
                                      rx="7.4"
                                      ry="8.6"
                                      fill="#2a170e"
                                    ></ellipse>
                                    <ellipse
                                      cx="230"
                                      cy="98"
                                      rx="7.4"
                                      ry="8.6"
                                      fill="#2a170e"
                                    ></ellipse>
                                    <circle
                                      cx="196.6"
                                      cy="94.6"
                                      r="2.7"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="232.6"
                                      cy="94.6"
                                      r="2.7"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="192"
                                      cy="101.2"
                                      r="1.2"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="228"
                                      cy="101.2"
                                      r="1.2"
                                      fill="#fff"
                                    ></circle>
                                  </g>
                                </g>
                              </g>
                              <path
                                data-p="happy"
                                d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0"
                              ></path>
                              <path
                                data-p="shut"
                                d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0"
                              ></path>
                              <path
                                d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z"
                                fill="#2a170e"
                              ></path>
                              <path
                                d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                data-p="tongue"
                                d="M207.6 127.4 Q212 136.6 216.4 127.4 Z"
                                fill="#e98c8c"
                                stroke="#2a170e"
                                strokeWidth="2.2"
                                strokeLinejoin="round"
                                opacity="1"
                              ></path>
                              <g data-p="mouth" opacity="0">
                                <path
                                  d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z"
                                  fill="#6b2a1c"
                                  stroke="#2a170e"
                                  strokeWidth="2.6"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z"
                                  fill="#e98c8c"
                                ></path>
                              </g>
                            </g>
                            <g data-p="ledge" opacity="0">
                              <path
                                d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <span
                          aria-hidden="true"
                          className="pup-bubble"
                          data-show="false"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div data-section="paths">
            <section
              data-pup-scene="true"
              data-tone="light"
              className="tp-scene tp-paths"
              style={{ "--sky-top": "#fbe3b4", "--sky-bottom": "#f7d18d" }}
              aria-labelledby="paths-title"
              data-here="false"
              data-visited="false"
            >
              <div className="gutter mx-auto max-w-[110rem]">
                <h2
                  id="paths-title"
                  className="tp-paths__title font-plush text-huge"
                >
                  Two ways to meet your puppy
                </h2>
                <div className="tp-fork">
                  <div aria-hidden="true" className="tp-fork__post"></div>
                  <article
                    className="tp-way tp-way--left"
                    aria-labelledby="way-local"
                  >
                    <h3
                      id="way-local"
                      className="tp-sign tp-sign--left font-plush"
                    >
                      Puppies in Dubai
                    </h3>
                    <div className="tp-way__scene" data-pup-look="true">
                      <svg
                        viewBox="0 0 300 120"
                        className="tp-way__skyline"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 116h292M20 116V78h16v38M44 116V60h18v56M70 116V84h12v32M150 116V36l4-6v-14l3-4 3 4v14l4 6v80M118 116V70l12-8v54M174 116V64l14 8v44M200 116V82h18v34M226 116V56h14v60M248 116V88h22v28"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <figure className="tp-window">
                        <span className="tp-window__glass">
                          <img
                            alt="A tiny apricot teddy bear puppy held up in the InstaBiz showroom"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: "0px",
                              objectFit: "cover",
                              objectPosition: "54.3% 48.3%",
                              color: "transparent",
                              backgroundColor: "rgb(104, 88, 72)",
                            }}
                            sizes="(min-width: 1024px) 16rem, 60vw"
                            srcSet="/o/7cf800b93c6f.webp 384w, /o/7cf800b93c6f.webp 640w, /o/7cf800b93c6f.webp 750w, /o/7cf800b93c6f.webp 828w, /o/7cf800b93c6f.webp 1080w, /o/7cf800b93c6f.webp 1200w, /o/7cf800b93c6f.webp 1920w, /o/7cf800b93c6f.webp 2048w, /o/7cf800b93c6f.webp 3840w"
                            src="/o/7cf800b93c6f.webp"
                          />
                        </span>
                        <figcaption className="font-scrawl">
                          In our showroom
                        </figcaption>
                      </figure>
                    </div>
                    <p className="tp-way__text">
                      See them, love them, take them home. Come meet our locally
                      available puppies before you decide.
                    </p>
                    <a className="btn btn-primary" href="/puppies?origin=local">
                      Meet local puppies
                    </a>
                  </article>
                  <article
                    className="tp-way tp-way--right"
                    aria-labelledby="way-imported"
                  >
                    <h3
                      id="way-imported"
                      className="tp-sign tp-sign--right font-plush"
                    >
                      Imported for you
                    </h3>
                    <div className="tp-way__scene" data-pup-look="true">
                      <div className="tp-flight">
                        <svg
                          viewBox="0 0 660 300"
                          role="img"
                          aria-label="A plane bringing a Korean Teacup Maltipoo puppy from Korea to Dubai"
                        >
                          <defs>
                            <clipPath id="_R_jieankivb_">
                              <circle r="25"></circle>
                            </clipPath>
                          </defs>
                          <path
                            d="M40 250 C 170 40, 470 20, 620 168"
                            className="tp-flight__route"
                          ></path>
                          <circle
                            cx="40"
                            cy="250"
                            r="7"
                            className="tp-flight__dot"
                          ></circle>
                          <circle
                            cx="620"
                            cy="168"
                            r="7"
                            className="tp-flight__dot"
                          ></circle>
                          <text
                            x="40"
                            y="284"
                            textAnchor="middle"
                            className="tp-flight__label"
                          >
                            Korea
                          </text>
                          <text
                            x="620"
                            y="202"
                            textAnchor="middle"
                            className="tp-flight__label"
                          >
                            Dubai
                          </text>
                          <g
                            transform="translate(40.0 250.0) rotate(-58.1)"
                            style={{ opacity: "0" }}
                          >
                            <g transform="translate(-126 -78)">
                              <path
                                d="M28 60 L8 26 L34 26 L60 54 Z"
                                className="tp-flight__wing"
                              ></path>
                              <path
                                d="M108 112 L142 156 L172 156 L158 112 Z"
                                className="tp-flight__wing tp-flight__wing--far"
                              ></path>
                              <path
                                d="M20 80 C20 52 52 44 80 44 L168 44 C200 44 224 60 232 80 C224 100 200 112 168 112 L80 112 C52 112 20 104 20 80 Z"
                                className="tp-flight__body"
                              ></path>
                              <path
                                d="M104 44 L138 2 L168 2 L154 44 Z"
                                className="tp-flight__wing"
                              ></path>
                              <path
                                d="M206 64 C215 67 221 73 224 80"
                                className="tp-flight__line"
                              ></path>
                            </g>
                            <g transform="translate(10 2)">
                              <image
                                href="/o/ee93bc86bb86.webp"
                                x="-25"
                                y="-25"
                                width="50"
                                height="50"
                                clipPath="url(#_R_jieankivb_)"
                                preserveAspectRatio="xMidYMid slice"
                              ></image>
                              <circle
                                r="25"
                                className="tp-flight__porthole"
                              ></circle>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <p className="tp-way__text">
                      Exclusive Korean teacup puppies, delivered. Order from the
                      world's most reputable breeders and let us handle the
                      import.
                    </p>
                    <a
                      className="btn btn-primary"
                      href="/puppies?origin=imported"
                    >
                      See imported puppies
                    </a>
                  </article>
                  <div
                    data-pup-stop="true"
                    data-pose="sit"
                    data-facing="right"
                    className="pup-stop tp-fork__teddy"
                  >
                    <div
                      className="pup-buddy "
                      data-facing="right"
                      data-live=""
                    >
                      <svg
                        viewBox="0 0 300 240"
                        aria-hidden="true"
                        focusable="false"
                        style={{ overflow: "visible" }}
                      >
                        <g data-p="root">
                          <ellipse
                            data-p="shadow"
                            cx="150"
                            cy="230"
                            rx="92"
                            ry="7"
                            fill="#2a170e"
                            opacity="0.12"
                            transform="translate(0 0) scale(1 1)"
                            style={{
                              transformBox: "fill-box",
                              transformOrigin: "center center",
                            }}
                          ></ellipse>
                          <g
                            data-p="body"
                            transform="translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"
                            opacity="1"
                          >
                            <g
                              data-p="bf"
                              transform="translate(94 192) rotate(0)"
                              opacity="0"
                            >
                              <path
                                d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z"
                                fill="#e4a352"
                              ></path>
                              <path
                                d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                d="M-3.5 29 v5 M4.5 29 v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                            <g
                              data-p="ff"
                              transform="translate(168 192) rotate(24)"
                            >
                              <path
                                d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z"
                                fill="#e4a352"
                              ></path>
                              <path
                                d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                d="M-3.5 29 v5 M4.5 29 v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                            <g data-p="tail" transform="rotate(34 84 150)">
                              <path
                                d="M86 152 C80 146 76 140 74 136"
                                stroke="#2a170e"
                                strokeWidth="9"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                d="M86 152 C80 146 76 140 74 136"
                                stroke="#f2be6b"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                            </g>
                            <g
                              data-p="bn"
                              transform="translate(110 194) rotate(0)"
                              opacity="0"
                            >
                              <path
                                d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z"
                                fill="#f2be6b"
                              ></path>
                              <path
                                d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                d="M-3.5 27 v5 M4.5 27 v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                            <path
                              d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <g
                              data-p="fn"
                              transform="translate(186 194) rotate(24)"
                            >
                              <path
                                d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z"
                                fill="#f2be6b"
                              ></path>
                              <path
                                d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                d="M-3.5 27 v5 M4.5 27 v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                          </g>
                          <g
                            data-p="haunch"
                            opacity="1"
                            transform="translate(0 1.44)"
                          >
                            <path
                              d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M132 222v5M139 222v5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                          <g
                            data-p="head"
                            transform="translate(-10 -6) rotate(0 212 100)"
                          >
                            <path
                              d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z"
                              fill="#a24a1a"
                              stroke="#2a170e"
                              strokeWidth="3"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z"
                              fill="#fbe3b4"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              data-p="earL"
                              d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"
                              fill="#e4a352"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              transform="rotate(0 174 82)"
                            ></path>
                            <path
                              data-p="earR"
                              d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"
                              fill="#e4a352"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              transform="rotate(0 250 82)"
                            ></path>
                            <path
                              d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z"
                              fill="#fbe3b4"
                            ></path>
                            <circle
                              cx="181"
                              cy="116"
                              r="7"
                              fill="#f9b9a6"
                              opacity="0.85"
                            ></circle>
                            <circle
                              cx="243"
                              cy="116"
                              r="7"
                              fill="#f9b9a6"
                              opacity="0.85"
                            ></circle>
                            <g data-p="eyes" transform="translate(0 0)">
                              <g data-p="open" opacity="1">
                                <g
                                  data-p="blink"
                                  transform="translate(0 0) scale(1 1)"
                                >
                                  <ellipse
                                    cx="194"
                                    cy="98"
                                    rx="7.4"
                                    ry="8.6"
                                    fill="#2a170e"
                                  ></ellipse>
                                  <ellipse
                                    cx="230"
                                    cy="98"
                                    rx="7.4"
                                    ry="8.6"
                                    fill="#2a170e"
                                  ></ellipse>
                                  <circle
                                    cx="196.6"
                                    cy="94.6"
                                    r="2.7"
                                    fill="#fff"
                                  ></circle>
                                  <circle
                                    cx="232.6"
                                    cy="94.6"
                                    r="2.7"
                                    fill="#fff"
                                  ></circle>
                                  <circle
                                    cx="192"
                                    cy="101.2"
                                    r="1.2"
                                    fill="#fff"
                                  ></circle>
                                  <circle
                                    cx="228"
                                    cy="101.2"
                                    r="1.2"
                                    fill="#fff"
                                  ></circle>
                                </g>
                              </g>
                            </g>
                            <path
                              data-p="happy"
                              d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                              opacity="0"
                            ></path>
                            <path
                              data-p="shut"
                              d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                              opacity="0"
                            ></path>
                            <path
                              d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z"
                              fill="#2a170e"
                            ></path>
                            <path
                              d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2"
                              stroke="#2a170e"
                              strokeWidth="3"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              data-p="tongue"
                              d="M207.6 127.4 Q212 136.6 216.4 127.4 Z"
                              fill="#e98c8c"
                              stroke="#2a170e"
                              strokeWidth="2.2"
                              strokeLinejoin="round"
                              opacity="1"
                            ></path>
                            <g data-p="mouth" opacity="0">
                              <path
                                d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z"
                                fill="#6b2a1c"
                                stroke="#2a170e"
                                strokeWidth="2.6"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z"
                                fill="#e98c8c"
                              ></path>
                            </g>
                          </g>
                          <g data-p="ledge" opacity="0">
                            <path
                              d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <span
                        aria-hidden="true"
                        className="pup-bubble"
                        data-show="false"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div data-section="journey">
            <section
              data-pup-scene="true"
              data-tone="light"
              className="tp-scene tp-chat"
              style={{ "--sky-top": "#f7d18d", "--sky-bottom": "#f0b866" }}
              aria-labelledby="journey-title"
              data-here="false"
              data-visited="false"
            >
              <div className="tp-chat__grid gutter" data-pin-range="true">
                <div className="tp-chat__story">
                  <h2 id="journey-title" className="font-plush text-huge">
                    Your puppy journey
                  </h2>
                  <p className="text-lede mt-5 max-w-[42ch] text-[var(--ink-soft)]">
                    A premium, step-by-step concierge experience. We make
                    adoption simple, secure, and purely joyful.
                  </p>
                  <ol className="tp-chat__steps">
                    <li className="tp-chat__step">
                      <span
                        className="tp-chat__num font-plush"
                        aria-hidden="true"
                      >
                        1
                      </span>
                      <h3 className="font-plush tp-chat__title">
                        Choose your breed
                      </h3>
                      <p className="tp-chat__text">
                        Select your preferred breed or tell us what you're
                        looking for. We'll guide you based on availability and
                        your lifestyle.
                      </p>
                    </li>
                    <li className="tp-chat__step">
                      <span
                        className="tp-chat__num font-plush"
                        aria-hidden="true"
                      >
                        2
                      </span>
                      <h3 className="font-plush tp-chat__title">
                        Get photos & details
                      </h3>
                      <p className="tp-chat__text">
                        Our team will share real photos, health details, and all
                        necessary information directly on WhatsApp.
                      </p>
                    </li>
                    <li className="tp-chat__step">
                      <span
                        className="tp-chat__num font-plush"
                        aria-hidden="true"
                      >
                        3
                      </span>
                      <h3 className="font-plush tp-chat__title">
                        Secure & safe delivery
                      </h3>
                      <p className="tp-chat__text">
                        Once confirmed, we handle everything professionally and
                        ensure your puppy reaches you safely and stress-free.
                      </p>
                    </li>
                  </ol>
                  <a
                    className="btn btn-ghost tp-chat__cta"
                    href="/how-it-works"
                  >
                    How it works
                  </a>
                </div>
                <div className="tp-chat__side">
                  <div
                    className="tp-phone"
                    aria-label="A WhatsApp conversation with InstaBiz"
                    role="group"
                  >
                    <div className="tp-phone__bar">
                      <img
                        alt=""
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="tp-phone__avatar"
                        style={{ color: "transparent" }}
                        srcSet="/o/0eee828a1e6b.webp 1x, /o/001482c4ffcb.webp 2x"
                        src="/o/001482c4ffcb.webp"
                      />
                      <span>
                        <span className="tp-phone__name">InstaBiz</span>
                        <span className="tp-phone__status">online</span>
                      </span>
                    </div>
                    <div className="tp-phone__screen">
                      <p className="tp-msg tp-msg--me">
                        Hi InstaBiz! I'd love to know more about your puppies.
                      </p>
                      <div
                        className="tp-msg-group"
                        data-step="0"
                        data-show="false"
                      >
                        <div className="tp-msg tp-msg--them">
                          <p>
                            Select your preferred breed or tell us what you're
                            looking for. We'll guide you based on availability
                            and your lifestyle.
                          </p>
                          <ul
                            className="tp-chips"
                            aria-label="Breeds we have now"
                          >
                            <li>
                              <a href="/puppies?breed=maltipoo">Maltipoo</a>
                            </li>
                            <li>
                              <a href="/puppies?breed=pomeranian">Pomeranian</a>
                            </li>
                            <li>
                              <a href="/puppies?breed=poodle">Poodle</a>
                            </li>
                            <li>
                              <a href="/puppies?breed=cavapoo">Cavapoo</a>
                            </li>
                            <li>
                              <a href="/puppies?breed=shih-tzu">Shih Tzu</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="tp-msg-group"
                        data-step="1"
                        data-show="false"
                      >
                        <div className="tp-msg tp-msg--them tp-msg--media">
                          <div className="tp-snaps">
                            <span className="tp-snaps__one">
                              <img
                                alt="A tiny apricot teddy bear puppy held up in the InstaBiz showroom"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "54.3% 48.3%",
                                  color: "transparent",
                                  backgroundColor: "rgb(104, 88, 72)",
                                }}
                                sizes="9rem"
                                srcSet="/o/7cf800b93c6f.webp 32w, /o/7cf800b93c6f.webp 48w, /o/7cf800b93c6f.webp 64w, /o/7cf800b93c6f.webp 96w, /o/7cf800b93c6f.webp 128w, /o/bca797069850.webp 256w, /o/7cf800b93c6f.webp 384w, /o/7cf800b93c6f.webp 640w, /o/7cf800b93c6f.webp 750w, /o/7cf800b93c6f.webp 828w, /o/7cf800b93c6f.webp 1080w, /o/7cf800b93c6f.webp 1200w, /o/7cf800b93c6f.webp 1920w, /o/7cf800b93c6f.webp 2048w, /o/7cf800b93c6f.webp 3840w"
                                src="/o/7cf800b93c6f.webp"
                              />
                            </span>
                            <span className="tp-snaps__one">
                              <img
                                alt="The apricot teddy bear puppy from our showroom, close up"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "46% 44.4%",
                                  color: "transparent",
                                  backgroundColor: "rgb(104, 88, 72)",
                                }}
                                sizes="9rem"
                                srcSet="/o/5a7863e68fe0.webp 32w, /o/5a7863e68fe0.webp 48w, /o/5a7863e68fe0.webp 64w, /o/5a7863e68fe0.webp 96w, /o/5a7863e68fe0.webp 128w, /o/5a7863e68fe0.webp 256w, /o/5a7863e68fe0.webp 384w, /o/5a7863e68fe0.webp 640w, /o/5a7863e68fe0.webp 750w, /o/5a7863e68fe0.webp 828w, /o/5a7863e68fe0.webp 1080w, /o/5a7863e68fe0.webp 1200w, /o/5a7863e68fe0.webp 1920w, /o/5a7863e68fe0.webp 2048w, /o/5a7863e68fe0.webp 3840w"
                                src="/o/5a7863e68fe0.webp"
                              />
                            </span>
                            <span className="tp-snaps__one">
                              <img
                                alt="The apricot teddy bear puppy from our showroom, looking up"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "43.7% 40.2%",
                                  color: "transparent",
                                  backgroundColor: "rgb(8, 8, 24)",
                                }}
                                sizes="9rem"
                                srcSet="/o/f80fa9330524.webp 32w, /o/f80fa9330524.webp 48w, /o/f80fa9330524.webp 64w, /o/f80fa9330524.webp 96w, /o/f80fa9330524.webp 128w, /o/f80fa9330524.webp 256w, /o/f80fa9330524.webp 384w, /o/f80fa9330524.webp 640w, /o/f80fa9330524.webp 750w, /o/f80fa9330524.webp 828w, /o/f80fa9330524.webp 1080w, /o/f80fa9330524.webp 1200w, /o/f80fa9330524.webp 1920w, /o/f80fa9330524.webp 2048w, /o/f80fa9330524.webp 3840w"
                                src="/o/f80fa9330524.webp"
                              />
                            </span>
                            <span className="tp-snaps__one">
                              <img
                                alt="The apricot teddy bear puppy from our showroom, held up to say hello"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  objectFit: "cover",
                                  objectPosition: "45.3% 44.4%",
                                  color: "transparent",
                                  backgroundColor: "rgb(104, 88, 72)",
                                }}
                                sizes="9rem"
                                srcSet="/o/f3f51d25495c.webp 32w, /o/f3f51d25495c.webp 48w, /o/f3f51d25495c.webp 64w, /o/f3f51d25495c.webp 96w, /o/f3f51d25495c.webp 128w, /o/4794ddf8f15d.webp 256w, /o/f3f51d25495c.webp 384w, /o/f3f51d25495c.webp 640w, /o/f3f51d25495c.webp 750w, /o/f3f51d25495c.webp 828w, /o/f3f51d25495c.webp 1080w, /o/f3f51d25495c.webp 1200w, /o/f3f51d25495c.webp 1920w, /o/f3f51d25495c.webp 2048w, /o/f3f51d25495c.webp 3840w"
                                src="/o/f3f51d25495c.webp"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="tp-msg tp-msg--them tp-msg--media">
                          <div className="tp-clip">
                            <video
                              src="/media/dSAUmXs8Qai9/ef39cbea20/27b888_323008bb0f6a41d4bde2a0da7206cd98-720p.mp4"
                              poster="/o/caa12537d0b3.jpg"
                              muted
                              loop
                              playsInline
                              preload="none"
                              aria-label="Video of a tiny apricot teddy bear puppy in the InstaBiz showroom"
                            ></video>
                            <button
                              type="button"
                              className="tp-clip__play"
                              aria-pressed="false"
                              aria-label="Play video"
                            >
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8 5v14l11-7z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <p className="tp-msg tp-msg--them">
                          Our team will share real photos, health details, and
                          all necessary information directly on WhatsApp.
                        </p>
                      </div>
                      <div
                        className="tp-msg-group"
                        data-step="2"
                        data-show="false"
                      >
                        <div className="tp-msg tp-msg--them">
                          <p>
                            Once confirmed, we handle everything professionally
                            and ensure your puppy reaches you safely and
                            stress-free.
                          </p>
                          <svg
                            viewBox="0 0 220 70"
                            className="tp-route"
                            aria-hidden="true"
                          >
                            <path
                              d="M14 52 C 60 6, 120 70, 170 28"
                              className="tp-route__line"
                            ></path>
                            <circle
                              cx="14"
                              cy="52"
                              r="5"
                              className="tp-route__dot"
                            ></circle>
                            <path
                              d="M164 32 l12 -12 l12 12 v14 h-24 z"
                              className="tp-route__home"
                            ></path>
                            <path
                              d="M176 42 c-2-3-7-2-6 2c1 3 6 5 6 5s5-2 6-5c1-4-4-5-6-2z"
                              className="tp-route__heart"
                            ></path>
                            <path
                              d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"
                              transform="translate(70 22) scale(.3) rotate(70 32 32)"
                              className="tp-route__paw"
                            ></path>
                            <path
                              d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"
                              transform="translate(104 38) scale(.3) rotate(100 32 32)"
                              className="tp-route__paw"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <p
                        className="tp-typing"
                        data-show="false"
                        aria-hidden="true"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </p>
                    </div>
                    <a
                      href="https://wa.me/15550000000?text=Hi%20InstaBiz!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tp-phone__compose"
                    >
                      <span>Say hello on WhatsApp</span>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 20l18-8L3 4v6l12 2-12 2z"></path>
                      </svg>
                    </a>
                  </div>
                  <div
                    data-pup-stop="true"
                    data-pose="sit"
                    data-facing="right"
                    className="pup-stop tp-chat__teddy"
                  >
                    <div
                      className="pup-buddy "
                      data-facing="right"
                      data-live=""
                    >
                      <svg
                        viewBox="0 0 300 240"
                        aria-hidden="true"
                        focusable="false"
                        style={{ overflow: "visible" }}
                      >
                        <g data-p="root">
                          <ellipse
                            data-p="shadow"
                            cx="150"
                            cy="230"
                            rx="92"
                            ry="7"
                            fill="#2a170e"
                            opacity="0.12"
                            transform="translate(0 0) scale(1 1)"
                            style={{
                              transformBox: "fill-box",
                              transformOrigin: "center center",
                            }}
                          ></ellipse>
                          <g
                            data-p="body"
                            transform="translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"
                            opacity="1"
                          >
                            <g
                              data-p="bf"
                              transform="translate(94 192) rotate(0)"
                              opacity="0"
                            >
                              <path
                                d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z"
                                fill="#e4a352"
                              ></path>
                              <path
                                d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                d="M-3.5 29 v5 M4.5 29 v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                            <g
                              data-p="ff"
                              transform="translate(168 192) rotate(24)"
                            >
                              <path
                                d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z"
                                fill="#e4a352"
                              ></path>
                              <path
                                d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                d="M-3.5 29 v5 M4.5 29 v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                            <g data-p="tail" transform="rotate(34 84 150)">
                              <path
                                d="M86 152 C80 146 76 140 74 136"
                                stroke="#2a170e"
                                strokeWidth="9"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                d="M86 152 C80 146 76 140 74 136"
                                stroke="#f2be6b"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                            </g>
                            <g
                              data-p="bn"
                              transform="translate(110 194) rotate(0)"
                              opacity="0"
                            >
                              <path
                                d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z"
                                fill="#f2be6b"
                              ></path>
                              <path
                                d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                d="M-3.5 27 v5 M4.5 27 v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                            <path
                              d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <g
                              data-p="fn"
                              transform="translate(186 194) rotate(24)"
                            >
                              <path
                                d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z"
                                fill="#f2be6b"
                              ></path>
                              <path
                                d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                d="M-3.5 27 v5 M4.5 27 v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                          </g>
                          <g
                            data-p="haunch"
                            opacity="1"
                            transform="translate(0 1.44)"
                          >
                            <path
                              d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M132 222v5M139 222v5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                          <g
                            data-p="head"
                            transform="translate(-10 -6) rotate(0 212 100)"
                          >
                            <path
                              d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z"
                              fill="#a24a1a"
                              stroke="#2a170e"
                              strokeWidth="3"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z"
                              fill="#fbe3b4"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              data-p="earL"
                              d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"
                              fill="#e4a352"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              transform="rotate(0 174 82)"
                            ></path>
                            <path
                              data-p="earR"
                              d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"
                              fill="#e4a352"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              transform="rotate(0 250 82)"
                            ></path>
                            <path
                              d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z"
                              fill="#fbe3b4"
                            ></path>
                            <circle
                              cx="181"
                              cy="116"
                              r="7"
                              fill="#f9b9a6"
                              opacity="0.85"
                            ></circle>
                            <circle
                              cx="243"
                              cy="116"
                              r="7"
                              fill="#f9b9a6"
                              opacity="0.85"
                            ></circle>
                            <g data-p="eyes" transform="translate(0 0)">
                              <g data-p="open" opacity="1">
                                <g
                                  data-p="blink"
                                  transform="translate(0 0) scale(1 1)"
                                >
                                  <ellipse
                                    cx="194"
                                    cy="98"
                                    rx="7.4"
                                    ry="8.6"
                                    fill="#2a170e"
                                  ></ellipse>
                                  <ellipse
                                    cx="230"
                                    cy="98"
                                    rx="7.4"
                                    ry="8.6"
                                    fill="#2a170e"
                                  ></ellipse>
                                  <circle
                                    cx="196.6"
                                    cy="94.6"
                                    r="2.7"
                                    fill="#fff"
                                  ></circle>
                                  <circle
                                    cx="232.6"
                                    cy="94.6"
                                    r="2.7"
                                    fill="#fff"
                                  ></circle>
                                  <circle
                                    cx="192"
                                    cy="101.2"
                                    r="1.2"
                                    fill="#fff"
                                  ></circle>
                                  <circle
                                    cx="228"
                                    cy="101.2"
                                    r="1.2"
                                    fill="#fff"
                                  ></circle>
                                </g>
                              </g>
                            </g>
                            <path
                              data-p="happy"
                              d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                              opacity="0"
                            ></path>
                            <path
                              data-p="shut"
                              d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                              opacity="0"
                            ></path>
                            <path
                              d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z"
                              fill="#2a170e"
                            ></path>
                            <path
                              d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2"
                              stroke="#2a170e"
                              strokeWidth="3"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              data-p="tongue"
                              d="M207.6 127.4 Q212 136.6 216.4 127.4 Z"
                              fill="#e98c8c"
                              stroke="#2a170e"
                              strokeWidth="2.2"
                              strokeLinejoin="round"
                              opacity="1"
                            ></path>
                            <g data-p="mouth" opacity="0">
                              <path
                                d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z"
                                fill="#6b2a1c"
                                stroke="#2a170e"
                                strokeWidth="2.6"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z"
                                fill="#e98c8c"
                              ></path>
                            </g>
                          </g>
                          <g data-p="ledge" opacity="0">
                            <path
                              d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <span
                        aria-hidden="true"
                        className="pup-bubble"
                        data-show="false"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div data-section="trust">
            <section
              data-pup-scene="true"
              data-tone="light"
              className="tp-scene tp-passport"
              style={{ "--sky-top": "#f0b866", "--sky-bottom": "#a65a30" }}
              aria-labelledby="trust-title"
              data-here="false"
              data-visited="false"
            >
              <div className="gutter mx-auto max-w-[96rem]">
                <div className="tp-book">
                  <div className="tp-book__page tp-book__page--left">
                    <p
                      aria-hidden="true"
                      className="tp-book__kicker font-scrawl"
                    >
                      puppy passport
                    </p>
                    <h2 id="trust-title" className="font-plush tp-book__title">
                      Why families trust InstaBiz
                    </h2>
                    <div
                      data-pup-stop="true"
                      data-pose="sit"
                      data-facing="right"
                      className="pup-stop tp-book__teddy"
                    >
                      <div
                        className="pup-buddy "
                        data-facing="right"
                        data-live=""
                      >
                        <svg
                          viewBox="0 0 300 240"
                          aria-hidden="true"
                          focusable="false"
                          style={{ overflow: "visible" }}
                        >
                          <g data-p="root">
                            <ellipse
                              data-p="shadow"
                              cx="150"
                              cy="230"
                              rx="92"
                              ry="7"
                              fill="#2a170e"
                              opacity="0.12"
                              transform="translate(0 0) scale(1 1)"
                              style={{
                                transformBox: "fill-box",
                                transformOrigin: "center center",
                              }}
                            ></ellipse>
                            <g
                              data-p="body"
                              transform="translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"
                              opacity="1"
                            >
                              <g
                                data-p="bf"
                                transform="translate(94 192) rotate(0)"
                                opacity="0"
                              >
                                <path
                                  d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z"
                                  fill="#e4a352"
                                ></path>
                                <path
                                  d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 29 v5 M4.5 29 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <g
                                data-p="ff"
                                transform="translate(168 192) rotate(24)"
                              >
                                <path
                                  d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z"
                                  fill="#e4a352"
                                ></path>
                                <path
                                  d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 29 v5 M4.5 29 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <g data-p="tail" transform="rotate(34 84 150)">
                                <path
                                  d="M86 152 C80 146 76 140 74 136"
                                  stroke="#2a170e"
                                  strokeWidth="9"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M86 152 C80 146 76 140 74 136"
                                  stroke="#f2be6b"
                                  strokeWidth="4"
                                  fill="none"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z"
                                  fill="#f2be6b"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                ></path>
                              </g>
                              <g
                                data-p="bn"
                                transform="translate(110 194) rotate(0)"
                                opacity="0"
                              >
                                <path
                                  d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z"
                                  fill="#f2be6b"
                                ></path>
                                <path
                                  d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 27 v5 M4.5 27 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <path
                                d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <g
                                data-p="fn"
                                transform="translate(186 194) rotate(24)"
                              >
                                <path
                                  d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z"
                                  fill="#f2be6b"
                                ></path>
                                <path
                                  d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 27 v5 M4.5 27 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                            </g>
                            <g
                              data-p="haunch"
                              opacity="1"
                              transform="translate(0 1.44)"
                            >
                              <path
                                d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M132 222v5M139 222v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                            <g
                              data-p="head"
                              transform="translate(-10 -6) rotate(0 212 100)"
                            >
                              <path
                                d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z"
                                fill="#a24a1a"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z"
                                fill="#fbe3b4"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                data-p="earL"
                                d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"
                                fill="#e4a352"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                transform="rotate(0 174 82)"
                              ></path>
                              <path
                                data-p="earR"
                                d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"
                                fill="#e4a352"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                transform="rotate(0 250 82)"
                              ></path>
                              <path
                                d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z"
                                fill="#fbe3b4"
                              ></path>
                              <circle
                                cx="181"
                                cy="116"
                                r="7"
                                fill="#f9b9a6"
                                opacity="0.85"
                              ></circle>
                              <circle
                                cx="243"
                                cy="116"
                                r="7"
                                fill="#f9b9a6"
                                opacity="0.85"
                              ></circle>
                              <g data-p="eyes" transform="translate(0 0)">
                                <g data-p="open" opacity="1">
                                  <g
                                    data-p="blink"
                                    transform="translate(0 0) scale(1 1)"
                                  >
                                    <ellipse
                                      cx="194"
                                      cy="98"
                                      rx="7.4"
                                      ry="8.6"
                                      fill="#2a170e"
                                    ></ellipse>
                                    <ellipse
                                      cx="230"
                                      cy="98"
                                      rx="7.4"
                                      ry="8.6"
                                      fill="#2a170e"
                                    ></ellipse>
                                    <circle
                                      cx="196.6"
                                      cy="94.6"
                                      r="2.7"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="232.6"
                                      cy="94.6"
                                      r="2.7"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="192"
                                      cy="101.2"
                                      r="1.2"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="228"
                                      cy="101.2"
                                      r="1.2"
                                      fill="#fff"
                                    ></circle>
                                  </g>
                                </g>
                              </g>
                              <path
                                data-p="happy"
                                d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0"
                              ></path>
                              <path
                                data-p="shut"
                                d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0"
                              ></path>
                              <path
                                d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z"
                                fill="#2a170e"
                              ></path>
                              <path
                                d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                data-p="tongue"
                                d="M207.6 127.4 Q212 136.6 216.4 127.4 Z"
                                fill="#e98c8c"
                                stroke="#2a170e"
                                strokeWidth="2.2"
                                strokeLinejoin="round"
                                opacity="1"
                              ></path>
                              <g data-p="mouth" opacity="0">
                                <path
                                  d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z"
                                  fill="#6b2a1c"
                                  stroke="#2a170e"
                                  strokeWidth="2.6"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z"
                                  fill="#e98c8c"
                                ></path>
                              </g>
                            </g>
                            <g data-p="ledge" opacity="0">
                              <path
                                d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <span
                          aria-hidden="true"
                          className="pup-bubble"
                          data-show="false"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <ul className="tp-book__page tp-book__page--right">
                    <li
                      className="tp-entry"
                      style={{
                        "--ink-stamp": "#a24a1a",
                        "--tilt": "-8deg",
                        "--i": "0",
                      }}
                    >
                      <span className="tp-stamp tp-stamp--round">
                        <svg
                          viewBox="0 0 64 64"
                          className="tp-stamp__icon"
                          aria-hidden="true"
                        >
                          <path
                            d="M32 54C16 43 8 34 8 24c0-7 5.4-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 6.6 0 12 5 12 12 0 10-8 19-24 30z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M22 30h7l3-7 4 13 3-6h7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="tp-stamp__title font-plush">
                          Vet-checked & healthy
                        </span>
                      </span>
                      <p className="tp-entry__text">
                        Every puppy comes vaccinated, dewormed, and with a
                        verified health certificate.
                      </p>
                    </li>
                    <li
                      className="tp-entry"
                      style={{
                        "--ink-stamp": "#1f6b45",
                        "--tilt": "5deg",
                        "--i": "1",
                      }}
                    >
                      <span className="tp-stamp tp-stamp--ticket">
                        <svg
                          viewBox="0 0 64 64"
                          className="tp-stamp__icon"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 36l22-3 12-17h6l-6 17 12-1 6-7h3l-2 10 2 10h-3l-6-7-12-1 6 17h-6L28 37 6 36z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M8 50c10 4 20 4 30 0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="2 7"
                          ></path>
                        </svg>
                        <span className="tp-stamp__title font-plush">
                          Korea to Dubai, safely
                        </span>
                      </span>
                      <p className="tp-entry__text">
                        Trusted breeders, safe travel, and premium care from
                        start to finish.
                      </p>
                    </li>
                    <li
                      className="tp-entry"
                      style={{
                        "--ink-stamp": "#5a3a28",
                        "--tilt": "-4deg",
                        "--i": "2",
                      }}
                    >
                      <span className="tp-stamp tp-stamp--oval">
                        <svg
                          viewBox="0 0 64 64"
                          className="tp-stamp__icon"
                          aria-hidden="true"
                        >
                          <path
                            d="M10 14h44v28H30l-12 10v-10h-8z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M22 28h0M32 28h0M42 28h0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="tp-stamp__title font-plush">
                          Support 24/7
                        </span>
                      </span>
                      <p className="tp-entry__text">
                        Always here to help, from choosing your puppy to
                        post-delivery support.
                      </p>
                    </li>
                    <li
                      className="tp-entry"
                      style={{
                        "--ink-stamp": "#c2622b",
                        "--tilt": "7deg",
                        "--i": "3",
                      }}
                    >
                      <span className="tp-stamp tp-stamp--scallop">
                        <svg
                          viewBox="0 0 64 64"
                          className="tp-stamp__icon"
                          aria-hidden="true"
                        >
                          <circle
                            cx="32"
                            cy="32"
                            r="22"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></circle>
                          <path
                            d="M10 32h44M32 10c-8 8-8 36 0 44M32 10c8 8 8 36 0 44"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="tp-stamp__title font-plush">
                          Trusted by families worldwide
                        </span>
                      </span>
                      <p className="tp-entry__text">
                        Puppies delivered to loving homes all around the world.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div aria-hidden="true" className="tp-horizon">
                <span className="tp-horizon__sun"></span>
                <svg
                  viewBox="0 0 1440 160"
                  preserveAspectRatio="none"
                  className="tp-horizon__city"
                >
                  <path d="M0 160V118h34v-14h22v-22h30v34h18V96h26v30h22v-18h16v-30h34v40h20V70h28v56h24V98h18v-26h30v54h20v-38h26v-40l14-6 14 6v40h22v46h18V84h26v-30h22v50h24V76h36v50h20V96h18v-58h30v44h14V96h22v-30h16v22h26v-52l6-8v-24l4-6v-30l3-18 3 18v30l4 6v24l6 8v52h26v30h22V82h30v-20h24v48h20V90h28v-36h26v56h18V74h30v36h22V94h26v-24h30v62h20V102h26v20h34v38z"></path>
                </svg>
              </div>
            </section>
          </div>
          <div data-section="families">
            <section
              data-pup-scene="true"
              data-tone="dark"
              className="tp-scene tp-dusk"
              style={{ "--sky-top": "#a65a30", "--sky-bottom": "#4d2b19" }}
              aria-labelledby="dusk-title"
              data-here="false"
              data-visited="false"
            >
              <div className="tp-dusk__sky gutter">
                <div className="tp-dusk__head">
                  <h2 id="dusk-title" className="font-plush text-huge">
                    Happy families & puppies
                  </h2>
                  <p className="text-lede mt-5 max-w-[50ch] text-[var(--ink-soft)]">
                    We are truly honored to see our puppies become cherished
                    members of loving families. These heartwarming moments have
                    been shared by our valued clients who welcomed a Teddy Pup
                    into their homes and hearts.
                  </p>
                </div>
                <figure className="tp-dusk__note">
                  <blockquote className="font-plush-text">
                    “InstaBiz truly made our dream a reality. They supported us
                    at every step of the import journey. Our Maltipoo arrived
                    healthy, cheerful, and absolutely perfect. Having 24/7
                    support throughout the process gave us complete peace of
                    mind.”
                  </blockquote>
                  <figcaption className="font-scrawl">
                    Sarah M., Dubai, UAE
                  </figcaption>
                </figure>
              </div>
              <div className="tp-photowall">
                <div className="tp-photowall__wall">
                  <ul
                    className="tp-photowall__prints"
                    aria-label="Photos from InstaBiz families"
                  >
                    <li
                      data-reveal="true"
                      style={{ "--d": "330ms" }}
                      data-armed="true"
                    >
                      <button
                        type="button"
                        className="tp-photowall__print"
                        aria-label="Open photo 1 of 64: Lulu 🧸 with her new mummy ❤️"
                      >
                        <span
                          className="tp-polaroid"
                          style={{
                            "--tilt": "-2.2deg",
                            "--tape": "#f6d79a",
                            "--i": "0",
                          }}
                        >
                          <span
                            aria-hidden="true"
                            className="tp-tape tp-tape--center"
                          ></span>
                          <span className="tp-polaroid__photo">
                            <img
                              alt="A happy InstaBiz family with their new puppy"
                              loading="lazy"
                              width="433"
                              height="433"
                              decoding="async"
                              data-nimg="1"
                              style={{
                                color: "transparent",
                                width: "100%",
                                height: "auto",
                                backgroundColor: "rgb(216, 184, 152)",
                              }}
                              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw"
                              srcSet="/o/1ab7ec62ade2.webp 128w, /o/1ab7ec62ade2.webp 256w, /o/1ab7ec62ade2.webp 384w, /o/1ab7ec62ade2.webp 640w, /o/1ab7ec62ade2.webp 750w, /o/1ab7ec62ade2.webp 828w, /o/1ab7ec62ade2.webp 1080w, /o/1ab7ec62ade2.webp 1200w, /o/1ab7ec62ade2.webp 1920w, /o/1ab7ec62ade2.webp 2048w, /o/1ab7ec62ade2.webp 3840w"
                              src="/o/1ab7ec62ade2.webp"
                            />
                          </span>
                          <span className="tp-polaroid__caption font-scrawl">
                            Lulu 🧸 with her new mummy ❤️
                          </span>
                        </span>
                      </button>
                    </li>
                    <li
                      data-reveal="true"
                      data-pup-look=""
                      style={{ "--d": "0ms" }}
                      data-armed="true"
                    >
                      <button
                        type="button"
                        className="tp-photowall__print"
                        aria-label="Open photo 2 of 64: Adorable Maltipoo baby 🧸❤️"
                      >
                        <span
                          className="tp-polaroid"
                          style={{
                            "--tilt": "1.6deg",
                            "--tape": "#f9cdbf",
                            "--i": "1",
                          }}
                        >
                          <span
                            aria-hidden="true"
                            className="tp-tape tp-tape--left"
                          ></span>
                          <span className="tp-polaroid__photo">
                            <img
                              alt="A happy InstaBiz family with their new puppy"
                              loading="lazy"
                              width="433"
                              height="433"
                              decoding="async"
                              data-nimg="1"
                              style={{
                                color: "transparent",
                                width: "100%",
                                height: "auto",
                                backgroundColor: "rgb(216, 184, 136)",
                              }}
                              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw"
                              srcSet="/o/2133207b13f1.webp 128w, /o/2133207b13f1.webp 256w, /o/2133207b13f1.webp 384w, /o/2133207b13f1.webp 640w, /o/2133207b13f1.webp 750w, /o/2133207b13f1.webp 828w, /o/2133207b13f1.webp 1080w, /o/2133207b13f1.webp 1200w, /o/2133207b13f1.webp 1920w, /o/2133207b13f1.webp 2048w, /o/2133207b13f1.webp 3840w"
                              src="/o/2133207b13f1.webp"
                            />
                          </span>
                          <span className="tp-polaroid__caption font-scrawl">
                            Adorable Maltipoo baby 🧸❤️
                          </span>
                        </span>
                      </button>
                    </li>
                    <li
                      data-reveal="true"
                      style={{ "--d": "550ms" }}
                      data-armed="true"
                    >
                      <button
                        type="button"
                        className="tp-photowall__print"
                        aria-label="Open photo 3 of 64: My new teddy puppy 🥰🧸"
                      >
                        <span
                          className="tp-polaroid"
                          style={{
                            "--tilt": "-0.9deg",
                            "--tape": "#cfe5f6",
                            "--i": "2",
                          }}
                        >
                          <span
                            aria-hidden="true"
                            className="tp-tape tp-tape--right"
                          ></span>
                          <span className="tp-polaroid__photo">
                            <img
                              alt="A happy InstaBiz family with their new puppy"
                              loading="lazy"
                              width="433"
                              height="433"
                              decoding="async"
                              data-nimg="1"
                              style={{
                                color: "transparent",
                                width: "100%",
                                height: "auto",
                                backgroundColor: "rgb(200, 184, 152)",
                              }}
                              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw"
                              srcSet="/o/d8b9defc6ac4.webp 128w, /o/d8b9defc6ac4.webp 256w, /o/d8b9defc6ac4.webp 384w, /o/d8b9defc6ac4.webp 640w, /o/d8b9defc6ac4.webp 750w, /o/d8b9defc6ac4.webp 828w, /o/d8b9defc6ac4.webp 1080w, /o/d8b9defc6ac4.webp 1200w, /o/d8b9defc6ac4.webp 1920w, /o/d8b9defc6ac4.webp 2048w, /o/d8b9defc6ac4.webp 3840w"
                              src="/o/d8b9defc6ac4.webp"
                            />
                          </span>
                          <span className="tp-polaroid__caption font-scrawl">
                            My new teddy puppy 🥰🧸
                          </span>
                        </span>
                      </button>
                    </li>
                    <li
                      data-reveal="true"
                      style={{ "--d": "110ms" }}
                      data-armed="true"
                    >
                      <button
                        type="button"
                        className="tp-photowall__print"
                        aria-label="Open photo 4 of 64: Our new puppies 🧸🥰🤗"
                      >
                        <span
                          className="tp-polaroid"
                          style={{
                            "--tilt": "2.4deg",
                            "--tape": "#f6d79a",
                            "--i": "3",
                          }}
                        >
                          <span
                            aria-hidden="true"
                            className="tp-tape tp-tape--tl"
                          ></span>
                          <span
                            aria-hidden="true"
                            className="tp-tape tp-tape--tr"
                          ></span>
                          <span className="tp-polaroid__photo">
                            <img
                              alt="A happy InstaBiz family with their new puppy"
                              loading="lazy"
                              width="433"
                              height="433"
                              decoding="async"
                              data-nimg="1"
                              style={{
                                color: "transparent",
                                width: "100%",
                                height: "auto",
                                backgroundColor: "rgb(200, 168, 136)",
                              }}
                              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw"
                              srcSet="/o/141258a27c00.webp 128w, /o/141258a27c00.webp 256w, /o/141258a27c00.webp 384w, /o/141258a27c00.webp 640w, /o/141258a27c00.webp 750w, /o/141258a27c00.webp 828w, /o/141258a27c00.webp 1080w, /o/141258a27c00.webp 1200w, /o/141258a27c00.webp 1920w, /o/141258a27c00.webp 2048w, /o/141258a27c00.webp 3840w"
                              src="/o/141258a27c00.webp"
                            />
                          </span>
                          <span className="tp-polaroid__caption font-scrawl">
                            Our new puppies 🧸🥰🤗
                          </span>
                        </span>
                      </button>
                    </li>
                    <li
                      data-reveal="true"
                      data-pup-look=""
                      style={{ "--d": "660ms" }}
                      data-armed="true"
                    >
                      <button
                        type="button"
                        className="tp-photowall__print"
                        aria-label="Open photo 5 of 64: New puppy 🧸😍"
                      >
                        <span
                          className="tp-polaroid"
                          style={{
                            "--tilt": "-1.5deg",
                            "--tape": "#e9dcc4",
                            "--i": "4",
                          }}
                        >
                          <span
                            aria-hidden="true"
                            className="tp-tape tp-tape--center"
                          ></span>
                          <span className="tp-polaroid__photo">
                            <img
                              alt="A happy InstaBiz family with their new puppy"
                              loading="lazy"
                              width="433"
                              height="433"
                              decoding="async"
                              data-nimg="1"
                              style={{
                                color: "transparent",
                                width: "100%",
                                height: "auto",
                                backgroundColor: "rgb(232, 216, 184)",
                              }}
                              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw"
                              srcSet="/o/d7e609a7019c.webp 128w, /o/d7e609a7019c.webp 256w, /o/d7e609a7019c.webp 384w, /o/d7e609a7019c.webp 640w, /o/d7e609a7019c.webp 750w, /o/d7e609a7019c.webp 828w, /o/d7e609a7019c.webp 1080w, /o/d7e609a7019c.webp 1200w, /o/d7e609a7019c.webp 1920w, /o/d7e609a7019c.webp 2048w, /o/d7e609a7019c.webp 3840w"
                              src="/o/d7e609a7019c.webp"
                            />
                          </span>
                          <span className="tp-polaroid__caption font-scrawl">
                            New puppy 🧸😍
                          </span>
                        </span>
                      </button>
                    </li>
                    <li
                      data-reveal="true"
                      style={{ "--d": "220ms" }}
                      data-armed="true"
                    >
                      <button
                        type="button"
                        className="tp-photowall__print"
                        aria-label="Open photo 6 of 64: Gang of 3 😍🧸"
                      >
                        <span
                          className="tp-polaroid"
                          style={{
                            "--tilt": "0.8deg",
                            "--tape": "#f6d79a",
                            "--i": "5",
                          }}
                        >
                          <span
                            aria-hidden="true"
                            className="tp-tape tp-tape--right"
                          ></span>
                          <span className="tp-polaroid__photo">
                            <img
                              alt="A happy InstaBiz family with their new puppy"
                              loading="lazy"
                              width="433"
                              height="433"
                              decoding="async"
                              data-nimg="1"
                              style={{
                                color: "transparent",
                                width: "100%",
                                height: "auto",
                                backgroundColor: "rgb(184, 152, 120)",
                              }}
                              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw"
                              srcSet="/o/dc67e086bd6c.webp 128w, /o/dc67e086bd6c.webp 256w, /o/dc67e086bd6c.webp 384w, /o/dc67e086bd6c.webp 640w, /o/dc67e086bd6c.webp 750w, /o/dc67e086bd6c.webp 828w, /o/dc67e086bd6c.webp 1080w, /o/dc67e086bd6c.webp 1200w, /o/dc67e086bd6c.webp 1920w, /o/dc67e086bd6c.webp 2048w, /o/dc67e086bd6c.webp 3840w"
                              src="/o/dc67e086bd6c.webp"
                            />
                          </span>
                          <span className="tp-polaroid__caption font-scrawl">
                            Gang of 3 😍🧸
                          </span>
                        </span>
                      </button>
                    </li>
                    <li
                      data-reveal="true"
                      style={{ "--d": "770ms" }}
                      data-armed="true"
                    >
                      <button
                        type="button"
                        className="tp-photowall__print"
                        aria-label="Open photo 7 of 64: So happy 😍😍"
                      >
                        <span
                          className="tp-polaroid"
                          style={{
                            "--tilt": "-2.6deg",
                            "--tape": "#f9cdbf",
                            "--i": "6",
                          }}
                        >
                          <span
                            aria-hidden="true"
                            className="tp-tape tp-tape--left"
                          ></span>
                          <span className="tp-polaroid__photo">
                            <img
                              alt="A happy InstaBiz family with their new puppy"
                              loading="lazy"
                              width="433"
                              height="433"
                              decoding="async"
                              data-nimg="1"
                              style={{
                                color: "transparent",
                                width: "100%",
                                height: "auto",
                                backgroundColor: "rgb(88, 56, 56)",
                              }}
                              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw"
                              srcSet="/o/47512a9f972b.webp 128w, /o/47512a9f972b.webp 256w, /o/47512a9f972b.webp 384w, /o/47512a9f972b.webp 640w, /o/47512a9f972b.webp 750w, /o/47512a9f972b.webp 828w, /o/47512a9f972b.webp 1080w, /o/47512a9f972b.webp 1200w, /o/47512a9f972b.webp 1920w, /o/47512a9f972b.webp 2048w, /o/47512a9f972b.webp 3840w"
                              src="/o/47512a9f972b.webp"
                            />
                          </span>
                          <span className="tp-polaroid__caption font-scrawl">
                            So happy 😍😍
                          </span>
                        </span>
                      </button>
                    </li>
                    <li
                      data-reveal="true"
                      style={{ "--d": "440ms" }}
                      data-armed="true"
                    >
                      <button
                        type="button"
                        className="tp-photowall__print"
                        aria-label="Open photo 8 of 64: New pup 🤗💫"
                      >
                        <span
                          className="tp-polaroid"
                          style={{
                            "--tilt": "1.2deg",
                            "--tape": "#cfe5f6",
                            "--i": "7",
                          }}
                        >
                          <span
                            aria-hidden="true"
                            className="tp-tape tp-tape--center"
                          ></span>
                          <span className="tp-polaroid__photo">
                            <img
                              alt="A happy InstaBiz family with their new puppy"
                              loading="lazy"
                              width="433"
                              height="433"
                              decoding="async"
                              data-nimg="1"
                              style={{
                                color: "transparent",
                                width: "100%",
                                height: "auto",
                                backgroundColor: "rgb(24, 40, 72)",
                              }}
                              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw"
                              srcSet="/o/10fdea470633.webp 128w, /o/10fdea470633.webp 256w, /o/10fdea470633.webp 384w, /o/10fdea470633.webp 640w, /o/10fdea470633.webp 750w, /o/10fdea470633.webp 828w, /o/10fdea470633.webp 1080w, /o/10fdea470633.webp 1200w, /o/10fdea470633.webp 1920w, /o/10fdea470633.webp 2048w, /o/10fdea470633.webp 3840w"
                              src="/o/10fdea470633.webp"
                            />
                          </span>
                          <span className="tp-polaroid__caption font-scrawl">
                            New pup 🤗💫
                          </span>
                        </span>
                      </button>
                    </li>
                  </ul>
                  <div className="tp-facade__ground">
                    <span aria-hidden="true" className="tp-facade__door"></span>
                    <span aria-hidden="true" className="tp-lamp">
                      <span className="tp-lamp__light"></span>
                    </span>
                    <a
                      className="btn btn-primary tp-facade__cta"
                      href="/happy-families"
                    >
                      See every happy family
                    </a>
                    <div
                      data-pup-stop="true"
                      data-pose="sit"
                      data-facing="right"
                      className="pup-stop tp-dusk__teddy"
                    >
                      <div
                        className="pup-buddy "
                        data-facing="right"
                        data-live=""
                      >
                        <svg
                          viewBox="0 0 300 240"
                          aria-hidden="true"
                          focusable="false"
                          style={{ overflow: "visible" }}
                        >
                          <g data-p="root">
                            <ellipse
                              data-p="shadow"
                              cx="150"
                              cy="230"
                              rx="92"
                              ry="7"
                              fill="#2a170e"
                              opacity="0.12"
                              transform="translate(0 0) scale(1 1)"
                              style={{
                                transformBox: "fill-box",
                                transformOrigin: "center center",
                              }}
                            ></ellipse>
                            <g
                              data-p="body"
                              transform="translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"
                              opacity="1"
                            >
                              <g
                                data-p="bf"
                                transform="translate(94 192) rotate(0)"
                                opacity="0"
                              >
                                <path
                                  d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z"
                                  fill="#e4a352"
                                ></path>
                                <path
                                  d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 29 v5 M4.5 29 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <g
                                data-p="ff"
                                transform="translate(168 192) rotate(24)"
                              >
                                <path
                                  d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z"
                                  fill="#e4a352"
                                ></path>
                                <path
                                  d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 29 v5 M4.5 29 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <g data-p="tail" transform="rotate(34 84 150)">
                                <path
                                  d="M86 152 C80 146 76 140 74 136"
                                  stroke="#2a170e"
                                  strokeWidth="9"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M86 152 C80 146 76 140 74 136"
                                  stroke="#f2be6b"
                                  strokeWidth="4"
                                  fill="none"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z"
                                  fill="#f2be6b"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                ></path>
                              </g>
                              <g
                                data-p="bn"
                                transform="translate(110 194) rotate(0)"
                                opacity="0"
                              >
                                <path
                                  d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z"
                                  fill="#f2be6b"
                                ></path>
                                <path
                                  d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 27 v5 M4.5 27 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <path
                                d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <g
                                data-p="fn"
                                transform="translate(186 194) rotate(24)"
                              >
                                <path
                                  d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z"
                                  fill="#f2be6b"
                                ></path>
                                <path
                                  d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 27 v5 M4.5 27 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                            </g>
                            <g
                              data-p="haunch"
                              opacity="1"
                              transform="translate(0 1.44)"
                            >
                              <path
                                d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M132 222v5M139 222v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                            <g
                              data-p="head"
                              transform="translate(-10 -6) rotate(0 212 100)"
                            >
                              <path
                                d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z"
                                fill="#a24a1a"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z"
                                fill="#fbe3b4"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                data-p="earL"
                                d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"
                                fill="#e4a352"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                transform="rotate(0 174 82)"
                              ></path>
                              <path
                                data-p="earR"
                                d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"
                                fill="#e4a352"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                transform="rotate(0 250 82)"
                              ></path>
                              <path
                                d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z"
                                fill="#fbe3b4"
                              ></path>
                              <circle
                                cx="181"
                                cy="116"
                                r="7"
                                fill="#f9b9a6"
                                opacity="0.85"
                              ></circle>
                              <circle
                                cx="243"
                                cy="116"
                                r="7"
                                fill="#f9b9a6"
                                opacity="0.85"
                              ></circle>
                              <g data-p="eyes" transform="translate(0 0)">
                                <g data-p="open" opacity="1">
                                  <g
                                    data-p="blink"
                                    transform="translate(0 0) scale(1 1)"
                                  >
                                    <ellipse
                                      cx="194"
                                      cy="98"
                                      rx="7.4"
                                      ry="8.6"
                                      fill="#2a170e"
                                    ></ellipse>
                                    <ellipse
                                      cx="230"
                                      cy="98"
                                      rx="7.4"
                                      ry="8.6"
                                      fill="#2a170e"
                                    ></ellipse>
                                    <circle
                                      cx="196.6"
                                      cy="94.6"
                                      r="2.7"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="232.6"
                                      cy="94.6"
                                      r="2.7"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="192"
                                      cy="101.2"
                                      r="1.2"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="228"
                                      cy="101.2"
                                      r="1.2"
                                      fill="#fff"
                                    ></circle>
                                  </g>
                                </g>
                              </g>
                              <path
                                data-p="happy"
                                d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0"
                              ></path>
                              <path
                                data-p="shut"
                                d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0"
                              ></path>
                              <path
                                d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z"
                                fill="#2a170e"
                              ></path>
                              <path
                                d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                data-p="tongue"
                                d="M207.6 127.4 Q212 136.6 216.4 127.4 Z"
                                fill="#e98c8c"
                                stroke="#2a170e"
                                strokeWidth="2.2"
                                strokeLinejoin="round"
                                opacity="1"
                              ></path>
                              <g data-p="mouth" opacity="0">
                                <path
                                  d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z"
                                  fill="#6b2a1c"
                                  stroke="#2a170e"
                                  strokeWidth="2.6"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z"
                                  fill="#e98c8c"
                                ></path>
                              </g>
                            </g>
                            <g data-p="ledge" opacity="0">
                              <path
                                d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <span
                          aria-hidden="true"
                          className="pup-bubble"
                          data-show="false"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="tp-street__pavement"></div>
              </div>
              <dialog
                aria-label="Photo viewer"
                className="m-0 h-dvh max-h-none w-screen max-w-none bg-cocoa/95 p-0 text-milk backdrop:bg-cocoa/70"
                data-lenis-prevent="true"
              ></dialog>
            </section>
          </div>
          <div data-section="questions">
            <section
              data-pup-scene="true"
              data-tone="dark"
              className="tp-scene tp-night"
              style={{ "--sky-top": "#4d2b19", "--sky-bottom": "#2f1a10" }}
              aria-labelledby="questions-title"
              data-here="false"
              data-visited="false"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none tp-night__stars"
              >
                <svg
                  viewBox="0 0 40 40"
                  className="tp-twinkle absolute text-honey"
                  style={{
                    left: "8%",
                    top: "12%",
                    width: "16.2px",
                    animationDelay: "0.00s",
                  }}
                  aria-hidden="true"
                >
                  <path
                    d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 40 40"
                  className="tp-twinkle absolute text-honey"
                  style={{
                    left: "22%",
                    top: "30%",
                    width: "9px",
                    animationDelay: "0.40s",
                  }}
                  aria-hidden="true"
                >
                  <path
                    d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 40 40"
                  className="tp-twinkle absolute text-honey"
                  style={{
                    left: "41%",
                    top: "8%",
                    width: "12.6px",
                    animationDelay: "0.80s",
                  }}
                  aria-hidden="true"
                >
                  <path
                    d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 40 40"
                  className="tp-twinkle absolute text-honey"
                  style={{
                    left: "57%",
                    top: "22%",
                    width: "8.1px",
                    animationDelay: "1.20s",
                  }}
                  aria-hidden="true"
                >
                  <path
                    d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 40 40"
                  className="tp-twinkle absolute text-honey"
                  style={{
                    left: "72%",
                    top: "6%",
                    width: "14.4px",
                    animationDelay: "1.60s",
                  }}
                  aria-hidden="true"
                >
                  <path
                    d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 40 40"
                  className="tp-twinkle absolute text-honey"
                  style={{
                    left: "88%",
                    top: "18%",
                    width: "10.799999999999999px",
                    animationDelay: "2.00s",
                  }}
                  aria-hidden="true"
                >
                  <path
                    d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 40 40"
                  className="tp-twinkle absolute text-honey"
                  style={{
                    left: "95%",
                    top: "42%",
                    width: "9px",
                    animationDelay: "2.40s",
                  }}
                  aria-hidden="true"
                >
                  <path
                    d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 40 40"
                  className="tp-twinkle absolute text-honey"
                  style={{
                    left: "4%",
                    top: "58%",
                    width: "10.799999999999999px",
                    animationDelay: "2.80s",
                  }}
                  aria-hidden="true"
                >
                  <path
                    d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 40 40"
                  className="tp-twinkle absolute text-honey"
                  style={{
                    left: "34%",
                    top: "70%",
                    width: "7.2px",
                    animationDelay: "3.20s",
                  }}
                  aria-hidden="true"
                >
                  <path
                    d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 40 40"
                  className="tp-twinkle absolute text-honey"
                  style={{
                    left: "63%",
                    top: "84%",
                    width: "9.9px",
                    animationDelay: "3.60s",
                  }}
                  aria-hidden="true"
                >
                  <path
                    d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 40 40"
                  className="tp-twinkle absolute text-honey"
                  style={{
                    left: "83%",
                    top: "66%",
                    width: "12.6px",
                    animationDelay: "4.00s",
                  }}
                  aria-hidden="true"
                >
                  <path
                    d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="tp-night__grid gutter">
                <div className="tp-night__intro">
                  <h2 id="questions-title" className="font-plush text-huge">
                    Questions, answered
                  </h2>
                  <a className="btn btn-ghost tp-night__cta" href="/faq">
                    Read all questions
                  </a>
                  <div className="tp-night__pup">
                    <span
                      aria-hidden="true"
                      className="tp-night__wonder font-plush"
                    >
                      ?
                    </span>
                    <div
                      data-pup-stop="true"
                      data-pose="sit"
                      data-facing="right"
                      data-act="tilt"
                      className="pup-stop tp-night__teddy"
                    >
                      <div
                        className="pup-buddy "
                        data-facing="right"
                        data-live=""
                      >
                        <svg
                          viewBox="0 0 300 240"
                          aria-hidden="true"
                          focusable="false"
                          style={{ overflow: "visible" }}
                        >
                          <g data-p="root">
                            <ellipse
                              data-p="shadow"
                              cx="150"
                              cy="230"
                              rx="92"
                              ry="7"
                              fill="#2a170e"
                              opacity="0.12"
                              transform="translate(0 0) scale(1 1)"
                              style={{
                                transformBox: "fill-box",
                                transformOrigin: "center center",
                              }}
                            ></ellipse>
                            <g
                              data-p="body"
                              transform="translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"
                              opacity="1"
                            >
                              <g
                                data-p="bf"
                                transform="translate(94 192) rotate(0)"
                                opacity="0"
                              >
                                <path
                                  d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z"
                                  fill="#e4a352"
                                ></path>
                                <path
                                  d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 29 v5 M4.5 29 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <g
                                data-p="ff"
                                transform="translate(168 192) rotate(24)"
                              >
                                <path
                                  d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z"
                                  fill="#e4a352"
                                ></path>
                                <path
                                  d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 29 v5 M4.5 29 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <g data-p="tail" transform="rotate(34 84 150)">
                                <path
                                  d="M86 152 C80 146 76 140 74 136"
                                  stroke="#2a170e"
                                  strokeWidth="9"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M86 152 C80 146 76 140 74 136"
                                  stroke="#f2be6b"
                                  strokeWidth="4"
                                  fill="none"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z"
                                  fill="#f2be6b"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                ></path>
                              </g>
                              <g
                                data-p="bn"
                                transform="translate(110 194) rotate(0)"
                                opacity="0"
                              >
                                <path
                                  d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z"
                                  fill="#f2be6b"
                                ></path>
                                <path
                                  d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 27 v5 M4.5 27 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                              <path
                                d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <g
                                data-p="fn"
                                transform="translate(186 194) rotate(24)"
                              >
                                <path
                                  d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z"
                                  fill="#f2be6b"
                                ></path>
                                <path
                                  d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14"
                                  stroke="#2a170e"
                                  strokeWidth="3.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                                <path
                                  d="M-3.5 27 v5 M4.5 27 v5"
                                  stroke="#2a170e"
                                  strokeWidth="2.4"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                ></path>
                              </g>
                            </g>
                            <g
                              data-p="haunch"
                              opacity="1"
                              transform="translate(0 1.44)"
                            >
                              <path
                                d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M132 222v5M139 222v5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                            <g
                              data-p="head"
                              transform="translate(-10 -6) rotate(0 212 100)"
                            >
                              <path
                                d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z"
                                fill="#a24a1a"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z"
                                fill="#fbe3b4"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                data-p="earL"
                                d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"
                                fill="#e4a352"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                transform="rotate(0 174 82)"
                              ></path>
                              <path
                                data-p="earR"
                                d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"
                                fill="#e4a352"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                transform="rotate(0 250 82)"
                              ></path>
                              <path
                                d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z"
                                fill="#fbe3b4"
                              ></path>
                              <circle
                                cx="181"
                                cy="116"
                                r="7"
                                fill="#f9b9a6"
                                opacity="0.85"
                              ></circle>
                              <circle
                                cx="243"
                                cy="116"
                                r="7"
                                fill="#f9b9a6"
                                opacity="0.85"
                              ></circle>
                              <g data-p="eyes" transform="translate(0 0)">
                                <g data-p="open" opacity="1">
                                  <g
                                    data-p="blink"
                                    transform="translate(0 0) scale(1 1)"
                                  >
                                    <ellipse
                                      cx="194"
                                      cy="98"
                                      rx="7.4"
                                      ry="8.6"
                                      fill="#2a170e"
                                    ></ellipse>
                                    <ellipse
                                      cx="230"
                                      cy="98"
                                      rx="7.4"
                                      ry="8.6"
                                      fill="#2a170e"
                                    ></ellipse>
                                    <circle
                                      cx="196.6"
                                      cy="94.6"
                                      r="2.7"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="232.6"
                                      cy="94.6"
                                      r="2.7"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="192"
                                      cy="101.2"
                                      r="1.2"
                                      fill="#fff"
                                    ></circle>
                                    <circle
                                      cx="228"
                                      cy="101.2"
                                      r="1.2"
                                      fill="#fff"
                                    ></circle>
                                  </g>
                                </g>
                              </g>
                              <path
                                data-p="happy"
                                d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0"
                              ></path>
                              <path
                                data-p="shut"
                                d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0"
                              ></path>
                              <path
                                d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z"
                                fill="#2a170e"
                              ></path>
                              <path
                                d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2"
                                stroke="#2a170e"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                              <path
                                data-p="tongue"
                                d="M207.6 127.4 Q212 136.6 216.4 127.4 Z"
                                fill="#e98c8c"
                                stroke="#2a170e"
                                strokeWidth="2.2"
                                strokeLinejoin="round"
                                opacity="1"
                              ></path>
                              <g data-p="mouth" opacity="0">
                                <path
                                  d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z"
                                  fill="#6b2a1c"
                                  stroke="#2a170e"
                                  strokeWidth="2.6"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z"
                                  fill="#e98c8c"
                                ></path>
                              </g>
                            </g>
                            <g data-p="ledge" opacity="0">
                              <path
                                d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z"
                                fill="#f2be6b"
                                stroke="#2a170e"
                                strokeWidth="3.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5"
                                stroke="#2a170e"
                                strokeWidth="2.4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <span
                          aria-hidden="true"
                          className="pup-bubble"
                          data-show="false"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <dl className="tp-night__list">
                  <div className="tp-qa" data-pup-look="">
                    <dt className="font-plush tp-qa__q">
                      <svg
                        viewBox="0 0 40 40"
                        className="tp-qa__star"
                        aria-hidden="true"
                      >
                        <path
                          d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Are your puppies vaccinated and health-checked?
                    </dt>
                    <dd className="tp-qa__a">
                      Yes. All our puppies come with a verified health
                      certificate from licensed vets. Every puppy is vaccinated,
                      dewormed, and thoroughly checked before joining your
                      family.
                    </dd>
                  </div>
                  <div className="tp-qa" data-pup-look="">
                    <dt className="font-plush tp-qa__q">
                      <svg
                        viewBox="0 0 40 40"
                        className="tp-qa__star"
                        aria-hidden="true"
                      >
                        <path
                          d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Can I meet a puppy before I decide?
                    </dt>
                    <dd className="tp-qa__a">
                      Yes. Come meet our locally available puppies in our
                      Downtown Dubai showroom and spend time bonding before
                      making your decision.
                    </dd>
                  </div>
                  <div className="tp-qa">
                    <dt className="font-plush tp-qa__q">
                      <svg
                        viewBox="0 0 40 40"
                        className="tp-qa__star"
                        aria-hidden="true"
                      >
                        <path
                          d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Can I take my puppy home the same day?
                    </dt>
                    <dd className="tp-qa__a">
                      Local puppies are available immediately, so you can take
                      your puppy home the same day.
                    </dd>
                  </div>
                </dl>
              </div>
            </section>
          </div>
          <div data-section="cta">
            <section
              data-pup-scene="true"
              data-tone="dark"
              className="tp-scene tp-home"
              style={{ "--sky-top": "#2f1a10", "--sky-bottom": "#24130b" }}
              aria-labelledby="cta-title"
              data-here="false"
              data-visited="false"
            >
              <div className="tp-home__copy gutter">
                <h2 id="cta-title" className="font-plush text-huge">
                  Ready to meet your new best friend?
                </h2>
                <p className="tp-home__lede">
                  Bring home a healthy, happy teacup or designer puppy with
                  expert guidance every step of the way. We help you find the
                  right match and ensure a smooth, safe delivery across the UAE.
                </p>
              </div>
              <div className="tp-house">
                <span
                  aria-hidden="true"
                  className="tp-house__plant tp-house__plant--left"
                ></span>
                <span aria-hidden="true" className="tp-house__lamp"></span>
                <div className="tp-house__doorway">
                  <span className="tp-house__inside">
                    <img
                      alt="Max, waiting inside"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        objectPosition: "53.8% 44.3%",
                        color: "transparent",
                        backgroundColor: "rgb(120, 88, 56)",
                      }}
                      sizes="16rem"
                      srcSet="/o/40f37596b395.webp 32w, /o/40f37596b395.webp 48w, /o/40f37596b395.webp 64w, /o/e55ec632b714.webp 96w, /o/40f37596b395.webp 128w, /o/d21ee99659c5.webp 256w, /o/949ba8079613.webp 384w, /o/40f37596b395.webp 640w, /o/40f37596b395.webp 750w, /o/40f37596b395.webp 828w, /o/40f37596b395.webp 1080w, /o/40f37596b395.webp 1200w, /o/40f37596b395.webp 1920w, /o/40f37596b395.webp 2048w, /o/40f37596b395.webp 3840w"
                      src="/o/40f37596b395.webp"
                    />
                  </span>
                  <span aria-hidden="true" className="tp-house__door">
                    <span className="tp-house__peep"></span>
                    <span className="tp-house__knob"></span>
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="tp-house__plant tp-house__plant--right"
                ></span>
                <span aria-hidden="true" className="tp-house__mat font-scrawl">
                  welcome home
                </span>
                <div
                  data-pup-stop="true"
                  data-pose="bow"
                  data-facing="right"
                  className="pup-stop tp-house__teddy"
                >
                  <div className="pup-buddy " data-facing="right" data-live="">
                    <svg
                      viewBox="0 0 300 240"
                      aria-hidden="true"
                      focusable="false"
                      style={{ overflow: "visible" }}
                    >
                      <g data-p="root">
                        <ellipse
                          data-p="shadow"
                          cx="150"
                          cy="230"
                          rx="92"
                          ry="7"
                          fill="#2a170e"
                          opacity="0.12"
                          transform="translate(0 0) scale(1 1)"
                          style={{
                            transformBox: "fill-box",
                            transformOrigin: "center center",
                          }}
                        ></ellipse>
                        <g
                          data-p="body"
                          transform="translate(0 2) rotate(15 196 206) translate(196 0) scale(1 1) translate(-196 0)"
                          opacity="1"
                        >
                          <g
                            data-p="bf"
                            transform="translate(94 192) rotate(0)"
                            opacity="1"
                          >
                            <path
                              d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z"
                              fill="#e4a352"
                            ></path>
                            <path
                              d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              d="M-3.5 29 v5 M4.5 29 v5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                          <g
                            data-p="ff"
                            transform="translate(168 192) rotate(-67)"
                          >
                            <path
                              d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z"
                              fill="#e4a352"
                            ></path>
                            <path
                              d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              d="M-3.5 29 v5 M4.5 29 v5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                          <g data-p="tail" transform="rotate(-32 84 150)">
                            <path
                              d="M86 152 C80 146 76 140 74 136"
                              stroke="#2a170e"
                              strokeWidth="9"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              d="M86 152 C80 146 76 140 74 136"
                              stroke="#f2be6b"
                              strokeWidth="4"
                              fill="none"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z"
                              fill="#f2be6b"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                          </g>
                          <g
                            data-p="bn"
                            transform="translate(110 194) rotate(0)"
                            opacity="1"
                          >
                            <path
                              d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z"
                              fill="#f2be6b"
                            ></path>
                            <path
                              d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              d="M-3.5 27 v5 M4.5 27 v5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                          <path
                            d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <g
                            data-p="fn"
                            transform="translate(186 194) rotate(-73)"
                          >
                            <path
                              d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z"
                              fill="#f2be6b"
                            ></path>
                            <path
                              d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14"
                              stroke="#2a170e"
                              strokeWidth="3.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                            <path
                              d="M-3.5 27 v5 M4.5 27 v5"
                              stroke="#2a170e"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              fill="none"
                            ></path>
                          </g>
                        </g>
                        <g
                          data-p="haunch"
                          opacity="0"
                          transform="translate(0 -0.9)"
                        >
                          <path
                            d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M132 222v5M139 222v5"
                            stroke="#2a170e"
                            strokeWidth="2.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                          ></path>
                        </g>
                        <g
                          data-p="head"
                          transform="translate(14 30) rotate(0 212 100)"
                        >
                          <path
                            d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z"
                            fill="#a24a1a"
                            stroke="#2a170e"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z"
                            fill="#fbe3b4"
                            stroke="#2a170e"
                            strokeWidth="2.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            data-p="earL"
                            d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"
                            fill="#e4a352"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            transform="rotate(0 174 82)"
                          ></path>
                          <path
                            data-p="earR"
                            d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"
                            fill="#e4a352"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            transform="rotate(0 250 82)"
                          ></path>
                          <path
                            d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z"
                            fill="#fbe3b4"
                          ></path>
                          <circle
                            cx="181"
                            cy="116"
                            r="7"
                            fill="#f9b9a6"
                            opacity="0.85"
                          ></circle>
                          <circle
                            cx="243"
                            cy="116"
                            r="7"
                            fill="#f9b9a6"
                            opacity="0.85"
                          ></circle>
                          <g data-p="eyes" transform="translate(0 0)">
                            <g data-p="open" opacity="0">
                              <g
                                data-p="blink"
                                transform="translate(0 0) scale(1 1)"
                              >
                                <ellipse
                                  cx="194"
                                  cy="98"
                                  rx="7.4"
                                  ry="8.6"
                                  fill="#2a170e"
                                ></ellipse>
                                <ellipse
                                  cx="230"
                                  cy="98"
                                  rx="7.4"
                                  ry="8.6"
                                  fill="#2a170e"
                                ></ellipse>
                                <circle
                                  cx="196.6"
                                  cy="94.6"
                                  r="2.7"
                                  fill="#fff"
                                ></circle>
                                <circle
                                  cx="232.6"
                                  cy="94.6"
                                  r="2.7"
                                  fill="#fff"
                                ></circle>
                                <circle
                                  cx="192"
                                  cy="101.2"
                                  r="1.2"
                                  fill="#fff"
                                ></circle>
                                <circle
                                  cx="228"
                                  cy="101.2"
                                  r="1.2"
                                  fill="#fff"
                                ></circle>
                              </g>
                            </g>
                          </g>
                          <path
                            data-p="happy"
                            d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                            opacity="1"
                          ></path>
                          <path
                            data-p="shut"
                            d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z"
                            fill="#2a170e"
                          ></path>
                          <path
                            d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2"
                            stroke="#2a170e"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                          ></path>
                          <path
                            data-p="tongue"
                            d="M207.6 127.4 Q212 136.6 216.4 127.4 Z"
                            fill="#e98c8c"
                            stroke="#2a170e"
                            strokeWidth="2.2"
                            strokeLinejoin="round"
                            opacity="1"
                          ></path>
                          <g data-p="mouth" opacity="0">
                            <path
                              d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z"
                              fill="#6b2a1c"
                              stroke="#2a170e"
                              strokeWidth="2.6"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z"
                              fill="#e98c8c"
                            ></path>
                          </g>
                        </g>
                        <g data-p="ledge" opacity="0">
                          <path
                            d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z"
                            fill="#f2be6b"
                            stroke="#2a170e"
                            strokeWidth="3.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5"
                            stroke="#2a170e"
                            strokeWidth="2.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span
                      aria-hidden="true"
                      className="pup-bubble"
                      data-show="false"
                    ></span>
                  </div>
                </div>
              </div>
              <div className="tp-home__actions gutter">
                <a
                  href="https://wa.me/15550000000?text=Hi%20InstaBiz!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Enquire on WhatsApp
                </a>
                <a className="btn btn-ghost tp-home__ghost" href="/contact">
                  Visit & contact
                </a>
              </div>
            </section>
          </div>
        </div>
        <PupLayer />
      </main>
    </>
  );
}
