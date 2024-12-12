# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Logarithm_of_Exponential_of_x_plus_One_over_Exponential_of_x_minus_One

Theorem
$\ds \int_0^\infty \map \ln {\frac {e^x + 1} {e^x - 1} } \rd x = \frac {\pi^2} 4$


Proof
We can write: 














\(\ds \int_0^\infty \map \ln {\frac {e^x + 1} {e^x - 1} } \rd x\)

\(=\)







\(\ds \int_0^\infty \map \ln {\frac {e^{x/2} \paren {e^{x/2} + e^{-x/2} } } {e^{x/2} \paren {e^{x/2} - e^{-x/2} } } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \map \ln {\coth \frac x 2} \rd x\)





Definition of Hyperbolic Cotangent



Let: 

$u = \coth \dfrac x 2$
We have, by Derivative of Hyperbolic Cotangent Function:

$\dfrac {\d u} {\d x} = -\dfrac 1 2 \csch^2 \dfrac x 2$
From Difference of Squares of Hyperbolic Cotangent and Cosecant, this can be written: 

$\dfrac {\d u} {\d x} = \dfrac 1 2 \paren {1 - \coth^2 \dfrac x 2} = \dfrac 1 2 \paren {1 - u^2}$
From Limit to Infinity of Hyperbolic Cotangent Function, we have: 

as $x \to \infty$, $u \to 1$.
We also have: 

as $x \to 0^+$, $u \to \infty$.
With this, we have: 














\(\ds \int_0^\infty \map \ln {\coth \frac x 2} \rd x\)

\(=\)







\(\ds 2 \int_\infty^1 \frac {\ln u} {1 - u^2} \rd u\)





substituting $u = \coth \dfrac x 2$














\(\ds \)

\(=\)







\(\ds -2 \int_1^\infty \frac {\ln u} {1 - u^2} \rd u\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds -2 \int_1^0 \paren {-\frac 1 {v^2} } \frac {\map \ln {\frac 1 v} } {1 - \paren {\frac 1 {v^2} }^2} \rd v\)





substituting $v = \dfrac 1 v$














\(\ds \)

\(=\)







\(\ds -2 \int_0^1 \frac {\ln v} {1 - v^2} \rd v\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds -2 \int_0^1 \ln v \paren {\sum_{n \mathop = 0}^\infty \paren {v^2}^n} \rd v\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds -2 \sum_{n \mathop = 0}^\infty \int_0^1 v^{2 n} \ln v \rd v\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 0}^\infty \frac {\map \Gamma 2} {\paren {2 n + 1}^2}\)





Definite Integral from $0$ to $1$ of $x^m \paren {\ln x}^n$














\(\ds \)

\(=\)







\(\ds 2 \times 1! \times \frac {\pi^2} 8\)





Gamma Function Extends Factorial, Sum of Reciprocals of Squares of Odd Integers














\(\ds \)

\(=\)







\(\ds \frac {\pi^2} 4\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.101$




