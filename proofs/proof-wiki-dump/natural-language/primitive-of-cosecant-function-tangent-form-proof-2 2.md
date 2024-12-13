# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosecant_Function/Tangent_Form/Proof_2

Theorem
$\ds \int \csc x \rd x = \ln \size {\tan \frac x 2} + C$
where $\tan \dfrac x 2 \ne 0$.


Proof













\(\ds \int \csc x \rd x\)

\(=\)







\(\ds \int \frac 1 {\sin x} \rd x\)





Cosecant is Reciprocal of Sine




We make the Weierstrass Substitution:














\(\ds u\)

\(=\)







\(\ds \tan \frac x 2\)














\(\ds \leadsto \ \ \)





\(\ds \sin x\)

\(=\)







\(\ds \frac {2 u} {u^2 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds \frac 2 {u^2 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 {\sin x} \rd x\)

\(=\)







\(\ds \int \frac {u^2 + 1} {2 u} \frac 2 {u^2 + 1} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \frac 1 u \rd u\)




















\(\ds \)

\(=\)







\(\ds \ln \size u + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \ln \size {\tan \frac x 2} + C\)





substituting back for $u$



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Useful substitutions: Example $1$.




