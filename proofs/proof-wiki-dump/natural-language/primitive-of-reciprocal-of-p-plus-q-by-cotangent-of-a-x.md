# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Cotangent_of_a_x



Theorem
$\ds \int \frac {\d x} {p + q \cot a x} = \frac {p x} {p^2 + q^2} - \frac q {a \paren {p^2 + q^2} } \ln \size {p \sin a x + q \cos a x} + C$


Proof
We have:

$\dfrac \d {\d x} \paren {p \sin a x + q \cos a x} = a p \cos a x - a q \sin a x$
Thus:














\(\ds \int \frac {\d x} {p + q \cot a x}\)

\(=\)







\(\ds \int \frac {\d x} {p + q \dfrac {\cos a x} {\sin a x} }\)





Cotangent is Cosine divided by Sine














\(\ds \)

\(=\)







\(\ds \int \frac {\sin a x \rd x} {p \sin a x + q \cos a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \int \frac {\paren {p^2 + q^2} \sin a x \rd x} {p \sin a x + q \cos a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \int \frac {p^2 \sin a x + p q \cos a x - p q \cos a x + q^2 \sin a x} {p \sin a x + q \cos a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \paren {\int \frac {p^2 \sin a x + p q \cos a x} {p \sin a x + q \cos a x} \rd x + \int \frac {-p q \cos a x + q^2 \sin a x} {p \sin a x + q \cos a x} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \paren {\int p \rd x - \frac q a \int \frac {\map \d {p \sin a x + q \cos a x} } {p \sin a x + q \cos a x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {p x} {p^2 + q^2} - \frac q {a \paren {p^2 + q^2} } \ln \size {p \sin a x + q \cos a x} + C\)





Primitive of Constant and Primitive of Reciprocal



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p + q \sin a x}$
Primitive of $\dfrac 1 {p + q \cos a x}$
Primitive of $\dfrac 1 {p + q \tan a x}$
Primitive of $\dfrac 1 {q + p \sec a x}$
Primitive of $\dfrac 1 {q + p \csc a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cot a x$: $14.449$




