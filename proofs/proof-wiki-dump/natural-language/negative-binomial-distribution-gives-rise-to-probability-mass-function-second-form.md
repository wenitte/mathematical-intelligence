# 

Source: https://proofwiki.org/wiki/Negative_Binomial_Distribution_Gives_Rise_to_Probability_Mass_Function/Second_Form

Theorem
Let $X$ be a discrete random variable on a probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $X$ have the negative binomial distribution (second form) with parameters $n$ and $p$ ($0 < p < 1$).

Then $X$ gives rise to a probability mass function.


Proof
By definition:

$\Img X = \set {n, n + 1, n + 2, \ldots}$
$\map \Pr {X = k} = \dbinom {k - 1} {n - 1} p^n \paren {1 - p}^{k - n}$

Then:














\(\ds \map \Pr \Omega\)

\(=\)







\(\ds \sum_{k \mathop \ge n} \binom {k - 1} {n - 1} p^n \paren {1 - p}^{k - n}\)




















\(\ds \)

\(=\)







\(\ds p^n \sum_{j \mathop \ge 0} \binom {n + j - 1} j \paren {1 - p}^j\)





substituting $j = k - n$














\(\ds \)

\(=\)







\(\ds p^n \sum_{j \mathop \ge 0} \binom {-n} {j} \paren {p - 1}^j\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds p^n \paren {1 - \paren {p - 1} }^{-n}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds 1\)










So $X$ satisfies $\map \Pr \Omega = 1$, and hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.2$: Examples




