This theorem, known as Cantor's non-denumerability theorem, proposes that there's no function from the set of natural numbers to the set of real numbers that provides a one-to-one correspondence. In other words, it is impossible to list or "count" all the elements in the set of real numbers using natural numbers, thereby proving that the set of real numbers is larger than the set of natural numbers.

Here's the explanation in more natural language:

1. Suppose that there existed a function f that maps each natural number to a specific real number in such a way that every single real number gets “assigned” a natural number. This function is what mathematicians call a surjective function.

2. Focus on real numbers between 0 and 1 (since there are infinitely many real numbers in this interval as in the set of all real numbers). Suppose we can associate them with natural numbers.

3. Begin this process by taking any two natural numbers n₁ and n₂ and the real numbers they map to, f(n₁) and f(n₂). Ensure that f(n₁) is less than f(n₂) and both of them are between 0 and 1.

4. Continue this process, creating smaller and smaller intervals inside the previous intervals. For each step of this process, select two new natural numbers whose mapped real numbers form an interval inside the previous interval.

5. These intervals will get increasingly smaller, so that their size tends to zero. However, each of them will contain at least one real number.

6. Let "c" be the exact middle point of these intervals. As the intervals get smaller and smaller, these midpoints will converge to a number, also between 0 and 1.

7. Notice the problem: the real number "c" was not "assigned" a natural number by our surjective function f, even though it is in between every interval we've generated. There is no natural number n such that f(n) equals c.

8. This contradiction means that our original assumption was false - there cannot be a surjective function from the natural numbers to the real numbers. Hence the set of real numbers is uncountably infinite.