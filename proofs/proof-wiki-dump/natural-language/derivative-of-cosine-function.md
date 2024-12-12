# 

Source: https://proofwiki.org/wiki/Derivative_of_Cosine_Function



Theorem
$\map {\dfrac \d {\d x} } {\cos x} = -\sin x$


Corollary
$\map {\dfrac \d {\d x} } {\cos a x} = -a \sin a x$


Proof 1
From the definition of the cosine function, we have:

$\ds \cos x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}$
Then:














\(\ds \map {\frac \d {\d x} } {\cos x}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^n 2 n \frac {x^{2 n - 1} } {\paren {2 n}!}\)





Power Series is Differentiable on Interval of Convergence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n - 1} } {\paren {2 n - 1}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^{n + 1} \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)





changing summation index














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)










The result follows from the definition of the sine function.
$\blacksquare$


Proof 2













\(\ds \map {\frac \d {\d x} } {\cos x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \cos {x + h} - \cos x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\cos x \cos h - \sin x \sin h - \cos x} h\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\cos x \cos h - \cos x} h + \lim_{h \mathop \to 0} \frac {-\sin x \sin h} h\)





Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \cos x \lim_{h \mathop \to 0} \frac {\cos h - 1} h - \sin x \lim_{h \mathop \to 0} \frac {\sin h} h\)





Multiple Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \cos x \times 0 - \sin x \times 1\)





Limit of $\dfrac {\cos x - 1} x$ at Zero and Limit of $\dfrac {\sin x} x$ at Zero














\(\ds \)

\(=\)







\(\ds -\sin x\)









$\blacksquare$


Proof 3













\(\ds \frac \d {\d x} \cos x\)

\(=\)







\(\ds \frac \d {\d x} \map \sin {\frac \pi 2 - x}\)





Sine of Complement equals Cosine














\(\ds \)

\(=\)







\(\ds -\map \cos {\frac \pi 2 - x}\)





Derivative of Sine Function and Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\sin x\)





Cosine of Complement equals Sine



$\blacksquare$


Proof 4













\(\ds \map {\frac \d {\d x} } {\cos x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \cos {x + h} - \cos x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \cos {\paren {x + \frac h 2} + \frac h 2} - \map \cos {\paren {x + \frac h 2} - \frac h 2} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {-2 \map \sin {x + \frac h 2} \map \sin {\frac h 2} } h\)





Werner Formula for Sine by Sine














\(\ds \)

\(=\)







\(\ds -\lim_{h \mathop \to 0} \map \sin {x + \frac h 2} \lim_{h \mathop \to 0} \frac {\map \sin {\frac h 2} } {\frac h 2}\)





Multiple Rule for Limits of Real Functions and Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds -\sin x \times 1\)





Real Sine Function is Continuous and Limit of $\dfrac {\sin x} x$ at Zero














\(\ds \)

\(=\)







\(\ds -\sin x\)









$\blacksquare$


Also see
Derivative of Sine Function
Derivative of Tangent Function
Derivative of Cotangent Function
Derivative of Secant Function
Derivative of Cosecant Function


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $5$.
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $3.$ Trigonometric functions
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): cosine
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




