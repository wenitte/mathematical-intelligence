# 

Source: https://proofwiki.org/wiki/Derivative_of_Hyperbolic_Secant



Theorem
$\map {\dfrac \d {\d x} } {\sech x} = -\sech x \tanh x$
where $\tanh$ is the hyperbolic tangent and $\sech$ is the hyperbolic secant.


Proof 1













\(\ds \map {\frac \d {\d x} } {\sech x}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {\frac 1 {\cosh x} }\)





Definition of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \map {\frac \d {\d x} } {\paren {\cosh x}^{-1} }\)





Exponent Laws














\(\ds \)

\(=\)







\(\ds -\paren {\cosh x}^{-2} \sinh x\)





Derivative of Hyperbolic Cosine, Power Rule for Derivatives, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {-1} {\cosh x} \frac {\sinh x} {\cosh x}\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds -\sech z \tanh z\)





Definition of Hyperbolic Secant and Definition of Hyperbolic Tangent



$\blacksquare$


Proof 2













\(\ds \map {\frac \d {\d x} } {\sech x}\)

\(=\)







\(\ds 2 \map {\frac \d {\d x} } {\frac {e^x} {e^{2 x} + 1} }\)





Definition of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \frac 2 {\paren {e^{2 x} + 1}^2} \paren {\map {\frac \d {\d x} } {e^x} \paren {e^{2 x} + 1} - e^x \map {\frac \d {\d x} } {e^{2 x} + 1} }\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\frac 2 {\paren {e^{2 x} + 1}^2} \paren {2 e^{2 x} \cdot e^x - e^x \cdot e^{2 x} - e^x}\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds -\frac {2 \paren {e^{3 x} - e^x} } {\paren {e^{2 x} + 1}^2}\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 e^x} {\paren {e^{2 x} + 1} } \cdot \frac {e^{2 x} - 1} {e^{2 x} + 1}\)




















\(\ds \)

\(=\)







\(\ds -\sech x \tanh x\)





Definition of Hyperbolic Secant, Definition of Hyperbolic Tangent



$\blacksquare$


Also see
Derivative of Hyperbolic Sine
Derivative of Hyperbolic Cosine
Derivative of Hyperbolic Tangent
Derivative of Hyperbolic Cotangent
Derivative of Hyperbolic Cosecant


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Hyperbolic functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
Weisstein, Eric W. "Hyperbolic Secant." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/HyperbolicSecant.html




