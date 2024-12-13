# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Secant_Function/Arctangent_of_Exponential_Form



Theorem
$\ds \int \sech x \rd x = 2 \map \arctan {e^x} + C$


Proof
Let:














\(\ds \int \sech x \rd x\)

\(=\)







\(\ds \int \frac 2 {e^x + e^{-x} } \rd x\)





Definition 1 of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \int \frac {2 e^x} {e^{2 x} + 1} \rd x\)





multiplying top and bottom by $e^x$



Let:














\(\ds u\)

\(=\)







\(\ds e^x\)














\(\ds \leadsto \ \ \)





\(\ds u'\)

\(=\)







\(\ds e^x\)





Derivative of Exponential Function




Then:














\(\ds \int \sech x \rd x\)

\(=\)







\(\ds \int \frac {2 \rd u} {u^2 + 1}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds 2 \arctan u + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$: Arctangent Form














\(\ds \)

\(=\)







\(\ds 2 \map \arctan {e^x} + C\)





Definition of $u$



$\blacksquare$


Also see
Primitive of Hyperbolic Secant Function/Arcsine Form
Primitive of Hyperbolic Cosecant Function


Sources
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Other Standard Results: $\text {(xxvii)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.29$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




