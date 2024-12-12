# 

Source: https://proofwiki.org/wiki/Derivative_of_Inverse_Hyperbolic_Secant

Theorem
Let $S$ denote the open real interval:

$S := \openint 0 1$
Let $x \in S$.


Let $\arsech x$ denote the real inverse hyperbolic secant of $x$.

Then:

$\map {\dfrac \d {\d x} } {\arsech x} = \dfrac {-1} {x \sqrt{1 - x^2} }$


Proof
$\arsech x$ is defined only on the half-open real interval $\hointl 0 1$.

Thus on $\hointl 0 1$:














\(\ds y\)

\(=\)







\(\ds \arsech x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \sech y\)





where $y \in \R_{>0}$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds -\sech y \tanh y\)





Derivative of Hyperbolic Secant








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \dfrac {-1} {\sech y \ \tanh y}\)





Derivative of Inverse Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac {-1} {\sech y \sqrt {1 - \sech^2 y} }\)





Sum of Squares of Hyperbolic Secant and Tangent








\(\ds \leadsto \ \ \)





\(\ds \map {\frac \d {\d x} } {\arsech x}\)

\(=\)







\(\ds \frac {-1} {x \sqrt {1 - x^2} }\)





Definition of $x$ and $y$




When $x = 1$, however, $\sqrt{1 - x^2} = 0$ and so $\dfrac {-1} {x \sqrt {1 - x^2} }$ is undefined.
Hence $\arsech x$ can be defined only on $\openint 0 1$.



This article, or a section of it, needs explaining.In particular: Explain why positive square root is taken at Sum of Squares of Hyperbolic Secant and TangentYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse hyperbolic functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives




