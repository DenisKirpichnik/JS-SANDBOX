const object = {
  name: "Shubham Singh Kshatriya",
  designation: "Software Enginner",
  education: {
    school: {
      name: "St. Stephens School",
      yop: 2017,
    },
    college: {
      name: "SVIT",
      yop: 2021,
    },
  },
};

// path to retrieve value
const collegeYopPath = "education.college.yop";

const get = (obj, path, defaultVal) => {
  const parse = path.split(".");

  let curObj = obj;
  for (let i = 0; i < parse.length; i++) {
    const key = parse[i];

    if (curObj[key]) {
      if (i === parse.length - 1) return curObj[key];
      if (typeof curObj[key] === "object") curObj = curObj[key];
      
    } else {
      return defaultVal;
    }
  }
};
console.log(get(object, collegeYopPath, "default value"));

const falsyPath = "education.college.passingYear";
console.log(get(object, falsyPath, "default value"));


//lodash get

typeof _.get == 'function' || (function() {
    /**
     * @param {object} object, The object to query.
     * @param {Array|string} pathName: The path of the property to get.
     * @param {*} [defaultValue]: Optional value to return for undefined resolved values.
     * @returns {*} resolved value, or default value if specified.
     */
    var at = function get(object, pathName, defaultValue) {
      
      // Coerce pathName to a string (even it turns into "[object Object]").
      var path = Array.isArray(pathName)
        ? pathName.join(".")
        : String(pathName);
      
      // Support bracket notation, e.g., "a[0].b.c".
      var match = /\[\\?("|')?(\w|d)+\\?("|')?\]/g;
      
      var parts = path
        .replace(match, (m, i, v) => "." + v)
        .split('.');
  
      var length = parts.length;
      var i = 0;
  
      // In case object isn't a real object, set it to undefined.
      var value = object === Object(object) ? object : undefined;
  
      while (value != null && i < length) {
        value = value[parts[i++]];
      }
  
      /**
       * lodash.get() returns the resolved value if
       * 1. iteration happened (i > 0)
       * 2. iteration completed (i === length)
       * 3. the value at the path is found in the data structure (not undefined). Note that if the path is found but the
       *    value is null, then null is returned.
       * If any of those checks fails, return the defaultValue param, if provided.
       */
      return i && i === length && value !== undefined ? value : defaultValue;
    };