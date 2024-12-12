# 

Source: https://proofwiki.org/wiki/Derivative_of_Composite_Function/Second_Derivative

Theorem
Let ${D_x}^k u$ denote the $k$th derivative of a function $u$ with respect to $x$.
Then:

${D_x}^2 w = {D_u}^2 w \paren { {D_x}^1 u}^2 + {D_u}^1 w {D_x}^2 u$


Proof
For ease of understanding, let Leibniz's notation be used:

$\dfrac {\d^k u} {\d x^k} := {D_x}^k u$

Then we have:














\(\ds {D_x}^2 w\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\dfrac {\d w} {\d x} }\)




















\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\dfrac {\d w} {\d u} \dfrac {\d u} {\d x} }\)





Derivative of Composite Function














\(\ds \)

\(=\)







\(\ds \dfrac {\d u} {\d x} \map {\dfrac {\d} {\d x} } {\dfrac {\d w} {\d u} } + \dfrac {\d w} {\d u} \dfrac {\d^2 u} {\d x^2}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {\d u} {\d x} \map {\dfrac {\d} {\d u} } {\dfrac {\d w} {\d u} } \dfrac {\d u} {\d x} + \dfrac {\d w} {\d u} \dfrac {\d^2 u} {\d x^2}\)





Derivative of Composite Function














\(\ds \)

\(=\)







\(\ds \map {\dfrac {\d^2 w} {\d u^2} } {\dfrac {\d u} {\d x} }^2 + \dfrac {\d w} {\d u} \dfrac {\d^2 u} {\d x^2}\)




















\(\ds \)

\(=\)







\(\ds {D_u}^2 w \paren { {D_x}^1 u}^2 + {D_u}^1 w {D_x}^2 u\)





Definition of Leibniz's Notation for Derivatives



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $21$




