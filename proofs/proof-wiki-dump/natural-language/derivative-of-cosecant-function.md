# 

Source: https://proofwiki.org/wiki/Derivative_of_Cosecant_Function



Theorem
$\map {\dfrac \d {\d x} } {\csc x} = -\csc x \cot x$
where $\sin x \ne 0$.


Proof 1
From the definition of the cosecant function:

$\csc x = \dfrac 1 {\sin x}$
From Derivative of Sine Function:

$\map {\dfrac \d {\d x} } {\sin x} = \cos x$

Then:














\(\ds \map {\dfrac \d {\d x} } {\csc x}\)

\(=\)







\(\ds \cos x \frac {-1} {\sin^2 x}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {-1} {\sin x} \frac {\cos x} {\sin x}\)




















\(\ds \)

\(=\)







\(\ds -\csc x \cot x\)





Definition of Real Cosecant Function and Definition of Real Cotangent Function



This is valid only when $\sin x \ne 0$.
$\blacksquare$


Proof 2













\(\ds \map {\dfrac \d {\d x} } {\csc x}\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\dfrac 1 {\sin x} }\)





Definition of Real Cosecant Function














\(\ds \)

\(=\)







\(\ds \dfrac {\sin x \map {\frac \d {\d x} } 1 - 1 \map {\frac \d {\d x} }{\sin x} } {\sin^2 x}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {0 - \cos x} {\sin^2 x}\)





Derivative of Sine Function, Derivative of Constant














\(\ds \)

\(=\)







\(\ds -\csc x \cot x\)





Definition of Real Cosecant Function, Definition of Real Cotangent Function



This is valid only when $\sin x \ne 0$.
$\blacksquare$


Also see
Derivative of Sine Function
Derivative of Cosine Function
Derivative of Tangent Function
Derivative of Cotangent Function
Derivative of Secant Function


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




