# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosine_Integral_Function

Theorem
$\ds \int \map \Ci x \rd x = x \map \Ci x + \sin x + C$
where:

$\Ci$ denotes the cosine integral function
$x$ is a strictly positive real number.


Proof
By Derivative of Cosine Integral Function, we have: 

$\ds \frac \d {\d x} \paren {\map \Ci x} = -\frac {\cos x} x$
So:














\(\ds \int \map \Ci x \rd x\)

\(=\)







\(\ds \int 1 \times \map \Ci \rd x\)




















\(\ds \)

\(=\)







\(\ds x \map \Ci x - \int \paren {-x \frac {\cos x} x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \map \Ci x + \int \cos x \rd x\)




















\(\ds \)

\(=\)







\(\ds x \map \Ci x + \sin x + C\)





Primitive of Cosine Function



$\blacksquare$





