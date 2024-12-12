# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Power_of_x_by_Power_of_Logarithm_of_x



Theorem
$\ds \int_0^1 x^m \paren {\ln x}^n \rd x = \frac {\paren {-1}^n \map \Gamma {n + 1} } {\paren {m + 1}^{n + 1} }$
where:

$n$ is a non-negative integer
$m$ is a real number with $m > -1$.


Proof 1
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


Proof 2
From Primitive of Power, we have: 

$\ds \int_0^1 x^m \rd x = \frac 1 {m + 1}$
We have: 














\(\ds \frac {\d^n} {\d m^n} \int_0^1 x^m \rd x\)

\(=\)







\(\ds \int_0^1 \frac {\partial^n} {\partial m^n} x^m \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \int_0^1 x^m \paren {\ln x}^n \rd x\)





Derivative of Power of Constant



So: 














\(\ds \int_0^1 x^m \paren {\ln x}^n \rd x\)

\(=\)







\(\ds \map {\frac {\d^n} {\d m^n} } {\frac 1 {m + 1} }\)




















\(\ds \)

\(=\)







\(\ds \map {\frac {\d^{n + 1} } {\d m^{n + 1} } } {\map \ln {m + 1} }\)





Derivative of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^n \map \Gamma {n + 1} } {\paren {m + 1}^{n + 1} }\)





$n$th Derivative of Natural Logarithm



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.90$




