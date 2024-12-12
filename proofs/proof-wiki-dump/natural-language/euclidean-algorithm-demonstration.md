# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Demonstration

Example of use of Euclidean Algorithm
Using the Euclidean Algorithm, we can investigate in detail what happens when we apply the Division Theorem repeatedly to $a$ and $b$.














\(\ds a\)

\(=\)







\(\ds q_1 b + r_1\)




















\(\ds b\)

\(=\)







\(\ds q_2 r_1 + r_2\)




















\(\ds r_1\)

\(=\)







\(\ds q_3 r_2 + r_3\)




















\(\ds \cdots\)

\(\)







\(\ds \)




















\(\ds r_{n - 2}\)

\(=\)







\(\ds q_n r_{n - 1} + r_n\)




















\(\ds r_{n - 1}\)

\(=\)







\(\ds q_{n + 1} r_n + 0\)










From the Division Theorem, we know that the remainder is always strictly less than the divisor.
That is, in $a = q b + r$:

$0 \le r < \size b$
So we know that:

$b > r_1 > r_2 > \ldots > r_{n - 2} > r_{n - 1} > r_n > 0$
So the algorithm has to terminate.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Theorem $\text {2-2}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 12$: Highest common factors and Euclid's algorithm
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): $\text{A}.1$: Number theory




