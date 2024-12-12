# 

Source: https://proofwiki.org/wiki/Derivative_of_Secant_Function/Proof_1

Theorem
$\map {\dfrac \d {\d x} } {\sec x} = \sec x \tan x$
where $\cos x \ne 0$.


Proof
From the definition of the secant function:

$\sec x = \dfrac 1 {\cos x} = \paren {\cos x}^{-1}$
From Derivative of Cosine Function:

$\map {\dfrac \d {\d x} } {\cos x} = -\sin x$

Then:














\(\ds \map {\dfrac \d {\d x} } {\sec x}\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\paren {\cos x}^{-1} }\)





Exponent Laws














\(\ds \)

\(=\)







\(\ds \paren {-\sin x} \paren {-\cos^{-2} x}\)





Chain Rule for Derivatives, Power Rule














\(\ds \)

\(=\)







\(\ds \frac 1 {\cos x} \frac {\sin x} {\cos x}\)





Exponent Laws














\(\ds \)

\(=\)







\(\ds \sec x \tan x\)





Definition of Real Secant Function and Definition of Real Tangent Function



This is valid only when $\cos x \ne 0$.
$\blacksquare$





