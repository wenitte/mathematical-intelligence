# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Cosecant_Function/Hyperbolic_Tangent_Form/Proof_1

Theorem
$\ds \int \csch x \rd x = \ln \size {\tanh \frac x 2} + C$
where $\tanh \dfrac x 2 \ne 0$.


Proof
Let $u = \tanh \dfrac x 2$.
Then:














\(\ds \int \csch x \rd x\)

\(=\)







\(\ds \int \dfrac 1 {\sinh x} \rd x\)





Definition 2 of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \int \dfrac {1 - u^2} {2 u} \dfrac {2 \rd u} {1 - u^2}\)





Hyperbolic Tangent Half-Angle Substitution














\(\ds \)

\(=\)







\(\ds \int \dfrac {\d u} u\)





simplifying














\(\ds \)

\(=\)







\(\ds \ln \size u + C\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \ln \size {\tanh \frac x 2} + C\)





substituting back for $u$



$\blacksquare$





