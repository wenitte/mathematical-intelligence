# 

Source: https://proofwiki.org/wiki/Prime_whose_Divisor_Sum_is_Square_is_3

Theorem
There is exactly $1$ prime number whose divisor sum is a square number, and that is $3$:

$\map {\sigma_1} 3 = 4$


Proof
That $\map {\sigma_1} 3 = 4$ is shown at $\sigma_1$ of $3$.
It remains to be shown there are no more.

Let $n \in \N$ such that $\map {\sigma_1} n$ is square.

$\map {\sigma_1} n = m^2$
Suppose $n$ is prime.
From Divisor Sum of Prime Number:

$\map {\sigma_1} n = n + 1$
So we have:














\(\ds n + 1\)

\(=\)







\(\ds m^2\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds m^2 - 1\)




















\(\ds \)

\(=\)







\(\ds \paren {m + 1} \paren {m - 1}\)





Difference of Two Squares



But $\paren {m + 1} \paren {m - 1}$ is prime if and only if $m - 1 = 1$, that is, $m = 2$.
That is the case covered by $\map {\sigma_1} 3 = 4$.
Hence the result.
$\blacksquare$





