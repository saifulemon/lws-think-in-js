const hasMeeting = false;
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

meeting
    .then(addToCalender)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.message);
    })





const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 2000);
})

promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));

Promise.all([promise1, promise2]).then((res) => {
    console.log(res);
})