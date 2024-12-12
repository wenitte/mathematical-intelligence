# 

Source: https://proofwiki.org/wiki/Euler_Formula_for_Sine_Function/Complex_Numbers/Proof_2

Theorem













\(\ds \sin z\)

\(=\)







\(\ds z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {z^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds z \paren {1 - \dfrac {z^2} {\pi^2} } \paren {1 - \dfrac {z^2} {4 \pi^2} } \paren {1 - \dfrac {z^2} {9 \pi^2} } \dotsm\)









for all $z \in \C$.


Proof
For $z \in \C$ and $n \in \N_{> 0}$, let:

$\map {f_n} z = \dfrac 1 2 \paren {\paren {1 + \dfrac z n}^n - \paren {1 - \dfrac z n}^n}$
Then $\map {f_n} z = 0$ if and only if:














\(\ds \paren {1 + \dfrac z n}^n\)

\(=\)







\(\ds \paren {1 - \dfrac z n}^n\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 1 + \frac z n\)

\(=\)







\(\ds \paren {1 - \dfrac z n} e^{2 \pi i \frac k n}\)





for $k \in \Z$








\(\ds \leadstoandfrom \ \ \)





\(\ds z\)

\(=\)







\(\ds n \frac {e^{2 \pi i \frac k n} - 1} {e^{2 \pi i \frac k n} + 1}\)




















\(\ds \)

\(=\)







\(\ds n i \map \tan {\frac {k \pi} n}\)





Euler's Tangent Identity



Let $n = 2 m + 1$.
Then the roots of $\map {f_{2 m + 1} } z$ are:

$\paren {2 m + 1} i \map \tan {\dfrac {k \pi} {2 m + 1} }$
for $- m \le k \le m$.

Observe that $\map {f_{2 m + 1} } z$ is a polynomial of degree $2 m + 1$. 
Then for some constant $C$, we have:














\(\ds \map {f_{2 m + 1} } z\)

\(=\)







\(\ds C z \prod_{\substack {k \mathop = - m \\ k \mathop \ne 0} }^m \paren {1 - \frac z {\paren {2 m + 1} i \map \tan {k \pi / \paren {2 m + 1} } } }\)





Polynomial Factor Theorem














\(\ds \)

\(=\)







\(\ds C z \prod_{k \mathop = 1}^m \paren {1 + \frac {z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } }\)





Tangent Function is Odd



It can be seen from the Binomial Theorem that the coefficient of $z$ in $\map {f_{2 m + 1} } z$ is $1$.
Hence $C = 1$, and we obtain:

$\ds \map {f_{2 m + 1} } z = z \prod_{k \mathop = 1}^m \paren {1 + \frac {z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } }$

First we consider $z = x$ where $x$ is a non-negative real number.
Let $l < m$.
Then:

$\ds x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } \le \map {f_{2 m + 1} } x$
Taking the limit as $m \to \infty$ we have:














\(\ds \lim_{m \mathop \to \infty} x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {k^2 \pi^2} \paren {\frac {k \pi / \paren {2 m + 1} } {\map \tan {k \pi / \paren {2 m + 1} } } }^2}\)

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
hence:

$\ds \map {f_{2 l + 1} } x \le x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {k^2 \pi^2} } \le \sinh x$
Taking the limit as $l \to \infty$ we have by Squeeze Theorem:

$(1): \quad \ds x \prod_{k \mathop = 1}^\infty \paren {1 + \frac {x^2} {k^2 \pi^2} } = \sinh x$

Now let $1 < l < m$.
By Complex Modulus of Product of Complex Numbers and the Triangle Inequality, we can deduce:














\(\ds \)

\(\)







\(\ds \cmod {\map {f_{2 m + 1} } z - z \prod_{k \mathop = 1}^l \paren {1 + \frac {z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } }\)




















\(\ds \)

\(=\)







\(\ds \cmod z \cmod {\prod_{k \mathop = 1}^l \paren {1 + \frac {z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } } \cdot \cmod {\prod_{k \mathop = l + 1}^m \paren {1 + \frac {z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } - 1}\)




















\(\ds \)

\(\le\)







\(\ds \cmod z \paren {\prod_{k \mathop = 1}^l \paren {1 + \frac {\cmod z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } } \cdot \paren {\prod_{k \mathop = l + 1}^m \paren {1 + \frac {\cmod z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } - 1}\)




















\(\ds \)

\(=\)







\(\ds \map {f_{2 m + 1} } {\cmod z} - \cmod z \prod_{k \mathop = 1}^l \paren {1 + \frac {\cmod z^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } }\)









Taking the limit as $m \to \infty$ we have:

$\ds \cmod {\sinh z - z \prod_{k \mathop = 1}^l \paren {1 + \frac {z^2} {k^2 \pi^2} } } \le \sinh \cmod z - \cmod z \prod_{k \mathop = 1}^l \paren {1 + \frac {\cmod z^2} {k^2 \pi^2} }$

Now take the limit as $l \to \infty$.
By $(1)$ and Squeeze Theorem, we have:

$\ds \sinh z = z \prod_{k \mathop = 1}^\infty \paren {1 + \frac {z^2} {k^2 \pi^2} }$
Finally, substituting $z \mapsto i z$, we obtain:

$\ds \sin z = z \prod_{k \mathop = 1}^\infty \paren {1 - \frac {z^2} {k^2 \pi^2} }$
$\blacksquare$





