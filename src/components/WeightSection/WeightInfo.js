import styled from '@emotion/styled';
import WelcomeTitle from './WelcomeTitle';
import Card from '../Card';
import WeightIcon from './WeightIcon';
import { getLoggedInUser } from '../../services/userData'
import {ReactComponent as InitialWeightIcon} from '../../images/icons/weight-icon-v2.svg';
import {ReactComponent as CurrentWeightIcon} from '../../images/icons/weight-icon.svg';
import {ReactComponent as GoalWeightIcon} from '../../images/icons/exercise-icon.svg';
import InsertButton from '../InsertButton'

const WeightIconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 35px;
`

function WeightInfo() {
    const user = getLoggedInUser();
    return (
        <Card width="20vw" height="40vh">
            <WelcomeTitle />
            <WeightIconsContainer>
                <WeightIcon 
                    icon={<InitialWeightIcon />} 
                    text="Peso Inicial"
                    subText={`${user.initialWeight} kg`}
                />
                <WeightIcon 
                    icon={<CurrentWeightIcon />} 
                    text="Peso Atual"
                    subText={`${user.currentWeight} kg`}
                />
                <WeightIcon 
                    icon={<GoalWeightIcon />} 
                    text="Meta"
                    subText={`${user.goalWeight} kg`}
                />
            </WeightIconsContainer>
        <InsertButton>Inserir peso</InsertButton>
        </Card>
    );
}

export default WeightInfo;