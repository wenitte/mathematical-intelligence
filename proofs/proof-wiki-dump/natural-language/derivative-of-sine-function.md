# 

Source: https://proofwiki.org/wiki/Derivative_of_Sine_Function



Theorem
$\map {\dfrac \d {\d x} } {\sin x} = \cos x$


Corollary
$\map {\dfrac \d {\d x} } {\sin a x} = a \cos a x$


Proof 1
From the definition of the sine function, we have:

$\ds \sin x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}$
From Radius of Convergence of Power Series over Factorial, this series converges for all $x$.

From Power Series is Differentiable on Interval of Convergence:














\(\ds \map {\frac \d {\d x} } {\sin x}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}\)










The result follows from the definition of the cosine function.
$\blacksquare$


Proof 2













\(\ds \map {\frac \d {\d x} } {\sin x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \sin {x + h} - \sin x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\sin x \cos h + \sin h \cos x - \sin x} h\)





Sine of Sum














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\sin x \paren {\cos h - 1} + \sin h \cos x} h\)





collecting terms containing $\map \sin x$ and factoring














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\sin x \paren {\cos h - 1} } h + \lim_{h \mathop \to 0} \frac {\sin h \cos x} h\)





Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \map \sin x \times 0 + 1 \times \cos x\)





Limit of $\dfrac {\sin x} x$ at Zero and Limit of $\dfrac {\cos x - 1} x$ at Zero














\(\ds \)

\(=\)







\(\ds \cos x\)









$\blacksquare$


Proof 3













\(\ds \dfrac \d {\d x} \sin x\)

\(=\)







\(\ds \dfrac \d {\d x} \map \cos {\frac \pi 2 - x}\)





Cosine of Complement equals Sine














\(\ds \)

\(=\)







\(\ds \map \sin {\frac \pi 2 - x}\)





Derivative of Cosine Function and Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \cos x\)





Sine of Complement equals Cosine



$\blacksquare$


Proof 4













\(\ds \map {\frac \d {\d x} } {\sin x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \sin {x + h} - \sin x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \sin {\paren {x + \frac h 2} + \frac h 2} - \map \sin {\paren {x + \frac h 2} - \frac h 2} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {2 \map \cos {x + \frac h 2} \map \sin {\frac h 2} } h\)





Werner Formula for Cosine by Sine














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \map \cos {x + \frac h 2} \lim_{h \mathop \to 0} \frac {\map \sin {\frac h 2} } {\frac h 2}\)





Multiple Rule for Limits of Real Functions and Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \cos x \times 1\)





Cosine Function is Continuous and Limit of $\dfrac {\sin x} x$ at Zero














\(\ds \)

\(=\)







\(\ds \cos x\)









$\blacksquare$


Proof 5













\(\ds \map \arcsin x\)

\(=\)







\(\ds \int_0^x \frac {\d x} {\sqrt {1 - x^2} }\)





Arcsine as Integral








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\map \d {\map \arcsin y} } {\d y}\)

\(=\)







\(\ds \dfrac {\map \d {\ds \int_0^y \dfrac 1 {\sqrt {1 - y^2} } \rd y} } {\d y}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {1 - y^2} }\)





Corollary to Fundamental Theorem of Calculus: First Part



Note that we get the same answer as Derivative of Arcsine Function.
By definition of real $\arcsin$ function, $\arcsin$ is bijective on its domain $\closedint {-1} 1$.
Thus its inverse is itself a mapping.
From Inverse of Inverse of Bijection, its inverse is the $\sin$ function.














\(\ds \dfrac {\map \d {\sin \theta} } {\d \theta}\)

\(=\)







\(\ds 1 / \dfrac 1 {\sqrt {1 - \sin^2 \theta} }\)





Derivative of Inverse Function














\(\ds \)

\(=\)







\(\ds \pm \sqrt {1 - \sin^2 \theta}\)





Positive in Quadrant $\text I$ and Quadrant $\text {IV}$, Negative in Quadrant $\text {II}$ and Quadrant $\text {III}$














\(\ds \dfrac {\map \d {\sin \theta} } {\d \theta}\)

\(=\)







\(\ds \cos \theta\)









$\blacksquare$


Also see
Derivative of Cosine Function
Derivative of Tangent Function
Derivative of Cotangent Function
Derivative of Secant Function
Derivative of Cosecant Function


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $4$.
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $3.$ Trigonometric functions
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): sine
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




