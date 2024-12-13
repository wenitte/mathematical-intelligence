# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Error_Function_of_Root/Proof_1

Theorem
$\laptrans {\map \erf {\sqrt t} } = \dfrac 1 {s \sqrt {s + 1} }$
where:

$\laptrans f$ denotes the Laplace transform of the function $f$
$\erf$ denotes the error function


Proof













\(\ds \laptrans {\map \erf {\sqrt t} }\)

\(=\)







\(\ds \laptrans {\frac 2 {\sqrt \pi} \int_0^{\sqrt t} \map \exp {-u^2} \rd u}\)





Definition of Error Function














\(\ds \)

\(=\)







\(\ds \laptrans {\frac 2 {\sqrt \pi} \int_0^{\sqrt t} \paren {\sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {u^{2 n} } {n!} \rd u} }\)





Definition of Real Exponential Function














\(\ds \)

\(=\)







\(\ds \laptrans {\frac 2 {\sqrt \pi} \paren {\sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\paren {\sqrt t}^{2 n + 1} } {\paren {2 n + 1} n!} } }\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt \pi} \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {2 n + 1} n!} \laptrans {t^{n + \frac 1 2} }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\map \Gamma {n + \frac 3 2} } {\paren {2 n + 1} n! s^{n + \frac 3 2} }\)





Laplace Transform of Real Power














\(\ds \)

\(=\)







\(\ds \frac 2 {s^{3/2} \sqrt \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\paren {n + \frac 1 2} \map \Gamma {n + \frac 1 2} } {\paren {2 n + 1} n! s^n}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac 1 {s^{3/2} \sqrt \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\map \Gamma {n + \frac 1 2} } {\map \Gamma {n + 1} s^n}\)





Gamma Function Extends Factorial



We have: 














\(\ds \map \Gamma {n + \frac 1 2}\)

\(=\)







\(\ds \frac \pi {\map \sin {\pi \paren {\frac 1 2 - n} } \map \Gamma {\frac 1 2 - n} }\)





Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \frac \pi {\map \cos {-n \pi} \map \Gamma {\frac 1 2 - n} }\)





Sine of Complement equals Cosine














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^n \pi} {\map \Gamma {\frac 1 2 - n} }\)





Cosine of Integer Multiple of Pi



So: 














\(\ds \frac 1 {s^{3/2} \sqrt \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\map \Gamma {n + \frac 1 2} } {\map \Gamma {n + 1} s^n}\)

\(=\)







\(\ds \frac 1 {s^{3/2} \sqrt \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\paren {-1}^n \pi} {\map \Gamma {n + 1} \map \Gamma {\frac 1 2 - n} s^n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {s^{3/2} } \sum_{n \mathop = 0}^\infty \frac {\sqrt \pi} {\map \Gamma {n + 1} \map \Gamma {\frac 1 2 - n} s^n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {s^{3/2} } \sum_{n \mathop = 0}^\infty \frac {\map \Gamma {-\frac 1 2 + 1} } {\map \Gamma {n + 1} \map \Gamma {-\frac 1 2 - n + 1} s^n}\)





Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \dfrac 1 {s^{3/2} } \sum_{n \mathop = 0}^\infty \binom {-\frac 1 2} n \frac 1 {s^n}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac 1 {s^{3/2} } \paren {1 + \dfrac 1 s}^{-1/2}\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds \dfrac 1 {s \sqrt {s + 1} }\)





simplification



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Error Function: $39$




