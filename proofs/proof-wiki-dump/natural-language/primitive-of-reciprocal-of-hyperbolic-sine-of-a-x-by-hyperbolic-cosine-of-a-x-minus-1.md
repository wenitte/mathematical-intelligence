# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Hyperbolic_Sine_of_a_x_by_Hyperbolic_Cosine_of_a_x_minus_1

Theorem
$\ds \int \frac {\d x} {\sinh a x \paren {\cosh a x - 1} } = \frac {-1} {2 a} \ln \size {\tanh \frac {a x} 2} - \frac 1 {2 a \paren {\cosh a x - 1} } + C$


Proof













\(\ds \int \frac {\d x} {\sinh a x \paren {\cosh a x - 1} }\)

\(=\)







\(\ds \int \frac {\map \sinh {a x} \rd x} {\sinh^2 a x \cosh a x - \sinh^2 a x}\)





multiplying through $\dfrac {\sinh a x} {\sinh a x}$














\(\ds \)

\(=\)







\(\ds \int \frac {\map \sinh {a x} \rd x} {\cosh a x \paren {\cosh^2 a x - 1} + 1 - \cosh^2 a x}\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds \int \frac {\map \sinh {a x} \rd x} {\cosh^3 a x - \cosh^2 a x - \cosh a x + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d t} {t^3 - t^2 - t + 1}\)





Integration by Substitution: $t \to \map \cosh {a x}$














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a} \int \frac 1 {t + 1} \rd t - \frac 1 {4 a} \int \frac 1 {t - 1} \rd t + \frac 1 {2 a} \int \frac 1 {\paren {t - 1}^2} \rd t\)





Partial Fractions Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a} \map \ln {t + 1} - \frac 1 {4 a} \map \ln {t - 1} - \frac 1 {2 a \paren {t - 1} } + C\)





Primitive of Reciprocal, Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a} \map \ln { \frac {\cosh ax + 1} {\cosh ax - 1} } - \frac 1 {2 a \paren {\cosh a x - 1} } + C\)





substituting back $t \to \cosh ax$














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a} \map \ln {\frac {2 \cosh^2 \frac {a x} 2} {2 \sinh^2 \frac {a x} 2} } - \frac 1 {2 a \paren {\cosh ax - 1} } + C\)





Double Angle Formula for Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a} \map \ln {\coth^2 \frac {a x} 2} - \frac 1 {2 a \paren {\cosh a x - 1} } + C\)





Definition of Hyperbolic Cotangent














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {\coth \frac {a x} 2} - \frac 1 {2 a \paren {\cosh a x - 1} } + C\)





Natural Logarithm of Power














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 a} \ln \size {\tanh \frac {a x} 2} - \frac 1 {2 a \paren {\cosh a x - 1} } + C\)





Logarithm of Reciprocal



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x $ and $\cosh a x$: $14.603$




