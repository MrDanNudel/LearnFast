document.addEventListener("DOMContentLoaded", function () {
  const allData = [
    {
      subject: "כימיה\u200F",
      questions: [
        {
          question: " מהו האטום? \u200F",
          answer:
            "החלקיק הקטן ביותר של יסוד, הכולל גרעין עם פרוטונים וניטרונים ואלקטרונים מסביבו.\u200F",
        },
        {
          question: "מהו יסוד כימי?\u200F",
          answer: "חומר שמורכב מאטומים זהים בעלי אותו מספר פרוטונים.\u200F",
        },
        {
          question: "מה ההבדל בין יסוד לתרכובת?\u200F",
          answer:
            "יסוד מורכב מסוג אחד של אטומים, בעוד שתרכובת מכילה שני יסודות או יותר הקשורים זה לזה כימית.\u200F",
        },
        {
          question: "מהם שלושת מצבי הצבירה העיקריים של חומר?\u200F",
          answer: "מוצק, נוזל וגז.\u200F",
        },
        {
          question: "מהו מספר אטומי?\u200F",
          answer: "מספר הפרוטונים בגרעין האטום, והוא קובע את זהות היסוד.\u200F",
        },
        {
          question: "מהו מספר מסה?\u200F",
          answer: "סכום הפרוטונים והניטרונים בגרעין האטום.\u200F",
        },
        {
          question: "מהו יון?\u200F",
          answer:
            "אטום או קבוצת אטומים בעלי מטען חשמלי כתוצאה מאיבוד או קבלת אלקטרונים.\u200F",
        },
        {
          question: "מהו איזוטופ?\u200F",
          answer:
            "אטומים של אותו יסוד בעלי מספר פרוטונים זהה אך מספר ניטרונים שונה.\u200F",
        },
        {
          question: "מה ההבדל בין תערובת לתרכובת?\u200F",
          answer:
            "בתערובת החומרים שומרים על תכונותיהם ואינם קשורים כימית, בתרכובת נוצרים קשרים כימיים חדשים.\u200F",
        },
        // קשרים ומבנים
        {
          question: "מהו קשר יוני?\u200F",
          answer:
            "קשר הנוצר בין יון חיובי ליון שלילי באמצעות משיכה חשמלית.\u200F",
        },
        {
          question: "מהו קשר קוולנטי?\u200F",
          answer: "קשר שבו שני אטומים חולקים זוג אלקטרונים אחד או יותר.\u200F",
        },
        {
          question: "מהו קשר מתכתי?\u200F",
          answer:
            "קשר שבו אלקטרונים חופשיים נעים בין יוני מתכת ויוצרים מבנה יציב ומוליך חשמל.\u200F",
        },
        {
          question: "מה ההבדל בין חומר מולקולרי לחומר יוני?\u200F",
          answer:
            "חומר מולקולרי מורכב ממולקולות הקשורות בקשרים קוולנטיים, וחומר יוני מורכב מיונים הקשורים בקשרים יוניים.\u200F",
        },
        {
          question: "מהו מול?\u200F",
          answer:
            "יחידת מדידה המתארת כמות של 6.022×10²³ חלקיקים (מספר אבוגדרו).\u200F",
        },
        {
          question: "מהו משקל מולרי?\u200F",
          answer: "המסה של מול אחד מחומר, נמדדת בגרם למול (g/mol).\u200F",
        },
        {
          question: "מהו חוק שימור המסה?\u200F",
          answer:
            "בכל תגובה כימית המסה הכוללת של החומרים נשמרת – אין יצירה או העלמות של חומר.\u200F",
        },
        {
          question: "מהי תגובה אנדותרמית?\u200F",
          answer: "תגובה שסופגת חום מהסביבה.\u200F",
        },
        {
          question: "מהי תגובה אקסותרמית?\u200F",
          answer: "תגובה שמשחררת חום לסביבה.\u200F",
        },
        // חומצות, בסיסים ותרמודינמיקה
        {
          question: "מהי חומצה לפי הגדרת ברונסטד-לאורי?\u200F",
          answer: "תורם פרוטון (H⁺) בתגובה כימית.\u200F",
        },
        {
          question: "מהו בסיס לפי הגדרת ברונסטד-לאורי?\u200F",
          answer: "קולט פרוטון (H⁺) בתגובה כימית.\u200F",
        },
        {
          question: "מהו pH?\u200F",
          answer:
            "מדד חומציות או בסיסיות של תמיסה, המבוסס על ריכוז יוני המימן (H⁺).\u200F",
        },
        {
          question: "מהו קטליזטור?\u200F",
          answer:
            "חומר שמאיץ תגובה כימית מבלי להשתתף בה באופן קבוע או להישחק.\u200F",
        },
        {
          question: "מהו חוק הגזים האידיאלי?\u200F",
          answer:
            "PV = nRT — מתאר את הקשר בין לחץ, נפח, טמפרטורה וכמות גז.\u200F",
        },
        {
          question: "מהי אנרגיית אקטיבציה?\u200F",
          answer: "האנרגיה המינימלית הדרושה כדי שתתרחש תגובה כימית.\u200F",
        },
        {
          subject: "JavaScript",
          questions: [
            {
              question: "What is JavaScript?",
              answer:
                "JavaScript is a versatile programming language primarily used for creating interactive effects within web browsers.",
            },
            {
              question: "How do you create a variable in JavaScript?",
              answer:
                "You can create a variable in JavaScript using var, let, or const. For example: let myVariable = 'Hello';",
            },
            {
              question: "What are the data types in JavaScript?",
              answer:
                "JavaScript has several data types including undefined, null, boolean, string, symbol, number, and object.",
            },
            {
              question: "What is a function in JavaScript?",
              answer:
                "A function in JavaScript is a block of code designed to perform a particular task. It is executed when it is called (invoked).",
            },
            {
              question: "How do you create a function in JavaScript?",
              answer:
                "You can create a function using the function keyword: function myFunction() { // code to be executed }",
            },
            {
              question:
                "What is the difference between == and === in JavaScript?",
              answer:
                "== checks for value equality while === checks for both value and type equality.",
            },
            {
              question: "What is an array in JavaScript?",
              answer:
                "An array is a single variable that is used to store different elements. It is a collection of elements of any data type.",
            },
            {
              question: "How do you add an element to an array in JavaScript?",
              answer:
                "You can add an element to an array using the push() method: array.push(element);",
            },
            {
              question: "What is an object in JavaScript?",
              answer:
                "An object is a collection of properties, and a property is an association between a name (or key) and a value.",
            },
            {
              question: "How do you create an object in JavaScript?",
              answer:
                "You can create an object using object literals or the new Object() syntax: let obj = {}; or let obj = new Object();",
            },
            {
              question: "What is a prototype in JavaScript?",
              answer:
                "A prototype is an object from which other objects inherit properties.",
            },
            {
              question: "What is a callback function in JavaScript?",
              answer:
                "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.",
            },
            {
              question: "What is a promise in JavaScript?",
              answer:
                "A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
            },
            {
              question: "How do you create a promise in JavaScript?",
              answer:
                "You can create a promise using the Promise constructor: let promise = new Promise(function(resolve, reject) { // executor code });",
            },
            {
              question: "What are async and await in JavaScript?",
              answer:
                "Async functions are functions that return a Promise, and await is an operator used to wait for a Promise. It can only be used inside an async function.",
            },
            {
              question: "What is the DOM in JavaScript?",
              answer:
                "The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.",
            },
            {
              question:
                "How do you select an element in the DOM using JavaScript?",
              answer:
                "You can select an element using methods like getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), and querySelectorAll().",
            },
            {
              question: "What is event bubbling in JavaScript?",
              answer:
                "Event bubbling is a type of event propagation where the event starts from the target element and bubbles up to the root element.",
            },
            {
              question: "What is event delegation in JavaScript?",
              answer:
                "Event delegation is a technique of using a single event listener to manage all events of a particular type, forgoing the need to attach separate listeners to each element.",
            },
            {
              question:
                "What is the difference between null and undefined in JavaScript?",
              answer:
                "Undefined means a variable has been declared but has not yet been assigned a value, while null is an assignment value that represents no value.",
            },
            {
              question: "What are closures in JavaScript?",
              answer:
                "A closure is a function that remembers the environment in which it was created. This environment consists of any local variables that were in-scope at the time the closure was created.",
            },
            {
              question: "How do you create a closure in JavaScript?",
              answer:
                "A closure is created when a function is defined within another function and the inner function references variables from the outer function.",
            },
            {
              question: "What is the use of the 'this' keyword in JavaScript?",
              answer:
                "The 'this' keyword refers to the object it belongs to. It has different values depending on where it is used: in a method, alone, in a function, in an event, etc.",
            },
            {
              question:
                "What is the difference between call, apply, and bind in JavaScript?",
              answer:
                "call and apply are used to invoke functions with a specified 'this' value, while bind returns a new function with a bound 'this' value.",
            },
            {
              question: "What is the use of the spread operator in JavaScript?",
              answer:
                "The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected.",
            },
            {
              question: "What is destructuring in JavaScript?",
              answer:
                "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.",
            },
            {
              question: "What are template literals in JavaScript?",
              answer:
                "Template literals are string literals that allow embedded expressions, and they are enclosed by backticks (` `) instead of quotes.",
            },
            {
              question: "How do you handle exceptions in JavaScript?",
              answer:
                "You can handle exceptions using try, catch, finally blocks: try { // code } catch (error) { // handle error } finally { // cleanup code }",
            },
            {
              question: "What is the use of the fetch API in JavaScript?",
              answer:
                "The fetch API is used to make network requests similar to XMLHttpRequest. It returns a promise that resolves to the response of the request.",
            },
            {
              question: "What is an IIFE in JavaScript?",
              answer:
                "An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined: (function() { // code })();",
            },
            {
              question:
                "What is the difference between let, var, and const in JavaScript?",
              answer:
                "var is function-scoped, while let and const are block-scoped. const also ensures that the variable is not reassignable.",
            },
            {
              question: "What is hoisting in JavaScript?",
              answer:
                "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Only the declarations are hoisted, not the initializations.",
            },
            {
              question: "What is the event loop in JavaScript?",
              answer:
                "The event loop is a mechanism that continuously checks the message queue and executes tasks from it one at a time.",
            },
            {
              question: "What are the different types of loops in JavaScript?",
              answer:
                "JavaScript supports various types of loops including for, while, do-while, for-in, and for-of loops.",
            },
            {
              question: "What is a promise chain in JavaScript?",
              answer:
                "A promise chain is a sequence of promises where each promise returns another promise, allowing asynchronous operations to be performed in sequence.",
            },
            {
              question: "What is a module in JavaScript?",
              answer:
                "A module is a file containing JavaScript code that is executed in its own scope, not in the global scope. Modules export values, functions, or classes that can be imported into other modules.",
            },
            {
              question: "How do you export and import modules in JavaScript?",
              answer:
                "You can export modules using export keyword and import them using import keyword: export const myFunction = () => {}; import { myFunction } from './myModule';",
            },
            {
              question:
                "What is the difference between synchronous and asynchronous code in JavaScript?",
              answer:
                "Synchronous code is executed line by line, while asynchronous code allows the program to continue running while waiting for an operation to complete.",
            },
            {
              question: "What is JSON and how is it used in JavaScript?",
              answer:
                "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is used to exchange data between a server and a web application. JSON data can be converted to a JavaScript object using JSON.parse(), and a JavaScript object can be converted to JSON using JSON.stringify().",
            },
            {
              question: "What is the use of the map method in JavaScript?",
              answer:
                "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.",
            },
            {
              question: "What is the use of the filter method in JavaScript?",
              answer:
                "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
            },
            {
              question: "What is the use of the reduce method in JavaScript?",
              answer:
                "The reduce() method executes a reducer function on each element of the array, resulting in a single output value.",
            },
            {
              question: "What is a generator function in JavaScript?",
              answer:
                "A generator function is a special type of function that can be paused and resumed, and it generates an iterator. It is defined using the function* syntax.",
            },
            {
              question: "How do you use a generator function in JavaScript?",
              answer:
                "You can use a generator function by calling the function to create an iterator and using the next() method to iterate through the values: function* myGenerator() { yield 1; yield 2; } const gen = myGenerator(); gen.next().value; // 1",
            },
            {
              question: "What is an arrow function in JavaScript?",
              answer:
                "An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. It is defined using the => syntax.",
            },
            {
              question: "What is the use of the rest parameter in JavaScript?",
              answer:
                "The rest parameter syntax allows a function to accept an indefinite number of arguments as an array: function myFunction(...args) { // args is an array }",
            },
          ],
        },
      ],
    },
    {
      subject: "סטטיסטיקה\u200F",
      questions: [
        {
          question: "מהי סטטיסטיקה?\u200F",
          answer:
            "תחום במדע העוסק באיסוף, ארגון, ניתוח ופירוש של נתונים.\u200F",
        },
        {
          question: "מה ההבדל בין סטטיסטיקה תיאורית לסטטיסטיקה הסקתית?\u200F",
          answer:
            "סטטיסטיקה תיאורית מסכמת ומתארת נתונים קיימים, בעוד שסטטיסטיקה הסקתית משתמשת במדגם כדי להסיק על כלל האוכלוסייה.\u200F",
        },
        {
          question: "מהו מדגם?\u200F",
          answer:
            "קבוצה קטנה שנבחרה מתוך אוכלוסייה גדולה יותר כדי לייצג אותה בניתוח נתונים.\u200F",
        },
        {
          question: "מהי אוכלוסייה במחקר סטטיסטי?\u200F",
          answer:
            "הקבוצה הכוללת את כל הפרטים או האובייקטים שנחקרים, לדוגמה: כל תלמידי בית ספר מסוים.\u200F",
        },
        {
          question: "מהו משתנה כמותי?\u200F",
          answer: "משתנה שנמדד במספרים, לדוגמה: גובה, משקל או גיל.\u200F",
        },
        {
          question: "מהו משתנה איכותי?\u200F",
          answer: "משתנה שמתאר תכונה או קטגוריה, כמו צבע עיניים או מגדר.\u200F",
        },
        {
          question: "מהו ממוצע חשבוני?\u200F",
          answer:
            "סכום כל הערכים חלקי מספרם הכולל. לדוגמה, ממוצע של 2, 4, 6 הוא (2+4+6)/3 = 4.\u200F",
        },
        {
          question: "מהי חציון?\u200F",
          answer:
            "הערך שנמצא באמצע סדרת נתונים ממוינת. חצי מהערכים קטנים ממנו וחצי גדולים ממנו.\u200F",
        },
        {
          question: "מהו שכיח (מוד)?\u200F",
          answer: "הערך שמופיע בתדירות הגבוהה ביותר בנתונים.\u200F",
        },
        {
          question: "מהו טווח הערכים?\u200F",
          answer: "ההפרש בין הערך הגדול ביותר לקטן ביותר במדגם.\u200F",
        },
        {
          question: "מהי שונות (Variance)?\u200F",
          answer:
            "ממוצע ריבועי ההפרשים בין כל ערך לממוצע הכללי. היא מודדת את פיזור הנתונים.\u200F",
        },
        {
          question: "מהי סטיית תקן?\u200F",
          answer:
            "השורש הריבועי של השונות. מראה עד כמה הערכים רחוקים מהממוצע.\u200F",
        },
        {
          question: "מהי התפלגות נורמלית?\u200F",
          answer:
            "התפלגות סימטרית בצורת פעמון, שבה רוב הערכים קרובים לממוצע ומעטים רחוקים ממנו.\u200F",
        },
        {
          question: "מהו ציון תקן (Z-score)?\u200F",
          answer:
            "מדד המתאר בכמה סטיות תקן נמצא ערך מסוים מעל או מתחת לממוצע.\u200F",
        },
        {
          question: "מהו מתאם (Correlation)?\u200F",
          answer:
            "מדד הקובע את עוצמת וכיוון הקשר בין שני משתנים. נע בין ‎-1‎ ל‎+1‎.\u200F",
        },
        {
          question: "מהי רגרסיה ליניארית?\u200F",
          answer:
            "שיטה המשמשת לחיזוי ערך של משתנה אחד בהתבסס על קשר ליניארי עם משתנה אחר.\u200F",
        },
        {
          question: "מה ההבדל בין משתנה תלוי לעצמאי?\u200F",
          answer:
            "המשתנה העצמאי הוא זה שמנבאים לפיו, והתלוי הוא זה שהושפע או נחזה.\u200F",
        },
        {
          question: "מהי השערת אפס (H₀)?\u200F",
          answer:
            "הנחה שאין קשר או הבדל משמעותי בין המשתנים הנבדקים בניסוי.\u200F",
        },
        {
          question: "מהי רמת מובהקות (α)?\u200F",
          answer:
            "ההסתברות לטעות מסוג ראשון — לדחות השערת אפס כשהיא נכונה. לרוב נבחרת כ-0.05.\u200F",
        },
        {
          question: "מהו מבחן t?\u200F",
          answer:
            "בדיקה סטטיסטית הבוחנת האם יש הבדל מובהק בין שני ממוצעים.\u200F",
        },
        {
          question: "מהו מבחן χ² (קי-בריבוע)?\u200F",
          answer:
            "מבחן הבוחן את הקשר בין משתנים קטגוריים או את ההתאמה בין תצפיות לציפיות.\u200F",
        },
        {
          question: "מהו p-value?\u200F",
          answer:
            "ההסתברות לקבל תוצאה לפחות קיצונית כמו זו שנצפתה, בהנחה שהשערת האפס נכונה.\u200F",
        },
        {
          question: "מהי טעות מסוג ראשון ושני?\u200F",
          answer:
            "טעות מסוג ראשון: דחיית H₀ כשנכונה. טעות מסוג שני: קבלת H₀ כשאינה נכונה.\u200F",
        },
        {
          question: "מה ההבדל בין סטיית תקן של מדגם לזו של אוכלוסייה?\u200F",
          answer:
            "במדגם מחלקים את סכום ריבועי ההפרשים ב-n-1, ובאוכלוסייה ב-n — כדי לתקן את ההטיה במדגם.\u200F",
        },
        {
          question: "מהו רווח סמך?\u200F",
          answer:
            "טווח ערכים שבו, בהסתברות מסוימת (לרוב 95%), נמצא הערך האמיתי של הפרמטר באוכלוסייה.\u200F",
        },
        {
          question: "מהו ניתוח שונות (ANOVA)?\u200F",
          answer:
            "מבחן הבודק האם קיימים הבדלים מובהקים בין שלושה ממוצעים או יותר.\u200F",
        },
        {
          question: "מהו מבחן רגרסיה מרובה?\u200F",
          answer:
            "שיטה לניתוח השפעת כמה משתנים עצמאיים על משתנה תלוי אחד.\u200F",
        },
        {
          question: "מה ההבדל בין מתאם לרגרסיה?\u200F",
          answer:
            "מתאם מודד קשר בלבד, רגרסיה בונה משוואת חיזוי שמנבאת ערכים.\u200F",
        },
        {
          question: "מהי סטטיסטיקה לא פרמטרית?\u200F",
          answer:
            "שיטות ניתוח שאינן מניחות שהתפלגות הנתונים היא נורמלית — מתאימות למדגמים קטנים או נתונים מסולפים.\u200F",
        },
        {
          question: "מה תפקידה של סטטיסטיקה במחקר מדעי?\u200F",
          answer:
            "לאפשר לחוקרים להסיק מסקנות מבוססות נתונים, לבדוק השערות ולהעריך מובהקות של תוצאות.\u200F",
        },
      ],
    },
    {
      subject: "אנטומיה\u200F",
      questions: [
        {
          question: "מהי אנטומיה?\u200F",
          answer:
            "תחום במדעי החיים העוסק במבנה הגוף ובאיבריו של האדם ושל בעלי החיים.\u200F",
        },
        {
          question: "מה ההבדל בין אנטומיה לפיזיולוגיה?\u200F",
          answer:
            "אנטומיה עוסקת במבנה הגוף, בעוד שפיזיולוגיה עוסקת בתפקוד האיברים והמערכות.\u200F",
        },
        {
          question: "מהו התא?\u200F",
          answer:
            "יחידת המבנה והתפקוד הבסיסית של כל יצור חי. בתא מתרחשות כל פעולות החיים.\u200F",
        },
        {
          question: "מהם שלושת מרכיבי התא העיקריים?\u200F",
          answer:
            "קרום התא, ציטופלזמה וגרעין. בגרעין נמצא החומר התורשתי (DNA).\u200F",
        },
        {
          question: "מהו רקמה?\u200F",
          answer:
            "קבוצה של תאים בעלי מבנה ותפקוד דומים הפועלים יחד למטרה משותפת.\u200F",
        },
        {
          question: "מהו איבר?\u200F",
          answer:
            "מבנה המורכב ממספר סוגי רקמות שפועלות יחד לביצוע תפקיד מסוים בגוף.\u200F",
        },
        {
          question: "מהי מערכת איברים?\u200F",
          answer:
            "קבוצה של איברים העובדים יחד לביצוע תהליכים פיזיולוגיים, כמו מערכת הנשימה או העיכול.\u200F",
        },
        {
          question: "מהן ארבע הרקמות העיקריות בגוף האדם?\u200F",
          answer: "רקמת אפיתל, רקמת חיבור, רקמת שריר ורקמת עצב.\u200F",
        },
        {
          question: "מה תפקידה של רקמת השריר?\u200F",
          answer:
            "לאפשר תנועה — התכווצות והרפיה של סיבים שריריים מניעות את הגוף ואת האיברים הפנימיים.\u200F",
        },
        {
          question: "מה תפקידה של רקמת העצבים?\u200F",
          answer:
            "להעביר אותות חשמליים בגוף ולתאם פעולות בין איברים שונים.\u200F",
        },
        {
          question: "מהם שלושת סוגי השרירים בגוף האדם?\u200F",
          answer: "שריר שלד (רצוני), שריר חלק (לא רצוני), ושריר הלב.\u200F",
        },
        {
          question: "מה תפקידה של מערכת השלד?\u200F",
          answer:
            "לתמוך בגוף, להגן על איברים פנימיים ולאפשר תנועה יחד עם השרירים.\u200F",
        },
        {
          question: "כמה עצמות יש בגוף האדם הבוגר?\u200F",
          answer: "206 עצמות.\u200F",
        },
        {
          question: "מהם שלושת סוגי המפרקים?\u200F",
          answer:
            "מפרק נוקשה (ללא תנועה), מפרק סחוסי (תנועה מוגבלת), ומפרק סינוביאלי (חופשי ונייד).\u200F",
        },
        {
          question: "מה תפקידה של מערכת הדם?\u200F",
          answer:
            "להוביל חמצן, חומרים מזינים והורמונים לתאים ולפנות מהם פסולת.\u200F",
        },
        {
          question: "מה תפקידו של הלב?\u200F",
          answer: "לשאוב דם דרך כלי הדם ולשמור על זרימתו בכל הגוף.\u200F",
        },
        {
          question: "מהי מערכת הנשימה?\u200F",
          answer:
            "מערכת המספקת חמצן לגוף ומסלקת פחמן דו-חמצני. כוללת את האף, קנה הנשימה והריאות.\u200F",
        },
        {
          question: "מהי מערכת העיכול?\u200F",
          answer:
            "מערכת המפרקת מזון לרכיבים שהגוף יכול לספוג ולנצל. כוללת את הקיבה, הכבד, המעיים ועוד.\u200F",
        },
        {
          question: "מהי מערכת העצבים המרכזית?\u200F",
          answer:
            "מורכבת מהמוח ומחוט השדרה — אחראית על עיבוד מידע ושליטה בתפקודי הגוף.\u200F",
        },
        {
          question: "מהי מערכת העצבים ההיקפית?\u200F",
          answer:
            "כוללת את העצבים היוצאים מהמוח ומחוט השדרה אל שאר הגוף, ומחזירה מידע תחושתי למוח.\u200F",
        },
        {
          question: "מה תפקידה של מערכת ההפרשה?\u200F",
          answer:
            "להוציא פסולת נוזלית דרך הכליות ולשמור על איזון חומצי ומלחים בגוף.\u200F",
        },
        {
          question: "מהי מערכת הרבייה?\u200F",
          answer:
            "מערכת המאפשרת יצירת תאי מין (זרע וביצית) ורבייה של האדם.\u200F",
        },
        {
          question: "מהו המוח הגדול?\u200F",
          answer:
            "החלק המרכזי של המוח האחראי על חשיבה, זיכרון, תנועה רצונית וחישה.\u200F",
        },
        {
          question: "מהו המוח הקטן?\u200F",
          answer: "אחראי על שיווי משקל, קואורדינציה ותיאום תנועות.\u200F",
        },
        {
          question: "מהי מערכת ההורמונלית (האנדוקרינית)?\u200F",
          answer:
            "כוללת בלוטות המפרישות הורמונים לוויסות תהליכים בגוף כמו גדילה, מטבוליזם ורבייה.\u200F",
        },
        {
          question: "מהי הומאוסטזיס?\u200F",
          answer:
            "יכולת הגוף לשמור על סביבה פנימית יציבה למרות שינויים חיצוניים.\u200F",
        },
        {
          question: "מה תפקידה של מערכת החיסון?\u200F",
          answer: "להגן על הגוף מפני חיידקים, וירוסים וגופים זרים אחרים.\u200F",
        },
        {
          question: "מהם תאי דם לבנים?\u200F",
          answer: "תאים במערכת החיסון הנלחמים בזיהומים ובגורמים מזהמים.\u200F",
        },
        {
          question: "מהי מערכת הלימפה?\u200F",
          answer:
            "רשת של כלי לימפה ובלוטות המסייעת בהגנה חיסונית ובניקוז נוזלים מהרקמות.\u200F",
        },
        {
          question: "מה תפקיד העור באנטומיה של האדם?\u200F",
          answer:
            "העור הוא האיבר הגדול ביותר בגוף. הוא מגן מפני חדירת מזהמים, מווסת טמפרטורה ומאפשר תחושה.\u200F",
        },
      ],
    },
    {
      subject: "פסיכולוגיה\u200F",
      questions: [
        {
          question: "מהי פסיכולוגיה?\u200F",
          answer:
            "מדע העוסק בחקר ההתנהגות, התהליכים המנטליים והחוויה האנושית.\u200F",
        },
        {
          question: "מה ההבדל בין פסיכולוגיה לפסיכיאטריה?\u200F",
          answer:
            "פסיכולוגיה עוסקת בהבנת התנהגות ותהליכים נפשיים, בעוד שפסיכיאטריה היא תחום רפואי המטפל בהפרעות נפשיות באמצעות תרופות וטיפול רפואי.\u200F",
        },
        {
          question: "מהן ארבע המטרות המרכזיות של הפסיכולוגיה?\u200F",
          answer:
            "תיאור ההתנהגות, הבנתה, ניבוי מצבים עתידיים ושליטה או השפעה על ההתנהגות.\u200F",
        },
        {
          question: "מהי גישה פסיכואנליטית?\u200F",
          answer:
            "גישה שפותחה על ידי זיגמונד פרויד, המתמקדת בתת־מודע, בדחפים ובחוויות ילדות כמניעים עיקריים להתנהגות.\u200F",
        },
        {
          question: "מהי תת־מודע לפי פרויד?\u200F",
          answer:
            "החלק במוח שבו נמצאים מחשבות, רגשות ודחפים שאינם מודעים אך משפיעים על ההתנהגות.\u200F",
        },
        {
          question: "מהי גישת הביהייביוריזם?\u200F",
          answer:
            "גישה הרואה בהתנהגות נלמדת תוצאה של חיזוקים וענישה מהסביבה, תוך התמקדות בהתנהגות הנצפית בלבד.\u200F",
        },
        {
          question: "מהי גישת ההומניזם בפסיכולוגיה?\u200F",
          answer:
            "גישה הרואה את האדם כבעל רצון חופשי, יכולת בחירה ושאיפה למימוש עצמי (ע״פ קרל רוג'רס ואברהם מאסלו).\u200F",
        },
        {
          question: "מהי היררכיית הצרכים של מאסלו?\u200F",
          answer:
            "תיאוריה המתארת חמישה שלבים של צרכים אנושיים – מצרכים בסיסיים ועד לצורך במימוש עצמי.\u200F",
        },
        {
          question: "מהי גישת הקוגניטיביזם?\u200F",
          answer:
            "גישה המתמקדת בתהליכים מנטליים כמו חשיבה, זיכרון, קבלת החלטות ולמידה.\u200F",
        },
        {
          question: "מהי תפיסה קוגניטיבית של למידה?\u200F",
          answer:
            "למידה נחשבת לתהליך פעיל של עיבוד מידע ולא רק תגובה לגירויים חיצוניים.\u200F",
        },
        {
          question: "מהי גישת הגשטלט?\u200F",
          answer:
            "גישה הרואה את התודעה כתפיסת מכלול שלם ולא כסכום חלקים בודדים — ״השלם גדול מסך חלקיו״.\u200F",
        },
        {
          question: "מהי קלאסיפיקציה של הפרעות נפשיות?\u200F",
          answer:
            "חלוקה של הפרעות לפי מאפיינים ותסמינים, למשל בספר האבחנות DSM.\u200F",
        },
        {
          question: "מהו מבחן רורשאך?\u200F",
          answer:
            "מבחן השלכתי שבו נבדקים מפרשים כתמי דיו כדי לחשוף תהליכים לא מודעים.\u200F",
        },
        {
          question: "מהו מבחן אישיות?\u200F",
          answer:
            "כלי למדידת תכונות אישיות, רגשות ונטיות התנהגותיות, לדוגמה שאלון 16PF או Big Five.\u200F",
        },
        {
          question: "מהו חיזוק חיובי?\u200F",
          answer:
            "תגובה חיובית (כמו פרס או שבח) שניתנת בעקבות התנהגות רצויה כדי לעודד אותה לחזור.\u200F",
        },
        {
          question: "מהי ענישה שלילית?\u200F",
          answer:
            "הסרת גירוי נעים בעקבות התנהגות לא רצויה כדי להפחית את הישנותה.\u200F",
        },
        {
          question: "מהי דיסהוננס קוגניטיבי?\u200F",
          answer:
            "תחושת מתח שנוצרת כאשר אדם מחזיק בשתי אמונות או התנהגויות סותרות — לפי ליאון פסטינגר.\u200F",
        },
        {
          question: "מהו אפקט פלצבו?\u200F",
          answer:
            "תופעה שבה נבדק חווה שיפור במצבו רק משום שהוא מאמין שקיבל טיפול יעיל, גם אם קיבל טיפול דמה.\u200F",
        },
        {
          question: "מהו מבחן מילגרם?\u200F",
          answer:
            "ניסוי שבדק ציות לסמכות, שבו משתתפים חשבו שהם מענישים אחרים בחשמל — רובם צייתו למרות חוסר הנוחות.\u200F",
        },
        {
          question: "מה היה ניסוי הכלא של סטנפורד?\u200F",
          answer:
            "ניסוי שבדק כיצד תפקידים חברתיים משפיעים על התנהגות — שבו סטודנטים שגולמו כאסירים ושומרים איבדו שליטה תוך ימים.\u200F",
        },
        {
          question: "מהי פסיכולוגיה חברתית?\u200F",
          answer:
            "תחום העוסק בהשפעת החברה והסביבה על חשיבה, רגשות והתנהגות של יחידים.\u200F",
        },
        {
          question: "מהי הטיית אישוש?\u200F",
          answer:
            "נטייה לחפש מידע שתומך בדעות קיימות ולהתעלם ממידע שסותר אותן.\u200F",
        },
        {
          question: "מהו אפקט הצופה מהצד?\u200F",
          answer:
            "תופעה שבה נוכחות של אחרים גורמת לאדם להימנע מלהתערב במצב חירום.\u200F",
        },
        {
          question: "מהי פסיכולוגיה חיובית?\u200F",
          answer:
            "תחום מחקר העוסק בפיתוח חוזקות, אושר, משמעות ומימוש עצמי.\u200F",
        },
        {
          question: "מה ההבדל בין אמפתיה לסימפתיה?\u200F",
          answer:
            "אמפתיה היא הזדהות עם רגשות הזולת והבנתם, סימפתיה היא רגש של חמלה כלפי אדם אחר.\u200F",
        },
        {
          question: "מהי פסיכולוגיה קוגניטיבית?\u200F",
          answer:
            "תחום החוקר תהליכים מנטליים כמו זיכרון, תפיסה, חשיבה ולמידה.\u200F",
        },
        {
          question: "מהי פסיכולוגיה ביולוגית?\u200F",
          answer:
            "תחום הבודק כיצד תהליכים מוחיים, הורמונליים וגנטיים משפיעים על ההתנהגות.\u200F",
        },
        {
          question: "מהי נוירופסיכולוגיה?\u200F",
          answer:
            "תחום משולב בין נוירולוגיה ופסיכולוגיה החוקרת את הקשר בין מבנה המוח לתפקודים מנטליים והתנהגותיים.\u200F",
        },
        {
          question: "מהי פסיכותרפיה?\u200F",
          answer:
            "תהליך טיפולי המבוסס על שיחה, הקשבה ושינוי דפוסי חשיבה ורגש כדי לשפר את בריאות הנפש.\u200F",
        },
      ],
    },
    {
      subject: "ניהול וחינוך כיתה\u200F",
      questions: [
        {
          question: "מהו ניהול כיתה?\u200F",
          answer:
            "סט של נהלים, כללים ופרקטיקות ליצירת סביבה בטוחה, עקבית וממוקדת למידה\u200F",
        },
        {
          question: "מה ההבדל בין ניהול כיתה לחינוך כיתה?\u200F",
          answer:
            "ניהול כיתה עוסק בארגון והתנהגות; חינוך כיתה עוסק בערכים, אקלים כיתתי וכישורי חיים\u200F",
        },
        {
          question: "למה חשוב לקבוע כללים וציפיות בתחילת שנה?\u200F",
          answer:
            "כדי ליצור עקביות, בהירות ואחריות משותפת להתנהגות וללמידה\u200F",
        },
        {
          question: "מהן רוטינות כיתה?\u200F",
          answer:
            "נהלים קבועים לפעולות חוזרות כגון כניסה לשיעור, מעבר בין משימות ואיסוף ציוד\u200F",
        },
        {
          question: "מהי אווירת כיתה חיובית?\u200F",
          answer: "סביבה בטוחה ותומכת המקדמת שייכות, כבוד הדדי ומוטיבציה\u200F",
        },
        {
          question: "מה ההבדל בין מוטיבציה פנימית לחיצונית?\u200F",
          answer:
            "פנימית נובעת מסקרנות ומשמעות; חיצונית מבוססת על תגמולים או סנקציות\u200F",
        },
        {
          question: "מהו חיזוק חיובי?\u200F",
          answer:
            "מתן תגובה נעימה לאחר התנהגות רצויה כדי להגביר את שכיחותה\u200F",
        },
        {
          question: "כיצד מנסחים כללים יעילים?\u200F",
          answer:
            "מעט, קצר, ברור, בניסוח חיובי ומלווה בדוגמה ותיעוד גלוי בכיתה\u200F",
        },
        {
          question: "מה חשיבות פתיחת שיעור סדורה?\u200F",
          answer: "כניסה מהירה ללמידה, חיסכון בזמן ומיקוד במטרות השיעור\u200F",
        },
        {
          question: "מהו לוח מטרות ושגרות?\u200F",
          answer:
            "הצגה גלויה של מטרות השיעור, כללים ורוטינות לחיזוק עקביות\u200F",
        },
        {
          question: "כיצד סידור חלל הכיתה משפיע על למידה?\u200F",
          answer:
            "משפיע על קשר עין, נגישות, שיתופיות ורמות רעש; התאמה למשימה משפרת מעורבות\u200F",
        },
        {
          question: "מהן מעבריות ולמה לתכנן אותן?\u200F",
          answer:
            "מעברים בין פעילויות; תכנון מראש מצמצם זמן מת וחוסר שקט\u200F",
        },
        {
          question: "מהי למידה שיתופית?\u200F",
          answer:
            "עבודה בקבוצות עם תפקידים מוגדרים ומטרה משותפת להגברת אחריות הדדית\u200F",
        },
        {
          question: "מהו דיפרנציאציה בהוראה?\u200F",
          answer: "התאמת תוכן, תהליך ותוצר לרמות וצרכים שונים של לומדים\u200F",
        },
        {
          question: "מהו UDL עיצוב אוניברסלי ללמידה?\u200F",
          answer:
            "תכנון מגוון דרכי ייצוג, עשייה ומעורבות מראש כדי לאפשר נגישות לכלל הלומדים\u200F",
        },
        {
          question: "מהי הערכה מעצבת בכיתה?\u200F",
          answer:
            "איסוף עדויות בזמן הלמידה להתאמת הוראה ומתן משוב מיידי ובר פעולה\u200F",
        },
        {
          question: "כיצד נותנים משוב אפקטיבי?\u200F",
          answer: "ספציפי, בזמן, ממוקד תהליך וכולל צעד הבא לשיפור\u200F",
        },
        {
          question: "מהו ניהול התנהגות מניעתי?\u200F",
          answer: "הדגמה, תרגול וכללים ברורים מראש במקום תגובה רק להפרות\u200F",
        },
        {
          question: "כיצד להתמודד עם הפרעות קלות?\u200F",
          answer:
            "קרבה פיזית, אות לא מילולי, תזכורת לכלל והחזרה למשימה בלי להסלים\u200F",
        },
        {
          question: "מה עקרון העקביות באכיפת כללים?\u200F",
          answer: "תגובה דומה לאותה התנהגות בכל פעם, בשקיפות וללא הטיות\u200F",
        },
        {
          question: "מהו חיזוק יחסי וקבוצתי?\u200F",
          answer: "הוקרה אישית לצד מטרות קבוצתיות לבניית תרבות צוות\u200F",
        },
        {
          question: "כיצד בונים תכנית התנהגות לתלמיד?\u200F",
          answer:
            "הגדרת מטרת התנהגות, טריגרים, אסטרטגיות תיווך ומדדי מעקב\u200F",
        },
        {
          question: "מהי שותפות עם הורים?\u200F",
          answer:
            "תקשורת רציפה, שקופה ומכבדת לטובת עקביות בין בית לבית ספר\u200F",
        },
        {
          question: "כיצד משלבים למידה רגשית חברתית?\u200F",
          answer:
            "הוראת כישורי ויסות, אמפתיה ופתרון בעיות כחלק מתכנית הלימודים\u200F",
        },
        {
          question: "מהו סדר יום כיתתי יעיל?\u200F",
          answer:
            "חלוקת זמן מאוזנת בין פתיחה, הוראה ישירה, תרגול עצמאי ושיתוף\u200F",
        },
        {
          question: "איך מנהלים כיתה דיגיטלית?\u200F",
          answer:
            "כללי שימוש במכשירים, פלטפורמות ברורות ומעקב אחר מעורבות מקוונת\u200F",
        },
        {
          question: "מה עושים בעת הסלמה התנהגותית?\u200F",
          answer:
            "נשימה, הורדת גירויים, שיח קצר ומעבר להסדרה פרטנית לאחר היציבות\u200F",
        },
        {
          question: "כיצד מודדים אקלים כיתתי?\u200F",
          answer: "סקרים קצרים, תצפיות, ניתוח נוכחות ומשוב תלמידים\u200F",
        },
        {
          question: "מהו רפלקציה מקצועית למורה?\u200F",
          answer:
            "בחינת מה עבד ומה לשפר, תיעוד מסקנות ותכנון פעולה לשיעור הבא\u200F",
        },
      ],
    },
    {
      subject: "אוריינות שפתית\u200F",
      questions: [
        {
          question: "מהי אוריינות שפתית?\u200F",
          answer:
            "היכולת לקרוא, לכתוב, להבין, לפרש ולהשתמש בשפה לצורכי למידה, תקשורת וחשיבה.\u200F",
        },
        {
          question: "מה ההבדל בין שפה מדוברת לשפה כתובה?\u200F",
          answer:
            "שפה מדוברת מתרחשת בזמן אמת ונשענת על הקשר ושפת גוף; שפה כתובה דורשת תכנון, דיוק וכלי ניסוח.\u200F",
        },
        {
          question: "מהי מודעות פונולוגית?\u200F",
          answer:
            "היכולת לזהות, לפרק ולתמרן צלילי דיבור (הברות, עיצורים, צליל פותח/סוגר).\u200F",
        },
        {
          question: "מהו קשר צליל–אות?\u200F",
          answer:
            "ההתאמה בין הפונמה (צליל) לגרפמה (אות) המאפשרת פענוח קריאה וכתיבה מדויקת.\u200F",
        },
        {
          question: "מה ההבדל בין פענוח להבנה בקריאה?\u200F",
          answer:
            "פענוח הוא תרגום סימנים כתובים לצלילים ומילים; הבנה היא בניית משמעות מהטקסט.\u200F",
        },
        {
          question: "מהו אוצר מילים פעיל לעומת סביל?\u200F",
          answer:
            "פעיל — מילים שהלומד משתמש בהן; סביל — מילים שהלומד מבין אך לא בהכרח מפיק.\u200F",
        },
        {
          question: "מהן אסטרטגיות הבנת הנקרא בסיסיות?\u200F",
          answer:
            "ניבוי, שאילת שאלות, הבהרה/תיקון, סיכום וחיבור לידע קודם.\u200F",
        },
        {
          question: "מהו מבנה טקסט נפוץ?\u200F",
          answer:
            "סיבה–תוצאה, בעיה–פתרון, השוואה–ניגוד, רצף כרונולוגי ותיאור.\u200F",
        },
        {
          question: "מהו קוהרנטיות וקוהזיה בטקסט?\u200F",
          answer:
            "קוהרנטיות — היגיון ורצף רעיוני; קוהזיה — אמצעי קישור לשוניים (קישורים, כינויי רמז, חזרות).\u200F",
        },
        {
          question: "מהי מורפולוגיה בעברית?\u200F",
          answer:
            "למידת בניין המילה משורשים ומשקלים, הטיות זמן/מין/מספר וסיומות דקדוקיות.\u200F",
        },
        {
          question: "מה תפקיד הניקוד בהתפתחות הקריאה?\u200F",
          answer:
            "מסייע בפענוח מדויק בשלבים מוקדמים; בהמשך עוברים להסתמכות על ההקשר ואורתוגרפיה.\u200F",
        },
        {
          question: "מהי כתיבה תהליכית?\u200F",
          answer:
            "מחזור של תכנון, טיוטה, משוב, שכתוב ועריכה עד להפקת טקסט בשל.\u200F",
        },
        {
          question: "מהם שלבי רכישת הכתיב התקני?\u200F",
          answer:
            "משרבוט וכתיבה פונטית מוקדמת לכתיב חלקי, ועד שליטה בדפוסים אורתוגרפיים וכללי פיסוק.\u200F",
        },
        {
          question: "מה ההבדל בין פיסוק לקוהזיה?\u200F",
          answer:
            "פיסוק — סימנים המסדירים נשימה ומשפט; קוהזיה — אמצעי קישור בין משפטים ורעיונות.\u200F",
        },
        {
          question: "מהי תחביר (סינטקס) וכיצד משפיע על הבנה?\u200F",
          answer:
            "כללי סידור מילים במשפט; מבנים מורכבים דורשים עיבוד לשוני עמוק להבנת כוונת הכותב.\u200F",
        },
        {
          question: "מהו רפרטואר ז'אנרים כתובים?\u200F",
          answer:
            "סיפורי, מידע, טיעון, הוראות, דיון, חקר — לכל ז'אנר מבנה ושיח אופייניים.\u200F",
        },
        {
          question: "מהי כתיבה טיעונית טובה?\u200F",
          answer:
            "טענה ברורה, נימוקים מבוססי ראיות, דוגמאות, התייחסות לטיעוני נגד וסיכום משכנע.\u200F",
        },
        {
          question: "כיצד מלמדים סיכום טקסט?\u200F",
          answer:
            "זיהוי רעיון מרכזי, סינון פרטים שוליים, ניסוח במילים של הלומד ושמירה על רצף לוגי.\u200F",
        },
        {
          question: "מהו הסקה (אינפרנס) בקריאה?\u200F",
          answer:
            "הסקת מידע שאינו נאמר במפורש באמצעות רמזים מהטקסט והידע הקודם.\u200F",
        },
        {
          question: "מהו רישום הערות (Annotation) יעיל?\u200F",
          answer:
            "סימון מילות מפתח, שאלות בצד, קידוד רעיונות וקישורים — כדי לעקוב אחרי חשיבה בזמן קריאה.\u200F",
        },
        {
          question: "מהי מודעות מטא־קוגניטיבית בקריאה?\u200F",
          answer:
            "תכנון, ניטור והערכת הבנה — בחירת אסטרטגיות ותיקון כשהבנה נפגעת.\u200F",
        },
        {
          question: "כיצד תומכים בלומדים רב־לשוניים?\u200F",
          answer:
            "שימוש בשפת אם כגשר, ויזואליזציה, בניית אוצר מילים אקדמי ותמיכה תחבירית מדורגת.\u200F",
        },
        {
          question: "מהי אוריינות דיגיטלית?\u200F",
          answer:
            "איתור, הערכה ושימוש ביקורתי במידע מקוון; הבנת אמינות מקורות וניווט מדיה.\u200F",
        },
        {
          question: "כיצד מעריכים אוריינות שפתית?\u200F",
          answer:
            "מדדי דיוק/שטף/הבנה בקריאה, איכות כתיבה, אוצר מילים, תחביר ושימוש מושכל באסטרטגיות.\u200F",
        },
        {
          question: "מהם התאמות הוראה אופייניות באוריינות?\u200F",
          answer:
            "טקסטים מדורגים, תומכי שפה (סקפולדינג), מודלים, תבניות כתיבה ומשוב ממוקד.\u200F",
        },
        {
          question: "מה חשיבות המשוב הכתוב ללומד?\u200F",
          answer:
            "משוב ספציפי, בזמן, עם דוגמה וצעד הבא מקדם שיפור מדיד ומודעות לשונית.\u200F",
        },
        {
          question: "איך מתמודדים עם מילים רב־משמעות?\u200F",
          answer:
            "ניתוח הקשר, דוגמאות חלופיות, משפחת מילים ושימוש במילון/קורפוס.\u200F",
        },
        {
          question: "מה תפקיד הקריאה החוזרת (Repeated Reading)?\u200F",
          answer:
            "שיפור שטף, דיוק והבעה — במיוחד בשלבי רכישה מוקדמים או בטקסטים מורכבים.\u200F",
        },
        {
          question: "מה ההבדל בין לשון דבורה ללשון אקדמית?\u200F",
          answer:
            "לשון אקדמית מדויקת, חסכונית ומובנית; דורשת אוצר מילים מופשט ומבני משפט מורכבים.\u200F",
        },
      ],
    },
    {
      subject: "יסודות באתלטיקה\u200F",
      questions: [
        {
          question: "מהי אתלטיקה קלה?\u200F",
          answer:
            "ענף ספורט הכולל ריצה, קפיצה, זריקה והליכה תחרותית — נחשב לבסיס של כל פעילות גופנית.\u200F",
        },
        {
          question: "מהם ארבעת תחומי האתלטיקה המרכזיים?\u200F",
          answer: "ריצה, קפיצה, זריקה והליכה תחרותית.\u200F",
        },
        {
          question: "מהי ריצה קצרה (ספרינט)?\u200F",
          answer: "ריצה למרחק של עד 400 מטרים במהירות מרבית וללא האטה.\u200F",
        },
        {
          question: "מהי ריצה בינונית?\u200F",
          answer:
            "ריצה למרחקים שבין 800 ל־1500 מטרים, המשלבת סבולת ומהירות.\u200F",
        },
        {
          question: "מהי ריצה ארוכה?\u200F",
          answer:
            "ריצה למרחקים ארוכים (מ־3000 מטרים ומעלה) המפתחת סבולת לב־ריאה גבוהה.\u200F",
        },
        {
          question: "מהם שלבי הזינוק בריצה קצרה?\u200F",
          answer:
            "עמידת זינוק, מוכנות, ירייה, והאצה בשלבים הראשונים לשיא מהירות.\u200F",
        },
        {
          question: "מה החשיבות של תנוחת הגוף בריצה?\u200F",
          answer:
            "תנוחה נכונה משפרת יעילות תנועה, מונעת פציעות ומגבירה מהירות.\u200F",
        },
        {
          question: "מה ההבדל בין ריצה בקווים ישרים לבין ריצה במסלול?\u200F",
          answer:
            "ריצה ישרה מתמקדת בהאצה, במסלול נדרש גם שימור מהירות בפניות ויציבות.\u200F",
        },
        {
          question: "מהם שלושת שלבי הקפיצה לרוחק?\u200F",
          answer:
            "ריצה מהירה, ניתור מהמקום, ונחיתה מאוזנת תוך שמירה על שיווי משקל.\u200F",
        },
        {
          question: "מהם שלבי הקפיצה לגובה?\u200F",
          answer:
            "ריצה בזווית, ניתור על רגל אחת, הרמת גוף מעל הרף ונחיתה על הגב במזרון.\u200F",
        },
        {
          question: "מהם סוגי הזריקות באתלטיקה?\u200F",
          answer:
            "הדיפת כדור ברזל, זריקת דיסקוס, הטלת כידון וזריקת פטיש.\u200F",
        },
        {
          question: "מהם העקרונות הפיזיים בהדיפת כדור ברזל?\u200F",
          answer:
            "שימוש בכוח מתפרץ, העברת משקל מהעקב אל האצבעות, ופליטת הכדור בזווית אופטימלית.\u200F",
        },
        {
          question: "מהו מסלול ההליכה התחרותית?\u200F",
          answer:
            "הליכה שבה על הספורטאי לשמור כל הזמן על מגע אחד לפחות עם הקרקע ועם רגל ישרה בזמן מגע.\u200F",
        },
        {
          question: "מה החשיבות של חימום לפני פעילות אתלטית?\u200F",
          answer:
            "מכין את השרירים, מעלה טמפרטורה פנימית, משפר גמישות ומפחית סיכון לפציעה.\u200F",
        },
        {
          question: "מה ההבדל בין כוח מתפרץ לכוח סבולת?\u200F",
          answer:
            "כוח מתפרץ נדרש לתנועה מהירה ועוצמתית; כוח סבולת מאפשר ביצוע חוזר לאורך זמן.\u200F",
        },
        {
          question: "מהי טכניקת הניתור הנכונה בקפיצה לרוחק?\u200F",
          answer:
            "רגל חזקה פוגעת בקרקע בזווית קטנה, תוך דחיפה קדימה־מעלה ושמירה על גוף יציב.\u200F",
        },
        {
          question: "מהי חשיבות הנשימה הנכונה בריצה?\u200F",
          answer:
            "נשימה קצבית מווסתת זרימת חמצן, משפרת סבולת ומונעת עייפות מוקדמת.\u200F",
        },
        {
          question: "מהם מרכיבי הכושר הגופני באתלטיקה?\u200F",
          answer: "כוח, מהירות, סבולת, גמישות וקואורדינציה.\u200F",
        },
        {
          question: "מה ההבדל בין אימון טכניקה לאימון כושר באתלטיקה?\u200F",
          answer:
            "אימון טכניקה מתמקד בדיוק תנועה; אימון כושר מתמקד בפיתוח מרכיבי גוף כלליים.\u200F",
        },
        {
          question: "מהי חשיבות ההתאוששות באימון אתלטי?\u200F",
          answer:
            "מאפשרת תיקון רקמות, מניעת עומס יתר ושיפור ביצועים לאורך זמן.\u200F",
        },
        {
          question: "מהו אימון אינטרוולים?\u200F",
          answer:
            "אימון לסירוגין של מאמץ גבוה ומנוחה קצרה, לשיפור סבולת לב־ריאה ומהירות.\u200F",
        },
        {
          question: "מה מטרת הבדיקות הפיזיולוגיות באתלטיקה?\u200F",
          answer:
            "למדוד ביצועים, לזהות חולשות ולהתאים תוכנית אימון אישית.\u200F",
        },
        {
          question: "מה ההבדל בין קפיצה אופקית לקפיצה אנכית?\u200F",
          answer:
            "קפיצה אופקית שואפת למרחק; אנכית לגובה, תוך דגש על ניתור אנכי.\u200F",
        },
        {
          question: "מהי חשיבות התזונה באתלטיקה?\u200F",
          answer:
            "תזונה מאוזנת תומכת באנרגיה, בהתאוששות ובשמירה על מסת שריר ותפקוד מיטבי.\u200F",
        },
        {
          question: "מהי חשיבות המשמעת העצמית בספורטאי אתלטי?\u200F",
          answer:
            "נדרשת עקביות, התמדה וניהול זמן מדויק כדי להגיע לשיפור רציף בביצועים.\u200F",
        },
      ],
    },
    {
      subject: "יסודות בכדורסל\u200F",
      questions: [
        {
          question: "מהו משחק הכדורסל?\u200F",
          answer:
            "משחק קבוצתי בין שתי קבוצות של חמישה שחקנים שכל אחת מנסה לקלוע לסל היריבה ולהגן על הסל שלה.\u200F",
        },
        {
          question: "מהו גודל מגרש הכדורסל התקני?\u200F",
          answer:
            "אורכו 28 מטרים ורוחבו 15 מטרים, עם גובה סל של 3.05 מטרים.\u200F",
        },
        {
          question: "כמה נקודות שווה קליעה רגילה?\u200F",
          answer: "2 נקודות מתוך קשת ה־3 ו־3 נקודות אם הקליעה מחוץ לקשת.\u200F",
        },
        {
          question: "כמה זמן נמשך משחק כדורסל?\u200F",
          answer:
            "4 רבעים של 10 דקות כל אחד (או 12 בליגת ה־NBA), עם הפסקות קצרות ביניהם.\u200F",
        },
        {
          question: "מהו כדרור?\u200F",
          answer: "הקפצת הכדור על הרצפה ביד אחת ברציפות תוך כדי תנועה.\u200F",
        },
        {
          question: "מהי מסירה?\u200F",
          answer:
            "העברת הכדור משחקן לשחקן באחת מכמה טכניקות: מסירה ישרה, קשתית או קפיצה.\u200F",
        },
        {
          question: "מהי קליעה לסל?\u200F",
          answer: "זריקה מדויקת של הכדור לכיוון הסל במטרה לקלוע נקודות.\u200F",
        },
        {
          question: "מהו ריבאונד?\u200F",
          answer: "תפיסת הכדור לאחר החטאה של קליעה, בהגנה או בהתקפה.\u200F",
        },
        {
          question: "מהי עבירת צעדים?\u200F",
          answer: "כאשר שחקן נע יותר משני צעדים בלי לכדרר את הכדור.\u200F",
        },
        {
          question: "מהו פאול (עבירה אישית)?\u200F",
          answer:
            "מגע פיזי אסור עם יריב בזמן משחק, כמו דחיפה, אחיזה או חסימה לא חוקית.\u200F",
        },
        {
          question: "מהו כדרור כפול?\u200F",
          answer:
            "כאשר שחקן מפסיק לכדרר ואז מתחיל שוב לפני שמסר או זרק את הכדור.\u200F",
        },
        {
          question: "מהו חסימה (Screen)?\u200F",
          answer:
            "תמרון שבו שחקן עומד כך שיעזור לחברו להשתחרר משומר מבלי להיתקל בו.\u200F",
        },
        {
          question: "מהם שלושת מצבי הגוף המרכזיים במשחק?\u200F",
          answer: "עמדת הגנה, עמדת התקפה ועמדת קליעה.\u200F",
        },
        {
          question: "מהי עמדת ההגנה הנכונה?\u200F",
          answer:
            "ברכיים כפופות, גב ישר, ידיים פתוחות, משקל על כריות כף הרגל ותנועה לצדדים.\u200F",
        },
        {
          question: "מהו כדרור נמוך לעומת גבוה?\u200F",
          answer: "נמוך משמש בהגנה ובצפיפות; גבוה משמש בריצה במגרש פתוח.\u200F",
        },
        {
          question: "מהו 'פיק אנד רול'?\u200F",
          answer:
            "תיאום בין חוסם למוביל כדור: החוסם יוצר חסימה ואז מתגלגל לסל לקבלת מסירה.\u200F",
        },
        {
          question: "מהי תנועה ללא כדור?\u200F",
          answer:
            "תנועת שחקנים במטרה להיפתח למסירה, לבלבל את ההגנה וליצור מרחב.\u200F",
        },
        {
          question: "מהו ריבאונד התקפה לעומת הגנה?\u200F",
          answer:
            "ריבאונד התקפה מאפשר ניסיון קליעה נוסף; ריבאונד הגנה מחזיר את הכדור לקבוצה שלך.\u200F",
        },
        {
          question: "מהי עבירת תוקף?\u200F",
          answer:
            "כאשר שחקן התקפה מתנגש בשומר שהספיק להתמקם במקומו באופן חוקי.\u200F",
        },
        {
          question: "מהו 'שחקן חמישי' בהגנה קבוצתית?\u200F",
          answer:
            "היכולת של כל שחקן לדעת לסגור את החלל הנכון ולתמוך בחבריו בהגנה אזורית.\u200F",
        },
        {
          question: "מה ההבדל בין הגנה אישית להגנה אזורית?\u200F",
          answer:
            "בהגנה אישית כל שחקן שומר יריב ספציפי; בהגנה אזורית כל שחקן אחראי על שטח.\u200F",
        },
        {
          question: "מהו 'פאסט ברייק'?\u200F",
          answer:
            "מתפרצת מהירה לאחר חטיפה או ריבאונד, במטרה לקלוע לפני שההגנה מסתדרת.\u200F",
        },
        {
          question: "מה חשיבות התיאום הקבוצתי בכדורסל?\u200F",
          answer:
            "כדי ליצור מהלכים יעילים, חיפוי הדדי בהגנה ותנועה חכמה בהתקפה.\u200F",
        },
        {
          question: "מה תפקיד הרכז בקבוצה?\u200F",
          answer:
            "לנהל את המשחק, לחלק מסירות, לשמור על קצב ולכוון את חברי הקבוצה.\u200F",
        },
        {
          question: "מהו שחקן סנטר ומה תפקידו?\u200F",
          answer:
            "שחקן גבוה וחזק האחראי על אזור הצבע, ריבאונדים וקליעות מקרוב.\u200F",
        },
        {
          question: "מהו ג'אמפ שוט?\u200F",
          answer: "קליעה בזמן קפיצה, המאפשרת שחרור מהיר ומדויק מעל שומר.\u200F",
        },
        {
          question: "מהי זריקת עונשין?\u200F",
          answer:
            "זריקה חופשית אחת או שתיים מהקו לאחר עבירה, ששווה נקודה אחת כל אחת.\u200F",
        },
        {
          question: "מהם מרכיבי הכושר החשובים בכדורסל?\u200F",
          answer:
            "מהירות תגובה, זריזות, כוח מתפרץ, קואורדינציה וסבולת לב־ריאה.\u200F",
        },
        {
          question: "מהי חשיבות הקואורדינציה במשחק?\u200F",
          answer:
            "מאפשרת שליטה בכדור, תנועה חלקה ותיאום בין עיניים, ידיים ורגליים.\u200F",
        },
        {
          question: "כיצד מתבצע אימון יסודות בכדורסל?\u200F",
          answer:
            "תרגול מסירות, כדרורים, קליעות, הגנה ותיאום קבוצתי באופן מדורג וקבוע.\u200F",
        },
      ],
    },
    {
      subject: "יסודות בכדורגל\u200F",
      questions: [
        {
          question: "מהו משחק הכדורגל?\u200F",
          answer:
            "משחק קבוצתי בין שתי קבוצות של 11 שחקנים שכל אחת מנסה להבקיע שער לשער היריב באמצעות בעיטה בכדור.\u200F",
        },
        {
          question: "מהו משך זמן משחק כדורגל רגיל?\u200F",
          answer:
            "90 דקות המחולקות לשני מחציות של 45 דקות כל אחת, עם הפסקה של 15 דקות ביניהן.\u200F",
        },
        {
          question: "מה גודל מגרש הכדורגל התקני?\u200F",
          answer: "בין 100 ל־110 מטרים אורך ובין 64 ל־75 מטרים רוחב.\u200F",
        },
        {
          question: "כמה שחקנים יש בכל קבוצה?\u200F",
          answer: "11 שחקנים — 10 שחקני שדה ושוער אחד.\u200F",
        },
        {
          question: "מהי מטרת המשחק?\u200F",
          answer:
            "להבקיע כמה שיותר שערים אל מול שער היריב במסגרת זמן המשחק.\u200F",
        },
        {
          question: "מהו תפקידו של השוער?\u200F",
          answer:
            "להגן על השער ולמנוע מהכדור לעבור את קו השער; היחיד שמותר לו לגעת בכדור בידיים באזור הרחבה.\u200F",
        },
        {
          question: "מהו מסירה בכדורגל?\u200F",
          answer:
            "העברת הכדור בין שחקנים באותה קבוצה באמצעות בעיטה מדויקת בכף הרגל.\u200F",
        },
        {
          question: "מהו כדרור?\u200F",
          answer:
            "הובלת הכדור תוך כדי ריצה בשטח המשחק על ידי נגיעות קצרות ומבוקרות בכדור.\u200F",
        },
        {
          question: "מהו בעיטה לשער?\u200F",
          answer: "בעיטה חזקה ומדויקת לכיוון השער במטרה להבקיע גול.\u200F",
        },
        {
          question: "מהו חטיפה?\u200F",
          answer:
            "לקיחת הכדור מהיריב באמצעים חוקיים — לרוב באמצעות תזמון נכון ותנועה מהירה.\u200F",
        },
        {
          question: "מהי עבירה בכדורגל?\u200F",
          answer:
            "מעשה לא חוקי כמו דחיפה, אחיזה, בעיטה בשחקן או נגיעת יד מכוונת בכדור.\u200F",
        },
        {
          question: "מהו כדור חופשי?\u200F",
          answer:
            "בעיטה שמוענקת לקבוצה שנפגעה מעבירה, מהמקום שבו נעשתה העבירה.\u200F",
        },
        {
          question: "מהו כדור עונשין (פנדל)?\u200F",
          answer:
            "בעיטה חופשית מ־11 מטרים מהשער בעקבות עבירה בתוך רחבת העונשין.\u200F",
        },
        {
          question: "מהו נבדל?\u200F",
          answer:
            "כאשר שחקן התקפה נמצא קרוב יותר לקו השער מהכדור ומהשחקן האחרון של ההגנה ברגע המסירה.\u200F",
        },
        {
          question: "מהי נגיחה?\u200F",
          answer:
            "שימוש בראש כדי להעביר או לבעוט בכדור, בדרך כלל במצבי גובה או קרנות.\u200F",
        },
        {
          question: "מהו טכניקת עצירת כדור?\u200F",
          answer:
            "שליטה בכדור בעזרת הרגל, הירך או החזה כדי לעצור אותו ולשלוט בו.\u200F",
        },
        {
          question: "מהו תרגיל מסירה כפולה (One-Two)?\u200F",
          answer:
            "שחקן מוסר לחבר ומיד רץ קדימה לקבל חזרה את הכדור בתנועה רציפה.\u200F",
        },
        {
          question: "מהי בעיטת קרן?\u200F",
          answer:
            "כאשר הכדור יוצא מעבר לקו השער לאחר שנגע בשחקן הגנה, הקבוצה היריבה בועטת מהפינה הקרובה.\u200F",
        },
        {
          question: "מהי בעיטת חוץ?\u200F",
          answer:
            "כאשר הכדור יוצא מעבר לקו הצד, היריבה זוכה להחזירו למשחק בזריקה בידיים משתי הידיים מעל הראש.\u200F",
        },
        {
          question: "מהו תפקיד הקשרים במגרש?\u200F",
          answer:
            "לשלוט בקצב המשחק, למסור בין הגנה להתקפה ולתמוך בשני הצדדים.\u200F",
        },
        {
          question: "מהם תפקידי ההגנה בכדורגל?\u200F",
          answer:
            "למנוע מהיריב להתקרב לשער, לחסום התקפות ולשמור על מבנה אחיד מאחור.\u200F",
        },
        {
          question: "מהו משחק לחץ?\u200F",
          answer:
            "אסטרטגיה שבה הקבוצה לוחצת על היריב קרוב לשערו כדי להכריח טעויות ולחטוף כדור מוקדם.\u200F",
        },
        {
          question: "מהי תנועה ללא כדור?\u200F",
          answer:
            "תנועת שחקנים ללא הכדור כדי ליצור שטחים פנויים ולפתוח מסלולי מסירה.\u200F",
        },
        {
          question: "מהו כדור רוחב?\u200F",
          answer:
            "מסירה מהאגף לכיוון מרכז הרחבה, לרוב לצורך יצירת מצב הבקעה.\u200F",
        },
        {
          question: "מהם מרכיבי הכושר החשובים בכדורגל?\u200F",
          answer: "מהירות, סבולת, כוח מתפרץ, זריזות וקואורדינציה גבוהה.\u200F",
        },
        {
          question: "מהו אימון טאקטי?\u200F",
          answer:
            "אימון שמפתח הבנת משחק, תיאום קבוצתי ותגובה למצבים משתנים במגרש.\u200F",
        },
        {
          question: "מהי חשיבות התקשורת בין השחקנים?\u200F",
          answer:
            "שיתוף מידע, תיאום תנועה ובניית אמון מגבירים יעילות קבוצתית וביצועים.\u200F",
        },
        {
          question: "מהי חשיבות ההתאוששות באימוני כדורגל?\u200F",
          answer:
            "מונעת פציעות, מאפשרת שיפור ביצועים ושמירה על כושר לאורך עונה שלמה.\u200F",
        },
        {
          question: "מה ההבדל בין שחקן התקפה לשחקן הגנה?\u200F",
          answer:
            "שחקן התקפה שואף להבקיע וליצור מצבים, שחקן הגנה מונע ספיגה ושומר על מבנה אחורי.\u200F",
        },
        {
          question: "מהו משחק קבוצתי יעיל בכדורגל?\u200F",
          answer:
            "תנועה מתואמת, מסירות מהירות, פתיחת שטחים ושיתוף פעולה בין כל העמדות.\u200F",
        },
      ],
    },
    {
      subject: "יסודות בריקודי עם ועמים\u200F",
      questions: [
        {
          question: "מהם ריקודי עם?\u200F",
          answer:
            "ריקודים מסורתיים שנוצרו מתוך התרבות המקומית של עם או קהילה, ומועברים מדור לדור.\u200F",
        },
        {
          question: "מה ההבדל בין ריקודי עם לריקודי עמים?\u200F",
          answer:
            "ריקודי עם מתייחסים לריקודים של עם אחד (כמו ישראל), וריקודי עמים כוללים מסורות ממדינות ותרבויות שונות בעולם.\u200F",
        },
        {
          question: "מה מטרתם של ריקודי עם?\u200F",
          answer:
            "לשמר תרבות, לחזק זהות קהילתית ולעודד חוויה משותפת של שמחה ותנועה.\u200F",
        },
        {
          question: "מהו מבנה מעגל בריקודי עם?\u200F",
          answer:
            "הרוקדים עומדים במעגל סגור, פנים למרכז, ומבצעים תנועות אחידות לפי קצב המוזיקה.\u200F",
        },
        {
          question: "מהם סוגי הסידורים בריקודי עם?\u200F",
          answer:
            "מעגל, שורה, זוגות ורביעיות — בהתאם לסגנון הריקוד והמסורת התרבותית.\u200F",
        },
        {
          question: "מהי חשיבות הקצב בריקוד?\u200F",
          answer:
            "הקצב מכתיב את מהירות התנועות ומשמש כבסיס לסנכרון בין המוזיקה לרוקדים.\u200F",
        },
        {
          question: "מהי תבנית תנועה?\u200F",
          answer:
            "רצף קבוע של צעדים או תנועות שחוזר במחזוריות לאורך הריקוד.\u200F",
        },
        {
          question: "מהם צעדי היסוד הנפוצים בריקודי עם?\u200F",
          answer:
            "צעד חילוף, צעדת ריצה, סיכול, פתיחה וסגירה, קפיצה וסיבוב.\u200F",
        },
        {
          question: "מהו צעד חילוף?\u200F",
          answer:
            "שלושה צעדים רצופים — ימין, שמאל, ימין (או להפך) — לעיתים עם דגש בקצה הרצף.\u200F",
        },
        {
          question: "מה משמעות הידיים בריקודי עם?\u200F",
          answer:
            "הן משמשות ליצירת קשר בין הרוקדים, לשיווי משקל ולהבעה רגשית של הריקוד.\u200F",
        },
        {
          question: "מהם מאפייני ריקודי העם הישראלים?\u200F",
          answer:
            "שילוב של סגנונות ממזרח ומערב, ביטוי לשורשים יהודיים־חלוציים ושימוש במעגל כצורה מרכזית.\u200F",
        },
        {
          question: "מהו ריקוד שורות?\u200F",
          answer:
            "ריקוד שבו הרוקדים עומדים בשורות מקבילות ומבצעים תנועות אחידות לפי המוזיקה.\u200F",
        },
        {
          question: "מהם ריקודי זוגות?\u200F",
          answer:
            "ריקודים שבהם כל זוג מבצע יחד תנועות תואמות תוך שמירה על קשר ידיים או מבט.\u200F",
        },
        {
          question: "מה ההבדל בין ריקוד מעגל לריקוד שורה?\u200F",
          answer:
            "בריקוד מעגל הרוקדים פונים למרכז המעגל, ובריקוד שורה כולם פונים לכיוון אחד אחיד.\u200F",
        },
        {
          question: "מהו סיבוב בריקוד?\u200F",
          answer:
            "תנועה מעגלית סביב הציר העצמי של הרוקד, בדרך כלל עם שינוי כיוון או הדגשה מוזיקלית.\u200F",
        },
        {
          question: "מהו הקשר בין מוזיקה לריקוד?\u200F",
          answer:
            "המוזיקה מכתיבה את הקצב, הרגש והאופי של הריקוד — מהריקוד השמח ועד לריקוד איטי ומלנכולי.\u200F",
        },
        {
          question: "מהם ריקודי עמים ידועים בעולם?\u200F",
          answer:
            "הפלמנקו מספרד, ההורה מרומניה, הסמבה מברזיל, ההולה מהוואי והטנגו מארגנטינה.\u200F",
        },
        {
          question:
            "מה ההבדל בין סגנונות הריקוד העממיים באירופה למזרח התיכון?\u200F",
          answer:
            "ריקודים אירופיים נוטים להיות מבניים ומדויקים, בעוד ריקודי המזרח מבוססים על אלתור והבעה רגשית.\u200F",
        },
        {
          question: "מהי חשיבות שפת הגוף בריקוד?\u200F",
          answer:
            "שפת הגוף מבטאת רגש, קצב וזהות תרבותית; היא הופכת את הריקוד לבעל משמעות עמוקה יותר.\u200F",
        },
        {
          question: "מהי ריקוד חינוכי בבתי ספר?\u200F",
          answer:
            "שילוב ריקודי עם בתכניות חינוך גופני לפיתוח קואורדינציה, ביטוי עצמי, שייכות ושמחת תנועה.\u200F",
        },
        {
          question: "כיצד מלמדים ריקודי עם לתלמידים?\u200F",
          answer:
            "באמצעות דוגמה חזותית, תרגול מדורג, הקשבה למוזיקה ושילוב משחקים להנאה ולשיתוף פעולה.\u200F",
        },
        {
          question: "מה הקשר בין ריקוד לזהות לאומית?\u200F",
          answer:
            "הריקוד משקף את ההיסטוריה, הערכים והמסורות של עם — דרך תנועה, לבוש ומוזיקה.\u200F",
        },
        {
          question: "מהם מרכיבי הכושר הגופני המתפתחים בריקוד?\u200F",
          answer: "קואורדינציה, שיווי משקל, גמישות, סבולת וקצב.\u200F",
        },
        {
          question: "מהו תפקיד ההבעה הרגשית בריקוד?\u200F",
          answer:
            "להעביר תחושות ותחומי משמעות דרך תנועות הגוף, הבעות הפנים והקשר עם אחרים.\u200F",
        },
        {
          question: "מהו ריקוד מעובד?\u200F",
          answer:
            "ריקוד עם מסורתי שעבר עיבוד מודרני מבחינת מוזיקה או צעדים כדי להתאים להופעות או תחרויות.\u200F",
        },
        {
          question: "כיצד משפיעה התרבות על סגנון הריקוד?\u200F",
          answer:
            "התרבות קובעת את סוג התנועות, הביגוד, הקצב והאווירה של כל ריקוד עממי.\u200F",
        },
        {
          question: "מהו שילוב בין ריקוד מודרני לריקוד עם?\u200F",
          answer:
            "יצירת כוריאוגרפיה חדשה המשלבת מסורת עם אלמנטים עדכניים של תנועה ומוזיקה.\u200F",
        },
        {
          question: "מהי תרומת ריקודי עם לפיתוח חברתי?\u200F",
          answer:
            "הם מחזקים תחושת שייכות, שיתוף פעולה, ביטוי עצמי והנאה קבוצתית.\u200F",
        },
        {
          question: "מהו הריקוד כסמל תרבותי?\u200F",
          answer:
            "כל ריקוד מייצג את רוח העם, ההיסטוריה והרגשות של קהילה מסוימת דרך תנועה ומוזיקה.\u200F",
        },
      ],
    },
  ];

  const subjects = [
    "כימיה",
    "סטטיסטיקה",
    "אנטומיה",
    "פסיכולוגיה",
    "ניהול וחינוך כיתה",
    "אורינות שפתית",
    "יסודות באתלטיקה",
    "יסודות בכדורסל",
    "יסודות בכדורגל",
    "ריקוד עם ועמים",
  ];

  const ButtonController = {
    enablePreqAndStartOverButtons() {
      document.getElementById("prevQuestionButton").disabled = false;
      document
        .getElementById("prevQuestionButton")
        .classList.remove("disabled-button");
      document.getElementById("startOverButton").disabled = false;
      document
        .getElementById("startOverButton")
        .classList.remove("disabled-button");
    },
    disablePreqAndStartOverButtons() {
      document.getElementById("prevQuestionButton").disabled = true;
      document
        .getElementById("prevQuestionButton")
        .classList.add("disabled-button");
      document.getElementById("startOverButton").disabled = true;
      document
        .getElementById("startOverButton")
        .classList.add("disabled-button");
    },
    disablePrevQuestionButton() {
      document.getElementById("prevQuestionButton").disabled = true;
      document
        .getElementById("prevQuestionButton")
        .classList.add("disabled-button");
    },
    enableNextQuestionButton() {
      document.getElementById("nextQuestionButton").disabled = false;
      document
        .getElementById("nextQuestionButton")
        .classList.remove("disabled-button");
    },
    disableNextQuestionButton() {
      document.getElementById("nextQuestionButton").disabled = true;
      document
        .getElementById("nextQuestionButton")
        .classList.add("disabled-button");
    },
    enableStartOverButton() {
      document.getElementById("startOverButton").disabled = false;
      document
        .getElementById("startOverButton")
        .classList.remove("disabled-button");
    },
    disableStartOverButton() {
      document.getElementById("startOverButton").disabled = true;
      document
        .getElementById("startOverButton")
        .classList.add("disabled-button");
    },
    enableNextSubjectButton() {
      document.getElementById("nextSubjectButton").disabled = false;
      document
        .getElementById("nextSubjectButton")
        .classList.remove("disabled-button");
    },
    disableNextSubjectButton() {
      document.getElementById("nextSubjectButton").disabled = true;
      document
        .getElementById("nextSubjectButton")
        .classList.add("disabled-button");
    },
  };

  const FastCodeLearningCompiler = {
    questionIndex: 0,
    currentSubjectIndex: 0,
    currentSubject: subjects[0],
    currentQuestion: allData[0].questions[0].question,
    currentAnswerToQuestion: allData[0].questions[0].answer,
    isLastQuestion: false,
    isRandom: false,
    isAnswerDisplayed: false,
    randomQuestions: [], // Array to keep track of questions already displayed in random mode

    updateProgressBar() {
      const totalQuestions = allData[this.currentSubjectIndex].questions.length;
      const progressBar = document.getElementById("progressBar");

      let percentage = (this.questionIndex / (totalQuestions - 1)) * 100;
      percentage = Math.max(0, Math.min(percentage, 100));

      progressBar.value = percentage;
      this.isLastQuestion = this.questionIndex === totalQuestions - 1;
      updateQuestionCounter();
    },

    displayQuestion() {
      const textarea = document.getElementById("message");
      textarea.value = this.currentQuestion;
      updateQuestionCounter();
    },

    updateCurrentQuestion() {
      this.currentQuestion =
        allData[this.currentSubjectIndex].questions[
          this.questionIndex
        ].question;
      this.currentAnswerToQuestion =
        allData[this.currentSubjectIndex].questions[this.questionIndex].answer;
    },

    updateNextQuestion() {
      const totalQuestions = allData[this.currentSubjectIndex].questions.length;

      if (this.questionIndex < totalQuestions - 1) {
        this.questionIndex++;
        this.updateCurrentQuestion();
        this.displayQuestion();
        ButtonController.enablePreqAndStartOverButtons();
        this.updateProgressBar();

        if (this.isLastQuestion) {
          ButtonController.disableNextQuestionButton();
        }
      }
    },

    updatePreviousQuestion() {
      if (this.questionIndex > 0) {
        this.questionIndex--;
        this.updateCurrentQuestion();
        this.displayQuestion();
        ButtonController.enableNextQuestionButton();
        this.updateProgressBar();

        if (this.questionIndex === 0) {
          ButtonController.disablePrevQuestionButton();
          ButtonController.disableStartOverButton();
        }
      }
    },

    restartQuestions() {
      this.questionIndex = 0;
      this.updateCurrentQuestion();
      this.displayQuestion();
      this.updateProgressBar();
      ButtonController.disablePrevQuestionButton();
      ButtonController.enableNextQuestionButton();
      ButtonController.disableStartOverButton();
      this.isAnswerDisplayed = false;
      this.isRandom = false;
      this.randomQuestions = []; // Reset randomQuestions array
    },

    switchToNextSubject() {
      if (this.currentSubjectIndex < allData.length - 1) {
        this.currentSubjectIndex++;
        this.questionIndex = 0;
        this.currentSubject = subjects[this.currentSubjectIndex];
        this.updateCurrentQuestion();
        this.displayQuestion();
        this.updateProgressBar();

        ButtonController.enableNextSubjectButton();
        ButtonController.enableNextQuestionButton();
        ButtonController.disablePreqAndStartOverButtons();
        if (this.currentSubjectIndex === allData.length - 1) {
          ButtonController.disableNextSubjectButton();
        }
        updateSubjectTitle();
      }
    },

    random() {
      const questions = allData[this.currentSubjectIndex].questions;
      if (this.randomQuestions.length === questions.length) {
        alert("All questions have been displayed.");
        ButtonController.disableNextQuestionButton();
        return;
      }

      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * questions.length);
      } while (this.randomQuestions.includes(randomIndex));

      this.questionIndex = randomIndex;
      this.updateCurrentQuestion();
      this.displayQuestion();
      this.isAnswerDisplayed = false;
      document.getElementById("showAnswerButton").textContent = "הצג תשובה";
      this.randomQuestions.push(randomIndex);
      this.updateProgressBar();
    },
  };

  const navbar = document.querySelector(".navbar");
  const subjectButtons = document.querySelectorAll(".subject-button");
  const textarea = document.getElementById("message");
  const questionCounter = document.getElementById("questionCounter");

  function updateQuestionCounter() {
    const totalQuestions =
      allData[FastCodeLearningCompiler.currentSubjectIndex].questions.length;
    questionCounter.textContent = `Question ${
      FastCodeLearningCompiler.questionIndex + 1
    } of ${totalQuestions}`;
  }

  function updateSubjectTitle() {
    currentSubject.textContent = FastCodeLearningCompiler.currentSubject;
  }

  updateSubjectTitle();

  textarea.value = FastCodeLearningCompiler.currentQuestion;

  document
    .getElementById("startOverButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      FastCodeLearningCompiler.restartQuestions();
      const submitButton = document.getElementById("showAnswerButton");
      submitButton.textContent = "הצג תשובה";
    });

  document
    .getElementById("showAnswerButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const submitButton = document.getElementById("showAnswerButton");
      if (!FastCodeLearningCompiler.isAnswerDisplayed) {
        textarea.value +=
          "\n\n" + FastCodeLearningCompiler.currentAnswerToQuestion;
        FastCodeLearningCompiler.isAnswerDisplayed = true;
        submitButton.textContent = "הסתר תשובה";
      } else {
        textarea.value = FastCodeLearningCompiler.currentQuestion;
        FastCodeLearningCompiler.isAnswerDisplayed = false;
        submitButton.textContent = "הצג תשובה";
      }
    });

  document
    .getElementById("nextQuestionButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      if (!FastCodeLearningCompiler.isLastQuestion) {
        if (FastCodeLearningCompiler.isRandom) {
          FastCodeLearningCompiler.random();
        } else {
          FastCodeLearningCompiler.updateNextQuestion();
          FastCodeLearningCompiler.isAnswerDisplayed = false;
          document.getElementById("showAnswerButton").textContent = "הצג תשובה";
        }
      }
    });

  document
    .getElementById("prevQuestionButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      FastCodeLearningCompiler.updatePreviousQuestion();
      document.getElementById("showAnswerButton").textContent = "הצג תשובה";
    });

  document
    .getElementById("nextSubjectButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      FastCodeLearningCompiler.switchToNextSubject();
      FastCodeLearningCompiler.isAnswerDisplayed = false;
      document.getElementById("showAnswerButton").textContent = "הצג תשובה";
    });

  document.getElementById("random").addEventListener("click", function () {
    FastCodeLearningCompiler.isRandom = true;
    FastCodeLearningCompiler.random();
  });

  document.getElementById("byOrder").addEventListener("click", function () {
    FastCodeLearningCompiler.isRandom = false;
    FastCodeLearningCompiler.restartQuestions();
    document.getElementById("showAnswerButton").textContent = "הצג תשובה";
  });

  // Initial call to set the question counter
  updateQuestionCounter();

  // Function to update button states
  function updateButtonStates() {
    const nextSubjectButton = document.getElementById("nextSubjectButton");
    const startOverButton = document.getElementById("startOverButton");

    // Check if the current question is the last in the subject
    if (FastCodeLearningCompiler.isLastQuestion) {
      nextSubjectButton.disabled = true;
    } else {
      nextSubjectButton.disabled = false;
    }

    // Check if the current question is the first in the subject
    if (FastCodeLearningCompiler.questionIndex === 0) {
      startOverButton.disabled = true;
    } else {
      startOverButton.disabled = false;
    }
  }

  // Function to reset and disable the progress bar
  function resetAndDisableProgressBar() {
    const progressBar = document.getElementById("progressBar");
    progressBar.value = 0; // Reset the progress bar value to zero
    progressBar.disabled = true; // Disable the progress bar
  }

  // Function to enable the progress bar
  function enableProgressBar() {
    const progressBar = document.getElementById("progressBar");
    progressBar.disabled = false; // Enable the progress bar
  }

  subjectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const subjectIndex = parseInt(button.dataset.subjectIndex, 10);
      const subjectName = button.dataset.subjectName;
      handleSubjectButtonClick(button, subjectIndex, subjectName);
    });
  });
  function handleSubjectButtonClick(button, subjectIndex, subjectName) {
    console.log(
      "Handling button click:",
      button,
      "Subject Index:",
      subjectIndex,
      "Subject Name:",
      subjectName
    );

    // Check if the subjectIndex is valid
    if (
      subjectIndex < 0 ||
      subjectIndex >= FastCodeLearningCompiler.allData.length
    ) {
      console.error("Invalid subjectIndex:", subjectIndex);
      return;
    }

    const subjectData = FastCodeLearningCompiler.allData[subjectIndex];

    // Check if subjectData and questions exist
    if (!subjectData || !Array.isArray(subjectData.questions)) {
      console.error(
        "Subject data or questions array is not defined:",
        subjectData
      );
      return;
    }

    // Remove any existing dropdown content
    const existingDropdownContent = document.querySelector(".dropdown-content");
    if (existingDropdownContent) {
      existingDropdownContent.remove();
      console.log("Removed existing dropdown content.");
    }

    // Create new dropdown content
    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");
    console.log("Created new dropdown content.");

    // Populate dropdown content with questions
    subjectData.questions.forEach((question, i) => {
      const questionButton = document.createElement("button");
      questionButton.textContent = question.question;
      questionButton.classList.add("nav-button", "new-button");
      questionButton.addEventListener("click", function () {
        console.log("Question button clicked:", question.question);
        document.getElementById("message").value = question.question;
        FastCodeLearningCompiler.currentSubject = subjectName;
        FastCodeLearningCompiler.updateCurrentQuestion();
        FastCodeLearningCompiler.questionIndex = i;
        document.getElementById("progressBar").value =
          (i / (subjectData.questions.length - 1)) * 100;
        FastCodeLearningCompiler.isAnswerDisplayed = false;
        const submitButton = document.getElementById("showAnswerButton");
        submitButton.textContent = "Show answer";
        updateButtonStates(); // Update button states after question is selected
      });
      dropdownContent.appendChild(questionButton);
    });

    // Style the dropdown content
    dropdownContent.style.position = "absolute"; // Ensure it's positioned correctly
    dropdownContent.style.top = button.offsetTop + button.offsetHeight + "px"; // Position below the button
    dropdownContent.style.left = button.offsetLeft + "px"; // Align with the button
    dropdownContent.style.overflowY = "auto";
    dropdownContent.style.maxHeight = "400px";
    dropdownContent.style.scrollbarWidth = "thin";
    dropdownContent.style.scrollbarColor =
      "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.05)";
    dropdownContent.style.display = "flex";
    dropdownContent.style.flexDirection = "column";
    dropdownContent.style.alignItems = "center";
    dropdownContent.style.backgroundColor = "#fff"; // Add background color to make it visible
    dropdownContent.style.border = "1px solid #ccc"; // Add border for better visibility

    // Append the dropdown content to the navbar
    document.querySelector(".navbar").appendChild(dropdownContent);
    console.log("Appended dropdown content to navbar.");
  }
});

/*
  // Add event listener to "Random" radio button
  document.getElementById("random").addEventListener("click", function () {
    if (this.checked) {
      // Disable the "Previous Question" and "Start Over" buttons and also click the random again button
      disabelPreqAndStartOverButtons();
      const byOrderCheckbox = document.getElementById("byOrder");
      let byOrderSelected = byOrderCheckbox.checked;
      if (!byOrderSelected) {
        // Disable the progress bar
        resetAndDisableProgressBar();
      } else {
        enableProgressBar();
        return;
      }
      isAnswerDisplayed = false;
      const submitButton = document.getElementById("showAnswerButton");
      submitButton.textContent = "show answer";
      document.getElementById("random").disabled = true;
      indexQuestion = 0;
      isByOrder = false;
      displayRandomQuestion();
    }
  });

  // Add event listener to "By Order" radio button
  document.getElementById("byOrder").addEventListener("click", function () {
    if (this.checked) {
      // Enable the "Previous Question" and "Start Over" buttons
      enablePreqAndStartOverButtons();

      document.getElementById("random").disabled = false;
      isAnswerDisplayed = false;
      const submitButton = document.getElementById("showAnswerButton");
      submitButton.textContent = "show answer";

      // Set default current subject
      currentSubject = "html";

      // Function that updates the display of the current subject
      updateCurrentSubject();

      // HTML

      // CSS

      // Function to display HTML question in textarea
      isByOrder = true;
      textarea.value = questionsArray[0];
    }
  });

  // Function to display a random question
  function displayRandomQuestion() {
    // Check if all questions have been displayed
    if (displayQuestionAndAnswer.length === questionsArray.length) {
      alert("All questions have been displayed.");
      // Disable the next question button and change its style
      let nextQ = document.getElementById("nextQuestionButton");
      nextQ.disabled = true;
      nextQ.classList.add("disabled-button");
      // Define a variable to keep track of the questions that have already been displayed
      displayedQuestions = [];
      return;
    }

    // Generate a random index to select a question from the array
    var randomIndex = Math.floor(Math.random() * questionsArray.length);

    // Check if the selected question has already been displayed
    if (displayedQuestions.includes(questionsArray[randomIndex])) {
      // If the question has already been displayed, recursively call the function again
      displayRandomQuestion();
      return;
    }

    // Get the random question
    var randomQuestion = questionsArray[randomIndex];

    // Get the corresponding answer
    var answer = questionsAndAnswers[randomQuestion];

    // Display the random question in the textarea
    document.getElementById("message").value = randomQuestion;

    // Display the answer also when the show answer is clicked
    document
      .getElementById("showAnswerButton")
      .addEventListener("click", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        const submitButton = document.getElementById("showAnswerButton");
        if (currentSubject === "html" && isByOrder === false) {
          if (!isAnswerDisplayed) {
            textarea.value = randomQuestion + "\n\n" + answer;
            isAnswerDisplayed = true;
            submitButton.textContent = "hide answer";
          } else {
            alert("hide answer");
            textarea.value = randomQuestion;
            isAnswerDisplayed = false;
            submitButton.textContent = "show answer";
          }
        }
        indexQuestion = 0;
        // Add the question to the displayedQuestions array
        displayedQuestions.push(randomQuestion);
        return;
      });
  }
});
/*
  Function to display a random question
  function displayRandomQuestion() {
      // Check if all questions have been displayed
      if (displayedQuestions.length === questionsArray.length) {
        alert("All questions have been displayed.");
        // disabeling the next qestion and oslo changing its style
        let nextQ = document.getElementById("nextQuestionButton");
        nextQ.disabled = true;
        nextQ.classList.add("disabled-button");
        // Define a variable to keep track of the questions that have already been displayed
        displayedQuestions = [];
      return;
      }       
    
    // Generate a random index to select a question from the array
    var randomIndex = Math.floor(Math.random() * questionsArray.length);

    // Check if the selected question has already been displayed
    if (displayedQuestions.includes(questionsArray[randomIndex])) {
      // If the question has already been displayed, recursively call the function again
      displayRandomQuestion();
      return;
    }

    // Get the random question
    var randomQuestion = questionsArray[randomIndex];

    // Get the corresponding answer
    var answer = questionsAndAnswers[randomQuestion];

    // Display the random question in the textarea
    document.getElementById("message").value = randomQuestion;

    // Display the answer olso when the show answer is clicked  document
    document
      .getElementById("showAnswerButton")
      .addEventListener("click", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        const submitButton = document.getElementById("showAnswerButton");
        if (currentSubject == "html" && isByOrder == false) {
          if (!isAnswerDisplayed) {
            textarea.value = randomQuestion + "\n\n" + answer;
            isAnswerDisplayed = true;
            submitButton.textContent = "hide answer";
          } else {
            alert("hide answer");
            textarea.value = randomQuestion;
            isAnswerDisplayed = false;
            submitButton.textContent = "show answer";
          }        
      };
    indexQuestion = 0;
    // Add the question to the displayedQuestions array
    displayedQuestions.push(randomQuestion);
    return;   
    }};
   */
