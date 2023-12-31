import Navbar from '../components/NavbarSection/Navbar';
import WeightInfo from '../components/WeightSection/WeightInfo';
import ConsumeInfo from '../components/ConsumeSection/ConsumeInfo';
import WeightProgressInfo from '../components/WeightProgressSection/WeightProgressInfo';
import ExerciseInfo from '../components/ExerciseSection/ExerciseInfo';
import styled from '@emotion/styled';

const Container = styled.div`
    align-items: space-around;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /*max-width: 450px;   // Largura máxima (2 cards + margens)*/
    padding: 30px;
    margin: 20px auto;
    & > :nth-child(3) {
        margin-top: 20px; 
    }
    & > :nth-child(4) {
        margin-top: 20px; 
    }
`;

function HomePage() {
    return (
        <Container>
            <WeightInfo />
            <ConsumeInfo />
            <ExerciseInfo />
            <WeightProgressInfo />
        </Container>
    );
}

export default HomePage;