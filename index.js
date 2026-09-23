function calculate(
    classAttended,
    totalClasses,
    missClasses,
    targetAttendance
) {
    // Current attendance
    let avg = 0;

    if (totalClasses > 0) {
        avg = Math.ceil(
            (classAttended / totalClasses) * 100
        );
    }

    // Predicted attendance
    const futureTotalClasses =
        totalClasses + missClasses;

    let predictedAttendance = 0;

    if (futureTotalClasses > 0) {
        predictedAttendance = Math.ceil(
            (classAttended / futureTotalClasses) * 100
        );
    }

    // Recovery classes
    let recoveryClasses = 0;

    if (
        targetAttendance > 0 &&
        targetAttendance < 100
    ) {
        const recovery =
            (
                (targetAttendance * futureTotalClasses) -
                (classAttended * 100)
            ) /
            (100 - targetAttendance);

        if (recovery > 0) {
            recoveryClasses = Math.ceil(recovery);
        }
    }

    // Already safe
    if (predictedAttendance >= targetAttendance) {
        recoveryClasses = 0;
    }

    return `
╔══════════════════════════════════════╗
║          📚 BUNKMATE REPORT          ║
╠══════════════════════════════════════╣
║                                      ║
║  📊 Current Attendance   : ${avg}%       ║
║  🔮 Predicted Attendance : ${predictedAttendance}%       ║
║  🔄 Recovery Classes     : ${recoveryClasses.toString().padEnd(2)}        ║
║                                      ║
╚══════════════════════════════════════╝
`;
}


module.exports = {
    calculate
};