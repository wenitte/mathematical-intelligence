# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Tangent_of_a_x/Proof_1

Theorem
$\ds \int \tan^3 a x \rd x = \frac {\tan^2 a x} {2 a} + \frac 1 a \ln \size {\cos a x} + C$


Proof













\(\ds \int \tan^3 a x \rd x\)

\(=\)







\(\ds \int \tan a x \tan^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \tan a x \paren {\sec^2 a x - 1} \rd x\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \int \tan a x \sec^2 a x \rd x - \int \tan a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {\tan^2 a x} {2 a} - \int \tan a x \rd x + C\)





Primitive of $\tan^n a x \sec^2 a x$: $n = 1$














\(\ds \)

\(=\)







\(\ds \frac {\tan^2 a x} {2 a} - \paren {\frac {-\ln \size {\cos a x} } a} + C\)





Primitive of $\tan a x$














\(\ds \)

\(=\)







\(\ds \frac {\tan^2 a x} {2 a} + \frac 1 a \ln \size {\cos a x} + C\)





simplifying



$\blacksquare$





