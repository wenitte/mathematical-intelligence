# 

Source: https://proofwiki.org/wiki/Primitive_of_Arctangent_of_x_over_a/Proof_1

Theorem
$\ds \int \arctan \frac x a \rd x = x \arctan \frac x a - \frac a 2 \map \ln {x^2 + a^2} + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \arctan \frac x a\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \tan u\)

\(=\)







\(\ds \frac x a\)





Definition of Real Arctangent




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sec u\)

\(=\)







\(\ds \sqrt {1 + \frac {x^2} {a^2} }\)





Difference of Squares of Secant and Tangent




Then:














\(\ds \int \arctan \frac x a \rd x\)

\(=\)







\(\ds a \int u \sec^2 u \rd u\)





Primitive of Function of Arctangent














\(\ds \)

\(=\)







\(\ds a \paren {u \tan u + \ln \size {\cos u} } + C\)





Primitive of $x \sec^2 a x$ with $a = 1$














\(\ds \)

\(=\)







\(\ds a u \tan u - a \ln \size {\sec u} + C\)





Logarithm of Reciprocal and Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds a u \frac x a - a \ln \size {\sec u} + C\)





Substitution for $\tan u$ from $\paren 1$














\(\ds \)

\(=\)







\(\ds a u \frac x a - a \ln \size {\sqrt {1 + \frac {x^2} {a^2} } } + C\)





Substitution for $\sec u$ from $\paren 2$














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - a \ln \size {\sqrt {1 + \frac {x^2} {a^2} } } + C\)





Substitution for $u$














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - \frac a 2 \ln \size {\frac {x^2 + a^2 } {a^2} } + C\)





Logarithm of Power and simplifying














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - \frac a 2 \ln \size {x^2 + a^2} - \ln \size {a^2} + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - \frac a 2 \ln \size {x^2 + a^2} + C\)





subsuming $\ln \size {a^2}$ into arbitrary constant














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - \frac a 2 \map \ln {x^2 + a^2} + C\)





$x^2 + a^2$ always positive



$\blacksquare$





