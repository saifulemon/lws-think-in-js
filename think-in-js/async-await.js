async function helloFunc() {
    return `hello`;
}
console.log(helloFunc());



const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technicle Meeting',
            location: 'Google Meet',
            time: '10:00 pm'
        }
        resolve(meetingDetails);
    }
    else {
        reject(new Error('meeting already scheduled'));
    }
});

const addToCalender = (meetingDetails) => {
        const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calender);
}



async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalender(meetingDetails);
        console.log(calendar);
    }
    catch {
        console.log(`something wrong happened`);
    }
}
myMeeting();