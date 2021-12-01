


let beeps = process.argv.slice(2).sort();

console.log(beeps);
let timer = 0
if (beeps === []) {
    return;
}
for (let i = 0; i < beeps.length; i++) {
    if (parseInt(beeps[i]) > 0 && beeps !== "" )
    setTimeout(() => {
        process.stdout.write('\x07');
      }, parseInt(beeps[i]) * 1000);
};
