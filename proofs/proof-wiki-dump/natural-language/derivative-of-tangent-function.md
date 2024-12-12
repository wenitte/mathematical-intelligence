# 

Source: https://proofwiki.org/wiki/Derivative_of_Tangent_Function



Theorem
$\map {\dfrac \d {\d x} } {\tan x} = \sec^2 x = \dfrac 1 {\cos^2 x}$
when $\cos x \ne 0$.


Corollary 1
$\map {\dfrac \d {\d x} } {\tan a x} = a \sec^2 a x$


Corollary 2
$\dfrac \d {\d x} \tan x = 1 + \tan^2 x$


Corollary 3
$\map {\dfrac \d {\d x} } {\tan a x} = a \paren {\tan^2 a x + 1}$


Proof 1
From the definition of the tangent function:

$\tan x = \dfrac {\sin x} {\cos x}$
From Derivative of Sine Function:

$\map {\dfrac \d {\d x} } {\sin x} = \cos x$
From Derivative of Cosine Function:

$\map {\dfrac \d {\d x} } {\cos x} = -\sin x$

Then:














\(\ds \map {\dfrac \d {\d x} } {\tan x}\)

\(=\)







\(\ds \frac {\cos x \cos x - \sin x \paren {-\sin x} } {\cos^2 x}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {\cos^2 x + \sin^2 x} {\cos^2 x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\cos^2 x}\)





Sum of Squares of Sine and Cosine



This is valid only when $\cos x \ne 0$.
The result follows from the Secant is Reciprocal of Cosine.
$\blacksquare$


Proof 2













\(\ds \map {\frac \d {\d x} } {\tan x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \tan {x + h} - \tan x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\frac {\tan x + \tan h} {1 - \tan x \tan h} - \tan x} h\)





Tangent of Sum














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\frac {\tan x + \tan h - \tan x + \tan^2 x \tan h} {1 - \tan x \tan h} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\tan h + \tan^2 x \tan h} {h \paren {1 - \tan x \tan h} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {1 + \tan^2 x} {1 - \tan x \tan h} \cdot \lim_{h \mathop \to 0} \frac {\tan h} h\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \frac {1 + \tan^2 x} {1 - \tan x \tan 0} \cdot 1\)





Limit of $\dfrac {\tan x} x$ at Zero














\(\ds \)

\(=\)







\(\ds 1 + \tan^2 x\)





Tangent of Zero














\(\ds \)

\(=\)







\(\ds \sec^2 x\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 {\cos^2 x}\)





Secant is Reciprocal of Cosine ($\cos x \ne 0$)



$\blacksquare$


Also see
Derivative of Sine Function
Derivative of Cosine Function
Derivative of Cotangent Function
Derivative of Secant Function
Derivative of Cosecant Function


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $6$.
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $3.$ Trigonometric functions
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




