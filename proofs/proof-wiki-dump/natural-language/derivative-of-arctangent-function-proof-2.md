# 

Source: https://proofwiki.org/wiki/Derivative_of_Arctangent_Function/Proof_2

Theorem
$\dfrac {\map \d {\arctan x} } {\d x} = \dfrac 1 {1 + x^2}$


Proof













\(\ds \frac {\map \d {\arctan x} } {\d x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \arctan {x + h} - \arctan x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \arctan {x + h} + \map \arctan {-x} } h\)





Arctangent Function is Odd














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \map \arctan {\frac {x + h - x} {1 + x \paren {x + h} } }\)





Sum of Arctangents














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \map \arctan {\frac h {1 + x^2 + h x} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \paren {\frac h {1 + x^2 + h x} - \frac 1 3 \paren {\frac h {1 + x^2 + h x} }^3 + \frac 1 5 \paren {\frac h {1 + x^2 + h x} }^5 + \map \OO {h^7} }\)





Definition of Real Arctangent














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\frac 1 {1 + x^2 + h x} - \frac {h^2} {3 \paren {1 + x^2 + h x}^3} + \frac {h^4} {5 \paren {1 + x^2 + h x}^5} + \map \OO {h^6} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 + x^2 + 0 x} - \frac {0^2} {3 \paren {1 + x^2 + 0 x}^3} + \frac {0^4} {5 \paren {1 + x^2 + 0 x}^5}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 + x^2}\)









$\blacksquare$





