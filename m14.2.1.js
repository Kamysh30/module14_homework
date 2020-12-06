const XMLstring = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

const parser = new DOMParser();
const xml = parser.parseFromString(XMLstring, "text/xml"); // Опечатка: здесь должно быть "text/xml". С текущим значением код выдает ошибку
const list = xml.querySelector("list");
const students = list.querySelectorAll("student");
const result = {
    list:[]
};

for(let i = 0; i < students.length; i++){
    const name = students[i].querySelector("name");
    const firstName = name.querySelector("first");
    const secondName = name.querySelector("second");
    const age = students[i].querySelector("age");
    const prof = students[i].querySelector("prof");
    const lang = name.getAttribute("lang");
    result.list.push({
        name: firstName.textContent + '' + secondName.textContent,
        age: age.textContent,
        prof: prof.textContent,
        lang: lang
    });
} 
console.log(result);