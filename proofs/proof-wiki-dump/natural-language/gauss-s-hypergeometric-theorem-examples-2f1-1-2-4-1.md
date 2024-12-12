# 

Source: https://proofwiki.org/wiki/Gauss%27s_Hypergeometric_Theorem/Examples/2F1(1,2;4;1)

Example of Use of Gauss's Hypergeometric Theorem
$1 + \dfrac 2 4 + \paren {\dfrac {2 \times 3} {4 \times 5} } + \paren {\dfrac {2 \times 3 \times 4} {4 \times 5 \times 6} } + \cdots = 3$


Proof
From Gauss's Hypergeometric Theorem:

$\map F {a, b; c; 1} = \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }$
where:

$\map F {a, b; c; 1}$ is the Gaussian hypergeometric function: $\ds \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} b^{\overline k} } { c^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

We have:














\(\ds \map F {1, 2; 4; 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac { 1^{\overline k} 2^{\overline k} } { 4^{\overline k} } \dfrac {1^k} {k!}\)





Definition of Gaussian Hypergeometric Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac { 2^{\overline k} } { 4^{\overline k} }\)





One to Integer Rising is Integer Factorial, $1^k = 1$














\(\ds \)

\(=\)







\(\ds 1 + \dfrac 2 4 + \paren {\dfrac {2 \times 3} {4 \times 5} } + \paren {\dfrac {2 \times 3 \times 4} {4 \times 5 \times 6} } + \cdots\)





Number to Power of Zero Rising is One



and:














\(\ds \map F {1, 2; 4; 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma 4 \map \Gamma {4 - 1 - 2} } {\map \Gamma {4 - 1} \map \Gamma {4 - 2} }\)





Gauss's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma 4 \map \Gamma 1 } {\map \Gamma 3 \map \Gamma 2 }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3! \times 0!} {2! \times 1!}\)





$\map \Gamma {n + 1} = n!$ is the Gamma function














\(\ds \)

\(=\)







\(\ds 3\)









Therefore:

$1 + \dfrac 2 4 + \paren {\dfrac {2 \times 3} {4 \times 5} } + \paren {\dfrac {2 \times 3 \times 4} {4 \times 5 \times 6} } + \cdots = 3$
$\blacksquare$





