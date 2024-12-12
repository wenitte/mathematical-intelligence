# 

Source: https://proofwiki.org/wiki/Gauss%27s_Hypergeometric_Theorem/Examples/2F1(0.5,0.5;1.5;1)

Example of Use of Gauss's Hypergeometric Theorem
$1 + \paren {\dfrac 1 {2^1 \times 3 \times 1!} } + \paren {\dfrac {1 \times 3} {2^2 \times 5 \times 2!} } + \paren {\dfrac {1 \times 3 \times 5} {2^3 \times 7 \times 3!} } + \cdots  = \dfrac \pi 2$


Proof
From Gauss's Hypergeometric Theorem:

$\map F {a, b; c; 1} = \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }$
where:

$\map F {a, b; c; 1}$ is the Gaussian hypergeometric function: $\ds \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} b^{\overline k} } { c^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

We have:














\(\ds \map F {\dfrac 1 2, \dfrac 1 2; \dfrac 3 2; 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac 1 2}^{\overline k} \paren {\dfrac 1 2}^{\overline k} } { \paren {\dfrac 3 2}^{\overline k} } \dfrac {1^k} {k!}\)





Definition of Gaussian Hypergeometric Function














\(\ds \)

\(=\)







\(\ds 1 + \paren {\dfrac {\paren {\dfrac 1 2}^2 } {\paren {\dfrac 3 2} 1! } } + \paren {\dfrac {\paren {\dfrac 1 2 \times \dfrac 3 2}^2 } {\paren {\dfrac 3 2 \times \dfrac 5 2} 2! } } + \paren {\dfrac {\paren {\dfrac 1 2 \times \dfrac 3 2 \times \dfrac 5 2}^2 } {\paren {\dfrac 3 2 \times \dfrac 5 2 \times \dfrac 7 2} 3! } } + \cdots\)





$1^k = 1$, Number to Power of Zero Rising is One














\(\ds \)

\(=\)







\(\ds 1 + \paren {\dfrac 1 {2^1 \times 3 \times 1!} } + \paren {\dfrac {1 \times 3} {2^2 \times 5 \times 2!} } + \paren {\dfrac {1 \times 3 \times 5} {2^3 \times 7 \times 3!} } + \cdots\)





rearranging



and:














\(\ds \map f {\dfrac 1 2, \dfrac 1 2; \dfrac 3 2; 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {\dfrac 3 2} \map \Gamma {\dfrac 3 2 - \dfrac 1 2 - \dfrac 1 2} } {\map \Gamma {\dfrac 3 2 - \dfrac 1 2} \map \Gamma {\dfrac 3 2 - \dfrac 1 2} }\)





Gauss's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {\dfrac 3 2} \map \Gamma {\dfrac 1 2} } {\map \Gamma 1 \map \Gamma 1 }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac {\sqrt \pi} 2  \times \sqrt \pi} {0! \times 0!}\)





Gamma Function of $\dfrac 1 2$, Gamma Function of $\dfrac 3 2$














\(\ds \)

\(=\)







\(\ds \dfrac \pi 2\)









Therefore:

$1 + \paren {\dfrac 1 {2^1 \times 3 \times 1!} } + \paren {\dfrac {1 \times 3} {2^2 \times 5 \times 2!} } + \paren {\dfrac {1 \times 3 \times 5} {2^3 \times 7 \times 3!} } + \cdots  = \dfrac \pi 2$
$\blacksquare$





