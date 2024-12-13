# 

Source: https://proofwiki.org/wiki/Primitive_of_Secant_Function/Secant_plus_Tangent_Form/Proof_2

Theorem
$\ds \int \sec x \rd x = \ln \size {\sec x + \tan x} + C$
where $\sec x + \tan x \ne 0$.


Proof













\(\ds \int \sec x \rd x\)

\(=\)







\(\ds \int \frac 1 {\cos x} \rd x\)





Secant is Reciprocal of Cosine




We make the Weierstrass Substitution:














\(\ds u\)

\(=\)







\(\ds \tan \frac x 2\)














\(\ds \leadsto \ \ \)





\(\ds \cos x\)

\(=\)







\(\ds \frac {1 - u^2} {1 + u^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds \frac 2 {u^2 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 {\cos x} \rd x\)

\(=\)







\(\ds \int \frac {1 + u^2} {1 - u^2} \frac 2 {u^2 + 1} \rd u\)




















\(\ds \)

\(=\)







\(\ds 2 \int \frac 1 {1 - u^2} \rd u\)




















\(\ds \)

\(=\)







\(\ds \ln \size {\frac {1 + u} {1 - u} } + C\)





Primitive of $\dfrac 1 {a^2 - u^2}$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \ln \size {\frac {1 + \tan \frac x 2} {1 - \tan \frac x 2} } + C\)




















\(\ds \)

\(=\)







\(\ds \ln \size {\sec x + \tan x} + C\)





One Plus Tangent Half Angle over One Minus Tangent Half Angle



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Useful substitutions: Example $2$.




