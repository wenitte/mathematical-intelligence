# 

Source: https://proofwiki.org/wiki/User:JoshuaZ/Sandbox

Theorem
Let $n \in \N$ be an odd perfect number.
Then $n$ has at least three distinct prime factors.

Proof
Aiming for a contradiction, suppose the contrary: that $n$ is a perfect number with at most $2$ distinct prime factor.
By Perfect Number has at least Two Distinct Prime Factors, $n$ must have exactly two distinct prime factors.
Hence let $n = p^a q^b$ where $p$ and $q$ are distinct odd  primes and where $a,b \in \N$.

By definition of perfect number:

$\map {\sigma_1} n = 2 n$
where $\map {\sigma_1} n$ denotes the divisor sum of $n$.
Hence:














\(\ds \map {\sigma_1} n\)

\(=\)







\(\ds 2 n\)





Definition of Perfect Number








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\map {\sigma_1} {n} } n\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds \map h n\)

\(=\)







\(\ds 2\)





where $\map h n$ denotes the abundancy index of $n$














\(\ds \)

\(<\)







\(\ds \dfrac p {p - 1} \dfrac q {q - 1}\)





Upper Bound for Abundancy Index














\(\ds \)

\(<\)







\(\ds \dfrac 3 2 \dfrac 5 4\)





as $\dfrac x {x - 1}$ is decreasing on $x > 1$, and $p$ and $q$ are distinct odd primes








\(\ds \leadsto \ \ \)





\(\ds 2\)

\(<\)







\(\ds \dfrac {15}{8}\)





which contradicts the fact that $2 > \dfrac {15}{8}$.




Hence the result by Proof by Contradiction.
$\blacksquare$





