# 

Source: https://proofwiki.org/wiki/Primitive_of_Arctangent_Function/Proof_1

Theorem
$\ds \int \arctan x \rd x = x \arctan x - \frac {\map \ln {x^2 + 1} } 2 + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \arctan x\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \tan u\)

\(=\)







\(\ds x\)





Definition of Real Arctangent




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sec u\)

\(=\)







\(\ds \sqrt {1 + x^2}\)





Difference of Squares of Secant and Tangent




Then:














\(\ds \int \arctan x \rd x\)

\(=\)







\(\ds \int u \sec^2 u \rd u\)





Primitive of Function of Arctangent














\(\ds \)

\(=\)







\(\ds u \tan u + \ln \size {\cos u} + C\)





Primitive of $x \sec^2 a x$ with $a = 1$














\(\ds \)

\(=\)







\(\ds u \tan u - \ln \size {\sec u} + C\)





Logarithm of Reciprocal and Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds u x - \ln \size {\sec u} + C\)





Substitution for $\tan u$ from $\paren 1$














\(\ds \)

\(=\)







\(\ds u x - \ln \size {\sqrt {1 + x^2} } + C\)





Substitution for $\sec u$ from $\paren 2$














\(\ds \)

\(=\)







\(\ds x \arctan x - \ln \size {\sqrt {1 + x^2} } + C\)





Substitution for $u$














\(\ds \)

\(=\)







\(\ds x \arctan x - \frac {\ln \size {x^2 + 1} } 2 + C\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds x \arctan x - \frac {\map \ln {x^2 + 1} } 2 + C\)





$x^2 + 1$ always positive



$\blacksquare$





