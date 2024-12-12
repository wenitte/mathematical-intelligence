# 

Source: https://proofwiki.org/wiki/Derivative_of_Geometric_Sequence/Corollary

Theorem
Let $x \in \R: \size x < 1$.
Then:

$\ds \sum_{n \mathop \ge 1} n \paren {n + 1} x^{n - 1} = \frac 2 {\paren {1 - x}^3}$


Proof
We have from Power Rule for Derivatives that:

$\ds \frac {\d} {\d x} \sum_{n \mathop \ge 1} \paren {n + 1} x^n = \sum_{n \mathop \ge 1} n \paren {n + 1} x^{n - 1}$
But from Sum of Infinite Geometric Sequence:














\(\ds \sum_{n \mathop \ge 1} \paren {n + 1} x^n\)

\(=\)







\(\ds \sum_{m \mathop \ge 2} m x^{m - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop \ge 1} m x^{m - 1} - 1\)





taking into account the first term














\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {1 - x}^2} - 1\)





from main result above



The result follows by Power Rule for Derivatives and the Chain Rule for Derivatives applied to $\dfrac 1 {\paren {1 - x}^2}$.
$\blacksquare$





