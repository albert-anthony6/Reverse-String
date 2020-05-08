const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = document.getElementById("val").value;

    let strArr = value.split("");
    let newArr = [];

    for(var i = strArr.length - 1; i >= 0; i--) {
        newArr.push(strArr[i]);
    }
    newArr = newArr.join("");
    return alert('Word reversed: ' + newArr);
});