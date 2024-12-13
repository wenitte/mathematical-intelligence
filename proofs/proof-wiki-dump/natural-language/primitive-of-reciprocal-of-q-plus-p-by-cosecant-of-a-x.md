# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_q_plus_p_by_Cosecant_of_a_x



Theorem
$\ds \int \frac {\d x} {q + p \csc a x} = \frac x q - \frac p q \int \frac {\d x} {p + q \sin a x} + C$


Proof













\(\ds \int \frac {\d x} {q + p \csc a x}\)

\(=\)







\(\ds \frac 1 q \int \frac {q \rd x} {q + p \csc a x}\)





multiplying top and bottom by $q$














\(\ds \)

\(=\)







\(\ds \frac 1 q \int \frac {\paren {q + p \csc a x - p \csc a x} \rd x} {q + p \csc a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 q \int \frac {\paren {q + p \csc a x} \rd x} {q + p \csc a x} - \frac p q \int \frac {\csc a x \rd x} {q + p \csc a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 q \int \d x - \frac p q \int \frac {\csc a x \rd x} {q + p \csc a x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\csc a x \rd x} {q + p \csc a x} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\sin a x \, \csc a x \rd x} {q \sin a x + p \sin a x \, \csc a x} + C\)





multiplying top and bottom by $\sin a x$














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\d x} {p + q \sin a x} + C\)





Cosecant is Reciprocal of Sine



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p + q \sin a x}$
Primitive of $\dfrac 1 {p + q \cos a x}$
Primitive of $\dfrac 1 {p + q \tan a x}$
Primitive of $\dfrac 1 {p + q \cot a x}$
Primitive of $\dfrac 1 {q + p \sec a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\csc a x$: $14.469$




