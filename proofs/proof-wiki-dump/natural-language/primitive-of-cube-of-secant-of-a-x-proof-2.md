# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Secant_of_a_x/Proof_2

Theorem
$\ds \int \sec^3 a x \rd x = \frac 1 {2 a} \paren {\sec a x \tan a x + \ln \size {\sec a x + \tan a x} } + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sec a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \sec a x \tan a x\)





Derivative of Function of Constant Multiple, Derivative of $\sec$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \sec^2 a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\tan a x} a\)





Primitive of $\sec^2 a x$




Then:














\(\ds \int \sec^3 a x \rd x\)

\(=\)







\(\ds \int \sec a x \sec^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \sec a x \frac {\tan a x} a - \int \paren {\frac {\tan a x} a} \paren {a \sec a x \tan a x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac 1 a \sec a x \tan a x - \int \tan^2 a x \sec a x \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 a \sec a x \tan a x - \int \paren {\sec^2 a x - 1} \sec a x \rd x + C\)





Difference of $\sec^2$ and $\tan^2$














\(\ds \)

\(=\)







\(\ds \frac 1 a \sec a x \tan a x - \int \sec^3 a x \rd x + \int \sec a x \rd x + C\)





Linear Combination of Primitives








\(\ds \leadsto \ \ \)





\(\ds 2 \int \sec^3 a x \rd x\)

\(=\)







\(\ds \frac 1 a \sec a x \tan a x + \int \sec a x \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 a \sec a x \tan a x + \frac 1 a \ln \size {\sec a x + \tan a x} + C\)





Primitive of $\sec a x$



The result follows.
$\blacksquare$





