import DateToday from "./dateToday";
import Card from '../Card';
import {ReactComponent as CalendarIcon} from '../../images/icons/calendar-icon.svg';


function ConsumeInfo() {
    return (
        <Card width="60vw" height="40vh">
            <DateToday icon={<CalendarIcon />} />
        </Card>
    );
}

export default ConsumeInfo;

