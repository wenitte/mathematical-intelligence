# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Harmonic_Numbers

Theorem
The harmonic numbers have the power series expansion:














\(\ds \map H x\)

\(=\)







\(\ds \sum_{k \mathop = 2}^{\infty} \paren {-1}^k \map \zeta k x^{k - 1}\)




















\(\ds \)

\(=\)







\(\ds \map \zeta 2 x - \map \zeta 3 x^2 + \map \zeta 4 x^3 - \map \zeta 5 x^4 + \cdots\)









where $\zeta$ denotes the Riemann zeta function.

This is valid for all $x \in \C$ such that $\size x < 1$.


Proof













\(\ds \map H x\)

\(=\)







\(\ds \gamma + \frac {\map {\Gamma'} {x + 1} } {\map \Gamma {x + 1} }\)





Extension of Harmonic Number to Non-Integer Argument














\(\ds \)

\(=\)







\(\ds \gamma - \gamma + \sum_{m \mathop = 1}^\infty \paren {\frac 1 m - \frac 1 {x + m} }\)





Reciprocal times Derivative of Gamma Function














\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^\infty \paren {\frac 1 m - \frac 1 {x + m} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^\infty \paren {\frac x m - \frac x {x + m} } \dfrac 1 x\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^\infty \paren {\frac x m + \paren {\frac m {x + m} - \frac {x + m} {x + m} } } \dfrac 1 x\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^\infty \paren {\frac x m + \paren {\frac m {x + m} - 1} } \dfrac 1 x\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^\infty \paren {\frac x m + \paren {\frac 1 {1 - \paren {-\dfrac x m } } } - 1} \dfrac 1 x\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^\infty \paren {\frac x m + \paren {\sum_{k \mathop = 0}^\infty \paren {-\dfrac x m}^k } - 1} \dfrac 1 x\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^\infty \paren {\sum_{k \mathop = 2}^\infty \paren {-\dfrac x m}^k } \dfrac 1 x\)





reindexing the sum














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 2}^{\infty} \paren {-1}^k \paren {\sum_{m \mathop = 1}^\infty \dfrac 1 {m^k} } x^{k - 1}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 2}^{\infty} \paren {-1}^k \map \zeta k x^{k - 1}\)





Definition of Riemann Zeta Function




Our reliance upon the Sum of Infinite Geometric Sequence above where $m = 1$ implies $\size x < 1$, where $\size x$ denotes the complex modulus of $x$.
When $m = 1$ and $x = 1$, we have Grandi's Series, a well known divergent series.
$\blacksquare$


Sources
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $8$. Analogues of the Gamma Function




