# 

Source: https://proofwiki.org/wiki/Fourth_Power_as_Summation_of_Groups_of_Consecutive_Integers



Theorem
Take the positive integers and group them in sets such that the $m$th set contains the next $m$ positive integers:

$\set 1, \set {2, 3}, \set {4, 5, 6}, \set {7, 8, 9, 10}, \set {11, 12, 13, 14, 15}, \ldots$
Remove all the sets with an even number of elements.
Then the sum of all the integers in the first $n$ sets remaining equals $n^4$.


Proof
Let $S_m$ be the $m$th set of $m$ consecutive integers.
Let $S_k$ be the $k$th set of $m$ consecutive integers after the sets with an even number of elements have been removed.
Then $S_k = S_m$ where $m = 2 k - 1$.

By the method of construction:

the largest integer in $S_m$ is $T_m$, the $m$th triangular number
there are $m$ integers in $S_m$.
We also have that the middle integer in $S_m$ is $T_m - \dfrac {m - 1} 2$ (by inspection).

Thus the sum of the elements of $S_k$ is:














\(\ds \sum S_k\)

\(=\)







\(\ds m \times \paren {T_m - \dfrac {m - 1} 2}\)




















\(\ds \)

\(=\)







\(\ds m \times \paren {\dfrac {m \paren {m + 1} } 2 - \dfrac {m - 1} 2}\)




















\(\ds \)

\(=\)







\(\ds m \times \paren {\dfrac {m \paren {m + 1} } 2 - \dfrac {m - 1} 2}\)




















\(\ds \)

\(=\)







\(\ds m \times \paren {\dfrac {m^2 + 1} 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {m^3 + m} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2 k - 1}^3 + \paren {2 k - 1} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {8 k^3 - 12 k^2 + 6 k - 1} + \paren {2 k - 1} } 2\)




















\(\ds \)

\(=\)







\(\ds 4 k^3 - 6 k^2 + 4 k - 1\)










We need to calculate the sum of all $S_k$ from $1$ to $n$.

Hence we have:














\(\ds \sum_{k \mathop = 1}^n S_k\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {4 k^3 - 6 k^2 + 4 k - 1}\)




















\(\ds \)

\(=\)







\(\ds 4 \sum_{k \mathop = 1}^n k^3 - 6 \sum_{k \mathop = 1}^n k^2 + 4 \sum_{k \mathop = 1}^n k - \sum_{k \mathop = 1}^n 1\)




















\(\ds \)

\(=\)







\(\ds 4 \paren {\frac {n^2 \paren {n + 1}^2} 4} - 6 \sum_{k \mathop = 1}^n k^2 + 4 \sum_{k \mathop = 1}^n k - \sum_{k \mathop = 1}^n 1\)





Sum of Sequence of Cubes














\(\ds \)

\(=\)







\(\ds n^2 \paren {n + 1}^2 - 6 \paren {\frac {n \paren {n + 1} \paren {2 n + 1} } 6} + 4 \sum_{k \mathop = 1}^n k - \sum_{k \mathop = 1}^n 1\)





Sum of Sequence of Squares














\(\ds \)

\(=\)







\(\ds n^2 \paren {n + 1}^2 - n \paren {n + 1} \paren {2 n + 1} + 4 \paren {\frac {n \paren {n + 1} } 2} - \sum_{k \mathop = 1}^n 1\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds n^2 \paren {n + 1}^2 - n \paren {n + 1} \paren {2 n + 1} + 2 n \paren {n + 1} - n\)





simplification














\(\ds \)

\(=\)







\(\ds n^4 + 2 n^3 + n^2 - 2 n^3 - 3 n^2 - n + 2 n^2 + 2 n - n\)





multiplying everything out














\(\ds \)

\(=\)







\(\ds n^4\)





simplifying



$\blacksquare$


Examples
Examples: $3^4$
$1 + \paren {4 + 5 + 6} + \paren {11 + 12 + 13 + 14 + 15} = 3^4$


Sources
1939: Dov Juzuk: Curiosa 56: An Interesting Observation (Scripta Mathematica Vol. 6: p. 218)
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $81$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $81$




