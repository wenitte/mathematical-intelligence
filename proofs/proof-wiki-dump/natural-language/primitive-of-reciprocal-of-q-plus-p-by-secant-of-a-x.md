# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_q_plus_p_by_Secant_of_a_x



Theorem
$\ds \int \frac {\d x} {q + p \sec a x} = \frac x q - \frac p q \int \frac {\d x} {p + q \cos a x} + C$


Proof













\(\ds \int \frac {\d x} {q + p \sec a x}\)

\(=\)







\(\ds \frac 1 q \int \frac {q \rd x} {q + p \sec a x}\)





multiplying top and bottom by $q$














\(\ds \)

\(=\)







\(\ds \frac 1 q \int \frac {\paren {q + p \sec a x - p \sec a x} \rd x} {q + p \sec a x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 q \int \frac {\paren {q + p \sec a x} \rd x} {q + p \sec a x} - \frac p q \int \frac {\sec a x \rd x} {q + p \sec a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 q \int \d x - \frac p q \int \frac {\sec a x \rd x} {q + p \sec a x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\sec a x \rd x} {q + p \sec a x} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\cos a x \sec a x \rd x} {q \cos a x + p \cos a x \sec a x} + C\)





multiplying top and bottom by $\cos a x$














\(\ds \)

\(=\)







\(\ds \frac x q - \frac p q \int \frac {\d x} {p + q \cos a x} + C\)





Secant is Reciprocal of Cosine



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p + q \sin a x}$
Primitive of $\dfrac 1 {p + q \cos a x}$
Primitive of $\dfrac 1 {p + q \tan a x}$
Primitive of $\dfrac 1 {p + q \cot a x}$
Primitive of $\dfrac 1 {q + p \csc a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sec a x$: $14.459$




