# 

Source: https://proofwiki.org/wiki/Cosine_Function_is_Absolutely_Convergent/Complex_Case



Theorem
The complex cosine function $\cos: \C \to \C$ is absolutely convergent.


Proof 1
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


Proof 2
Radius of Convergence of Power Series Expansion for Cosine Function shows that the radius of convergence of the complex cosine function is infinite.
Then Existence of Radius of Convergence of Complex Power Series shows that the complex cosine function is absolutely convergent.

$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 1.5$




