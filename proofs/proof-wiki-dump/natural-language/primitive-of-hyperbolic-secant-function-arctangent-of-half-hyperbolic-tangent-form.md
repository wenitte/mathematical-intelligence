# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Secant_Function/Arctangent_of_Half_Hyperbolic_Tangent_Form

Theorem
$\ds \int \sech x \rd x =  2 \map \arctan {\tanh \dfrac x 2} + C$


Proof
Let $u = \tanh \dfrac x 2$.
Then:














\(\ds \int \sech x \rd x\)

\(=\)







\(\ds \int \frac {1 - u^2} {1 + u^2} \frac {2 \rd u} {1 - u^2}\)





Hyperbolic Tangent Half-Angle Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd u} {1 + u^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds 2 \arctan u + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$: Arctangent Form














\(\ds \)

\(=\)







\(\ds 2 \map \arctan {\tanh \dfrac x 2} + C\)





substituting for $u$



$\blacksquare$


Sources
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Other Standard Results: $\text {(xxvii)}$




