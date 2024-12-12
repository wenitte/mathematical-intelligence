# 

Source: https://proofwiki.org/wiki/Derivative_of_Inverse_Hyperbolic_Cotangent



Theorem
Let $S$ denote the union of the unbounded open real intervals:

$S := \openint \gets {-1} \cup \openint 1 \to$
Let $x \in S$.
Let $\coth^{-1} x$ be the inverse hyperbolic cotangent of $x$.

Then:

$\map {\dfrac \d {\d x} } {\coth^{-1} x} = \dfrac {-1} {x^2 - 1}$


Proof













\(\ds y\)

\(=\)







\(\ds \coth^{-1} x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \coth y\)





Definition of Real Inverse Hyperbolic Cotangent








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds -\csch^2 y\)





Derivative of Hyperbolic Cotangent








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac {-1} {\csch^2 y}\)





Derivative of Inverse Function














\(\ds \)

\(=\)







\(\ds \frac {-1} {\coth^2 y - 1}\)





Difference of Squares of Hyperbolic Cotangent and Cosecant








\(\ds \leadsto \ \ \)





\(\ds \map {\frac \d {\d x} } {\coth^{-1} x}\)

\(=\)







\(\ds \frac {-1} {x^2 - 1}\)





Definition of $x$ and $y$



$\blacksquare$


Also presented as
This result can also be (and usually is) reported as:

$\map {\dfrac \d {\d x} } {\coth^{-1} x} = \dfrac 1 {1 - x^2}$
but this obscures the fact that $x^2 > 1$ in order for it to be defined.


Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $7.$ Inverse hyperbolic trigonometric functions
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse hyperbolic functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives




