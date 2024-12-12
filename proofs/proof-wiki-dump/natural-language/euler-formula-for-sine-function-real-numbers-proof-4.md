# 

Source: https://proofwiki.org/wiki/Euler_Formula_for_Sine_Function/Real_Numbers/Proof_4

Theorem













\(\ds \sin x\)

\(=\)







\(\ds x \prod_{n \mathop = 1}^\infty \paren {1 - \frac {x^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds x \paren {1 - \dfrac {x^2} {\pi^2} } \paren {1 - \dfrac {x^2} {4 \pi^2} } \paren {1 - \dfrac {x^2} {9 \pi^2} } \dotsm\)









for all $x \in \R$.


Proof
For $x \in \R$ and $n \in \N_{> 0}$, let:

$\map {f_n} x = \dfrac 1 2 \paren {\paren {1 + \dfrac x n}^n - \paren {1 - \dfrac x n}^n }$
Then $\map {f_n} x = 0$ if and only if:














\(\ds \paren {1 + \frac x n}^n\)

\(=\)







\(\ds \paren {1 - \frac x n}^n\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 1 + \frac x n\)

\(=\)







\(\ds \paren {1 - \frac x n} e^{2 \pi i \frac k n}\)





for $k \in \Z$








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds n \frac {e^{2 \pi i \frac k n} - 1} {e^{2 \pi i \frac k n} + 1}\)




















\(\ds \)

\(=\)







\(\ds n i \, \map \tan {\frac {k \pi} n }\)





Euler's Tangent Identity




Hence the roots of $\map {f_{2 m + 1} } x$ are:

$\paren {2 m + 1} i \, \map \tan {\dfrac {k \pi} {2 m + 1} }$
for $-m \le k \le m$.

Observe that $\map {f_{2 m + 1} } x$ is a polynomial of degree $2 m + 1$. 
Then for some constant $C$, we have:














\(\ds \map {f_{2 m + 1} } x\)

\(=\)







\(\ds C x \prod_{\substack {k \mathop = - m \\ k \mathop \ne 0} }^m \paren {1 - \frac x {\paren {2 m + 1} i \, \map \tan {k \pi / \paren {2 m + 1} } } }\)





Polynomial Factor Theorem














\(\ds \)

\(=\)







\(\ds C x \prod_{k \mathop = 1}^m \paren {1 + \frac {x^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } }\)





Tangent Function is Odd




It can be seen from the Binomial Theorem that the coefficient of $x$ in $\map {f_{2 m + 1} } x$ is $1$.
Hence $C = 1$, and we obtain:

$\ds \map {f_{2 m + 1} } x = x \prod_{k \mathop = 1}^m \paren {1 + \frac {x^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } }$

Let $l < m$.
Then:

$\ds x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } \le \map {f_{2 m + 1} } x$
Taking the limit as $m \to \infty$ we have:














\(\ds \lim_{m \mathop \to \infty} x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {k^2 \pi^2} \paren {\frac {k \pi / \paren {2 m + 1} } {\map \tan {k \pi / \paren {2 m + 1} } } }^2 }\)

\(\le\)







\(\ds \frac 1 2 \paren {e^x - e^{-x} }\)





Definition of Exponential Function








\(\ds \leadsto \ \ \)





\(\ds x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {k^2 \pi^2} }\)

\(\le\)







\(\ds \sinh x\)





Limit of $\dfrac {\tan x} x$ at Zero and Definition of Hyperbolic Sine




By Tangent Inequality, we have:

$\map \tan {\dfrac {k \pi} {2 m + 1} } \ge \dfrac {k \pi} {2 m + 1}$
and hence:

$\ds \map {f_{2 l + 1} } x \le x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {k^2 \pi^2} } \le \sinh x$

Taking the limit as $l \to \infty$, we have by the Squeeze Theorem:

$\ds x \prod_{k \mathop = 1}^\infty \paren {1 + \frac {x^2} {k^2 \pi^2} } = \sinh x$
Substituting $x \mapsto i x$, we obtain:

$\ds \sin x = x \prod_{k \mathop = 1}^\infty \paren {1 - \frac {x^2} {k^2 \pi^2} }$
$\blacksquare$





