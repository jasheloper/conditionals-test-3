let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;


if (machineActive) {
    machineResult = "Machine Status = ON";
    pwdResult = pwd === "cheese" ? "Login attempt was successful!" : "Login attempt unsuccessful."
    console.log(machineResult)
    console.log(pwdResult)
} else {
    machineResult = "Machine Status = OFF";
    console.log(machineResult)
}

