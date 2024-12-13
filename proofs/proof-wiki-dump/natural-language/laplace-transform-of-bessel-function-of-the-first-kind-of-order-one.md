# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Bessel_Function_of_the_First_Kind_of_Order_One

Theorem
Let $J_1$ denote the Bessel function of the first kind of order $1$.

Then the Laplace transform of $J_1$ is given as:

$\laptrans {\map {J_1} t} = \dfrac {\sqrt {s^2 + 1} - s} {\sqrt {s^2 + 1} }$


Proof













\(\ds \map {J_0'} t\)

\(=\)







\(\ds -\map {J_1} t\)





Derivative of $x^n$ by Bessel Function of the First Kind of Order $n$ of $x$








\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map {J_1} t}\)

\(=\)







\(\ds -\laptrans {\map {J_0'} t}\)




















\(\ds \)

\(=\)







\(\ds -\paren {s \laptrans {\map {J_0} t} - \map {J_0} 0}\)





Laplace Transform of Derivative














\(\ds \)

\(=\)







\(\ds -\paren {s \laptrans {\map {J_0} t} - 1}\)





Bessel Function of the First Kind of Order Zero














\(\ds \)

\(=\)







\(\ds 1 - s \dfrac 1 {\sqrt {s^2 + 1} }\)





Laplace Transform of Bessel Function of the First Kind of Order Zero














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt {s^2 + 1} - s} {\sqrt {s^2 + 1} }\)





rearranging



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Bessel Functions: $35$




