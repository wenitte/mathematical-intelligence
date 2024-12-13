# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_q_plus_p_by_Hyperbolic_Cosecant_of_a_x



Theorem
$\ds \int \frac {\d x} {q + p \csch a x} = \frac x q - \frac p q \int \frac {\d x} {p + q \sinh a x} + C$


Proof













\(\ds \int \frac {\d x} {q + p \csch a x}\)

\(=\)







\(\ds \frac 1 q \int \frac {q \rd x} {q + p \csch a x}\)





multiplying top and bottom by $q$














\(\ds \)

\(=\)







\(\ds \frac 1 q \int \frac {\paren {q + p \csch a x - p \csch a x} \rd x} {q + p \csch a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 q \int \frac {\paren {q + p \csch a x} \rd x} {q + p \csch a x} - \frac p q \int \frac {\csch a x \rd x} {q + p \csch a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 q \int \d x - \frac p q \int \frac {\csch a x \rd x} {q + p \csch a x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\csch a x \rd x} {q + p \csch a x} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\d x} {\frac q {\csch a x} + p} + C\)





multiplying top and bottom by $\dfrac 1 {\csch a x}$














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\d x} {p + q \sinh a x} + C\)





Definition 2 of Hyperbolic Cosecant



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p + q \sinh a x}$
Primitive of $\dfrac 1 {p + q \cosh a x}$
Primitive of $\dfrac 1 {p + q \tanh a x}$
Primitive of $\dfrac 1 {p + q \coth a x}$
Primitive of $\dfrac 1 {q + p \sech a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\csch a x$: $14.644$




