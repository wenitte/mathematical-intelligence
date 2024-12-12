# 

Source: https://proofwiki.org/wiki/Derivative_of_Composite_Function/Third_Derivative

Theorem
Let ${D_x}^k u$ denote the $k$th derivative of a function $u$ with respect to $x$.
Then:

${D_x}^3 w = {D_u}^3 w \paren { {D_x}^1 u}^3 + 3 {D_u}^2 w {D_x}^2 u {D_x}^1 u + {D_u}^1 w {D_x}^3 u$


Proof
For ease of understanding, let Leibniz's notation be used:

$\dfrac {\d^k u} {\d x^k} := {D_x}^k u$

Then we have:














\(\ds {D_x}^3 w\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\dfrac {\d^2 w} {\d x^2} }\)




















\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\dfrac {\d^2 w} {\d u^2} \paren {\dfrac {\d u} {\d x} }^2 + \dfrac {\d w} {\d u} \dfrac {\d^2 u} {\d x^2} }\)





Derivative of Composite Function: Second Derivative














\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\dfrac {\d^2 w} {\d u^2} } \paren {\dfrac {\d u} {\d x} }^2 + \dfrac {\d^2 w} {\d u^2} \map {\dfrac \d {\d x} } {\paren {\dfrac {\d u} {\d x} }^2}\)





Product Rule for Derivatives














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \map {\dfrac \d {\d x} } {\dfrac {\d w} {\d u} } \dfrac {\d^2 u} {\d x^2} + \dfrac {\d w} {\d u} \map {\dfrac \d {\d x} } {\dfrac {\d^2 u} {\d x^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d^3 w} {\d u^3} \dfrac {\d u} {\d x} \paren {\dfrac {\d u} {\d x} }^2 + \dfrac {\d^2 w} {\d u^2} 2 \dfrac {\d u} {\d x} \dfrac {\d^2 u} {\d x^2}\)





Derivative of Composite Function














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\d^2 w} {\d u^2} \dfrac {\d u} {\d x} \dfrac {\d^2 u} {\d x^2} + \dfrac {\d w} {\d u} \paren {\dfrac {\d^3 u} {\d x^3} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d^3 w} {\d u^3} \paren {\dfrac {\d u} {\d x} }^3 + 2 \dfrac {\d^2 w} {\d u^2} \dfrac {\d^2 u} {\d x^2} \dfrac {\d u} {\d x}\)





simplifying














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\d^2 w} {\d u^2} \dfrac {\d^2 u} {\d x^2} \dfrac {\d u} {\d x} + \dfrac {\d w} {\d u} \paren {\dfrac {\d^3 u} {\d x^3} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d^3 w} {\d u^3} \paren {\dfrac {\d u} {\d x} }^3 + 3 \dfrac {\d^2 w} {\d u^2} \dfrac {\d^2 u} {\d x^2} \dfrac {\d u} {\d x} + \dfrac {\d w} {\d u} \paren {\dfrac {\d^3 u} {\d x^3} }\)





simplifying














\(\ds \)

\(=\)







\(\ds D_u^3 w \paren {D_x^1 u}^3 + 3 D_u^2 w D_x^2 u D_x^1 u + D_u^1 w D_x^3 u\)





Leibniz's Notation



$\blacksquare$





