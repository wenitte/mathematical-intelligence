# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Shifted_Geometric_Distribution

Theorem
Let $X$ be a discrete random variable with the shifted geometric distribution with parameter $p$.

Then the p.g.f. of $X$ is:

$\map {\Pi_X} s = \dfrac {p s} {1 - q s}$
where $q = 1 - p$.


Proof
From the definition of p.g.f:

$\ds \map {\Pi_X} s = \sum_{x \mathop \ge 0} \map {p_X} x s^x$
From the definition of the shifted geometric distribution:

$\forall k \in \N, k \ge 1: \map {p_X} k = p q^{k - 1}$
So:














\(\ds \map {\Pi_X} s\)

\(=\)







\(\ds \sum_{k \mathop \ge 1} p q^{k - 1} s^k\)




















\(\ds \)

\(=\)







\(\ds p s \sum_{k \mathop \ge 1} \paren {q s}^{k - 1}\)




















\(\ds \)

\(=\)







\(\ds p s \sum_{j \mathop \ge 0} \paren {q s}^j\)





change of index














\(\ds \)

\(=\)







\(\ds p s \frac 1 {1 - q s}\)





Sum of Infinite Geometric Sequence



Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.2$: Integer-valued random variables: Example $9$




