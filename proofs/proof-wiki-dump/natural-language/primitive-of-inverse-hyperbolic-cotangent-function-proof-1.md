# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Cotangent_Function/Proof_1

Theorem
$\ds \int \arcoth x \rd x = x \arcoth x + \frac {\map \ln {x^2 - 1} } 2 + C$
for $x^2 > 1$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcoth x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-1} {x^2 - 1}\)





Derivative of $\arcoth \dfrac x a$, setting $a := 1$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \arcoth x \rd x\)

\(=\)







\(\ds x \arcoth x - \int x \paren {\frac {-1} {x^2 - 1} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arcoth x + \int \frac {x \rd x} {x^2 - 1} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \arcoth x + \paren {\frac 1 2 \map \ln {x^2 - 1} } + C\)





Primitive of $\dfrac x {x^2 - a^2}$, setting $a := 1$














\(\ds \)

\(=\)







\(\ds x \arcoth x + \frac {\map \ln {x^2 - 1} } 2 + C\)





simplifying



$\blacksquare$





