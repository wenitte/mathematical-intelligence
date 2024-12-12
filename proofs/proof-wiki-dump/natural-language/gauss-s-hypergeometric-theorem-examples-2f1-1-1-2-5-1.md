# 

Source: https://proofwiki.org/wiki/Gauss%27s_Hypergeometric_Theorem/Examples/2F1(1,1;2.5;1)

Example of Use of Gauss's Hypergeometric Theorem
$1 + \dfrac 2 5 + \paren {\dfrac {2 \times 4} {5 \times 7} } + \paren {\dfrac {2 \times 4 \times 6} {5 \times 7 \times 9} } + \cdots = 3$


Proof
From Gauss's Hypergeometric Theorem:

$\map F {a, b; c; 1} = \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }$
where:

$\map F {a, b; c; 1}$ is the Gaussian hypergeometric function of $1$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} b^{\overline k} } { c^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

We have:














\(\ds \map F {1, 1; \dfrac 5 2; 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac { 1^{\overline k} 1^{\overline k} } { \paren {\dfrac 5 2}^{\overline k} } \dfrac {1^k} {k!}\)





Definition of Gaussian Hypergeometric Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac { 1^{\overline k} } { \paren {\dfrac 5 2}^{\overline k} }\)





One to Integer Rising is Integer Factorial, $1^k = 1$














\(\ds \)

\(=\)







\(\ds 1 + \dfrac 1 {\paren {\dfrac 5 2} } + \paren {\dfrac {1 \times 2} {\dfrac 5 2 \times \dfrac 7 2} } + \paren {\dfrac {1 \times 2 \times 3} {\dfrac 5 2 \times \dfrac 7 2 \times \dfrac 9 2} } + \cdots\)





Number to Power of Zero Rising is One














\(\ds \)

\(=\)







\(\ds 1 + \dfrac 2 5 + \paren {\dfrac {2 \times 4} {5 \times 7} } + \paren {\dfrac {2 \times 4 \times 6} {5 \times 7 \times 9} } + \cdots\)





rearranging



and:














\(\ds \map F {1, 1; \dfrac 5 2; 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {\dfrac 5 2} \map \Gamma {\dfrac 5 2 - 1 - 1} } {\map \Gamma {\dfrac 5 2 - 1} \map \Gamma {\dfrac 5 2 - 1} }\)





Gauss's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {\dfrac 5 2} \map \Gamma {\dfrac 1 2} } {\map \Gamma {\dfrac 3 2} \map \Gamma {\dfrac 3 2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac {3 \sqrt \pi} 4  \times \sqrt \pi} {\dfrac {\sqrt \pi} 2 \times \dfrac {\sqrt \pi} 2}\)





Gamma Function of $\dfrac 1 2$, Gamma Function of $\dfrac 3 2$














\(\ds \)

\(=\)







\(\ds 3\)









Therefore:

$1 + \dfrac 2 5 + \paren {\dfrac {2 \times 4} {5 \times 7} } + \paren {\dfrac {2 \times 4 \times 6} {5 \times 7 \times 9} } + \cdots = 3$
$\blacksquare$





