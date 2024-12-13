# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_x_cubed_plus_a_cubed_squared



Theorem
$\ds \int \frac {x \rd x} {\paren {x^3 + a^3}^2} = \frac {x^2} {3 a^3 \paren {x^3 + a^3} } + \frac 1 {18 a^4} \map \ln {\frac {x^2 - a x + a^2} {\paren {x + a}^2} } + \frac 1 {3 a^4 \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3}$


Proof
First a lemma:

Lemma
$\ds \int \frac {x \rd x} {\paren {x^3 + a^3}^2} = \frac {x^2} {3 a^3 \paren {x^3 + a^3} } + \frac 1 {3 a^3} \int \frac {x \rd x} {\paren {x^3 + a^3} }$
$\Box$

Then:














\(\ds \int \frac {x \rd x} {\paren {x^3 + a^3}^2}\)

\(=\)







\(\ds \frac {x^2} {3 a^3 \paren {x^3 + a^3} } + \frac 1 {3 a^3} \int \frac {x \rd x} {\paren {x^3 + a^3} }\)





from Lemma














\(\ds \)

\(=\)







\(\ds \frac {x^2} {3 a^3 \paren {x^3 + a^3} } + \frac 1 {3 a^3} \paren {\frac 1 {6 a} \map \ln {\frac {x^2 - a x + a^2} {\paren {x + a}^2} } + \frac 1 {a \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3} }\)





Primitive of $\dfrac x {\paren {x^3 + a^3} }$














\(\ds \)

\(=\)







\(\ds \frac {x^2} {3 a^3 \paren {x^3 + a^3} } + \frac 1 {18 a^4} \map \ln {\frac {x^2 - a x + a^2} {\paren {x + a}^2} } + \frac 1 {3 a^4 \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3}\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^3 + a^3$: $14.305$




