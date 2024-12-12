# 

Source: https://proofwiki.org/wiki/Double_Angle_Formulas/Hyperbolic_Tangent/Proof_3

Theorem
$\tanh 2 x = \dfrac {2 \tanh x} {1 + \tanh^2 x}$


Proof
Starting from the right, we have














\(\ds \dfrac {2 \tanh x} {1 + \tanh^2 x}\)

\(=\)







\(\ds \dfrac {2 \paren {\dfrac {e^x - e^{-x} } {e^x + e^{-x} } } } {1 + \paren {\dfrac{e^x - e^{-x} } {e^x + e^{-x} } }^2}\)





Definition 1 of Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds \dfrac {2 \paren {e^x + e^{-x} } \paren {e^x - e^{-x} } } {\paren {e^x + e^{-x} }^2 + \paren {e^x - e^{-x} }^2}\)





multiplying both numerator and denominator by $\paren {e^x + e^{-x} }^2$














\(\ds \)

\(=\)







\(\ds \dfrac {2 \paren {e^{2 x} - e^{-2 x} } } {e^{2 x} + 2 + e^{-2 x} + e^{2 x} - 2 + e^{-2 x} }\)





Difference of Two Squares, Square of Sum, Square of Difference














\(\ds \)

\(=\)







\(\ds \dfrac {2 \paren {e^{2 x} - e^{-2 x} } } {2 e^{2 x} + 2 e^{-2 x} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {e^{2 x} - e^{-2 x} } {e^{2 x} + e^{-2 x} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \tanh {2 x}\)





Definition 1 of Hyperbolic Tangent



$\blacksquare$





