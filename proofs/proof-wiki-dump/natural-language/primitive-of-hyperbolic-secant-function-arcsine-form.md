# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Secant_Function/Arcsine_Form



Theorem
$\ds \int \sech x \rd x = \map \arcsin {\tanh x} + C$


Proof
Let:














\(\ds \int \sech x \rd x\)

\(=\)







\(\ds \int \frac {\sech^2 x} {\sech x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\sech^2 x} {\sqrt {1 - \tanh^2 x} } \rd x\)





Sum of Squares of Hyperbolic Secant and Tangent



Let:














\(\ds u\)

\(=\)







\(\ds \tanh x\)














\(\ds \leadsto \ \ \)





\(\ds u'\)

\(=\)







\(\ds \sech^2 x\)





Derivative of Hyperbolic Tangent




Then:














\(\ds \int \sech x \rd x\)

\(=\)







\(\ds \int \frac {\d u} {\sqrt {1 - u^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \map \arcsin u + C\)





Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$: Arcsine Form














\(\ds \)

\(=\)







\(\ds \map \arcsin {\tanh x} + C\)





Definition of $u$



$\blacksquare$


Also see
Primitive of Hyperbolic Secant Function/Arctangent of Exponential Form
Primitive of Hyperbolic Cosecant Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.29$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Hyperbolic functions




