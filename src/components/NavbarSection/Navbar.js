import Logotipo from '../../images/logo.png';
import Logo from './Logo';
import styled from '@emotion/styled';
import MenuLink from './MenuLinks';
import ProfileDropdown from './ProfileImage';
import { ReactComponent as MetricsIcon } from '../../images/icons/metrics-icon.svg';
import { ReactComponent as DiaryIcon} from '../../images/icons/diary-icon.svg';
import { ReactComponent as TableIcon} from '../../images/icons/fruit-icon.svg';
import { ReactComponent as RecipeIcon} from '../../images/icons/restaurant-icon.svg';
import { getLoggedInUser } from '../../services/userData'

const MenuContainer = styled.div`
    display: flex;
    gap: 15px;
    justify-content: space-between;
    padding: 20px;
`;

const MenuLinksContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    width: 60%;
`;

const Navbar = () => {
    const user = getLoggedInUser();
    return (
        <MenuContainer>
            <Logo img={Logotipo} />
            <MenuLinksContainer>
                <MenuLink icon={MetricsIcon} text="Métricas" to="/" />
                <MenuLink icon={DiaryIcon} text="Registro Diário" to="/diario" />
                <MenuLink icon={TableIcon} text="Tabela Nutricional" to="/tabela" />
                <MenuLink icon={RecipeIcon} text="Receitas" to="/receitas" />
            </MenuLinksContainer>
            <ProfileDropdown image={user.profileImage} />
        </MenuContainer>
    )
}

export default Navbar;