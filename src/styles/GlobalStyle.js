import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    min-width: 300px;
    margin: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.colorText};
    transition: all 0.4s linear;
  }

  /* width */
body::-webkit-scrollbar {
  width: 5px;
}
/* Track */
body::-webkit-scrollbar-track {
  box-shadow: black;
  border-radius: 4px;
}
/* Handle */
body::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
/* Handle on hover */
body::-webkit-scrollbar-thumb:hover {
  background: blue;
}

  .logo {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}


  .link {
  display: inline-block;
  color: ${({ theme }) => theme.colorText};
  text-decoration: none;
  }

  .link:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colorText};
    transition: width 0.3s;
  }

  .link:hover:after {
    width: 100%;
  }

ul,
ol,
dd {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1 {
  font-size: 2.5rem;

  margin-top: 10vh;
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: left;
  margin-top: 10vh;
}

p {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 300;
}

.section {
  color: ${({ theme }) => theme.colorText};
  height: 100vh;
}

.section-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-padding {
  padding: 0 3vw;
  margin-top: 5vh;
}

.button {
  cursor: pointer;
  background: rgb(81, 101, 253);
  background: linear-gradient(
    233deg,
    rgb(55, 69, 172) 0%,
    rgba(81, 101, 253, 1) 100%
  );


  box-shadow: 2px 7px 8px -5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 7px 8px -5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 7px 8px -5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s;
  transition: transform 0.5s;
  transform-origin: center;
}

.button:hover {
  box-shadow: 2px 7px 8px -5px rgb(81, 101, 253);
  -webkit-box-shadow: 2px 7px 8px -5px rgb(81, 101, 253);
  -moz-box-shadow: 2px 7px 8px -5px rgb(81, 101, 253);
  transform: scale(1.05);
  transition: box-shadow 0.5s;
  transition: -webkit-box-shadow 0.5s;
  transition: -moz-box-shadow 0.5s;
  transition: transform 0.5s;
}

.button:link,
.button:visited {
  text-decoration: none;
  color: ${({ theme }) => theme.colorText};
}

.button__circle {
  border: 1px solid #2a2a2a;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button__circle__p {
  font-size: 1.1rem;
  font-weight: 700;
}

.button__circle:link,
.button__circle:visited {
  text-decoration: none;
  color: ${({ theme }) => theme.colorText};
}

`;
