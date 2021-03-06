import * as React from "react";

import {
    Grid, Card, List, Page, StampCard,
} from "tabler-react";

import Wrapper from "./Wrapper";
import UserService from "../services/UserService";
import LogoUtil from "../services/util/LogoUtil";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentDidMount = () => {
        if (!sessionStorage.getItem('user') || sessionStorage.getItem('user') === 'undefined') {
            this.getMe().then(user => {
                sessionStorage.setItem('user', JSON.stringify(user));
                if (sessionStorage.getItem('user') && sessionStorage.getItem('user') !== 'undefined') {
                    this.setState({
                        user: JSON.parse(sessionStorage.getItem('user'))
                    })
                } else {
                    window.location = '/login';
                }
            })
        } else {
            this.setState({
                user: JSON.parse(sessionStorage.getItem('user'))
            })
        }
    }

    getMe = () => {
        return UserService.getMe();
    }

    render(): React.ReactNode {
        if (!this.state.user) {
            return null;
        }

        return (
            <Wrapper
                email={this.state.user.Email}
                role={this.state.user.Role}
                organization={this.state.user.OrganizationName}>
                <Page.Content title="Личный кабинет">
                    <Grid.Row>
                        <Grid.Col width={12} sm={12} md={4} lg={4}>
                            <StampCard
                                color="indigo"
                                icon="user"
                                header={
                                    <small>Мой email</small>
                                }
                                footer={this.state.user.Email}
                            />
                            <StampCard
                                color="azure"
                                icon="navigation"
                                header={
                                    <small>Моя роль</small>
                                }
                                footer={this.state.user.Role}
                            />
                            <StampCard
                                color="teal"
                                icon="home"
                                header={
                                    <small>Моя организация</small>
                                }
                                footer={this.state.user.OrganizationName}
                            />
                        </Grid.Col>
                        <Grid.Col className="mx-auto" width={12} sm={12} md={6} lg={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        Организации-партнеры
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <List.Group>
                                        {
                                            Object.values(this.state.user.AllowAccessTo)
                                                .map(function (org) {
                                                        return <List.GroupItem action>
                                                            <img src={LogoUtil.getSmallLogoByName(org)}
                                                                 alt={'*'}/>
                                                            {" "}
                                                            {org}
                                                        </List.GroupItem>
                                                    }
                                                )
                                        }
                                    </List.Group>
                                </Card.Body>
                            </Card>
                        </Grid.Col>
                    </Grid.Row>
                </Page.Content>
            </Wrapper>
        )
    };
}

export default HomePage;
