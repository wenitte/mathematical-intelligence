# 

Source: https://proofwiki.org/wiki/Derivative_of_Cotangent_Function/Proof

Theorem
$\map {\dfrac \d {\d x} } {\cot x} = -\csc^2 x = \dfrac {-1} {\sin^2 x}$
where $\sin x \ne 0$.


Proof
From the definition of the cotangent function:

$\cot x = \dfrac {\cos x} {\sin x}$
From Derivative of Sine Function:

$\map {\dfrac \d {\d x} } {\sin x} = \cos x$
From Derivative of Cosine Function:

$\map {\dfrac \d {\d x} } {\cos x}= -\sin x$

Then:














\(\ds \map {\dfrac \d {\d x} } {\cot x}\)

\(=\)







\(\ds \frac {\sin x \paren {-\sin x} - \cos x \cos x} {\sin^2 x}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {-\paren {\sin^2 x + \cos^2 x} } {\sin^2 x}\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {\sin^2 x}\)





Sum of Squares of Sine and Cosine



This is valid only when $\sin x \ne 0$.
The result follows from the definition of the real cosecant function.
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation: Quotient




