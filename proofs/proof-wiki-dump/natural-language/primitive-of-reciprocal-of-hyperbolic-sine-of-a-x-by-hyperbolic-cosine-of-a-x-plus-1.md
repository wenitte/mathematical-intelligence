# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Hyperbolic_Sine_of_a_x_by_Hyperbolic_Cosine_of_a_x_plus_1

Theorem
$\ds \int \frac {\d x} {\sinh a x \paren {\cosh a x + 1} } = \frac 1 {2 a} \ln \size {\tanh \frac {a x} 2} + \frac 1 {2 a \paren {\cosh a x + 1} } + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \cosh a x\)




















\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \sinh a x\)





Derivative of $\cosh a x$




Then:














\(\ds \int \frac {\d x} {\sinh a x \paren {\cosh a x + 1} }\)

\(=\)







\(\ds \int \frac {\sinh a x \rd x} {\sinh^2 a x \paren {\cosh a x + 1} }\)





multiplying top and bottom by $\sinh a x$














\(\ds \)

\(=\)







\(\ds \int \frac {\sinh a x \rd x} {\paren {\cosh^2 a x - 1} \paren {\cosh a x + 1} }\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d u} {\paren {u^2 - 1} \paren {u + 1} }\)





Integration by Substitution: $u = \cosh a x$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d u} {\paren {u + 1}^2 \paren {u - 1} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac 1 2 \paren {\frac 1 {u + 1} + \frac 1 2 \ln \size {\frac {u - 1} {u + 1} } } } + C\)





Primitive of $\dfrac 1 {\paren {a x + b}^2 \paren {p x + q} }$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {u + 1} } + \frac 1 {4 a} \ln \size {\frac {u - 1} {u + 1} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {\cosh a x + 1} } + \frac 1 {4 a} \ln \size {\frac {\cosh a x - 1} {\cosh a x + 1} } + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {\cosh a x + 1} } + \frac 1 {4 a} \ln \size {\frac {\frac 1 2 \sech^2 \dfrac x 2} {\frac 1 2 \csch^2 \frac {a x} 2} } + C\)





Reciprocal of $\cosh - 1$ and Reciprocal of $\cosh + 1$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {\cosh a x + 1} } + \frac 1 {4 a} \ln \size {\frac {\sinh^2 \frac {a x} 2} {\cosh^2 \frac {a x} 2} } + C\)





Definition 2 of Hyperbolic Secant, Definition 2 of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {\cosh a x + 1} } + \frac 1 {4 a} \ln \size {\tanh^2 \frac {a x} 2} + C\)





Definition 2 of Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \paren {\cosh a x + 1} } + \frac 1 {2 a} \ln \size {\tanh \frac {a x} 2} + C\)





Logarithm of Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x $ and $\cosh a x$: $14.602$




