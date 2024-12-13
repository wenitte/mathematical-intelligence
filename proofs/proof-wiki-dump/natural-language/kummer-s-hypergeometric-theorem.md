# 

Source: https://proofwiki.org/wiki/Kummer%27s_Hypergeometric_Theorem



Theorem
Let $x, n \in \C$.
Let $n \notin \Z_{< 0}$.
Let $\map \Re {x + 1} > 0$.

Then:

$\map F {n, -x; x + n + 1; -1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } {\map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {n + 1} }$
where:

$\map F {n, -x; x + n + 1; -1}$ is the Gaussian hypergeometric function of $-1$
$\map \Gamma {n + 1} = n!$ is the Gamma function.


Proof 1
First we note the definition of Gaussian hypergeometric function:

$\map F {n, -x; x + n + 1; -1} = \ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} } {\paren {x + n + 1}^{\overline k} } \dfrac {\paren {-1}^k} {k!}$
where $x^{\overline k}$ denotes the $k$th rising factorial power of $x$.

Two lemmata:

Lemma 1
$\ds \lim_{y \mathop \to \infty} \dfrac {y^{\underline k} } {\paren {y + n + 1}^{\overline k} } = 1$
$\Box$


Lemma 2
$\ds \lim_{y \mathop \to \infty} \dfrac {\paren {y + \dfrac n 2 + 1}^{\overline x} } {\paren {y + n + 1}^{\overline x} } = 1$
$\Box$

We use Dixon's Hypergeometric Theorem:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} }$
where $\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1}$ is the generalized hypergeometric function of $1$.

So:














\(\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} }\)





Dixon's Hypergeometric Theorem








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} }\)





Definition of Generalized Hypergeometric Function








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} } { \paren {x + n + 1}^{\overline k} } \dfrac {\paren {-y}^{\overline k} } {\paren {y + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + \dfrac n 2 + 1} } \times \dfrac {\map \Gamma {y + n + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {x + y + n + 1} \map \Gamma {y + \dfrac n 2 + 1} }\)





reorganizing both sides: isolating $y$








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren{-x}^{\overline k} } { \paren {x + n + 1}^{\overline k} } \dfrac {y^{\underline k} } {\paren {y + n + 1}^{\overline k} } \dfrac {\paren {-1}^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + \dfrac n 2 + 1} } \times \dfrac {\map \Gamma {y + n + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {x + y + n + 1} \map \Gamma {y + \dfrac n 2 + 1} }\)





on the left hand side: Rising Factorial in terms of Falling Factorial of Negative








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren{-x}^{\overline k} } { \paren {x + n + 1}^{\overline k} } \dfrac {y^{\underline k} } {\paren {y + n + 1}^{\overline k} } \dfrac {\paren {-1}^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + \dfrac n 2 + 1} } \times \dfrac {\paren {y + \dfrac n 2 + 1}^{\overline x} } {\paren {y + n + 1}^{\overline x} }\)





on the right hand side: Rising Factorial as Quotient of Factorials








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac {n^{\overline k} \paren{-x}^{\overline k} } {\paren {x + n + 1}^{\overline k} } \paren 1 \dfrac {\paren {-1}^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } {\map \Gamma {n + 1} \map \Gamma {x + \dfrac n 2 + 1} } \times 1\)





Lemma 1 and Lemma 2: letting $y \to \infty$








\(\ds \leadsto \ \ \)





\(\ds \map F {n, -x; x + n + 1; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } {\map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {n + 1} }\)





Definition of Gaussian Hypergeometric Function



$\blacksquare$


Proof 2
From Euler's Integral Representation of Hypergeometric Function, we have:

$\ds \map F {a, b; c; x} = \dfrac {\map \Gamma c } {\map \Gamma b \map \Gamma {c - b} } \int_0^1 t^{b - 1} \paren {1 - t}^{c - b - 1} \paren {1 - x t}^{- a} \rd t$
Where $a, b, c \in \C$.
and $\size x < 1$
and $\map \Re c > \map \Re b > 0$.
Since Euler's Integral Representation only applies where $\size x < 1$, we will determine the limit of the integral as $x \to -1$.

By symmetry, we have:

$\ds \map F {n, -x; x + n + 1; -1} = \ds \map F {-x, n; x + n + 1; -1}$
Therefore:














\(\ds \map F {-x, n; x + n + 1; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + n + 1 - n } } \int_0^1 t^{n - 1} \paren {1 - t}^{x + n + 1 - n - 1} \paren {1 - \paren {-1} t}^{- \paren {-x} } \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + 1 } } \int_0^1 t^{n - 1} \paren {1 - t}^x \paren {1 + t}^x \rd t\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + 1 } } \int_0^1 t^{n - 1} \paren {1 - t^2}^x \rd t\)





simplifying further: $\paren {1 - t^2} = \paren {1 - t}\paren {1 + t}$



We now apply a u-substitution:
Let $u = t^2$














\(\ds u\)

\(=\)







\(\ds t^2\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(=\)







\(\ds \sqrt u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d t}\)

\(=\)







\(\ds 2 t\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \d t\)

\(=\)







\(\ds \frac {\d u} {2 t}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \frac {\d u} {2 \sqrt u}\)









Substituting back into our equation, we have:














\(\ds \map F {-x, n; x + n + 1; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + 1 } } \int_0^1 \paren {\sqrt u}^{n - 1} \paren {1 - u}^x \frac {\d u} {2 \sqrt u}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + 1 } } \int_0^1 u^{\frac n 2 - 1} \paren {1 - u}^x \d u\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \dfrac {\map \Gamma {x + n + 1} } {\map \Gamma n \map \Gamma {x + 1 } } \dfrac {\map \Gamma {\dfrac n 2 } \map \Gamma {x + 1 } } {\map \Gamma {\dfrac n 2 + x + 1 } }\)





Definition of Beta Function








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac 1 2 \map \Gamma {x + n + 1} } {\map \Gamma n } \dfrac {\map \Gamma {\dfrac n 2 } } {\map \Gamma {\dfrac n 2 + x + 1 } }\)





simplifying and canceling $\map \Gamma {x + 1 }$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac n 2 \map \Gamma {x + n + 1} } {n \map \Gamma n } \dfrac {\map \Gamma {\dfrac n 2 } } {\map \Gamma {\dfrac n 2 + x + 1 } }\)





multiplying by $1$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } {\map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {n + 1} }\)





Definition of Gamma Function



$\blacksquare$


Proof 3
From Kummer's Quadratic Transformation, we have:

$\ds \map F {a, b; 1 + a - b; z} = \paren {1 - z}^{-a} \map F {\dfrac a 2, \dfrac {1 + a} 2 - b; 1 + a - b; \dfrac {-4 z} {\paren {1 - z }^2} }$
Let $z \to -1$ and we have:

$\ds \map F {a, b; 1 + a - b; -1} = 2^{-a} \map F {\dfrac a 2, \dfrac {1 + a} 2 - b; 1 + a - b; 1 }$
From Gauss's Hypergeometric Theorem, we have:

$\map F {a, b; c; 1} = \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }$
Therefore, the right hand side becomes:














\(\ds 2^{-a} \map F {\dfrac a 2, \dfrac {1 + a} 2 - b; 1 + a - b; 1 }\)

\(=\)







\(\ds 2^{-a} \dfrac {\map \Gamma {1 + a - b} \map \Gamma {\paren {1 + a - b} - \dfrac a 2 - \paren {\dfrac {1 + a} 2 - b} } } {\map \Gamma {\paren {1 + a - b} - \dfrac a 2} \map \Gamma {\paren {1 + a - b} - \paren {\dfrac {1 + a} 2 - b} } }\)





Gauss's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + a - b} } {\map \Gamma {1 + \dfrac a 2 - b} } \paren {2^{-a} \dfrac {\map \Gamma {\dfrac 1 2 } } {\map \Gamma {\dfrac {1 + a} 2 } } }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + a - b} } {\map \Gamma {1 + \dfrac a 2 - b} } \paren {\dfrac {\map \Gamma {\dfrac a 2 + 1 } } {\map \Gamma {a + 1 } } }\)





Legendre's Duplication Formula














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + a - b} \map \Gamma {\dfrac a 2 + 1 } } {\map \Gamma {1 + \dfrac a 2 - b} \map \Gamma {a + 1 } }\)





simplifying



Substituting $a = n$ and $b = -x$, we obtain:














\(\ds \map F {a, b; 1 + a - b; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + a - b} \map \Gamma {\dfrac a 2 + 1 } } {\map \Gamma {1 + \dfrac a 2 - b} \map \Gamma {a + 1 } }\)





before substitution








\(\ds \leadsto \ \ \)





\(\ds \map F {n, -x; 1 + n + x; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + n + x} \map \Gamma {\dfrac n 2 + 1 } } {\map \Gamma {1 + \dfrac n 2 + x} \map \Gamma {n + 1 } }\)





after substitution



$\blacksquare$


Examples
Example: $\map F {\dfrac 1 2, \dfrac 1 2; 1; -1}$
$1 - \paren {\dfrac 1 2}^2 + \paren {\dfrac {1 \times 3} {2 \times 4} }^2 - \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^2 + \cdots = \dfrac {\sqrt \pi} {\sqrt 2 \paren {\map \Gamma {\dfrac 3 4} }^2 }$


Example: $\map F {\dfrac 1 3, \dfrac 1 3; 1; -1}$
$1 - \paren {\dfrac 1 3}^2 + \paren {\dfrac {1 \times 4} {3 \times 6} }^2 - \paren {\dfrac {1 \times 4 \times 7} {3 \times 6 \times 9} }^2 + \cdots = \dfrac {\pi} {\paren {\map \Gamma {\dfrac 5 6} }^2 \map \Gamma {\dfrac 1 3} }$


Example: $\map F {\dfrac 2 5, \dfrac 1 {10}; \dfrac {13} {10}; -1}$
$1 - \paren {\dfrac {\paren {2} \paren {1} } {\paren {5} \paren {13} } } + \paren {\dfrac {\paren {2 \times 7} \paren {1 \times 11} } {\paren {5 \times 10} \paren {13 \times 23} } } - \paren {\dfrac {\paren {2 \times 7 \times 12} \paren {1 \times 11 \times 21} } {\paren {5 \times 10 \times 15} \paren {13 \times 23 \times 33} } } + \cdots = \dfrac {1944^{\frac 1 5} \pi^{\frac 3 2} } {\phi \map \Gamma {\dfrac 1 {10} } \paren {\map \Gamma {\dfrac 7 {10} } }^2 }$


Also see
Dixon's Hypergeometric Theorem
Gauss's Hypergeometric Theorem
Properties of Generalized Hypergeometric Function


Source of Name
This entry was named for Ernst Eduard Kummer.


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$
Weisstein, Eric W. "Kummer's Theorem." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/KummersTheorem.html




