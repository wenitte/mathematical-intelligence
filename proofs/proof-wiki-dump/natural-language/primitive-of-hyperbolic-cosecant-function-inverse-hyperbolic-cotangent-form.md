# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Cosecant_Function/Inverse_Hyperbolic_Cotangent_Form



Theorem
$\ds \int \csch x \rd x = -2 \map {\coth^{-1} } {e^x} + C$


Proof
Let:














\(\ds \int \csch x \rd x\)

\(=\)







\(\ds \int \frac 2 {e^x - e^{-x} } \rd x\)





Definition of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \int \frac {2 e^x} {e^{2 x} - 1} \rd x\)





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














\(\ds \int \csch x \rd x\)

\(=\)







\(\ds \int \frac {2 \rd u} {u^2 - 1}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -2 \coth^{-1} u + C\)





Primitive of Reciprocal of $x^2 - a^2$: $\coth^{-1}$ form














\(\ds \)

\(=\)







\(\ds -2 \map {\coth^{-1} } {e^x} + C\)





Definition of $u$



$\blacksquare$


Also see
Primitive of Hyperbolic Secant Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.30$
(in which a mistake apppears)




