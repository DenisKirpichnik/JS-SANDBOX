const generateParentheses = (n) => {
	const result = [];
	BFS("", 0, 0);
	return result;
	function BFS(str, left, right) {
		if (left === n && right === n) {
			result.push(str);
			return;
		}
		if (left !== n) {
			BFS(str + "(", left + 1, right);
		}
		if (left > right) {
			BFS(str + ")", left, right + 1);
		}
	}
};

console.log(generateParentheses(3));

// function removeDuplicates(arr) {
// 	return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr));

// onst generateParentheses = (n) => {
//     2	    const result = [];
//     3	    breadthFirstSearch("", 0, 0);
//     4	    return result;
//     5	    function breadthFirstSearch(str, left, right) {
//     6	        if (left === n && right === n) {
//     7	            console.log(str);
//     8	            result.push(str);
//     9	            return;
//     10	        }
//     11	        if (left !== n) {
//     12	            breadthFirstSearch(str + "(", left + 1, right);
//     13	        }
//     14	        if (left > right) {
//     15	            breadthFirstSearch(str + ")", left, right + 1);
//     16	        }
//     17	    }
//     18	};
