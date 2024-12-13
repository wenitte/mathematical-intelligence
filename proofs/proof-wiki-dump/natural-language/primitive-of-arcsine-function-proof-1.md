# 

Source: https://proofwiki.org/wiki/Primitive_of_Arcsine_Function/Proof_1

Theorem
$\ds \int \arcsin x \rd x = x \arcsin x + \sqrt {1 - x^2} + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \arcsin x\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sin u\)

\(=\)







\(\ds x\)





Definition of Real Arcsine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cos u\)

\(=\)







\(\ds \sqrt {1 - x^2}\)





Sum of Squares of Sine and Cosine




Then:














\(\ds \int \arcsin x \rd x\)

\(=\)







\(\ds \int u \cos u \rd u\)





Primitive of Function of Arcsine














\(\ds \)

\(=\)







\(\ds \cos u + u \sin u + C\)





Primitive of $x \cos a x$














\(\ds \)

\(=\)







\(\ds \cos u + u x + C\)





Substitution for $\sin u$ from $\paren 1$














\(\ds \)

\(=\)







\(\ds \sqrt {1 - x^2} + u x + C\)





Substitution for $\cos u$ from $\paren 2$














\(\ds \)

\(=\)







\(\ds x \arcsin x + \sqrt {1 - x^2} + C\)





Substitution for $u$ and rearranging



$\blacksquare$





