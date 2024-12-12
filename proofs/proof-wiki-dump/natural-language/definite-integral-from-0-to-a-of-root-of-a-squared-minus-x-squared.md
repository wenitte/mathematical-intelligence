# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_a_of_Root_of_a_Squared_minus_x_Squared



Theorem
$\ds \int_0^a \sqrt {a^2 - x^2} \rd x = \frac {\pi a^2} 4$
for $a > 0$. 


Proof 1













\(\ds \int_0^a \sqrt {a^2 - x^2} \rd x\)

\(=\)







\(\ds \intlimits {\frac {x \sqrt {a^2 - x^2} } 2 + \frac {a^2} 2 \arcsin \frac x a} 0 a\)





Primitive of $\sqrt {a^2 - x^2}$














\(\ds \)

\(=\)







\(\ds \paren {\frac {a \sqrt {a^2 - a^2} } 2 + \frac {a^2} 2 \arcsin \frac a a} - \paren {\frac {0 \sqrt {a^2 - x^2} } 2 + \frac {a^2} 2 \arcsin \frac 0 a}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2} 2 \arcsin 1 - \frac {a^2} 2 \arcsin 0\)





removing vanishing terms














\(\ds \)

\(=\)







\(\ds \frac {a^2} 2 \arcsin 1\)





Sine of Zero is Zero














\(\ds \)

\(=\)







\(\ds \frac \pi 2 \frac {a^2} 2\)





Sine of Right Angle



Hence the result.
$\blacksquare$


Proof 2













\(\ds \int_0^a \sqrt {a^2 - x^2} \rd x\)

\(=\)







\(\ds \frac {a^{1 + \frac 2 2} } 2 \frac {\map \Gamma {\frac 1 2} \map \Gamma {1 + \frac 1 2} } {\map \Gamma {\frac 1 2 + \frac 1 2 + 1} }\)





Definite Integral from 0 to a of $x^m \paren {a^n - x^n}^p$














\(\ds \)

\(=\)







\(\ds \frac {a^2} 2 \frac {\map \Gamma {\frac 3 2} \map \Gamma {\frac 1 2} } {\map \Gamma 2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2} {2 \times 1!} \paren {\frac 1 2} \paren {\map \Gamma {\frac 1 2} }^2\)





Gamma Difference Equation, Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \frac {\pi a^2} 4\)





Gamma Function of One Half



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Rational or Irrational expressions: $15.23$




