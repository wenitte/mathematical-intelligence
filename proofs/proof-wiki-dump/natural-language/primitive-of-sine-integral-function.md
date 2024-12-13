# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_Integral_Function

Theorem
$\ds \int \map \Si x \rd x = x \map \Si x + \cos x + C$
where $\Si$ denotes the sine integral function.


Proof
By Derivative of Sine Integral Function, we  have: 

$\map {\dfrac \d {\d x} } {\map \Si x} = \dfrac {\sin x} x$
So:














\(\ds \int \map \Si x \rd x\)

\(=\)







\(\ds \int 1 \times \map \Si x \rd x\)




















\(\ds \)

\(=\)







\(\ds x \map \Si x - \int x \frac {\sin x} x \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \map \Si x - \int \sin x \rd x\)




















\(\ds \)

\(=\)







\(\ds x \map \Si x + \cos x + C\)





Primitive of Sine Function



$\blacksquare$





