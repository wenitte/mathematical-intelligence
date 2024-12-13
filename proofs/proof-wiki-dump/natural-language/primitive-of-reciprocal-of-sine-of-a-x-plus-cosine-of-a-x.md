# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Sine_of_a_x_plus_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {\sin a x + \cos a x} = \frac 1 {a \sqrt 2} \ln \size {\map \tan {\frac {a x} 2 + \frac \pi 8} } + C$


Proof 1













\(\ds \int \frac {\d x} {\sin a x + \cos a x}\)

\(=\)







\(\ds \int \frac {\d x} {\sqrt 2 \map \cos {a x - \dfrac \pi 4} }\)





Sine of x plus Cosine of x: Cosine Form














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt 2} \int \map \sec {a x - \dfrac \pi 4} \rd x\)





Secant is Reciprocal of Cosine




Let:














\(\ds z\)

\(=\)







\(\ds a x - \dfrac \pi 4\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds a\)





Derivative of Identity Function and Derivatives of Function of $a x + b$








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\sqrt 2} \int \map \sec {a x - \dfrac \pi 4} \rd x\)

\(=\)







\(\ds \frac 1 {a \sqrt 2} \int \sec z \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt 2} \ln \size {\map \tan {\frac z 2 + \frac \pi 4} } + C\)





Primitive of $\sec a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt 2} \ln \size {\map \tan {\frac 1 2 \paren {a x - \dfrac \pi 4} + \frac \pi 4} } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt 2} \ln \size {\map \tan {\frac {a x} 2 + \frac \pi 8} } + C\)





simplifying



$\blacksquare$


Proof 2













\(\ds \int \frac {\d x} {\sin a x + \cos a x}\)

\(=\)







\(\ds \frac 1 a \int \frac {\dfrac {2 \rd u} {1 + u^2} } {\dfrac {2 u} {1 + u^2} + \dfrac {1 - u^2} {1 + u^2} }\)





Weierstrass Substitution: $u = \tan \dfrac {a x} 2$














\(\ds \)

\(=\)







\(\ds \frac 2 a \int \frac {\d u} {- u^2 + 2 u + 1}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 2 a \paren {\frac 1 {\sqrt 8} \ln \size {\frac {-2 u + 2 - \sqrt 8} {-2 u + 2 + \sqrt 8} } } + C\)





Primitive of $\dfrac 1 {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt 2} \ln \size {\frac {u - 1 + \sqrt 2} {u - 1 - \sqrt 2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt 2} \ln \size {\frac {\tan \dfrac {a x} 2 - \paren {1 - \sqrt 2} } {\tan \dfrac {a x} 2 - \paren {1 + \sqrt 2} } } + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt 2} \ln \size {\frac {\tan \dfrac {a x} 2 - \tan \dfrac \pi 8} {\tan \dfrac {a x} 2 - \tan \dfrac {3 \pi} 8} } + C\)





Tangent of $\dfrac \pi 8$ and Tangent of $\dfrac {3 \pi} 8$





Examples
Primitive of $\dfrac 1 {\sin x + \cos x}$
$\ds \int \dfrac {\d x} {\sin x + \cos x} = \frac 1 {\sqrt 2} \ln \size {\map \cosec {x + \frac \pi 4} - \map \cot {x + \frac \pi 4} } + C$


Also see
Primitive of $\dfrac 1 {\sin a x - \cos a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.412$




