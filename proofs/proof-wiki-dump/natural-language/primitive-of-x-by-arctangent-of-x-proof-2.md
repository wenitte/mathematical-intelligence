# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Arctangent_of_x/Proof_2

Theorem
$\ds \int x \arctan x \rd x = \frac {x^2 + 1} 2 \arctan x - \frac x 2 + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arctan x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {x^2 + 1}\)





Derivative of $\arctan x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^2} 2\)





Primitive of Power




Then:














\(\ds \int x \arctan x \rd x\)

\(=\)







\(\ds \frac {x^2} 2 \arctan x - \int \frac {x^2} 2 \paren {\frac 1 {x^2 + 1} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arctan x - \frac 1 2 \int \frac {x^2 \rd x} {x^2 + 1} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arctan x - \frac 1 2 \paren {x - 1 \arctan x} + C\)





Primitive of $\dfrac {x^2} {x^2 + a^2}$ with $a = 1$














\(\ds \)

\(=\)







\(\ds \frac {x^2 + 1} 2 \arctan x - \frac x 2 + C\)





simplifying



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Integration by Parts: Example




