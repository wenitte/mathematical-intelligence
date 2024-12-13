# 

Source: https://proofwiki.org/wiki/Primitive_of_Error_Function

Theorem
$\ds \int \map \erf x \rd x = x \map \erf x + \frac 1 {\sqrt \pi} e^{-x^2} + C$
where $\erf$ denotes the error function.


Proof
By Derivative of Error Function, we have:

$\dfrac \d {\d x} \paren {\map \erf x} = \dfrac 2 {\sqrt \pi} e^{-x^2}$
So:














\(\ds \int \map \erf x \rd x\)

\(=\)







\(\ds \int 1 \times \map \erf x \rd x\)




















\(\ds \)

\(=\)







\(\ds x \map \erf x - \frac 2 {\sqrt \pi} \int x e^{-x^2} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \map \erf x + \frac 1 {\sqrt \pi} \int \paren {-2 x e^{-x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds x \map \erf x + \frac 1 {\sqrt \pi} \int e^u \rd u\)





substituting $u = -x^2$














\(\ds \)

\(=\)







\(\ds x \map \erf x + \frac 1 {\sqrt \pi} e^u + C\)





Primitive of Exponential Function














\(\ds \)

\(=\)







\(\ds x \map \erf x + \frac 1 {\sqrt \pi} e^{-x^2} + C\)





substituting back for $u$



$\blacksquare$





