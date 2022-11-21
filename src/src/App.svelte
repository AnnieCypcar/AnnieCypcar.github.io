<script>
  const logo = "./assets/cypcar_logo_2020_nocr.png";
</script>

<main>
  <div id="logo">
    <img src={logo} alt="cypcar logo" />
  </div>
  <div id="content">
    <div class="title">hello from cypcar design</div>
    <a href={`mailto:cypcardesign@gmail.com`}>
      <div class="contact">drop me a line</div>
    </a>
  </div>
  <footer>
    <div id="links">
      <li>
        <a href="https://github.com/AnnieCypcar/AnnieCypcar.github.io">
          github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/annie-engineer/"> linkedin </a>
      </li>
      <li>
        <a href="https://leetcode.com/cypcar/"> leetcode </a>
      </li>
    </div>
    <span>
      @{new Date().getFullYear()} cypcar design
    </span>
  </footer>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    color: #3e3939;
    background: linear-gradient(
      90deg,
      rgba(248, 229, 229, 1) 20%,
      rgba(197, 213, 203, 1) 100%
    );
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :global(a) {
    text-decoration: none;
    color: #3e3939;
  }

  .title {
    font-size: 2em;
    width: 70%;
    margin: 10% auto 0 auto;
  }

  #logo {
    width: 100%;
    height: 60px;
    padding: 1%;
  }

  #logo img {
    float: left;
  }

  #content {
    width: 100%;
    float: left;
  }

  .contact {
    font-size: 18px;
    font-family: "Source Sans Pro", sans-serif;
    background-color: #ffb6b6;
    margin: 10% auto 0 auto;
    width: 50%;
    line-height: 50px;
    position: relative;
    color: #fff5f5;
    transition: all 1s;
    border-radius: 30px;
  }
  .contact::before,
  .contact::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 30px;
  }
  .contact:hover::after {
    animation-name: rotatecw;
    animation-duration: 2s;
  }
  .contact:hover::before {
    animation-name: rotateccw;
    animation-duration: 2s;
  }
  .contact:hover::after,
  .contact:hover::before {
    left: 25%;
    width: 50%;
    animation-iteration-count: 20;
    animation-timing-function: linear;
  }

  @keyframes rotatecw {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotateccw {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  footer {
    position: absolute;
    bottom: 20px;
    width: 100%;
    margin: auto;
  }

  footer li {
    display: inline;
    padding: 0.8em;
    vertical-align: middle;
  }

  #links {
    padding: 1em 0;
  }
</style>
