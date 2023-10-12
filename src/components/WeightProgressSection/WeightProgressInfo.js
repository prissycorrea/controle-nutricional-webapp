import styled from '@emotion/styled';
import Card from '../Card';
import SectionTitle from '../SectionTitle';
import WeightProgressChart from './chart';

const ChartContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

function WeightProgressInfo(weightData) {
    return (
        <Card width="70vw" height="30vh">
            <SectionTitle>Minha evolução</SectionTitle>
            <ChartContainer>
                <WeightProgressChart data={weightData} options={{ maintainAspectRatio: false }} width={'100%'}/>
            </ChartContainer>
        </Card>
    );
}

export default WeightProgressInfo;