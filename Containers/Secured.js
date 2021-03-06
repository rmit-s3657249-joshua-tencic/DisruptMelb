import React, {Component} from "react";
import {ScrollView, Text, View, Button, HeaderBanner} from "react-native";
import HomeScreen from './HomeScreen.js';
import ShiftDetailed from './ShiftDetailed.js';
import UserProfile from './UserProfile.js';
import Header from './Header.js';
import OpenShifts from './OpenShifts.js';
import MyCalendar0 from './MyCalendar0.js';

class Secured extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageId: 0
        }
        this.viewHomeScreen = this.viewHomeScreen.bind(this);
        this.viewUserProfile = this.viewUserProfile.bind(this);
        this.viewSettings = this.viewSettings.bind(this);
        this.viewShiftDetails = this.viewShiftDetails.bind(this);
        this.viewOpenShifts = this.viewOpenShifts.bind(this);
    }

    viewHomeScreen() {
        this.setState({pageId: 0});
    }

    viewUserProfile() {
        this.setState({pageId: 1});
    }

    viewSettings() {
        this.setState({pageId: 2});
    }

    viewShiftDetails() {
        this.setState({pageId: 3});
    }

    viewOpenShifts() {
        this.setState({pageId: 5});
    }

    render() {

        switch (this.state.pageId) {
            case 0: {
                return (
                    <View style={{padding: 20}}>
                      <Header onOSPress={this.viewOpenShifts} onProfilePress={this.viewUserProfile}
                              onHomePress={this.viewHomeScreen}/>
                    <ScrollView>
                        <HomeScreen showDetails={this.viewShiftDetails}/>
                    </ScrollView>
                    </View>
                );
            }
            case 1: {
                return (
                    <ScrollView style={{padding: 20}}>
                        <Header onOSPress={this.viewOpenShifts} onProfilePress={this.viewUserProfile}
                                onHomePress={this.viewHomeScreen}/>
                        <UserProfile onLogoutPress={this.props.onLogoutPress} onHomePress={this.viewHomeScreen}/>
                    </ScrollView>
                );
            }
            case 3: {
                return (
                    <View style={{padding: 20}}>
                        <Header onOSPress={this.viewOpenShifts} onProfilePress={this.viewUserProfile}
                                onHomePress={this.viewHomeScreen}/>
                        <ShiftDetailed onHomePress={this.viewHomeScreen}/>
                    </View>
                )
            }
            case 5: {
                return (
                    <View style={{paddingTop: 20, paddingLeft: 20, paddingRight: 20}}>
                        <Header onOSPress={this.viewOpenShifts} onProfilePress={this.viewUserProfile}
                                onHomePress={this.viewHomeScreen}/>
                        <OpenShifts/>
                    </View>
                )
            }
        }
    }
}

export default Secured;
