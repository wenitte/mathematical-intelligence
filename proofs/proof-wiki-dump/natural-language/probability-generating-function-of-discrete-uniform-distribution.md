# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Discrete_Uniform_Distribution

Theorem
Let $X$ be a discrete random variable with the discrete uniform distribution with parameter $n$.

Then the p.g.f. of $X$ is:

$\map {\Pi_X} s = \dfrac {s \paren {1 - s^n} } {n \paren {1 - s} }$


Proof
From the definition of p.g.f:

$\ds \map {\Pi_X} s = \sum_{x \mathop \ge 0} \map {p_X} x s^x$
From the definition of the discrete uniform distribution:

$\forall k \in \N, 1 \le k \le n: \map {p_X} k = \dfrac 1 n$
So:














\(\ds \map {\Pi_X} s\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \frac 1 n s^k\)




















\(\ds \)

\(=\)







\(\ds \frac s n \sum_{k \mathop = 0}^{n - 1} s^k\)




















\(\ds \)

\(=\)







\(\ds \frac s n \paren {\frac {1 - s^n} {1 - s} }\)





Sum of Geometric Sequence



Hence the result.
$\blacksquare$





