# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_x_by_Logarithm_of_Sine_x

Theorem
$\ds \int \sin x \map \ln {\sin x} \rd x = \cos x \paren {1 - \map \ln {\sin x} } + \ln \size {\tan \frac x 2} + C$


Proof
We have: 














\(\ds \map {\frac \d {\d x} } {\map \ln {\sin x} }\)

\(=\)







\(\ds \map {\frac \d {\map \d {\sin x} } } {\map \ln {\sin x} } \map {\frac \d {\d x} } {\sin x}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {\cos x} {\sin x}\)





Derivative of Logarithm Function, Derivative of Sine Function



We also have, by Primitive of Sine Function:

$\ds \int \sin x \rd x = -\cos x + C$
So: 














\(\ds \int \sin x \map \ln {\sin x} \rd x\)

\(=\)







\(\ds -\cos x \map \ln {\sin x} + \int \frac {\cos^2 x} {\sin x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\cos x \map \ln {\sin x} + \int \frac {1 - \sin^2 x} {\sin x} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds -\cos x \map \ln {\sin x} + \int \csc x \rd x - \int \sin x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\cos x \map \ln {\sin x} + \ln \size {\tan \frac x 2} + \cos x + C\)





Primitive of Sine Function, Primitive of $\csc x$: Tangent Form














\(\ds \)

\(=\)







\(\ds \cos x \paren {1 - \map \ln {\sin x} } + \ln \size {\tan \frac x 2} + C\)









$\blacksquare$





