//JavaScript Functionality
const activityLog = [
    { userId: 1, activityType: 'login', timestamp: '2024-06-14T10:00:00Z' },
    { userId: 2, activityType: 'logout', timestamp: '2024-06-14T10:05:00Z' },
    { userId: 1, activityType: 'view', timestamp: '2024-06-14T10:15:00Z' },
    { userId: 2, activityType: 'login', timestamp: '2024-06-14T10:10:00Z' },
    { userId: 1, activityType: 'logout', timestamp: '2024-06-14T10:20:00Z' },
    { userId: 3, activityType: 'view', timestamp: '2024-06-14T10:25:00Z' },
    { userId: 2, activityType: 'view', timestamp: '2024-06-14T10:30:00Z' },
];


function getUniqueUserCount(activities) {
    const userSet = new Set();
    for (const activity of activities) {
        userSet.add(activity.userId);
    }
    return userSet.size;
}


function findMostCommonActivity(activities) {
    const activityFrequency = {};
    for (const activity of activities) {
        const type = activity.activityType;
        if (activityFrequency[type]) {
            activityFrequency[type]++;
        } else {
            activityFrequency[type] = 1;
        }
    }

    let maxCount = 0;
    let commonActivity = null;
    for (const [type, count] of Object.entries(activityFrequency)) {
        if (count > maxCount) {
            maxCount = count;
            commonActivity = type;
        }
    }
    return commonActivity;
}
function createUserTimelines(activities) {
    const userTimelines = {};
    for (const activity of activities) {
        const { userId } = activity;
        if (!userTimelines[userId]) {
            userTimelines[userId] = [];
        }
        userTimelines[userId].push(activity);
    }

    for (const userId in userTimelines) {
        userTimelines[userId].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    }
    return userTimelines;
}

console.log(getUniqueUserCount(activityLog));
console.log(findMostCommonActivity(activityLog)); 
console.log(createUserTimelines(activityLog));