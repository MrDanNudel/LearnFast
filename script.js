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
      subject: "Network",
      questions: [
        {
          question: "What is HTTP?",
          answer:
            "HTTP (Hypertext Transfer Protocol) is the protocol used for transferring hypertext requests and information on the web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands.",
        },
        {
          question: "What is HTTPS?",
          answer:
            "HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP. It uses TLS (Transport Layer Security) or SSL (Secure Sockets Layer) to encrypt the data transferred between the client and the server, ensuring privacy and data integrity.",
        },
        {
          question: "What is a DNS server?",
          answer:
            "A DNS (Domain Name System) server translates domain names (like www.example.com) into IP addresses (like 192.0.2.1) that computers use to identify each other on the network.",
        },
        {
          question: "What is an IP address?",
          answer:
            "An IP (Internet Protocol) address is a unique string of numbers separated by periods (IPv4) or colons (IPv6) that identifies each computer using the Internet Protocol to communicate over a network.",
        },
        {
          question: "What is the difference between IPv4 and IPv6?",
          answer:
            "IPv4 is the fourth version of the Internet Protocol, using 32-bit addresses, allowing for approximately 4.3 billion unique addresses. IPv6 is the sixth version, using 128-bit addresses, allowing for a vastly larger number of unique addresses.",
        },
        {
          question: "What is a web server?",
          answer:
            "A web server is a computer system that hosts websites and serves web pages to users over the internet or an intranet. It handles requests from clients, typically browsers, and delivers web content such as HTML pages, images, and scripts.",
        },
        {
          question: "What is a URL?",
          answer:
            "A URL (Uniform Resource Locator) is the address used to access resources on the web. It consists of the protocol (http/https), domain name (www.example.com), and optionally, the path to a specific page or resource (/path/to/resource).",
        },
        {
          question: "What is a web browser?",
          answer:
            "A web browser is a software application used to access and display web pages. It retrieves the content from web servers, interprets HTML, CSS, and JavaScript, and renders the pages for users to view and interact with.",
        },
        {
          question: "What is the difference between a GET and a POST request?",
          answer:
            "A GET request is used to retrieve data from a server, and the data is appended to the URL. A POST request is used to send data to a server to create or update a resource, and the data is included in the body of the request.",
        },
        {
          question: "What is a cookie?",
          answer:
            "A cookie is a small piece of data stored on the user's computer by the web browser while browsing a website. It is used to remember information about the user, such as login status, preferences, and tracking identifiers.",
        },
        {
          question: "What is a session?",
          answer:
            "A session is a way to store information (in variables) to be used across multiple pages in a web application. It is typically used to keep track of user interactions and maintain state between different requests from the same user.",
        },
        {
          question: "What is a CDN?",
          answer:
            "A CDN (Content Delivery Network) is a system of distributed servers that deliver web content and other media to users based on their geographic location. It improves website performance by reducing latency and load times.",
        },
        {
          question: "What is latency?",
          answer:
            "Latency is the time delay between a user's action and the response from the server. It is influenced by various factors, including the distance between the client and server, network congestion, and the speed of the server.",
        },
        {
          question: "What is bandwidth?",
          answer:
            "Bandwidth is the maximum rate of data transfer across a network or internet connection. It is typically measured in bits per second (bps) and determines how much data can be sent or received in a given amount of time.",
        },
        {
          question: "What is a firewall?",
          answer:
            "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks.",
        },
        {
          question: "What is SSL/TLS?",
          answer:
            "SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols designed to provide secure communication over a computer network. They encrypt data transmitted between clients and servers, ensuring privacy and data integrity.",
        },
        {
          question: "What is a VPN?",
          answer:
            "A VPN (Virtual Private Network) is a service that allows users to connect to the internet securely and privately by routing their traffic through a server and hiding their IP address. It encrypts the data, ensuring privacy and security.",
        },
        {
          question: "What is a proxy server?",
          answer:
            "A proxy server acts as an intermediary between a client and a server. It forwards client requests to the server and returns the server's response to the client. Proxies can be used for various purposes, such as improving performance, filtering content, and hiding the client's IP address.",
        },
        {
          question: "What is a load balancer?",
          answer:
            "A load balancer is a device or software that distributes network or application traffic across multiple servers. It ensures no single server becomes overwhelmed, improving overall performance and reliability.",
        },
        {
          question: "What is an API?",
          answer:
            "An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information.",
        },
        {
          question:
            "What is the difference between front-end and back-end development?",
          answer:
            "Front-end development involves creating the visual and interactive aspects of a website that users interact with. Back-end development involves building and maintaining the server-side logic, databases, and application programming interfaces (APIs) that power the front-end.",
        },
        {
          question: "What is a web application?",
          answer:
            "A web application is a software application that runs on a web server and is accessed through a web browser. It can be a simple static site or a complex interactive platform with dynamic content and user interactions.",
        },
        {
          question: "What is a PWA?",
          answer:
            "A PWA (Progressive Web Application) is a type of web application that uses modern web technologies to deliver a user experience similar to native mobile applications. PWAs are fast, reliable, and can work offline or with poor network conditions.",
        },
        {
          question: "What is the DOM?",
          answer:
            "The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a web page as a tree of objects, allowing programs and scripts to dynamically access and update the content, structure, and style of the document.",
        },
        {
          question: "What is AJAX?",
          answer:
            "AJAX (Asynchronous JavaScript and XML) is a technique for creating fast and dynamic web pages. It allows web applications to asynchronously send and receive data from a server without refreshing the entire page.",
        },
        {
          question: "What is the difference between TCP and UDP?",
          answer:
            "TCP (Transmission Control Protocol) is a connection-oriented protocol that ensures reliable data transmission. UDP (User Datagram Protocol) is a connectionless protocol that allows faster transmission but does not guarantee delivery, order, or error-checking.",
        },
        {
          question: "What is a subnet?",
          answer:
            "A subnet (subnetwork) is a logical subdivision of an IP network. Subnets are used to organize and manage IP addresses more efficiently and improve network performance and security by segmenting large networks into smaller, more manageable parts.",
        },
        {
          question: "What is a MAC address?",
          answer:
            "A MAC (Media Access Control) address is a unique identifier assigned to network interfaces for communications at the data link layer of a network. It is used to identify devices on a local network and is typically assigned by the manufacturer.",
        },
        {
          question: "What is a gateway?",
          answer:
            "A gateway is a network node that serves as an access point to another network. It allows data to flow between different networks and can perform various functions, such as protocol translation, data filtering, and traffic routing.",
        },
      ],
    },
    {
      subject: "JobInterviewQuestion",
      questions: [
        {
          question: "What is the difference between REST and SOAP?",
          answer:
            "REST (Representational State Transfer) is an architectural style that uses HTTP methods for communication and is stateless. SOAP (Simple Object Access Protocol) is a protocol that uses XML for messaging and can operate over multiple protocols like HTTP, SMTP, etc.",
        },
        {
          question: "What are microservices?",
          answer:
            "Microservices are an architectural style that structures an application as a collection of small, autonomous services modeled around a business domain. Each microservice is independent, deployable, and scalable.",
        },
        {
          question:
            "What is continuous integration and continuous deployment (CI/CD)?",
          answer:
            "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. The main concepts attributed to CI/CD are continuous integration, continuous deployment, and continuous delivery.",
        },
        {
          question: "Explain the concept of DevOps.",
          answer:
            "DevOps is a set of practices that combine software development (Dev) and IT operations (Ops) aimed at shortening the development lifecycle and providing continuous delivery with high software quality.",
        },
        {
          question: "What is the difference between SQL and NoSQL databases?",
          answer:
            "SQL databases are relational and use structured query language for defining and manipulating data. NoSQL databases are non-relational and are used for large sets of distributed data. They are schema-less and can handle unstructured data.",
        },
        {
          question: "What is the purpose of Docker?",
          answer:
            "Docker is a platform that uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from each other and bundle their own application, tools, libraries, and configuration files.",
        },
        {
          question: "What is React?",
          answer:
            "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
        },
        {
          question: "What is the use of the useState hook in React?",
          answer:
            "The useState hook is a function that allows you to add React state to function components. It returns an array with two values: the current state and a function to update it.",
        },
        {
          question:
            "What is the difference between class-based and functional components in React?",
          answer:
            "Class-based components are ES6 classes that extend from React.Component and have a render method. Functional components are simple JavaScript functions that return JSX. Functional components can use hooks to manage state and side effects.",
        },
        {
          question: "What is Node.js?",
          answer:
            "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript to write server-side code and create scalable network applications.",
        },
        {
          question: "What is Express.js?",
          answer:
            "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used to build single-page, multi-page, and hybrid web applications.",
        },
        {
          question: "What are Promises in JavaScript?",
          answer:
            "Promises are objects that represent the eventual completion or failure of an asynchronous operation. They provide a cleaner, more flexible way to handle asynchronous operations compared to traditional callback-based approaches.",
        },
        {
          question:
            "What is the difference between synchronous and asynchronous programming?",
          answer:
            "Synchronous programming executes tasks sequentially, blocking the main thread until each task completes. Asynchronous programming allows tasks to run concurrently, using callbacks, promises, or async/await to handle the results, without blocking the main thread.",
        },
        {
          question: "What is RESTful API?",
          answer:
            "A RESTful API is an application programming interface that follows the principles of REST. It uses HTTP requests to perform CRUD operations and is stateless, meaning each request from a client contains all the information needed to process the request.",
        },
        {
          question: "What is JWT (JSON Web Token)?",
          answer:
            "JWT is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and information exchange. A JWT is composed of three parts: header, payload, and signature.",
        },
        {
          question: "What is GraphQL?",
          answer:
            "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It allows clients to request exactly the data they need, reducing over-fetching and under-fetching of data.",
        },
        {
          question: "What is the role of a full-stack developer?",
          answer:
            "A full-stack developer is proficient in both front-end and back-end development. They are capable of working on the complete stack of technology, including databases, servers, front-end development, and client-side development.",
        },
        {
          question: "What is Agile methodology?",
          answer:
            "Agile methodology is an iterative approach to software development that focuses on collaboration, customer feedback, and small, rapid releases. It emphasizes flexibility and adaptability throughout the development process.",
        },
        {
          question: "What is MVC architecture?",
          answer:
            "MVC (Model-View-Controller) is a software architectural pattern that separates an application into three main logical components: the model (data), the view (user interface), and the controller (business logic).",
        },
        {
          question: "What is Test-Driven Development (TDD)?",
          answer:
            "TDD is a software development approach where tests are written before writing the actual code. Developers write a test for a specific functionality, then write the code to pass the test, and finally refactor the code while keeping the tests green.",
        },
        {
          question: "What is the purpose of unit testing?",
          answer:
            "Unit testing involves testing individual units or components of a software application to ensure that each part functions correctly. It helps identify bugs early and improves code quality.",
        },
        {
          question: "What is the use of the fetch API in JavaScript?",
          answer:
            "The fetch API provides a way to make network requests similar to XMLHttpRequest (XHR). It is more powerful and flexible, returning promises and supporting modern JavaScript features like async/await.",
        },
        {
          question: "What is middleware in Express.js?",
          answer:
            "Middleware in Express.js is a function that executes during the request-response cycle. It can modify the request and response objects, end the request-response cycle, and call the next middleware function in the stack.",
        },
        {
          question:
            "What is the difference between GET and POST methods in HTTP?",
          answer:
            "GET requests data from a specified resource, and the data is appended to the URL. POST submits data to be processed to a specified resource, with the data included in the body of the request.",
        },
        {
          question:
            "What is the purpose of the package.json file in a Node.js project?",
          answer:
            "The package.json file is used to define the properties, dependencies, and scripts of a Node.js project. It includes metadata about the project and lists the packages that the project depends on.",
        },
        {
          question: "What is the Virtual DOM in React?",
          answer:
            "The Virtual DOM is a lightweight, in-memory representation of the actual DOM. React uses the Virtual DOM to optimize updates by computing the differences between the current and previous states and applying the minimal set of changes to the actual DOM.",
        },
        {
          question: "What are hooks in React?",
          answer:
            "Hooks are functions that let you use state and other React features in functional components. Examples include useState, useEffect, useContext, and useReducer.",
        },
        {
          question: "What is CORS and why is it important?",
          answer:
            "CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers to restrict how resources on a web page can be requested from another domain. It is important for preventing unauthorized access and ensuring secure interactions between different domains.",
        },
        {
          question: "What is a monolithic architecture?",
          answer:
            "A monolithic architecture is a traditional software model where all components and functionalities of an application are bundled together into a single unit. It contrasts with microservices architecture, where the application is broken down into smaller, independent services.",
        },
        {
          question: "What is responsive design?",
          answer:
            "Responsive design is an approach to web development that ensures web pages render well on a variety of devices and window sizes. It uses flexible layouts, images, and CSS media queries to adapt the content to different screen sizes.",
        },
      ],
    },
    {
      subject: "explainTheCode",
      questions: [
        {
          question: `const sum = (a, b) => a + b;\n\n// Explain this code`,
          answer:
            "This code defines an arrow function named 'sum' that takes two parameters 'a' and 'b' and returns their sum.",
        },
        {
          question: `let person = { name: 'John', age: 30 };\n\n// Explain this code`,
          answer:
            "This code creates an object 'person' with two properties: 'name' and 'age'.",
        },
        {
          question: `for (let i = 0; i < 5; i++) { console.log(i); }\n\n// Explain this code`,
          answer:
            "This code runs a loop from 0 to 4, logging each value of 'i' to the console.",
        },
        {
          question: `const numbers = [1, 2, 3].map(x => x * 2);\n\n// Explain this code`,
          answer:
            "This code creates an array of numbers, applies the 'map' method to multiply each element by 2, and returns a new array.",
        },
        {
          question: `function greet(name) { return 'Hello ' + name; }\n\n// Explain this code`,
          answer:
            "This code defines a function 'greet' that takes a parameter 'name' and returns a greeting string.",
        },
        {
          question: `const items = [1, 2, 3].reduce((acc, cur) => acc + cur, 0);\n\n// Explain this code`,
          answer:
            "This code uses the 'reduce' method to sum up all the elements in the 'items' array, starting with an initial value of 0.",
        },
        {
          question: `let x = 10;\nif (x > 5) { x = 20; }\n\n// Explain this code`,
          answer:
            "This code checks if 'x' is greater than 5, and if so, sets 'x' to 20.",
        },
        {
          question: `const isEven = num => num % 2 === 0;\n\n// Explain this code`,
          answer:
            "This code defines an arrow function 'isEven' that returns true if the given number 'num' is even.",
        },
        {
          question: `let arr = [1, 2, 3];\narr.push(4);\n\n// Explain this code`,
          answer:
            "This code creates an array 'arr' and then adds the number 4 to the end of the array using the 'push' method.",
        },
        {
          question: `const greet = () => 'Hello World';\n\n// Explain this code`,
          answer:
            "This code defines an arrow function 'greet' that returns the string 'Hello World'.",
        },
      ],
    },
    {
      subject: "explainJavaCode",
      questions: [
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    int sum = 5 + 3;\n    System.out.println(sum);\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a class 'Main' with a 'main' method. The 'main' method calculates the sum of 5 and 3, then prints the result (8) to the console.",
        },
        {
          question: `public class Person {\n  String name;\n  int age;\n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a class 'Person' with two attributes: 'name' and 'age'. It includes a constructor that initializes these attributes.",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    for (int i = 0; i < 5; i++) {\n      System.out.println(i);\n    }\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a 'main' method that uses a 'for' loop to print numbers from 0 to 4 to the console.",
        },
        {
          question: `public class ArrayExample {\n  public static void main(String[] args) {\n    int[] numbers = {1, 2, 3};\n    System.out.println(numbers[1]);\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a class 'ArrayExample' with a 'main' method that initializes an array 'numbers' and prints the element at index 1 (which is 2).",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    String greeting = \"Hello, World!\";\n    System.out.println(greeting);\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a 'main' method that initializes a string variable 'greeting' with \"Hello, World!\" and prints it to the console.",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    int result = multiply(4, 5);\n    System.out.println(result);\n  }\n\n  public static int multiply(int a, int b) {\n    return a * b;\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a 'main' method that calls a static method 'multiply' with arguments 4 and 5, and prints the result (20). The 'multiply' method returns the product of the two numbers.",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    boolean isTrue = (5 > 3);\n    System.out.println(isTrue);\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a 'main' method that initializes a boolean variable 'isTrue' with the result of the expression (5 > 3), which evaluates to true, and prints it.",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    int[] numbers = {1, 2, 3};\n    for (int number : numbers) {\n      System.out.println(number);\n    }\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code uses an enhanced 'for' loop to iterate through an array 'numbers' and print each element.",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    String[] names = {\"Alice\", \"Bob\", \"Charlie\"};\n    System.out.println(names.length);\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code initializes an array 'names' with three elements and prints the length of the array (which is 3).",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    try {\n      int result = 10 / 0;\n    } catch (ArithmeticException e) {\n      System.out.println(\"Cannot divide by zero\");\n    }\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code includes a 'try-catch' block to handle an 'ArithmeticException' that occurs when dividing by zero. It catches the exception and prints an error message.",
        },
      ],
    },
    {
      subject: "cmdCommands",
      questions: [
        {
          question: "ipconfig",
          answer: `Displays IP configuration information.\n\nExample:\nipconfig`,
        },
        {
          question: "ping",
          answer: `Sends network packets to a specified IP address to test connectivity.\n\nExample:\nping www.google.com`,
        },
        {
          question: "dir",
          answer: `Displays a list of files and directories in the current directory.\n\nExample:\ndir`,
        },
        {
          question: "cd",
          answer: `Changes the current directory.\n\nExample:\ncd C:\\Windows`,
        },
        {
          question: "mkdir",
          answer: `Creates a new directory.\n\nExample:\nmkdir newfolder`,
        },
        {
          question: "rmdir",
          answer: `Removes a directory.\n\nExample:\nrmdir oldfolder`,
        },
        {
          question: "del",
          answer: `Deletes one or more files.\n\nExample:\ndel file.txt`,
        },
        {
          question: "copy",
          answer: `Copies files from one location to another.\n\nExample:\ncopy file.txt D:\\destination`,
        },
        {
          question: "move",
          answer: `Moves files from one location to another.\n\nExample:\nmove file.txt D:\\destination`,
        },
        {
          question: "rename",
          answer: `Renames a file or directory.\n\nExample:\nrename oldname.txt newname.txt`,
        },
        {
          question: "tasklist",
          answer: `Displays a list of currently running processes.\n\nExample:\ntasklist`,
        },
        {
          question: "taskkill",
          answer: `Terminates a process by its process ID.\n\nExample:\ntaskkill /PID 1234`,
        },
        {
          question: "systeminfo",
          answer: `Displays detailed configuration information about the computer and operating system.\n\nExample:\nsysteminfo`,
        },
        {
          question: "chkdsk",
          answer: `Checks the disk for errors and repairs them.\n\nExample:\nchkdsk C:`,
        },
        {
          question: "sfc /scannow",
          answer: `Scans the system files for integrity violations and repairs them.\n\nExample:\nsfc /scannow`,
        },
        {
          question: "netstat",
          answer: `Displays network connections, routing tables, and network interface statistics.\n\nExample:\nnetstat`,
        },
        {
          question: "tracert",
          answer: `Traces the route taken by packets to a destination.\n\nExample:\ntracert www.google.com`,
        },
        {
          question: "shutdown",
          answer: `Shuts down or restarts the computer.\n\nExample:\nshutdown /s /t 0`,
        },
        {
          question: "cls",
          answer: `Clears the command prompt screen.\n\nExample:\ncls`,
        },
        {
          question: "echo",
          answer: `Displays a message or turns command echoing on or off.\n\nExample:\necho Hello World`,
        },
        {
          question: "set",
          answer: `Displays, sets, or removes environment variables.\n\nExample:\nset PATH=C:\\Windows`,
        },
        {
          question: "assoc",
          answer: `Displays or modifies file extension associations.\n\nExample:\nassoc .txt`,
        },
        {
          question: "cipher",
          answer: `Manages encryption of files and directories.\n\nExample:\ncipher /e file.txt`,
        },
        {
          question: "comp",
          answer: `Compares the contents of two files or sets of files.\n\nExample:\ncomp file1.txt file2.txt`,
        },
        {
          question: "fc",
          answer: `Compares two files or sets of files and displays the differences.\n\nExample:\nfc file1.txt file2.txt`,
        },
        {
          question: "find",
          answer: `Searches for a text string in a file or files.\n\nExample:\nfind "example" file.txt`,
        },
        {
          question: "findstr",
          answer: `Searches for strings in files.\n\nExample:\nfindstr "example" file.txt`,
        },
        {
          question: "for",
          answer: `Runs a specified command for each file in a set of files.\n\nExample:\nfor %i in (*.txt) do echo %i`,
        },
        {
          question: "type",
          answer: `Displays the contents of a text file.\n\nExample:\ntype file.txt`,
        },
        {
          question: "path",
          answer: `Displays or sets a search path for executable files.\n\nExample:\npath C:\\Windows`,
        },
        {
          question: "pause",
          answer: `Pauses the processing of a batch file and prompts the user to press any key.\n\nExample:\npause`,
        },
        {
          question: "shutdown",
          answer: `Shuts down or restarts the computer.\n\nExample:\nshutdown /r /t 0`,
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
    "נושא חדש",
    "נושא חדש 2",
    "נושא חדש 3",
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
      document.getElementById("showAnswerButton").textContent = "show answer";
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
      submitButton.textContent = "show answer";
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
        submitButton.textContent = "hide answer";
      } else {
        textarea.value = FastCodeLearningCompiler.currentQuestion;
        FastCodeLearningCompiler.isAnswerDisplayed = false;
        submitButton.textContent = "show answer";
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
          document.getElementById("showAnswerButton").textContent =
            "show answer";
        }
      }
    });

  document
    .getElementById("prevQuestionButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      FastCodeLearningCompiler.updatePreviousQuestion();
      document.getElementById("showAnswerButton").textContent = "show answer";
    });

  document
    .getElementById("nextSubjectButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      FastCodeLearningCompiler.switchToNextSubject();
      FastCodeLearningCompiler.isAnswerDisplayed = false;
      document.getElementById("showAnswerButton").textContent = "show answer";
    });

  document.getElementById("random").addEventListener("click", function () {
    FastCodeLearningCompiler.isRandom = true;
    FastCodeLearningCompiler.random();
  });

  document.getElementById("byOrder").addEventListener("click", function () {
    FastCodeLearningCompiler.isRandom = false;
    FastCodeLearningCompiler.restartQuestions();
    document.getElementById("showAnswerButton").textContent = "show answer";
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
