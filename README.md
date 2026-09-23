# BunkMate

Attendance calculation utilities for students.

`BunkMate` provides simple utility functions for calculating current attendance, predicting attendance after planned absences, and determining the number of recovery classes required to reach a target attendance percentage.

## Features

- Calculate current attendance percentage.
- Predict attendance after missing additional classes.
- Calculate recovery classes required to reach a target attendance percentage.
- Predicted attendance is rounded up using `Math.ceil()`.
- Handles zero or non-positive class totals.
- Handles target-attendance edge cases.
- Uses CommonJS and can be imported with `require()`.

## Installation

Install `bunkmate` using npm:

```bash
npm install bunkmate
```

## Usage

```js
const {
    calculateAttendance,
    calculatePredictedAttendance,
    calculateRecoveryClasses
} = require("bunkmate");
```

---

## API Reference

### `calculateAttendance(classAttended, totalClasses)`

Calculates the current attendance percentage.

#### Parameters

| Parameter | Type | Description |
|---|---|---|
| `classAttended` | `number` | Number of classes attended |
| `totalClasses` | `number` | Total number of classes |

#### Formula

```text
Attendance = (Classes Attended / Total Classes) × 100
```

#### Example

```js
const { calculateAttendance } = require("bunkmate");

const attendance = calculateAttendance(8, 10);

console.log(attendance);
// 80
```

If `totalClasses` is `0` or less, the function returns `0`.

```js
calculateAttendance(8, 0);
// 0
```

---

### `calculatePredictedAttendance(classAttended, totalClasses, missClasses)`

Calculates the predicted attendance percentage after missing a specified number of additional classes.

The result is always rounded **up** using `Math.ceil()`.

#### Parameters

| Parameter | Type | Description |
|---|---|---|
| `classAttended` | `number` | Number of classes attended |
| `totalClasses` | `number` | Current total number of classes |
| `missClasses` | `number` | Number of additional classes that will be missed |

#### Formula

```text
Predicted Attendance =
(Classes Attended / (Total Classes + Missed Classes)) × 100
```

The result is rounded upward.

#### Example

```js
const { calculatePredictedAttendance } = require("bunkmate");

const predicted = calculatePredictedAttendance(8, 10, 2);

console.log(predicted);
// 67
```

The mathematical result is approximately `66.67`, which is rounded up to `67`.

If the future total number of classes is `0` or less, the function returns `0`.

---

### `calculateRecoveryClasses(classAttended, totalClasses, missClasses, targetAttendance)`

Calculates the number of classes required to recover to the target attendance percentage after the planned missed classes.

The returned number of classes is rounded up because a fraction of a class cannot be attended.

#### Parameters

| Parameter | Type | Description |
|---|---|---|
| `classAttended` | `number` | Number of classes attended |
| `totalClasses` | `number` | Current total number of classes |
| `missClasses` | `number` | Number of classes that will be missed |
| `targetAttendance` | `number` | Target attendance percentage |

#### Formula

```text
Recovery Classes =
(
  (Target Attendance × (Total Classes + Missed Classes))
  - (Classes Attended × 100)
)
/
(100 - Target Attendance)
```

#### Example

```js
const { calculateRecoveryClasses } = require("bunkmate");

const recovery = calculateRecoveryClasses(8, 10, 2, 75);

console.log(recovery);
// 4
```

This means that after attending `8` out of `10` classes and then missing `2` additional classes, `4` further classes are required to reach the `75%` target.

If the predicted attendance is already at or above the target, the function returns `0`.

```js
calculateRecoveryClasses(8, 10, 0, 75);
// 0
```

A target attendance of `100%` or higher returns `0` based on the package's current implementation.

---

## Complete Example

```js
const {
    calculateAttendance,
    calculatePredictedAttendance,
    calculateRecoveryClasses
} = require("bunkmate");

const classAttended = 8;
const totalClasses = 10;
const missClasses = 2;
const targetAttendance = 75;

const currentAttendance = calculateAttendance(
    classAttended,
    totalClasses
);

const predictedAttendance = calculatePredictedAttendance(
    classAttended,
    totalClasses,
    missClasses
);

const recoveryClasses = calculateRecoveryClasses(
    classAttended,
    totalClasses,
    missClasses,
    targetAttendance
);

console.log("Current Attendance:", currentAttendance);
// Current Attendance: 80

console.log("Predicted Attendance:", predictedAttendance);
// Predicted Attendance: 67

console.log("Recovery Classes:", recoveryClasses);
// Recovery Classes: 4
```

## API Summary

| Function | Description |
|---|---|
| `calculateAttendance()` | Calculates current attendance percentage |
| `calculatePredictedAttendance()` | Calculates predicted attendance after missing classes |
| `calculateRecoveryClasses()` | Calculates classes required to reach the target attendance |

## CommonJS

`bunkmate` uses the CommonJS module system.

Import the package using:

```js
const bunkmate = require("bunkmate");
```

Or destructure the functions:

```js
const {
    calculateAttendance,
    calculatePredictedAttendance,
    calculateRecoveryClasses
} = require("bunkmate");
```

## Development

Clone the repository:

```bash
git clone https://github.com/Adhyatm2717/BunkMate_npm.git
```

Navigate into the project:

```bash
cd BunkMate_npm
```

Install dependencies:

```bash
npm install
```

## Package Information

- **Package:** `bunkmate`
- **Version:** `1.0.0`
- **License:** ISC
- **Author:** Adhyatm Mudgal

## Repository

GitHub:

https://github.com/Adhyatm2717/BunkMate_npm

## Issues

Report bugs or request changes through the GitHub Issues page:

https://github.com/Adhyatm2717/BunkMate_npm/issues

## Author

**Adhyatm Mudgal**

GitHub:

https://github.com/Adhyatm2717