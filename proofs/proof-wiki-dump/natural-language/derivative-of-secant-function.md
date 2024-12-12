# 

Source: https://proofwiki.org/wiki/Derivative_of_Secant_Function



Theorem
$\map {\dfrac \d {\d x} } {\sec x} = \sec x \tan x$
where $\cos x \ne 0$.


Proof 1
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


Proof 2













\(\ds \map {\dfrac \d {\d x} } {\sec x}\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\dfrac 1 {\cos x} }\)





Definition of Real Secant Function














\(\ds \)

\(=\)







\(\ds \dfrac {\cos x \map {\frac \d {\d x} } 1 - 1 \map {\frac \d {\d x} } {\cos x} } {\cos^2 x}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {0 - \paren {-\sin x} } {\cos^2 x}\)





Derivative of Cosine Function, Derivative of Constant














\(\ds \)

\(=\)







\(\ds \sec x \tan x\)





Definition of Real Secant Function, Definition of Real Tangent Function



This is valid only when $\cos x \ne 0$.
$\blacksquare$


Also see
Derivative of Sine Function
Derivative of Cosine Function
Derivative of Tangent Function
Derivative of Cotangent Function
Derivative of Cosecant Function


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




