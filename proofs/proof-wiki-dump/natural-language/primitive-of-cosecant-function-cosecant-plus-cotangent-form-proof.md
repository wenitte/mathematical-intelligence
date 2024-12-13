# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosecant_Function/Cosecant_plus_Cotangent_Form/Proof

Theorem
$\ds \int \csc x \rd x = -\ln \size {\csc x + \cot x} + C$
where $\csc x + \cot x \ne 0$.


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \cot x + \csc x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac \d {\d x} \cot x + \frac \d {\d x} \csc x\)





Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds -\csc^2 x + \frac \d {\d x} \csc x\)





Derivative of Cotangent Function














\(\ds \)

\(=\)







\(\ds -\csc^2 x - \csc x \cot x\)





Derivative of Cosecant Function














\(\ds \)

\(=\)







\(\ds -\csc x \paren {\csc x + \cot x}\)





factorising




Then:














\(\ds \int \csc x \rd x\)

\(=\)







\(\ds \int \frac {\csc x \paren {\csc x + \cot x} } {\csc x + \cot x} \rd x\)





multiplying top and bottom by $\csc x + \cot x$














\(\ds \)

\(=\)







\(\ds -\int \frac {-\csc x \paren {\csc x + \cot x} } {\csc x + \cot x} \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\ln \size {\csc x + \cot x} + C\)





Primitive of Function under its Derivative



$\blacksquare$





