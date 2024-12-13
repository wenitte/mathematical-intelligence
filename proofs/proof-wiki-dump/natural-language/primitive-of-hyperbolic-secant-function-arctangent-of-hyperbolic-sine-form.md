# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Secant_Function/Arctangent_of_Hyperbolic_Sine_Form

Theorem
$\ds \int \sech x \rd x =  \map \arctan {\sinh x} + C$


Proof
We have that:














\(\ds \int \sech x \rd x\)

\(=\)







\(\ds \int \frac {\d x} {\cosh x}\)





Definition 2 of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \int \frac {\cosh x \rd x} {\cosh^2 x}\)





multiplying top and bottom by $\cosh x$














\(\ds \)

\(=\)







\(\ds \int \frac {\cosh x \rd x} {1 + \sinh^2 x}\)





Difference of Squares of Hyperbolic Cosine and Sine




Let:














\(\ds u\)

\(=\)







\(\ds \sinh x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \cosh x\)





Derivative of Hyperbolic Sine




Then:














\(\ds \int \sech x \rd x\)

\(=\)







\(\ds \int \frac {\d u} {u^2 + 1}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \arctan u + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$: Arctangent Form














\(\ds \)

\(=\)







\(\ds \map \arctan {\sinh x} + C\)





substituting for $u$



$\blacksquare$


Sources
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $5$. Integrals: Integrals of Special Functions: $19$




