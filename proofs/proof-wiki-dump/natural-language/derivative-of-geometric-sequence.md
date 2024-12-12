# 

Source: https://proofwiki.org/wiki/Derivative_of_Geometric_Sequence



Theorem
Let $x \in \R: \size x < 1$.
Then:

$\ds \sum_{n \mathop \ge 1} n x^{n - 1} = \frac 1 {\paren {1 - x}^2}$


Corollary
$\ds \sum_{n \mathop \ge 1} n \paren {n + 1} x^{n - 1} = \frac 2 {\paren {1 - x}^3}$


Proof
We have from Power Rule for Derivatives that:

$\ds \frac \d {\d x} \sum_{n \mathop \ge 1} x^n = \sum_{n \mathop \ge 1} n x^{n - 1}$
But from Sum of Infinite Geometric Sequence: Corollary:

$\ds \sum_{n \mathop \ge 1} x^n = \frac x {1 - x}$
The result follows by Power Rule for Derivatives and the Chain Rule for Derivatives applied to $\dfrac x {1 - x}$.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.4$: Expectation: Example $24$: Footnote




