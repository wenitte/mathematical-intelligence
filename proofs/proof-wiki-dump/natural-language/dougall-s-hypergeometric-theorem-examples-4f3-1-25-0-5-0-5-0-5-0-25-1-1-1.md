# 

Source: https://proofwiki.org/wiki/Dougall%27s_Hypergeometric_Theorem/Examples/4F3(1.25,0.5,0.5,0.5;0.25,1,1;-1)

Example of Use of Dougall's Hypergeometric Theorem
$1 - 5 \paren {\dfrac 1 2}^3 + 9 \paren {\dfrac {1 \times 3} {2 \times 4} }^3 - 13 \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^3 + \cdots = \dfrac 2 \pi$


Proof
From Dougall's Hypergeometric Theorem: Corollary 6:

$\ds \map { {}_4 \operatorname F_3} { { {\dfrac n 2 + 1, n, n, n} \atop {\dfrac n 2, 1, 1} } \, \middle \vert \, -1} = \dfrac {\map \sin {\pi n} } {\pi n } $
where:

$\ds \map { {}_4 \operatorname F_3} { { {\dfrac n 2 + 1, n, n, n} \atop {\dfrac n 2, 1, 1} } \, \middle \vert \, -1}$ is the generalized hypergeometric function of $1$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac n 2 + 1}^{\overline k} \paren {n^{\overline k} }^3  } { \paren {\dfrac n 2}^{\overline k} \paren {1^{\overline k} }^2 } \dfrac {\paren {-1}^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

On the left hand side we have:














\(\ds \map { {}_4 \operatorname F_3} { { {\dfrac 5 4, \dfrac 1 2, \dfrac 1 2, \dfrac 1 2} \atop {\dfrac 1 4, 1, 1} } \, \middle \vert \, -1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {\dfrac 5 4}^{\overline k} \paren {\paren {\dfrac 1 2}^{\overline k} }^3 } { \paren {\dfrac 1 4}^{\overline k} \paren {1^{\overline k} }^2} \dfrac {\paren {-1}^k} {k!}\)





Definition of Generalized Hypergeometric Function














\(\ds \)

\(=\)







\(\ds 1 - \dfrac {\paren {\dfrac 5 4} \paren {\dfrac 1 2}^3 } {\paren {\dfrac 1 4} \paren {1!}^3 } + \dfrac {\paren {\dfrac 5 4 \times \dfrac 9 4} \paren {\dfrac 1 2 \times \dfrac 3 2}^3} {\paren {\dfrac 1 4 \times \dfrac 5 4} \paren {2!}^3} - \dfrac {\paren {\dfrac 5 4 \times \dfrac 9 4 \times \dfrac {13} 4} \paren {\dfrac 1 2 \times \dfrac 3 2 \times \dfrac 5 2}^3} {\paren {\dfrac 1 4 \times \dfrac 5 4 + \dfrac 9 4} \paren {3!}^3} + \cdots\)





One to Integer Rising is Integer Factorial, $1^k = 1$, Number to Power of Zero Rising is One














\(\ds \)

\(=\)







\(\ds 1 - 5 \paren {\dfrac 1 2}^3 + 9 \paren {\dfrac {1 \times 3} {2 \times 4} }^3 - 13 \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^3 + \cdots\)









On the right hand side we have:

$\ds \dfrac {\map \sin {\dfrac \pi 2} } {\dfrac \pi 2 } = \dfrac 2 \pi$

Therefore:

$1 - 5 \paren {\dfrac 1 2}^3 + 9 \paren {\dfrac {1 \times 3} {2 \times 4} }^3 - 13 \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^3 + \cdots = \dfrac 2 \pi$
$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




