# 

Source: https://proofwiki.org/wiki/Primitive_of_Arccotangent_of_x_over_a/Proof_1

Theorem
$\ds \int \arccot \frac x a \rd x = x \arccot \frac x a + \frac a 2 \map \ln {x^2 + a^2} + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \arccot \frac x a\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cot u\)

\(=\)







\(\ds \frac x a\)





Definition of Arccotangent




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \csc u\)

\(=\)







\(\ds \sqrt {1 + \frac {x^2} {a^2} }\)





Difference of Squares of Cosecant and Cotangent




Then:














\(\ds \int \arccot \frac x a \rd x\)

\(=\)







\(\ds -a \int u \csc^2 u \rd u\)





Primitive of Function of Arccotangent














\(\ds \)

\(=\)







\(\ds -a \paren {-u \cot u + \ln \size {\sin u} } + C\)





Primitive of $x \csc^2 a x$ with $a = 1$














\(\ds \)

\(=\)







\(\ds a u \cot u - a \ln \size {\sin u} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds a u \cot u + a \ln \size {\csc u} + C\)





Logarithm of Reciprocal and Cosecant is Reciprocal of Sine














\(\ds \)

\(=\)







\(\ds a u \frac x a + a \ln \size {\csc u} + C\)





Substitution for $\cot u$ from $(1)$














\(\ds \)

\(=\)







\(\ds x u + a \ln \size {\sqrt {1 + \frac {x^2} {a^2} } } + C\)





Substitution for $\csc u$ from $(2)$














\(\ds \)

\(=\)







\(\ds x \arccot \frac x a + a \ln \size {\sqrt {1 + \frac {x^2} {a^2} } } + C\)





Substitution for $u$














\(\ds \)

\(=\)







\(\ds x \arccot \frac x a + \frac a 2 \ln \size {\frac {x^2 + a^2 } {a^2} } + C\)





Logarithm of Power and simplifying














\(\ds \)

\(=\)







\(\ds x \arccot \frac x a + \frac a 2 \ln \size {x^2 + a^2} - \ln \size {a^2} + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds x \arccot \frac x a + \frac a 2 \ln \size {x^2 + a^2} + C\)





subsuming $\ln \size {a^2}$ into arbitrary constant














\(\ds \)

\(=\)







\(\ds x \arccot \frac x a + \frac a 2 \, \map \ln {x^2 + a^2} + C\)





$x^2 + a^2$ always positive



$\blacksquare$





