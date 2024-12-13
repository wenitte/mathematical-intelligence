# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_fourth_plus_a_fourth

Theorem
$\ds \int \frac {\d x} {x^4 + a^4} = \frac 1 {4 a^3 \sqrt 2} \map \ln {\frac {x^2 + a x \sqrt 2 + a^2} {x^2 - a x \sqrt 2 + a^2} } - \frac 1 {2 a^3 \sqrt 2} \paren {\map \arctan {1 - \frac {x \sqrt 2} a} - \map \arctan {1 + \frac {x \sqrt 2} a} }$


Proof













\(\ds \int \frac {\d x} {x^4 + a^4}\)

\(=\)







\(\ds \int \paren {\frac {x + a \sqrt 2} {2 a^3 \sqrt 2 \paren {x^2 + a x \sqrt 2 + a^2} } - \frac {x - a \sqrt 2} {2 a^3 \sqrt 2 \paren {x^2 - a x \sqrt 2 + a^2} } } \rd x\)





Partial Fraction Expansion




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^3 \sqrt 2} \int \frac {\paren {2 x + 2 a \sqrt 2} \rd x} {x^2 + a x \sqrt 2 + a^2} - \frac 1 {4 a^3 \sqrt 2} \int \frac {\paren {2 x - 2 a \sqrt 2} \rd x} {x^2 - a x \sqrt 2 + a^2}\)





Linear Combination of Primitives




Then:














\(\ds \int \frac {\paren {2 x + 2 a \sqrt 2} \rd x} {x^2 + a x \sqrt 2 + a^2}\)

\(=\)







\(\ds \int \frac {\paren {2 x + a \sqrt 2} \rd x} {x^2 + a x \sqrt 2 + a^2} + a \sqrt 2 \int \frac {\d x} {x^2 + a x \sqrt 2 + a^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \ln \size {x^2 + a x \sqrt 2 + a^2} + a \sqrt 2 \int \frac {\d x} {x^2 + a x \sqrt 2 + a^2}\)





Primitive of Function under its Derivative














\(\ds \)

\(=\)







\(\ds \ln \size {x^2 + a x \sqrt 2 + a^2} + a \sqrt 2 \paren {\frac {\sqrt 2} a \, \map \arctan {1 + \frac {x \sqrt 2} a} }\)





Primitive of $\dfrac 1 {x^2 + a x \sqrt 2 + a^2}$




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \ln \size {x^2 + a x \sqrt 2 + a^2} + 2 \map \arctan {1 + \frac {x \sqrt 2} a}\)





simplifying




Similarly:














\(\ds \int \frac {\paren {2 x - 2 a \sqrt 2} \rd x} {x^2 - a x \sqrt 2 + a^2}\)

\(=\)







\(\ds \int \frac {\paren {2 x - a \sqrt 2} \rd x} {x^2 - a x \sqrt 2 + a^2} - a \sqrt 2 \int \frac {\d x} {x^2 - a x \sqrt 2 + a^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \ln \size {x^2 - a x \sqrt 2 + a^2} - a \sqrt 2 \int \frac {\d x} {x^2 - a x \sqrt 2 + a^2}\)





Primitive of Function under its Derivative














\(\ds \)

\(=\)







\(\ds \ln \size {x^2 - a x \sqrt 2 + a^2} - a \sqrt 2 \paren {\frac {-\sqrt 2} a \, \map \arctan {1 - \frac {x \sqrt 2} a} }\)





Primitive of $\dfrac 1 {x^2 - a x \sqrt 2 + a^2}$




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \ln \size {x^2 - a x \sqrt 2 + a^2} + 2 \, \map \arctan {1 - \frac {x \sqrt 2} a}\)





simplifying




Thus:














\(\ds \int \frac {\d x} {x^4 + a^4}\)

\(=\)







\(\ds \frac 1 {4 a^3 \sqrt 2} \int \frac {\paren {2 x + 2 a \sqrt 2} \rd x} {x^2 + a x \sqrt 2 + a^2} - \frac 1 {4 a^3 \sqrt 2} \int \frac {\paren {2 x - 2 a \sqrt 2} \rd x} {x^2 - a x \sqrt 2 + a^2}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^3 \sqrt 2} \paren {\ln \size {x^2 + a x \sqrt 2 + a^2} + 2 \, \map \arctan {1 + \frac {x \sqrt 2} a} }\)





from $(2)$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac 1 {4 a^3 \sqrt 2} \paren {\ln \size {x^2 - a x \sqrt 2 + a^2} + 2 \, \map \arctan {1 - \frac {x \sqrt 2} a} }\)





from $(3)$














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^3 \sqrt 2} \map \ln {\frac {x^2 + a x \sqrt 2 + a^2} {x^2 - a x \sqrt 2 + a^2} } - \frac 1 {2 a^3 \sqrt 2} \paren {\map \arctan {1 - \frac {x \sqrt 2} a} - \map \arctan {1 + \frac {x \sqrt 2} a} }\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^4 \pm a^4$: $14.311$




