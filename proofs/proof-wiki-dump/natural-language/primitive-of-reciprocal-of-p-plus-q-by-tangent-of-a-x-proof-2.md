# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Tangent_of_a_x/Proof_2

Theorem
$\ds \int \frac {\d x} {p + q \tan a x} = \frac {p x} {p^2 + q^2} + \frac q {a \paren {p^2 + q^2} } \ln \size {q \sin a x + p \cos a x} + C$


Proof
We have:

$\dfrac \d {\d x} \paren {q \sin a x + p \cos a x} = a q \cos a x - a p \sin a x$
Thus:














\(\ds \int \frac {\d x} {p + q \tan a x}\)

\(=\)







\(\ds \int \frac {\d x} {p + q \dfrac {\sin a x} {\cos a x} }\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds \int \frac {\cos a x \rd x} {p \cos a x + q \sin a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \int \frac {\paren {p^2 + q^2} \cos a x \rd x} {p \cos a x + q \sin a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \int \frac {p^2 \cos a x + p q \sin a x - p q \sin a x + q^2 \cos a x} {p \cos a x + q \sin a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \paren {\int \frac {p^2 \cos a x + p q \sin a x} {p \cos a x + q \sin a x} \rd x + \int \frac {-p q \sin a x + q^2 \cos a x} {p \cos a x + q \sin a x} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {p^2 + q^2} \paren {\int p \rd x + \frac q a \int \frac {\map \d {p \cos a x + q \sin a x} } {p \cos a x + q \sin a x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {p x} {p^2 + q^2} + \frac q {a \paren {p^2 + q^2} } \ln \size {p \cos a x + q \sin a x} + C\)





Primitive of Constant and Primitive of Reciprocal



$\blacksquare$





