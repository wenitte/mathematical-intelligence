# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_a_of_Reciprocal_of_Root_of_a_Squared_minus_x_Squared



Theorem
$\ds \int_0^a \dfrac {\d x} {\sqrt {a^2 - x^2} } = \frac \pi 2$
for $a > 0$. 


Proof 1













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


Proof 2













\(\ds \int_0^a \frac {\d x} {\sqrt {a^2 - x^2} }\)

\(=\)







\(\ds \frac {a^{1 - \frac 2 2} \map \Gamma {\frac 1 2} \map \Gamma {-\frac 1 2 + 1} } {2 \map \Gamma {\frac 1 2 - \frac 1 2 + 1} }\)





Definite Integral from 0 to a of $x^m \paren {a^n - x^n}^p$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \times 0!} \paren {\map \Gamma {\frac 1 2} }^2\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\sqrt \pi}^2\)





Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \frac \pi 2\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Rational or Irrational expressions: $15.22$




