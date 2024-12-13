# 

Source: https://proofwiki.org/wiki/Second_Derivative_of_Inverse_Function

Theorem
Let $f$ be a real function which is of differentiability class $2$.
Let $f$ have an inverse $f^{-1}$, likewise of differentiability class $2$.
Then:

$\dfrac {\d^2 x} {\d y^2} = -\dfrac {\d^2 y} {\d x^2} \paren {\dfrac {\d y} {\d x} }^{-3}$


Proof













\(\ds \dfrac {\d^2 x} {\d y^2}\)

\(=\)







\(\ds \map {\dfrac \d {\d y} } {\dfrac {\d x} {\d y} }\)





Definition of Second Derivative














\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d y} } {\dfrac 1 {\d y / \d x} }\)





Derivative of Inverse Function














\(\ds \)

\(=\)







\(\ds \dfrac {-1} {\paren {\d y / \d x}^2} \map {\dfrac \d {\d y} } {\dfrac {\d y} {\d x} }\)





Derivative of Composite Function














\(\ds \)

\(=\)







\(\ds \dfrac {-1} {\paren {\d y / \d x}^2} \dfrac {\d x} {\d y} \map {\dfrac \d {\d x} } {\dfrac {\d y} {\d x} }\)





Derivative of Composite Function














\(\ds \)

\(=\)







\(\ds \dfrac {-1} {\paren {\d y / \d x}^3} \dfrac {\d^2 y} {\d x^2}\)





Definition of Second Derivative, Derivative of Inverse Function and simplification














\(\ds \)

\(=\)







\(\ds -\dfrac {\d^2 y} {\d x^2} \paren {\dfrac {\d y} {\d x} }^{-3}\)





rearranging into given format



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Leibniz's Theorem for Differentiation of a Product: $3.3.10$




