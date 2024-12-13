# 

Source: https://proofwiki.org/wiki/Perfect_Number_has_at_least_Two_Distinct_Prime_Factors/Proof_1

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





\(\ds 1\)

\(=\)







\(\ds 2 p^k - \paren {p + \cdots + p^k}\)




















\(\ds \)

\(=\)







\(\ds p \paren {2 p^{k - 1} - \paren {1 + p + \cdots + p^{k - 1} } }\)





simplification








\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds 1\)










That is, $p$ is a divisor of $1$ which is a contradiction.


This article, or a section of it, needs explaining.In particular: To be rigorous, we need to specify explicitly what it contradicts: that $p > 1$ but $p \divides 1 \implies p \le 1$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence the result by Proof by Contradiction.
$\blacksquare$




