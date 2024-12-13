# 

Source: https://proofwiki.org/wiki/Primitive_of_Arccosine_Function/Proof_1

Theorem
$\ds \int \arccos x \rd x = x \arccos x - \sqrt {1 - x^2} + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \arccos x\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cos u\)

\(=\)







\(\ds x\)





Definition of Real Arccosine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cos u\)

\(=\)







\(\ds \sqrt {1 - x^2}\)





Sum of Squares of Sine and Cosine




Then:














\(\ds \int \arccos x \rd x\)

\(=\)







\(\ds -\int u \sin u \rd u\)





Primitive of Function of Arccosine














\(\ds \)

\(=\)







\(\ds -\paren {\sin u - u \cos u} + C\)





Primitive of $x \sin a x$, setting $a := 1$














\(\ds \)

\(=\)







\(\ds -\paren {\sin u - u x} + C\)





Substitution for $\cos u$ from $(1)$














\(\ds \)

\(=\)







\(\ds -\paren {\sqrt {1 - x^2} - u x} + C\)





Substitution for $\sin u$ from $(2)$














\(\ds \)

\(=\)







\(\ds -\paren {\sqrt {1 - x^2} - x \arccos x} + C\)





Substitution for $u$














\(\ds \)

\(=\)







\(\ds x \arccos x - \sqrt {1 - x^2} + C\)





simplifying



$\blacksquare$





