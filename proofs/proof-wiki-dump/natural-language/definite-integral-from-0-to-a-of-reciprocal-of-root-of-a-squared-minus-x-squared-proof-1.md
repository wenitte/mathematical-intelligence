# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_a_of_Reciprocal_of_Root_of_a_Squared_minus_x_Squared/Proof_1

Theorem
$\ds \int_0^a \dfrac {\d x} {\sqrt {a^2 - x^2} } = \frac \pi 2$
for $a > 0$. 


Proof













\(\ds \int_0^a \dfrac {\d x} {\sqrt {a^2 - x^2} }\)

\(=\)







\(\ds \int_0^{\mathop \to a} \dfrac {\d x} {\sqrt {a^2 - x^2} }\)





as $\dfrac 1 {\sqrt {a^2 - x^2} }$ does not exist for $x = a$














\(\ds \)

\(=\)







\(\ds \lim_{\gamma \mathop \to a} \int_0^\gamma \dfrac {\d x} {\sqrt {a^2 - x^2} }\)





Definition of Improper Integral on Open Above Interval














\(\ds \)

\(=\)







\(\ds \lim_{\gamma \mathop \to a} \intlimits {\arcsin \frac x a} 0 \gamma\)





Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds \lim_{\gamma \mathop \to a} \paren {\arcsin \frac \gamma a - \arcsin 0}\)




















\(\ds \)

\(=\)







\(\ds \lim_{\gamma \mathop \to a} \arcsin \frac \gamma a\)





Arcsine of Zero is Zero














\(\ds \)

\(=\)







\(\ds \arcsin \frac a a\)




















\(\ds \)

\(=\)







\(\ds \arcsin 1\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2\)





Arcsine of One is Half Pi



$\blacksquare$





