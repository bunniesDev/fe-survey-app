import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-size: 120%;
`;

const Rabbit = styled.div`
  width: 5em;
  height: 3em;
  background: #e2b29f;
  border-radius: 70% 90% 60% 50%;
  position: relative;
  box-shadow: -0.2em 1em 0 -0.75em #b78e81;
  -webkit-transform: rotate(0deg) translate(-2em, 0);
  -moz-transform: rotate(0deg) translate(-2em, 0);
  -ms-transform: rotate(0deg) translate(-2em, 0);
  -o-transform: rotate(0deg) translate(-2em, 0);
  transform: rotate(0deg) translate(-2em, 0);
  animation: hop 1s infinite linear;
  z-index: 1;
  .no-flexbox & {
    margin: 10em auto 0;
  }
  //tail, eye, feet
  &:before {
    content: '';
    position: absolute;
    width: 1em;
    height: 1em;
    background: #e2b29f; // tail
    border-radius: 100%;
    top: 0.5em;
    left: -0.3em;
    box-shadow: 4em 0.4em 0 -0.35em #3f3334, 0.5em 1em 0 #e2b29f,
      4em 1em 0 -0.3em #e2b29f, 4em 1em 0 -0.3em #e2b29f,
      4em 1em 0 -0.4em #e2b29f;
    animation: kick 1s infinite linear;
  }
  // ears
  &:after {
    content: '';
    position: absolute;
    width: 0.75em;
    height: 2em;
    background: #e2b29f;
    border-radius: 50% 100% 0 0;
    -webkit-transform: rotate(-30deg);
    -moz-transform: rotate(-30deg);
    -ms-transform: rotate(-30deg);
    -o-transform: rotate(-30deg);
    transform: rotate(-30deg);
    right: 1em;
    top: -1em;
    border-top: 1px solid #f7f5f4;
    border-left: 1px solid #f7f5f4;
    box-shadow: -0.5em 0em 0 -0.1em #e2b29f;
  }

  @keyframes hop {
    20% {
      -webkit-transform: rotate(-10deg) translate(1em, -2em);
      -moz-transform: rotate(-10deg) translate(1em, -2em);
      -ms-transform: rotate(-10deg) translate(1em, -2em);
      -o-transform: rotate(-10deg) translate(1em, -2em);
      transform: rotate(-10deg) translate(1em, -2em);
      box-shadow: -0.2em 3em 0 -1em #b78e81;
    }
    40% {
      -webkit-transform: rotate(10deg) translate(3em, -4em);
      -moz-transform: rotate(10deg) translate(3em, -4em);
      -ms-transform: rotate(10deg) translate(3em, -4em);
      -o-transform: rotate(10deg) translate(3em, -4em);
      transform: rotate(10deg) translate(3em, -4em);
      box-shadow: -0.2em 3.25em 0 -1.1em #b78e81;
    }
    60%,
    75% {
      -webkit-transform: rotate(0) translate(4em, 0);
      -moz-transform: rotate(0) translate(4em, 0);
      -ms-transform: rotate(0) translate(4em, 0);
      -o-transform: rotate(0) translate(4em, 0);
      transform: rotate(0) translate(4em, 0);
      box-shadow: -0.2em 1em 0 -0.75em #b78e81;
    }
  }
  @keyframes kick {
    20%,
    50% {
      box-shadow: 4em 0.4em 0 -0.35em #3f3334, 0.5em 1.5em 0 #e2b29f,
        4em 1.75em 0 -0.3em #e2b29f, 4em 1.75em 0 -0.3em #e2b29f,
        4em 1.9em 0 -0.4em #e2b29f;
    }
    40% {
      box-shadow: 4em 0.4em 0 -0.35em #3f3334, 0.5em 2em 0 #e2b29f,
        4em 1.75em 0 -0.3em #e2b29f, 4.2em 1.75em 0 -0.2em #e2b29f,
        4.4em 1.9em 0 -0.2em #e2b29f;
    }
  }
`;

const Cloud = styled.div`
  background: #e2b29f;
  width: 2em;
  height: 2em;
  border-radius: 100% 100% 0 0;
  position: relative;
  top: -5em;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
  animation: cloudy 1s infinite linear forwards;
  box-shadow: 5em 2em 0 -0.3em #e2b29f, -2em 2em 0 0 #e2b29f;
  &:before,
  &:after {
    content: '';
    position: absolute;
    box-shadow: 5em 2em 0 -0.3em #e2b29f, -2em 2em 0 #e2b29f;
  }
  &:before {
    width: 1.25em;
    height: 1.25em;
    border-radius: 100% 100% 0 100%;
    background: #e2b29f;
    left: -30%;
    bottom: 0;
  }
  &:after {
    width: 1.5em;
    height: 1.5em;
    border-radius: 100% 100% 100% 0;
    background: #e2b29f;
    right: -30%;
    bottom: 0;
  }

  @keyframes cloudy {
    40% {
      filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=75);
      opacity: 0.75;
      -webkit-transform: translate(-3em, 0);
      -moz-transform: translate(-3em, 0);
      -ms-transform: translate(-3em, 0);
      -o-transform: translate(-3em, 0);
      transform: translate(-3em, 0);
    }
    55% {
      filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
      opacity: 0;
      -webkit-transform: translate(-4em, 0);
      -moz-transform: translate(-4em, 0);
      -ms-transform: translate(-4em, 0);
      -o-transform: translate(-4em, 0);
      transform: translate(-4em, 0);
    }
    90% {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }
`;

function Loading() {
  return (
    <Container>
      <Rabbit />
      <Cloud />
    </Container>
  );
}

export default Loading;
