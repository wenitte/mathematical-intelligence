# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Reciprocal_of_One_plus_Power_of_Tan_x

Theorem
$\ds \int_0^{\pi/2} \frac {\d x} {1 + \tan^m x} = \frac \pi 4$
where $m$ is a real number.


Proof













\(\ds \int_0^{\pi/2} \frac {\d x} {1 + \tan^m x}\)

\(=\)







\(\ds \int_0^{\pi/2} \frac {\cos^m x} {\cos^m x + \sin^m x} \rd x\)





multiplying by $\dfrac {\cos^m x} {\cos^m x}$














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} \frac {\map {\cos^m} {\frac \pi 2 - x} } {\map {\cos^m} {\frac \pi 2 - x} + \map {\sin^m} {\frac \pi 2 - x} } \rd x\)





Integral between Limits is Independent of Direction














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} \frac {\sin^m x} {\sin^m x + \cos^m x} \rd x\)





Cosine of Complement equals Sine, Sine of Complement equals Cosine



So:














\(\ds 2 \int_0^{\pi/2} \frac {\d x} {1 + \tan^m x}\)

\(=\)







\(\ds \int_0^{\pi/2} \frac {\sin^m x + \cos^m x} {\sin^m x + \cos^m x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2\)





Primitive of Constant



giving: 

$\ds \int_0^{\pi/2} \frac {\d x} {1 + \tan^m x} = \frac \pi 4$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.61$




