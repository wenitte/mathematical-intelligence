# 

Source: https://proofwiki.org/wiki/Even_Power_of_3_as_Sum_of_Consecutive_Positive_Integers



Theorem
Take the positive integers and group them in sets such that the $n$th set contains the next $3^n$ positive integers:

$\set 1, \set {2, 3, 4}, \set {5, 6, \ldots, 13}, \set {14, 15, \cdots, 40}, \ldots$
Let the $n$th such set be denoted $S_{n - 1}$, that is, letting $S_0 := \set 1$ be considered as the zeroth.

Then the sum of all the elements of $S_n$ is $3^{2 n}$.


Proof
The total number of elements in $S_0, S_1, \ldots, S_r$ is:














\(\ds \sum_{j \mathop = 0}^r \card {S_j}\)

\(=\)







\(\ds \sum_{j \mathop = 0}^r 3^j\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3^{r + 1} - 1} {3 - 1}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \dfrac {3^{r + 1} - 1} 2\)





simplifying




Thus for any given $S_n$:

$\ds \sum S_n = \sum k \sqbrk {\dfrac {3^n - 1} 2 < k \le \dfrac {3^{n + 1} - 1} 2}$
using Iverson's convention.
So $\ds \sum S_n$ can be evaluated as the difference between two triangular numbers:














\(\ds \sum S_n\)

\(=\)







\(\ds \sum_{k \mathop = 1}^{\paren {3^{n + 1} - 1} / 2} k - \sum_{k \mathop = 1}^{\paren {3^n - 1} / 2} k\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\dfrac {3^{n + 1} - 1} 2 \paren {\dfrac {3^{n + 1} - 1} 2 + 1} - \dfrac {3^n - 1} 2 \paren {\dfrac {3^n - 1} 2 + 1} }\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\dfrac {3^{n + 1} - 1} 2 \paren {\dfrac {3^{n + 1} - 1 + 2} 2} - \dfrac {3^n - 1} 2 \paren {\dfrac {3^n - 1 + 2} 2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 8 \paren {\paren {3^{n + 1} - 1} \paren {3^{n + 1} + 1} - \paren {3^n - 1} \paren {3^n + 1} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 8 \paren {\paren {3^{2 n + 2} - 1} - \paren {3^{2 n} - 1} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \dfrac 1 8 \paren {3^{2 n + 2} - 3^{2 n} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 8 \paren {3^{2 n} \paren {3^2 - 1} }\)





extracting $3^{2 n}$ as a factor














\(\ds \)

\(=\)







\(\ds 3^{2 n}\)





Oh look, that second factor magically equals $8$



Hence the result.
$\blacksquare$


Examples













\(\ds 3^0\)

\(=\)







\(\ds 1\)




















\(\ds 3^2\)

\(=\)







\(\ds 2 + 3 + 4\)




















\(\ds 3^4\)

\(=\)







\(\ds 5 + 6 + \cdots + 13\)




















\(\ds 3^6\)

\(=\)







\(\ds 14 + 15 + \cdots + 40\)











Historical Note
In his Curious and Interesting Numbers of $1986$, David Wells attributes this result to M.N. Khatri, referencing its appearance in Volume $20$ of Scripta Mathematica, but it is proving difficult to corroborate this.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $81$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $81$




