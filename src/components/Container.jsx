import styled from "styled-components";

export default function Container() {
  return (
    <Content>
      <header>
        <h1>Browse by interests</h1>
        <h2>
          Select some interests to help us personalize your <br></br>experience
          on Edmondo.
        </h2>
        <div className="action">X</div>
      </header>
      <Cards>
        <div className="card">Math</div>
        <div className="card">Science</div>
        <div
          className="card"
          style={{ color: "#fff", border: " 1px solid #B02342" }}
        >
          English
        </div>
        <div className="card">World Languages</div>
        <div className="card active">Health & PE</div>
        <div className="card">Special Education</div>
        <div className="card">Development</div>
        <div className="card">Technology</div>
        <div className="card active">Social Studies</div>
      </Cards>
      <footer>
        <button>Skip</button>
        <button className="active">Save</button>
      </footer>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 749px;
  height: 614px;
  background: var(--brown);
  margin: 0 auto;
  border-radius: 15px;
  padding: 57px 59px 62px 58px;
  margin-top: 10vh;
  position: relative;

  h1 {
    font-size: 24px;
    color: var(--title);
    text-align: center;
    font-weight: bold;
    margin-bottom: 24px;
  }
  h2 {
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    font-weight: 600;
  }

  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--dark);
    font-size: 20px;
    position: absolute;
    top: 11px;
    right: 9px;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  footer button {
    width: 120px;
    height: 57px;
    border-radius: 5px;
    border: none;
    color: var(--cards);
    background: transparent;
    border: 1px solid #71768c;
  }
  button.active {
    background: var(--pink);
    color: white;
    border: none;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 24px;

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark);
    width: 194px;
    height: 57px;
    border-radius: 5px;
    color: var(--cards);
  }
  .card.active {
    color: white;
    border: 1px solid var(--red);
    box-shadow: 1px 1px 12px var(--pink);
  }
`;
