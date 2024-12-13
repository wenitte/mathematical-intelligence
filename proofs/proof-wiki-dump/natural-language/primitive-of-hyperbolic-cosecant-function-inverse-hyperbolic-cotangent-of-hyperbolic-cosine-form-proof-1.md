# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Cosecant_Function/Inverse_Hyperbolic_Cotangent_of_Hyperbolic_Cosine_Form/Proof_1

Theorem
$\ds \int \csch x \rd x = -\map {\coth^{-1} } {\cosh x} + C$


Proof
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





