# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Cosecant_Function/Logarithm_Form

Theorem
$\ds \int \csch x \rd x = -\ln \size {\csch x + \coth x} + C$
where $\csch x + \coth x \ne 0$.


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \coth x + \csch x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac \d {\d x} \coth x + \frac \d {\d x} \csch x\)





Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds -\csch^2 x + \frac \d {\d x} \csch x\)





Derivative of Hyperbolic Cotangent














\(\ds \)

\(=\)







\(\ds -\csch^2 x - \csch x \coth x\)





Derivative of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds -\csch x \paren {\csch x + \coth x}\)





factorising




Then:














\(\ds \int \csch x \rd x\)

\(=\)







\(\ds \int \frac {\csch x \paren {\csch x + \coth x} } {\csch x + \coth x} \rd x\)





multiplying top and bottom by $\csch x + \coth x$














\(\ds \)

\(=\)







\(\ds -\int \frac {-\csch x \paren {\csch x + \coth x} } {\csch x + \coth x} \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\ln \size {\csch x + \coth x} + C\)





Primitive of Function under its Derivative



$\blacksquare$


Also see
Primitive of Hyperbolic Secant Function




