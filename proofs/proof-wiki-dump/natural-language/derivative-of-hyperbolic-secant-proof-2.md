# 

Source: https://proofwiki.org/wiki/Derivative_of_Hyperbolic_Secant/Proof_2

Theorem
$\map {\dfrac \d {\d x} } {\sech x} = -\sech x \tanh x$


Proof













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





