# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Cosecant_Function/Inverse_Hyperbolic_Cotangent_of_Hyperbolic_Cosine_Form



Theorem
$\ds \int \csch x \rd x = -\map {\coth^{-1} } {\cosh x} + C$


Proof 1
Let:














\(\ds u\)

\(=\)







\(\ds \cosh x\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d u} {\d x}\)

\(=\)







\(\ds \sinh x\)





Derivative of Hyperbolic Cosine




Then:














\(\ds \int \csch x \rd x\)

\(=\)







\(\ds \int \dfrac {\d x} {\sinh x}\)





Definition 2 of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {\sinh x} \dfrac {\d u} {\sinh x}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \dfrac {\d u} {\sinh^2 x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \int \dfrac {\d u} {\cosh^2 x - 1}\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds \int \dfrac {\d u} {u^2 - 1}\)





Definition of $u$














\(\ds \)

\(=\)







\(\ds -\coth^{-1} u + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$: $\coth^{-1}$ form














\(\ds \)

\(=\)







\(\ds -\map {\coth^{-1} } {\cosh x} + C\)





Definition of $u$



$\blacksquare$


Proof 2
Let:














\(\ds u\)

\(=\)







\(\ds \cosh x\)














\(\ds \leadsto \ \ \)





\(\ds u'\)

\(=\)







\(\ds \sinh x\)





Derivative of Hyperbolic Cosine




Then:














\(\ds \int \csch x \rd x\)

\(=\)







\(\ds \int \frac 1 {\sinh x} \rd x\)





Definition of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \int \frac {\sinh x} {\sinh^2 x} \rd x\)





multiplying top and bottom by $\sinh x$














\(\ds \)

\(=\)







\(\ds \int \frac {\sinh x} {\cosh^2 x - 1} \rd x\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds \int \frac {\rd u} {u^2 - 1}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\coth^{-1} u + C\)





Primitive of Reciprocal of $\dfrac 1 {x^2 - a^2}$: $\coth^{-1}$ form














\(\ds \)

\(=\)







\(\ds -\map {\coth^{-1} } {\cosh x} + C\)





Definition of $u$



$\blacksquare$


Also see
Primitive of Hyperbolic Secant Function


Sources
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $5$. Integrals: Integrals of Special Functions: $20$




