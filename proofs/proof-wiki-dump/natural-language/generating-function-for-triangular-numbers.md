# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Triangular_Numbers

Theorem
Let $T_n$ denote the $n$th triangular number.

Then the generating function for $\sequence {T_n}$ is given as:

$\ds \map G z = \frac z {\paren {1 - z}^3}$


Corollary
Let $\sequence {b_n}$ be the sequence defined as:

$\forall n \in \N_{> 0}: b_n = \dfrac {\paren {n + 1} \paren {n + 2} } 2$
That is:

$\sequence {b_n}_{n \mathop \ge 0} = 1, 3, 6, 10, \ldots, \dbinom {n + 2} 2, \ldots$

Then the generating function for $\sequence {b_n}$ is given as:

$H \paren z = \dfrac 1 {\paren {1 - z}^3}$


Proof













\(\ds \frac z {\paren {1 - z}^3}\)

\(=\)







\(\ds z \paren {1 - z}^{-3}\)





Exponent Combination Laws for Negative Power














\(\ds \)

\(=\)







\(\ds z \sum_{n \mathop = 0}^\infty \dbinom {-3} n \paren {-z}^n\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds z \sum_{n \mathop = 0}^\infty \paren {-1}^n \dbinom {n + 2} n \paren {-z}^n\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds z \sum_{n \mathop = 0}^\infty \dbinom {n + 2} n z^n\)




















\(\ds \)

\(=\)







\(\ds z \sum_{n \mathop = 0}^\infty \dbinom {n + 2} 2 z^n\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dbinom {n + 2} 2 z^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \dbinom {n + 1} 2 z^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty T_n z^n\)





Corollary to Binomial Coefficient with Two














\(\ds \)

\(=\)







\(\ds 0 z^0 + \sum_{n \mathop = 1}^\infty T_n z^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty T_n z^n\)





$T_0 = 0$ by Definition 1 of Triangular Number














\(\ds \)

\(=\)







\(\ds \map G z\)





Definition of Generating Function



$\blacksquare$





