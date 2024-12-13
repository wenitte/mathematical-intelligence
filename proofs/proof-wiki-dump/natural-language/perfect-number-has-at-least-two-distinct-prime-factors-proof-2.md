# 

Source: https://proofwiki.org/wiki/Perfect_Number_has_at_least_Two_Distinct_Prime_Factors/Proof_2

Theorem
Let $n \in \N$ be a perfect number.
Then $n$ has at least two distinct prime factors.


Proof
Aiming for a contradiction, suppose the contrary: that $n$ is a perfect number with exactly $1$ prime factor.
Hence let $n = p^k$ where $p$ is prime.

By definition of perfect number:

$\map {\sigma_1} n = 2 n$
where $\map {\sigma_1} n$ denotes the divisor sum of $n$.

Hence:














\(\ds \map {\sigma_1} n\)

\(=\)







\(\ds 2 n\)





Definition of Perfect Number














\(\ds \map {\sigma_1} {p^k}\)

\(=\)







\(\ds \dfrac {p^{k + 1} - 1} {p - 1}\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds 1 + p + \cdots + p^k\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds 2 p^k\)





Definition of $n$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\map {\sigma_1} {p^k} } p^k\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds \map h n\)

\(=\)







\(\ds 2\)





where $\map h n$ denotes the abundancy index of $n$














\(\ds \)

\(<\)







\(\ds \dfrac p {p - 1}\)





Upper Bound for Abundancy Index














\(\ds \)

\(<\)







\(\ds \dfrac 3 2\)





as $\dfrac x {x - 1}$ is decreasing on $x > 1$








\(\ds \leadsto \ \ \)





\(\ds 2\)

\(<\)







\(\ds \dfrac 3 2\)





which contradicts the fact that $2 > \dfrac 3 2$




Hence the result by Proof by Contradiction.
$\blacksquare$





