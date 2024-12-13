# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_squared_by_square_of_Sine_of_a_x_minus_q_squared_by_square_of_Cosine_of_a_x

Theorem
$\ds \int \frac {\d x} {p^2 \sin^2 a x - q^2 \cos^2 a x} = \frac 1 {2 a p q} \ln \size {\frac {p \tan a x - q} {p \tan a x + q} } + C$


Proof













\(\ds \int \frac {\d x} {p^2 \sin^2 a x - q^2 \cos^2 a x}\)

\(=\)







\(\ds \int \frac {\sec^2 a x} {p^2 \tan^2 a x - q^2} \rd x\)





multiplying by $\dfrac {\sec^2 a x} {\sec^2 a x}$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac 1 {p^2 t^2 - q^2} \rd t\)





substituting $t = \tan a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {a p^2} \int \frac 1 {t^2 - \paren {\frac q p}^2} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \frac {p^2} p q} \ln \size {\frac {t - \frac q p} {t + \frac q p} } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p q} \ln \size {\frac {p t - q} {p t + q} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p q} \ln \size {\frac {p \tan a x - q} {p \tan a x + q} } + C\)





substituting back for $t$



$\blacksquare$

Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.424$




