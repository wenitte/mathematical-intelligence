# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Hyperbolic_Tangent_of_a_x



Theorem
$\ds \int \frac {\d x} {p + q \tanh a x} = \frac {p x} {p^2 - q^2} - \frac q {a \paren {p^2 - q^2} } \ln \size {q \sinh a x + p \cosh a x} + C$


Proof
We have:

$\dfrac \d {\d x} \paren {q \sinh a x + p \cosh a x} = a q \cosh a x + a p \sinh a x$
Thus:














\(\ds \int \frac {\d x} {p + q \tanh a x}\)

\(=\)







\(\ds \int \frac {\d x} {p + q \dfrac {\sinh a x} {\cosh a x} }\)





Definition 2 of Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds \int \frac {\cosh a x \rd x} {p \cosh a x + q \sinh a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 - q^2} \int \frac {\paren {p^2 - q^2} \cosh a x \rd x} {p \cosh a x + q \sin a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 - q^2} \int \frac {p^2 \cosh a x + p q \sinh a x - p q \sinh a x - q^2 \cosh a x} {p \cosh a x + q \sinh a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 - q^2} \paren {\int \frac {p^2 \cosh a x + p q \sinh a x} {p \cosh a x + q \sinh a x} \rd x - \int \frac {p q \sinh a x + q^2 \cosh a x} {p \cosh a x + q \sinh a x} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 - q^2} \paren {\int p \rd x - \frac q a \int \frac {\map \d {p \cosh a x + q \sinh a x} } {p \cosh a x + q \sinh a x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {p x} {p^2 - q^2} - \frac q {a \paren {p^2 - q^2} } \ln \size {p \cosh a x + q \sinh a x} + C\)





Primitive of Constant and Primitive of Reciprocal



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p + q \sinh a x}$
Primitive of $\dfrac 1 {p + q \cosh a x}$
Primitive of $\dfrac 1 {p + q \coth a x}$
Primitive of $\dfrac 1 {q + p \sech a x}$
Primitive of $\dfrac 1 {q + p \csch a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\tanh a x$: $14.613$




