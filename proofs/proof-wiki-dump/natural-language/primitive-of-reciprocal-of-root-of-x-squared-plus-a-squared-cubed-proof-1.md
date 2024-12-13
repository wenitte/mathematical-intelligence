# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_x_squared_plus_a_squared_cubed/Proof_1

Theorem
$\ds \int \frac {\d x} {\paren {\sqrt {x^2 + a^2} }^3} = \frac x {a^2 \sqrt {x^2 + a^2} } + C$


Proof













\(\ds x\)

\(=\)







\(\ds a \tan \theta\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds a \sec^2 \theta\)





Derivative of Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\paren {\sqrt {x^2 + a^2} }^3}\)

\(=\)







\(\ds \int \frac {a \sec^2 \theta \rd \theta} {\sqrt {a^2 \tan^2 \theta + a^2}^3}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {a \sec^2 \theta \rd \theta} {a^3 \sec^3 \theta}\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \int \cos \theta \rd \theta\)





Definition of Real Secant Function and simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \sin \theta + C\)





Primitive of $\cos x$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {a \sin \theta} {\cos \theta} \dfrac {\cos \theta} a + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {a \tan \theta} {a \sec \theta} + C\)





Tangent is Sine divided by Cosine, Definition of Real Secant Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {a \tan \theta} {\sqrt {a^2 \sec^2 \theta} } + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {a \tan \theta} {\sqrt {a^2 \tan^2 \theta + a^2} } + C\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac x {\sqrt {x^2 + a^2} } + C\)





substituting $x = a \tan \theta$



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Useful substitutions: Example




