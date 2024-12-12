# 

Source: https://proofwiki.org/wiki/Derivative_of_Hyperbolic_Sine



Theorem
$\map {\dfrac \d {\d x} } {\sinh x} = \cosh x$
where $\sinh$ is the hyperbolic sine and $\cosh$ is the hyperbolic cosine.


Proof 1













\(\ds \map {\frac \d {\d x} } {\sinh x}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {\dfrac {e^x - e ^{-x} } 2}\)





Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\map {\frac \d {\d x} } {e^x} - \map {\frac \d {\d x} } {e^{-x} } }\)





Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {e^x - \paren {-e^{-x} } }\)





Derivative of Exponential Function, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {e^x + e^{-x} } 2\)





simplification














\(\ds \)

\(=\)







\(\ds \cosh x\)





Definition of Hyperbolic Cosine



$\blacksquare$


Proof 2













\(\ds \map {\frac \d {\d x} } {\sinh x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \sinh {x + h} - \sinh x} h\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {2 \map \cosh {\frac {x + h + x} 2} \map \sinh {\frac {x + h - x} 2} } h\)





Hyperbolic Sine minus Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {2 \map \cosh {x + \frac h 2} \map \sinh {\frac h 2} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \cosh {x + \frac h 2} \map \sinh {\frac h 2} } {\frac h 2}\)




















\(\ds \)

\(=\)







\(\ds \lim_{2 d \mathop \to 0} \frac {\map \cosh {x + d} \map \sinh d} d\)





where $d = \dfrac h 2$














\(\ds \)

\(=\)







\(\ds \lim_{d \mathop \to 0} \frac {\map \cosh {x + d} \map \sinh d} d\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac {\map \sinh d} d\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac {e^d - e^{-d} } {2 d}\)





Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac {e^{2 d} - 1 } {2 d e^d}\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac 1 {e^d} \frac {e^{2 d} - 1} {2 d}\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac 1 {e^d} \lim_{d \mathop \to 0} \frac {e^{2 d} - 1} {2 d}\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac 1 {e^d} \lim_{2 d \mathop \to 0} \frac {e^{2 d} - 1} {2 d}\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac 1 {e^d}\)





Derivative of Exponential at Zero














\(\ds \)

\(=\)







\(\ds \cosh x\)









$\blacksquare$


Proof 3













\(\ds \map {\frac \d {\d x} } {\sinh x}\)

\(=\)







\(\ds -i \map {\frac \d {\d x} } {\sin i x}\)





Hyperbolic Sine in terms of Sine














\(\ds \)

\(=\)







\(\ds \cos i x\)





Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds \cosh x\)





Hyperbolic Cosine in terms of Cosine



$\blacksquare$


Also see
Derivative of Hyperbolic Cosine
Derivative of Hyperbolic Tangent
Derivative of Hyperbolic Cotangent
Derivative of Hyperbolic Secant
Derivative of Hyperbolic Cosecant


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $8$.
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $6.$ Hyperbolic trigonometric functions
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Hyperbolic functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): hyperbolic function
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives
Weisstein, Eric W. "Hyperbolic Sine." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/HyperbolicSine.html




