# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_squared_plus_Square_of_q_by_Hyperbolic_Cosine_of_a_x/Logarithm_Form



Theorem
$\ds \int \frac {\d x} {p^2 + q^2 \cosh^2 a x} = \dfrac 1 {2 a p \sqrt {p^2 + q^2} } \ln \size {\dfrac {p \tanh a x + \sqrt {p^2 + q^2} } {p \tanh a x - \sqrt {p^2 + q^2} } }$


Proof













\(\ds \int \frac {\d x} {p^2 + q^2 \cosh^2 a x}\)

\(=\)







\(\ds \int \frac {\csch^2 a x \rd x} {p^2 \csch^2 a x + q^2 \coth^2 a x}\)





multiplying numerator and denominator by $\csch^2 a x$














\(\ds \)

\(=\)







\(\ds \int \frac {\csch^2 a x \rd x} {p^2 \paren {\coth^2 a x - 1} + q^2 \coth^2 a x}\)





Difference of Squares of Hyperbolic Cotangent and Cosecant














\(\ds \)

\(=\)







\(\ds \int \frac {\csch^2 a x \rd x} {\paren {p^2 + q^2} \coth^2 a x - p^2}\)





simplifying



Let:














\(\ds u\)

\(=\)







\(\ds \coth a x\)














\(\ds \leadsto \ \ \)





\(\ds \d u\)

\(=\)







\(\ds -a \csch^2 a x \rd x\)





Derivative of Hyperbolic Cotangent Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {p^2 + q^2 \cosh^2 a x}\)

\(=\)







\(\ds \frac 1 a \int \frac {-\d u} {\paren {p^2 + q^2} u^2 - p^2}\)





Integration by Substitution: substituting $u = \tanh a x$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 {a \paren {p^2 + q^2} } \int \frac {\rd u} {\frac {p^2} {p^2 + q^2} - u^2}\)





rearranging into a standard form




We have:














\(\ds \int \frac {\d x} {p^2 + q^2 \cosh^2 a x}\)

\(=\)







\(\ds \frac 1 {a \paren {p^2 + q^2} } \int \frac {\rd u} {\paren {\frac p {\sqrt {p^2 + q^2} } }^2 - u^2}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \paren {p^2 + q^2} } \frac {\sqrt {p^2 + q^2} } {2 p} \ln \size {\frac {\frac p {\sqrt {p^2 + q^2} } + u} {\frac p {\sqrt {p^2 + q^2} } - u} } + C\)





Primitive of $\dfrac 1 {a^2 - x^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {p^2 + q^2} } \ln \size {\frac {\frac p {\sqrt {p^2 + q^2} } + \coth a x} {\frac p {\sqrt {p^2 + q^2} } - \coth a x} } + C\)





substituting $u = \coth a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {p^2 + q^2} } \ln \size {\frac {\frac p {\sqrt {p^2 + q^2} } + \frac 1 {\tanh a x} } {\frac p {\sqrt {p^2 + q^2} } - \frac 1 {\tanh a x} } } + C\)





Definition of Real Hyperbolic Cotangent














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {p^2 + q^2} } \ln \size {\frac {p \tanh a x + \sqrt {p^2 + q^2} } {p \tanh a x - \sqrt {p^2 + q^2} } } + C\)





multiplying numerator and denominator of argument of $\ln$ by $\sqrt {p^2 + q^2} \tanh a x$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p^2 + q^2 \sinh^2 a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.584$




