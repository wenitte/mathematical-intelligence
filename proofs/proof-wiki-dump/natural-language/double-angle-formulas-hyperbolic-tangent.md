# 

Source: https://proofwiki.org/wiki/Double_Angle_Formulas/Hyperbolic_Tangent



Theorem
$\tanh 2 x = \dfrac {2 \tanh x} {1 + \tanh^2 x}$
where $\tanh$ denotes hyperbolic tangent.


Proof 1













\(\ds \tanh 2 x\)

\(=\)







\(\ds \frac {\sinh 2 x} {\cosh 2 x}\)





Definition 2 of Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds \frac {2 \cosh x \sinh x} {\cosh^2 x + \sinh^2 x}\)





Double Angle Formula for Hyperbolic Sine and Double Angle Formula for Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \frac {\frac {2 \cosh x \sinh x} {\cosh^2 x} } {\frac {\cosh^2 x + \sinh^2 x} {\cosh^2 x} }\)





dividing top and bottom by $\cosh^2 x$














\(\ds \)

\(=\)







\(\ds \frac {2 \tanh x} {1 + \tanh^2 x}\)





Definition 2 of Hyperbolic Tangent



$\blacksquare$


Proof 2













\(\ds \tanh 2 x\)

\(=\)







\(\ds \tanh \left({x + x}\right)\)




















\(\ds \)

\(=\)







\(\ds \frac {\tanh x + \tanh x} {1 + \tanh x \tanh x}\)





Hyperbolic Tangent of Sum














\(\ds \)

\(=\)







\(\ds \frac {2 \tanh x} {1 + \tanh^2 x}\)









$\blacksquare$


Proof 3
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


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 8$: Hyperbolic Functions: $8.26$: Double Angle Formulas




