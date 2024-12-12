# 

Source: https://proofwiki.org/wiki/Cosine_Function_is_Absolutely_Convergent/Complex_Case/Proof_1

Theorem
Let $z \in \C$ be a complex number.
Let $\cos z$ be the cosine of $z$.

Then:

$\cos z$ is absolutely convergent for all $z \in \C$.
Proof
The definition of the complex cosine function is:

$\ds \cos z = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {z^{2 n} } {\paren {2 n}!}$
By definition of absolutely convergent complex series, we must show that the power series

$\ds \sum_{n \mathop = 0}^\infty \size {\paren {-1}^n \frac {z^{2 n} } {\paren {2 n}!} }$
is convergent.
We have














\(\ds \sum_{n \mathop = 0}^\infty \size {\paren {-1}^n \frac {z^{2 n} } {\paren {2 n}!} }\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\size z^{2 n} } {\paren {2 n}!}\)




















\(\ds \)

\(\leq\)







\(\ds \sum_{n \mathop = 0}^\infty \paren{ \frac {\size z^{2 n} } {\paren {2 n}!} + \frac {\size z^{2 n + 1} } {\paren {2 n + 1}!} }\)





Squeeze Theorem for Complex Sequences














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\size z^n} {n!}\)





changing indices














\(\ds \)

\(=\)







\(\ds \exp \size z\)





Taylor Series Expansion for Exponential Function



The result follows from Squeeze Theorem for Complex Sequences.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 1.5$




