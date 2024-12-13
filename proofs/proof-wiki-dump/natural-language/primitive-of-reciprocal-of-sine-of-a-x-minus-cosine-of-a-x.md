# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Sine_of_a_x_minus_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {\sin a x - \cos a x} = \frac 1 {a \sqrt 2} \ln \size {\map \tan {\frac {a x} 2 - \frac \pi 8} } + C$


Proof













\(\ds \int \frac {\d x} {\sin a x - \cos a x}\)

\(=\)







\(\ds \int \frac {\d x} {\sqrt 2 \map \cos {a x - \dfrac {3 \pi} 4} }\)





Sine of x minus Cosine of x: Cosine Form














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt 2} \int \map \sec {a x - \dfrac {3 \pi} 4} \rd x\)





Secant is Reciprocal of Cosine




Let:














\(\ds z\)

\(=\)







\(\ds a x - \dfrac {3 \pi} 4\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds a\)





Derivative of Identity Function and Derivatives of Function of $a x + b$








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\sqrt 2} \int \map \sec {a x - \dfrac {3 \pi} 4} \rd x\)

\(=\)







\(\ds \frac 1 {a \sqrt 2} \int \sec z \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt 2} \ln \size {\map \tan {\frac z 2 + \frac \pi 4} } + C\)





Primitive of $\sec a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt 2} \ln \size {\map \tan {\frac 1 2 \paren {a x - \dfrac {3 \pi} 4} + \frac \pi 4} } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt 2} \ln \size {\map \tan {\frac {a x} 2 - \frac \pi 8} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\sin a x + \cos a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.412$




