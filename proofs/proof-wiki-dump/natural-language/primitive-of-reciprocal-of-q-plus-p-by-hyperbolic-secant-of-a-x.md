# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_q_plus_p_by_Hyperbolic_Secant_of_a_x



Theorem
$\ds \int \frac {\d x} {q + p \sech a x} = \frac x q - \frac p q \int \frac {\d x} {p + q \cosh a x} + C$


Proof













\(\ds \int \frac {\d x} {q + p \sech  a x}\)

\(=\)







\(\ds \frac 1 q \int \frac {q \rd x} {q + p \sech a x}\)





multiplying top and bottom by $q$














\(\ds \)

\(=\)







\(\ds \frac 1 q \int \frac {\paren {q + p \sech a x - p \sech a x} \rd x} {q + p \sech a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 q \int \frac {\paren {q + p \sech a x} \rd x} {q + p \sech a x} - \frac p q \int \frac {\sech a x \rd x} {q + p \sech a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 q \int \d x - \frac p q \int \frac {\sech a x \rd x} {q + p \sech a x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\sech a x \rd x} {q + p \sech a x} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\d x} {\frac q {\sech a x} + p} + C\)





multiplying top and bottom by $\dfrac 1 {\sech a x}$














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\d x} {p + q \cosh a x} + C\)





Definition 2 of Hyperbolic Secant



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p + q \sinh a x}$
Primitive of $\dfrac 1 {p + q \cosh a x}$
Primitive of $\dfrac 1 {p + q \tanh a x}$
Primitive of $\dfrac 1 {p + q \coth a x}$
Primitive of $\dfrac 1 {q + p \csch a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sech a x$: $14.634$




