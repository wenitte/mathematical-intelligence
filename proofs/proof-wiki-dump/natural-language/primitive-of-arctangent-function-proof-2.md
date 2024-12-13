# 

Source: https://proofwiki.org/wiki/Primitive_of_Arctangent_Function/Proof_2

Theorem
$\ds \int \arctan x \rd x = x \arctan x - \frac {\map \ln {x^2 + 1} } 2 + C$


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







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \arctan x \rd x\)

\(=\)







\(\ds x \arctan x - \int x \paren {\frac 1 {x^2 + 1} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arctan x - \int \frac {x \rd x} {x^2 + 1} + C\)





rearranging














\(\ds \)

\(=\)







\(\ds x \arctan x - \paren {\frac 1 2 \ln \paren {x^2 + 1} } + C\)





Primitive of $\dfrac x {x^2 + a^2}$, setting $a := 1$














\(\ds \)

\(=\)







\(\ds x \arctan x - \frac {\ln \paren {x^2 + 1} } 2 + C\)





simplifying



$\blacksquare$





