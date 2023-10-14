import styled from '@emotion/styled';
import Card from '../Card';
import SectionTitle from '../SectionTitle';
import WeightProgressChart from './chart';

const ChartContainer = styled.div`
    width: 100%;
    height: 90%;
    padding: 20px;
    box-sizing: border-box;
`;

function WeightProgressInfo() {
    return (
        <Card width="70vw" height="30vh">
            <SectionTitle>Minha evolução</SectionTitle>
            <ChartContainer>
                <WeightProgressChart />
            </ChartContainer>
        </Card>
    );
}
export default WeightProgressInfo;