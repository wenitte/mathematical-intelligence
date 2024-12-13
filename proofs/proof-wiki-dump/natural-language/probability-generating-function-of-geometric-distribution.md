# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Geometric_Distribution

Theorem
Let $X$ be a discrete random variable with the geometric distribution with parameter $p$.

Then the p.g.f. of $X$ is:

$\map {\Pi_X} s = \dfrac q {1 - p s}$
where $q = 1 - p$.


Proof
From the definition of p.g.f:

$\ds \map {\Pi_X} s = \sum_{x \mathop \ge 0} \map {p_X} x s^x$
From the definition of the geometric distribution:

$\forall k \in \N, k \ge 0: \map {p_X} k = q p^k$
So:














\(\ds \map {\Pi_X} s\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} q p^k s^k\)




















\(\ds \)

\(=\)







\(\ds q \sum_{k \mathop \ge 0} \paren {p s}^k\)




















\(\ds \)

\(=\)







\(\ds q \frac 1 {1 - p s}\)





Sum of Infinite Geometric Sequence



Hence the result.
$\blacksquare$





