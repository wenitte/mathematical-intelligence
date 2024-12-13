# 

Source: https://proofwiki.org/wiki/Negative_Binomial_Distribution_Gives_Rise_to_Probability_Mass_Function/First_Form

Theorem
Let $X$ be a discrete random variable on a probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $X$ have the negative binomial distribution (first form) with parameters $n$ and $p$ ($0 < p < 1$).

Then $X$ gives rise to a probability mass function.


Proof
By definition:

$\Img X = \set {0, 1, 2, \ldots}$
$\map \Pr {X = k} = \dbinom {n + k - 1} {n - 1} p^k \paren {1 - p}^n$

Then:














\(\ds \map \Pr \Omega\)

\(=\)







\(\ds \sum_{k \mathop \ge n} \binom {n + k - 1} {n - 1} p^k \paren {1 - p}^n\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - p}^n \sum_{k \mathop \ge n} \binom {n + k - 1} k p^k\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \paren {1 - p}^n \sum_{j \mathop \ge 0} \binom {-n} k p^k\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \paren {1 - p}^n p^{-n}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds 1\)










So $X$ satisfies $\map \Pr \Omega = 1$, and hence the result.
$\blacksquare$





