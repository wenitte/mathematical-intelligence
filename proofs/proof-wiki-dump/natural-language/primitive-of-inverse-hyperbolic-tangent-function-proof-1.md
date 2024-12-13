# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Tangent_Function/Proof_1

Theorem
$\ds \int \artanh x \rd x = x \artanh x + \frac {\map \ln {1 - x^2} } 2 + C$
for $x^2 < 1$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \artanh x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {1 - x^2}\)





Derivative of $\artanh \dfrac x a$, setting $a := 1$




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














\(\ds \int \artanh x \rd x\)

\(=\)







\(\ds x \artanh x - \int x \paren {\frac 1 {1 - x^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \artanh x - \paren {-\frac 1 2 \map \ln {1 - x^2} } + C\)





Primitive of $\dfrac x {a^2 - x^2}$, setting $a := 1$














\(\ds \)

\(=\)







\(\ds x \artanh x + \frac {\map \ln {1 - x^2} } 2 + C\)





simplifying



$\blacksquare$




