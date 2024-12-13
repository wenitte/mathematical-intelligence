# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Logarithm_of_x/Proof_1

Theorem
$\ds \int x \ln x \rd x = \frac {x^2} 2 \paren {\ln x - \frac 1 2} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 x\)





Derivative of $\ln x$




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














\(\ds \int x \ln x \rd x\)

\(=\)







\(\ds \frac {x^2} 2 \ln x - \int \frac {x^2} 2 \paren {\frac 1 x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \ln x - \frac 1 2 \int x \rd x + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \ln x - \frac 1 2 \paren {\frac {x^2} 2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \paren {\ln x - \frac 1 2} + C\)





simplifying



$\blacksquare$





