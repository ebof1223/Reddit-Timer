import React from 'react';
import styled from 'styled-components';

import logoPrimary from '../../resources/logoPrimary';

const HeaderStyle = styled.header`
  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;

    div {
      cursor: pointer;
      margin: 31px 80px;
    }

    ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
      margin-right: 84px;

      li {
        cursor: pointer;
        font-size: 1rem;
        font-weight: 400;
        margin-left: 25.5px;

        a {
          color: #636363;
          text-decoration: none;
        }
      }
    }
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <nav>
        <a href="/">
          <div>{logoPrimary}</div>
        </a>
        <ul>
          <li>
            <a href="/search/javascript">Search</a>
          </li>
          <li>
            <a href="#how-it-works">How it works</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}

export default Header;
