# 

Source: https://proofwiki.org/wiki/Geometric_Distribution_Gives_Rise_to_Probability_Mass_Function

Theorem
Let $X$ be a discrete random variable on a probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $X$ have the geometric distribution with parameter $p$ (where $0 < p < 1$).

Then $X$ gives rise to a probability mass function.


Shifted Geometric Distribution
The same result applies to the shifted geometric distribution.

Let $Y$ be a discrete random variable on a probability space $\left({\Omega, \Sigma, \Pr}\right)$.
Let $Y$ have the shifted geometric distribution with parameter $p$ (where $0 < p < 1$).

Then $Y$ gives rise to a probability mass function.


Proof
By definition:

$\map \Omega X = \N = \set {0, 1, 2, \ldots}$
$\map \Pr {X = k} = p^k \paren {1 - p}$

Then:














\(\ds \map \Pr \Omega\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} p^k \paren {1 - p}\)





Definition of Geometric Distribution














\(\ds \)

\(=\)







\(\ds \paren {1 - p} \sum_{k \mathop \ge 0} p^k\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - p} \frac 1 {1 - p}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds 1\)









The above result is valid, because $0 < p < 1$.

So $X$ satisfies $\map \Pr \Omega = 1$, and hence the result.
$\blacksquare$





