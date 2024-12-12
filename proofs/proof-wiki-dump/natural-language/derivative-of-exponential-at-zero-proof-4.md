# 

Source: https://proofwiki.org/wiki/Derivative_of_Exponential_at_Zero/Proof_4

Theorem
Let $\exp x$ be the exponential of $x$ for real $x$.

Then:

$\ds \lim_{x \mathop \to 0} \frac {\exp x - 1} x = 1$


Proof
As we consider $x \to 0$, we may assume that $0 < \size x \le 1$.
Then:














\(\ds \size {\frac {e^x - 1} x - 1}\)

\(=\)







\(\ds \size {\frac {e^x - 1 - x} x}\)




















\(\ds \)

\(=\)







\(\ds \size {\frac {\sum_{n \mathop = 0}^\infty \frac {x^n} {n!} - 1 - x} x }\)





Definition of Exponential Function














\(\ds \)

\(=\)







\(\ds \size {x \sum_{n \mathop = 2}^\infty \frac {x^{n-2} } {n !} }\)




















\(\ds \)

\(\le\)







\(\ds \size x \sum_{n \mathop = 2}^\infty \frac 1 {n !}\)





as $\size x \le 1$














\(\ds \)

\(\le\)







\(\ds \size x \sum_{n \mathop = 0}^\infty \frac 1 {n !}\)




















\(\ds \)

\(=\)







\(\ds \size x e\)





Definition of Euler's Number as Limit of Series














\(\ds \)

\(\to\)







\(\ds 0\)





as $x \to 0$



$\blacksquare$





