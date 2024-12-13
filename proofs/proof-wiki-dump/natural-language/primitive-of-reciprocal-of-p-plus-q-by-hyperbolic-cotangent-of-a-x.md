# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Hyperbolic_Cotangent_of_a_x



Theorem
$\ds \int \frac {\d x} {p + q \coth a x} = \frac {p x} {p^2 - q^2} - \frac q {a \paren {p^2 - q^2} } \ln \size {p \sinh a x + q \cosh a x} + C$


Proof
We have:

$\dfrac \d {\d x} \paren {p \sinh a x + q \cosh a x} = a p \cosh a x + a q \sinh a x$
Thus:














\(\ds \int \frac {\d x} {p + q \coth a x}\)

\(=\)







\(\ds \int \frac {\d x} {p + q \dfrac {\cosh a x} {\sinh a x} }\)





Definition 2 of Hyperbolic Cotangent














\(\ds \)

\(=\)







\(\ds \int \frac {\sinh a x \rd x} {p \sinh a x + q \cosh a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 - q^2} \int \frac {\paren {p^2 - q^2} \sinh a x \rd x} {p \sinh a x + q \cosh a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 - q^2} \int \frac {p^2 \sinh a x + p q \cosh a x - p q \cosh a x - q^2 \sinh a x} {p \sinh a x + q \cosh a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 - q^2} \paren {\int \frac {p^2 \sinh a x + p q \cosh a x} {p \sinh a x + q \cosh a x} \rd x - \int \frac {p q \cosh a x + q^2 \sinh a x} {p \sinh a x + q \cosh a x} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 - q^2} \paren {\int p \rd x - \frac q a \int \frac {\map \d {p \sinh a x + q \cosh a x} } {p \sinh a x + q \cosh a x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {p x} {p^2 - q^2} - \frac q {a \paren {p^2 - q^2} } \ln \size {p \sinh a x + q \cosh a x} + C\)





Primitive of Constant and Primitive of Reciprocal



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p + q \sinh a x}$
Primitive of $\dfrac 1 {p + q \cosh a x}$
Primitive of $\dfrac 1 {p + q \tanh a x}$
Primitive of $\dfrac 1 {q + p \sech a x}$
Primitive of $\dfrac 1 {q + p \csch a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\coth a x$: $14.624$




