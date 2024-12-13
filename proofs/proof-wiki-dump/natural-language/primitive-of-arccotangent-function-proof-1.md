# 

Source: https://proofwiki.org/wiki/Primitive_of_Arccotangent_Function/Proof_1

Theorem
$\ds \int \arccot x \rd x = x \arccot x + \frac {\map \ln {x^2 + 1} } 2 + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \arccot x\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cot u\)

\(=\)







\(\ds x\)





Definition of Arccotangent




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \csc u\)

\(=\)







\(\ds \sqrt {1 + x^2}\)





Difference of Squares of Cosecant and Cotangent




Then:














\(\ds \int \arccot x \rd x\)

\(=\)







\(\ds -\int u \csc^2 u \rd u\)





Primitive of Function of Arccotangent














\(\ds \)

\(=\)







\(\ds -\paren {-u \cot u + \ln \size {\sin u} } + C\)





Primitive of $x \csc^2 a x$ with $a := 1$














\(\ds \)

\(=\)







\(\ds u \cot u - \ln \size {\sin u} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds u \cot u + \ln \size {\csc u} + C\)





Logarithm of Reciprocal and Cosecant is Reciprocal of Sine














\(\ds \)

\(=\)







\(\ds u x + a \ln \size {\csc u} + C\)





Substitution for $\cot u$ from $(1)$














\(\ds \)

\(=\)







\(\ds x u + a \ln \size {\sqrt {1 + x^2} } + C\)





Substitution for $\csc u$ from $(2)$














\(\ds \)

\(=\)







\(\ds x \arccot x + \ln \size {\sqrt {1 + x^2} } + C\)





Substitution for $u$














\(\ds \)

\(=\)







\(\ds x \arccot x + \frac 1 2 \ln \size {x^2 + 1} + C\)





Logarithm of Power and simplifying














\(\ds \)

\(=\)







\(\ds x \arccot x + \frac {\map \ln {x^2 + 1} } 2 + C\)





$x^2 + 1$ always positive



$\blacksquare$





