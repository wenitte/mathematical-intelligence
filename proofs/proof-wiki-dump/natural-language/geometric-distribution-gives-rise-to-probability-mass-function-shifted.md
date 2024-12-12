# 

Source: https://proofwiki.org/wiki/Geometric_Distribution_Gives_Rise_to_Probability_Mass_Function/Shifted

Theorem
Let $Y$ be a discrete random variable on a probability space $\left({\Omega, \Sigma, \Pr}\right)$.
Let $Y$ have the shifted geometric distribution with parameter $p$ (where $0 < p < 1$).

Then $Y$ gives rise to a probability mass function.


Proof
By definition:

$\Omega \left({Y}\right) = \N_{>0} = \left\{{1, 2, 3, \ldots}\right\}$
$\Pr \left({Y = k}\right) = p \left({1 - p}\right)^{k-1}$

Then:














\(\ds \Pr \left({\Omega}\right)\)

\(=\)







\(\ds \sum_{k \mathop \ge 1} p \left({1 - p}\right)^{k-1}\)





by definition of shifted geometric distribution














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop \ge 0} p \left({1 - p}\right)^j\)





putting $j = k-1$














\(\ds \)

\(=\)







\(\ds 1\)





Geometric Distribution Gives Rise to Probability Mass Function




So $Y$ satisfies $\Pr \left({\Omega}\right) = 1$, and hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.2$: Examples




