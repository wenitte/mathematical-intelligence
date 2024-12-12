# 

Source: https://proofwiki.org/wiki/Expectation_is_Linear/Discrete

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be random variables on $\struct {\Omega, \Sigma, \Pr}$.
Let $\expect X$ denote the expectation of $X$.

Then:

$\forall \alpha, \beta \in \R: \expect {\alpha X + \beta Y} = \alpha \, \expect X + \beta \, \expect Y$


Proof
Follows directly from Expectation of Function of Joint Probability Mass Distribution, thus:















\(\ds \expect {\alpha X + \beta Y}\)

\(=\)







\(\ds \sum_x \sum_y \paren {\alpha x + \beta y} \, \map \Pr {X = x, Y = y}\)





Expectation of Function of Joint Probability Mass Distribution














\(\ds \)

\(=\)







\(\ds \alpha \sum_x x \sum_y \map \Pr {X = x, Y = y}\)




















\(\ds \)

\(+\)







\(\ds \beta \sum_y y \sum_x \map \Pr {X = x, Y = y}\)




















\(\ds \)

\(=\)







\(\ds \alpha \sum_x x \, \map \Pr {X = x} + \beta \sum_y y \, \map \Pr {Y = y}\)





Definition of Marginal Probability Mass Function














\(\ds \)

\(=\)







\(\ds \alpha \, \expect X + \beta \, \expect Y\)





Definition of Expectation



$\blacksquare$





