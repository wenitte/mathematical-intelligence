# 

Source: https://proofwiki.org/wiki/Dixon%27s_Hypergeometric_Theorem

This proof is about Dixon's Theorem in the context of Combinatorics. For other uses, see Dixon's Theorem.



Theorem
Let $x, y, n \in \C$.
Let $n \notin \Z_{\lt 0}$.
Let $\map \Re {x + y + \dfrac n 2 + 1} > 0$.

Then:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} } $
where:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1}$ is the generalized hypergeometric function of $1$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.


Corollary 1
Let $\map \Re n < \dfrac 2 3$.
Then:

$\ds 1 + \paren {\dfrac n {1!} }^3 + \paren {\dfrac {n \paren {n + 1} } {2!} }^3 + \paren {\dfrac {n \paren {n + 1} \paren {n + 2} } {3!} }^3 + \cdots = \dfrac {6 \map \sin {\dfrac {\pi n} 2} \map \sin {\pi n} \map {\Gamma^3} {\dfrac n 2 + 1} } {\pi^2 n^2 \paren {1 + 2 \map \cos {\pi n} } \map \Gamma {\dfrac {3 n} 2 + 1} } $


Proof 1
From Dougall's Hypergeometric Theorem, we have:

$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, -z} \atop {\dfrac n 2, x + n + 1, y + n + 1, z + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} } $
where:

$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, -z} \atop {\dfrac n 2, x + n + 1, y + n + 1, z + n + 1} } \, \middle \vert \, 1}$ is the generalized hypergeometric function of $1$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} \paren {-z}^{\overline k} } { \paren {\dfrac n 2}^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} \paren {z + n + 1}^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

Setting $z = -\dfrac n 2$, we obtain:














\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} \paren {-z}^{\overline k} } { \paren {\dfrac n 2}^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} \paren {z + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} }\)





before substitution














\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} \paren {\dfrac n 2}^{\overline k} } { \paren {\dfrac n 2}^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} \paren {-\dfrac n 2 + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {-\dfrac n 2 + n + 1} \map \Gamma {x + y - \dfrac n 2 + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y - \dfrac n 2 + n + 1} \map \Gamma {x - \dfrac n 2 + n + 1} }\)





after substitution














\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac n 2}^{\overline k} \paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { \paren {\dfrac n 2}^{\overline k} \paren {\dfrac n 2 + 1}^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + \dfrac n 2 + 1} \map \Gamma {x + \dfrac n 2 + 1} }\)





reorganizing














\(\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + \dfrac n 2 + 1} \map \Gamma {x + \dfrac n 2 + 1} }\)





$\paren {\dfrac n 2}^{\overline k}$ and $\paren {\dfrac n 2 + 1}^{\overline k}$ cancel



Therefore:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } {\map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} }$
$\blacksquare$


Proof 2
From Gauss's Hypergeometric Theorem, we have:

$\map F {a, b; c; 1} = \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }$
Therefore:














\(\ds \map F {b + n, c + n; 1 + a + 2 n; 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + a + 2 n} \map \Gamma {\paren {1 + a + 2 n} - \paren {b + n} - \paren {c + n} } } {\map \Gamma {\paren {1 + a + 2 n} - \paren {b + n} } \map \Gamma {\paren {1 + a + 2 n} - \paren {c + n} } }\)





Gauss's Hypergeometric Theorem




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {1 + a + 2 n} \map \Gamma {- b - c + a + 1} } {\map \Gamma {1 + a + n - b } \map \Gamma {1 + a + n - c } }\)





simplifying



Therefore:














\(\ds \)

\(\)







\(\ds \dfrac {\map \Gamma a \map \Gamma b \map \Gamma c } {\map \Gamma {1 + a - b} \map \Gamma {1 + a - c} } \map { {}_3 \operatorname F_2} { { {a, b, c} \atop {1 + a - b, 1 + a - c} } \, \middle \vert \, 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma a \map \Gamma b \map \Gamma c } {\map \Gamma {1 + a - b} \map \Gamma {1 + a - c} } \sum_{n \mathop = 0}^\infty \dfrac {\dfrac {\map \Gamma {a + n} } {\map \Gamma a} \dfrac {\map \Gamma {b + n} } {\map \Gamma b} \dfrac {\map \Gamma {c + n} } {\map \Gamma c} } {\dfrac {\map \Gamma {1 + a - b + n} } {\map \Gamma {1 + a - b} } \dfrac {\map \Gamma {1 + a - c + n} } {\map \Gamma {1 + a - c} } } \dfrac {1^n} {n!}\)





Definition of Hypergeometric Function and Rising Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\map \Gamma {a + n} \map \Gamma {b + n} \map \Gamma {c + n} } {n! \map \Gamma {1 + a - b + n} \map \Gamma {1 + a - c + n} } \times \dfrac {\map \Gamma {1 + a + 2 n} } {\map \Gamma {1 + a + 2 n} } \times \dfrac {\map \Gamma {- b - c + a + 1} } {\map \Gamma {1 + a - b - c} }\)





multiplying by $1$ and $1^n = 1$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\map \Gamma {a + n} \map \Gamma {b + n} \map \Gamma {c + n} } {n! \map \Gamma {1 + a + 2 n} \map \Gamma {- b - c + a + 1} } \map F {b + n, c + n; 1 + a + 2 n; 1}\)





from $(1)$ above














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\map \Gamma {a + n} \map \Gamma {b + n} \map \Gamma {c + n} } {n! \map \Gamma {1 + a + 2 n} \map \Gamma {- b - c + a + 1} } \sum_{m \mathop = 0}^\infty \dfrac {\dfrac {\map \Gamma {b + n + m} } {\map \Gamma {b + n} } \dfrac {\map \Gamma {c + n + m} } {\map \Gamma {c + n} } } {\dfrac {\map \Gamma {1 + a + 2 n + m} } {\map \Gamma {1 + a + 2 n} } } \dfrac {1^m} {m!}\)





Definition of Hypergeometric Function and Rising Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \sum_{m \mathop = 0}^\infty \dfrac {\map \Gamma {a + n} \map \Gamma {b + n + m} \map \Gamma {c + n + m} } {n! m! \map \Gamma {1 + a + 2 n + m} \map \Gamma {- b - c + a + 1} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \sum_{n \mathop = 0}^p \dfrac {\map \Gamma {a + n} \map \Gamma {b + p} \map \Gamma {c + p} } {n! \paren {p - n}! \map \Gamma {1 + a + n + p} \map \Gamma {- b - c + a + 1} }\)





letting $p = m + n$, so $m = p - n$ and Product of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \sum_{n \mathop = 0}^p \dfrac {\map \Gamma {a + n} \map \Gamma {b + p} \map \Gamma {c + p} } {n! \paren {p - n}! \map \Gamma {1 + a + n + p} \map \Gamma {- b - c + a + 1} } \times \dfrac {\map \Gamma {1 + a + p} } {\map \Gamma {1 + a + p} } \times \dfrac {\map \Gamma a } {\map \Gamma a } \times \dfrac {p!} {p!} \times \paren {-1}^n \times \paren {-1}^n\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \dfrac {\map \Gamma a \map \Gamma {b + p} \map \Gamma {c + p} } {p! \map \Gamma {1 + a + p} \map \Gamma {- b - c + a + 1} } \sum_{n \mathop = 0}^p \dfrac {\paren {\dfrac {\map \Gamma {a + n} } {\map \Gamma a} } \paren {\dfrac {\paren {-1}^n p!} {\paren {p - n}!} } } {\dfrac {\map \Gamma {1 + a + n + p} } {\map \Gamma {1 + a + p} } } \dfrac {\paren {-1}^n} {n!}\)





rearranging terms














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \dfrac {\map \Gamma a \map \Gamma {b + p} \map \Gamma {c + p} } {p! \map \Gamma {1 + a + p} \map \Gamma {- b - c + a + 1} } \map F {a, -p; 1 + a + p; -1}\)





Definition of Hypergeometric Function, Rising Factorial in terms of Falling Factorial of Negative and Rising Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \dfrac {\map \Gamma a \map \Gamma {b + p} \map \Gamma {c + p} } {p! \map \Gamma {1 + a + p} \map \Gamma {- b - c + a + 1} } \dfrac {\map \Gamma {p + a + 1} \map \Gamma {\dfrac a 2 + 1} } {\map \Gamma {p + \dfrac a 2 + 1} \map \Gamma {a + 1} }\)





Kummer's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \dfrac {\map \Gamma a \map \Gamma {b + p} \map \Gamma {c + p} } {p! \map \Gamma {- b - c + a + 1} } \dfrac {\map \Gamma {\dfrac a 2 + 1} } {\map \Gamma {p + \dfrac a 2 + 1} \map \Gamma {a + 1} }\)





canceling $\map \Gamma {1 + a + p}$














\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 0}^\infty \dfrac {\map \Gamma a \map \Gamma {b + p} \map \Gamma {c + p} } {p! \map \Gamma {- b - c + a + 1} } \dfrac {\map \Gamma {\dfrac a 2 + 1} } {\map \Gamma {p + \dfrac a 2 + 1} \map \Gamma {a + 1} } \times \dfrac {\map \Gamma b} {\map \Gamma b} \times \dfrac {\map \Gamma c} {\map \Gamma c}\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma a \map \Gamma b \map \Gamma c } {\map \Gamma {a + 1} \map \Gamma {- b - c + a + 1} } \sum_{p \mathop = 0}^\infty \dfrac {\dfrac {\map \Gamma {b + p} } {\map \Gamma b } \dfrac {\map \Gamma {c + p} } {\map \Gamma c  } } {\dfrac {\map \Gamma {p + \dfrac a 2 + 1} } {\map \Gamma {\dfrac a 2 + 1} } } \dfrac 1 {p!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma a \map \Gamma b \map \Gamma c } {\map \Gamma {a + 1} \map \Gamma {- b - c + a + 1} } \map F {b, c; \dfrac a 2 + 1; 1}\)





Definition of Hypergeometric Function and Rising Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma a \map \Gamma b \map \Gamma c } {\map \Gamma {a + 1} \map \Gamma {- b - c + a + 1} } \dfrac {\map \Gamma {\dfrac a 2 + 1} \map \Gamma {- b - c + \dfrac a 2 + 1} } {\map \Gamma {- b+ \dfrac a 2 + 1} \map \Gamma {- c + \dfrac a 2 + 1} }\)





Gauss's Hypergeometric Theorem



We now have:














\(\ds \dfrac {\map \Gamma a \map \Gamma b \map \Gamma c } {\map \Gamma {- b + a + 1} \map \Gamma {- c + a + 1} } \map { {}_3 \operatorname F_2} { { {a, b, c} \atop {- b + a + 1, - c+ a + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma a \map \Gamma b \map \Gamma c } {\map \Gamma {a + 1} \map \Gamma {- b - c + a + 1} } \dfrac {\map \Gamma {\dfrac a 2 + 1} \map \Gamma {- b - c + \dfrac a 2 + 1} } {\map \Gamma {- b+ \dfrac a 2 + 1} \map \Gamma {- c + \dfrac a 2 + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \map { {}_3 \operatorname F_2} { { {a, b, c} \atop {- b + a + 1, - c + a + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {- b + a + 1} \map \Gamma {- c + a + 1} } {\map \Gamma {a + 1} \map \Gamma {- b - c + a + 1} } \dfrac {\map \Gamma {\dfrac a 2 + 1} \map \Gamma {- b - c + \dfrac a 2 + 1} } {\map \Gamma {- b+ \dfrac a 2 + 1} \map \Gamma {- c + \dfrac a 2 + 1} }\)










Substituting $a = n$, $b = -x$ and $c = -y$, we obtain:














\(\ds \map { {}_3 \operatorname F_2} { { {a, b, c} \atop {1 + a - b, 1 + a - c} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {- b + a + 1} \map \Gamma {- c + a + 1} } {\map \Gamma {a + 1} \map \Gamma {- b - c + a + 1} } \dfrac {\map \Gamma {\dfrac a 2 + 1} \map \Gamma {- b - c + \dfrac a 2 + 1} } {\map \Gamma {- b + \dfrac a 2 + 1} \map \Gamma {-c + \dfrac a 2 + 1} }\)





before substitution








\(\ds \leadsto \ \ \)





\(\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} }\)





after substitution




$\blacksquare$


Also known as
Dixon's Hypergeometric Theorem is usually known as Dixon's Theorem, but there are a number of such and similarly named theorems.
Some sources refer to it as Dixon's Summation Theorem.

The term Dixon's Hypergeometric Theorem was invented by $\mathsf{Pr} \infty \mathsf{fWiki}$ in order to identify this theorem uniquely..
As such, it is not generally expected to be seen in this context outside $\mathsf{Pr} \infty \mathsf{fWiki}$.


Examples
Example: $\map { {}_3 \operatorname F_2} {\dfrac 1 2, \dfrac 1 2, \dfrac 1 4; 1, \dfrac 5 4; 1}$
$1 + \dfrac 1 5 \paren {\dfrac 1 2}^2 + \dfrac 1 9 \paren {\dfrac {1 \times 3} {2 \times 4} }^2 + \dfrac 1 {13} \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^2 + \cdots = \dfrac {\pi^2} {4 \paren {\map \Gamma {\dfrac 3 4} }^4}$


Example: $\map { {}_3 \operatorname F_2} {\dfrac 1 2, \dfrac 1 4, \dfrac 1 4; \dfrac 5 4, \dfrac 5 4; 1}$
$1 + \dfrac 1 {5^2} \paren {\dfrac 1 2} + \dfrac 1 {9^2} \paren {\dfrac {1 \times 3} {2 \times 4} } + \dfrac 1 {13^2} \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} } + \cdots = \dfrac {\pi^{\frac 5 2} } {8 \sqrt 2 \paren {\map \Gamma {\dfrac 3 4} }^2}$


Example: $\map { {}_3 \operatorname F_2} {\dfrac 1 2, \dfrac 1 2, \dfrac 1 2; 1, 1; 1}$
$1 + \paren {\dfrac 1 2}^3 + \paren {\dfrac {1 \times 3} {2 \times 4} }^3 + \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^3 + \cdots = \dfrac \pi {\paren {\map \Gamma {\dfrac 3 4} }^4 }$


Also see
Dixon's Identity
Dougall's Hypergeometric Theorem
Gauss's Hypergeometric Theorem
Kummer's Hypergeometric Theorem
Properties of Generalized Hypergeometric Function


Source of Name
This entry was named for Alfred Cardew Dixon.


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$
Weisstein, Eric W. "Dixon's Theorem." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/DixonsTheorem.html




