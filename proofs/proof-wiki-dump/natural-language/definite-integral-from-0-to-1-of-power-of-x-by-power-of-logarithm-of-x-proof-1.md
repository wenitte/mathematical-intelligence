# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Power_of_x_by_Power_of_Logarithm_of_x/Proof_1

Theorem
$\ds \int_0^1 x^m \paren {\ln x}^n \rd x = \frac {\paren {-1}^n \map \Gamma {n + 1} } {\paren {m + 1}^{n + 1} }$


Proof
Let: 

$x = \map \exp {-\dfrac u {m + 1} }$
Then, by Derivative of Exponential Function: 

$\dfrac {\d x} {\d u} = -\dfrac 1 {m + 1} \map \exp {-\dfrac u {m + 1} }$
We have by Exponential of Zero: 

as $x \to 1$, $u \to 0$
We also have, by Exponential Tends to Zero and Infinity: 

as $x \to 0$, $u \to \infty$
So: 














\(\ds \int_0^1 x^m \paren {\ln x}^n \rd x\)

\(=\)







\(\ds \int_\infty^0 \paren {\map \exp {-\frac u {m + 1} } }^m \paren {-\frac u {m + 1} }^n \paren {-\frac 1 {m + 1} \map \exp {-\frac u {m + 1} } \rd u}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {m + 1} \int_0^\infty \paren {\map \exp {-\frac u {m + 1} } }^m \paren {-\frac u {m + 1} }^n \paren {\map \exp {-\frac u {m + 1} } \rd u}\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^n} {m + 1} \int_0^\infty \map \exp {-u \paren {\frac m {m + 1} + \frac 1 {m + 1} } } \frac {u^n} {\paren {m + 1}^n} \rd u\)





Exponential of Sum, Power of Power














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^n} {\paren {m + 1}^{n + 1} }  \int_0^\infty e^{-u} u^{\paren {n + 1} - 1} \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^n \map \Gamma {n + 1} } {\paren {m + 1}^{n + 1} }\)





Definition of Gamma Function



$\blacksquare$





