// 1. getUserInitials
function getUserInitials(user) {
  return (user.firstName[0] + user.lastName[0]).toUpperCase();
}

// 2. countProperties
function countProperties(obj) {
  return Object.keys(obj).length;
}

// 3. invertObject
function invertObject(obj) {
  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[obj[key]] = key;
    }
  }
  return result;
}

// 4. removeFalsyValues
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// 5. groupByAge
function groupByAge(people) {
  return people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) acc[age] = [];
    acc[age].push(person);
    return acc;
  }, {});
}

// 6. findMostFrequentElement
function findMostFrequentElement(arr) {
  const freq = {};
  let maxCount = 0;
  let result = null;

  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxCount) {
      maxCount = freq[item];
      result = item;
    }
  }
  return result;
}

// 7. flatten (any depth)
function flatten(arr) {
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// 8. mergeObjects (deep merge)
function mergeObjects(...objects) {
  const isObject = obj =>
    obj && typeof obj === "object" && !Array.isArray(obj);

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      if (isObject(obj[key]) && isObject(prev[key])) {
        prev[key] = mergeObjects(prev[key], obj[key]);
      } else {
        prev[key] = obj[key];
      }
    });
    return prev;
  }, {});
}

// 9. rotateArray
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  return [...arr.slice(-k), ...arr.slice(0, n - k)];
}

// 10. intersection (no duplicates)
function intersection(nums1, nums2) {
  const set2 = new Set(nums2);
  return [...new Set(nums1.filter(num => set2.has(num)))];
}

// 11. groupAnagrams
function groupAnagrams(words) {
  const map = {};

  for (let word of words) {
    const key = word.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(word);
  }

  return Object.values(map);
}

// 12. moveZerosToEnd (in-place)
function moveZerosToEnd(arr) {
  let insertPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos++] = arr[i];
    }
  }

  while (insertPos < arr.length) {
    arr[insertPos++] = 0;
  }

  return arr;
}

// 13. longestConsecutiveSequence
function longestConsecutiveSequence(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let streak = 1;

      while (set.has(current + 1)) {
        current++;
        streak++;
      }

      longest = Math.max(longest, streak);
    }
  }

  return longest;
}

// 14. productExceptSelf (no division)
function productExceptSelf(nums) {
  const n = nums.length;
  const result = Array(n).fill(1);

  let left = 1;
  for (let i = 0; i < n; i++) {
    result[i] = left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}

// 15. deepEqual
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" || obj1 === null ||
    typeof obj2 !== "object" || obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// 16. serialize & deserialize
function serializeObject(obj) {
  return JSON.stringify(obj);
}

function deserializeObject(str) {
  return JSON.parse(str);
}
