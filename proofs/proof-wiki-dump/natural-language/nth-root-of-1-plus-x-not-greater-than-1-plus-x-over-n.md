# 

Source: https://proofwiki.org/wiki/Nth_Root_of_1_plus_x_not_greater_than_1_plus_x_over_n

Theorem
Let $x \in \R_{>0}$ be a (strictly) positive real number.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.

Then:

$\sqrt [n] {1 + x} \le 1 + \dfrac x n$


Proof
From Bernoulli's Inequality:

$\paren {1 + y}^n \ge 1 + n y$
which holds for:

$y \in \R$ where $y > -1$
$n \in \Z_{\ge 0}$
Thus it holds for $y \in \R_{> 0}$ and  $n \in \Z_{> 0}$.
So:














\(\ds 1 + n y\)

\(\le\)







\(\ds \paren {1 + y}^n\)














\(\ds \leadsto \ \ \)





\(\ds 1 + n \frac x n\)

\(\le\)







\(\ds \paren {1 + \frac x n}^n\)





substituting $y = \dfrac x n$








\(\ds \leadsto \ \ \)





\(\ds 1 + x\)

\(\le\)







\(\ds \paren {1 + \frac x n}^n\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt [n] {1 + x}\)

\(\le\)







\(\ds 1 + \dfrac x n\)





Root is Strictly Increasing



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.2$: Numbers, Powers, and Logarithms: Exercise $13$




