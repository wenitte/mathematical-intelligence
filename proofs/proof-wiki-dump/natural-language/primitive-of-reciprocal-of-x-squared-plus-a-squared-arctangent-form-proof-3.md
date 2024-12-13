# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_plus_a_squared/Arctangent_Form/Proof_3

Theorem
$\ds \int \frac {\d x} {x^2 + a^2} = \frac 1 a \arctan \frac x a + C$


Proof













\(\ds \int \frac {\d x} {x^2 + a^2}\)

\(=\)







\(\ds \frac 1 a \int \frac {\d t} {t^2 + 1}\)





Substitution of $x \to a t$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d t} {\paren {1 + i t} \paren {1 - i t} }\)





factoring














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {\int \frac {\d t} {1 + i t} + \int \frac {\d t} {1 - i t} }\)





Definition of Partial Fractions Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {i \map \ln {1 - i t} - i \map \ln {1 + i t} } + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac i {2 a} \map \ln {\frac {1 - i t} {1 + i t} } + C\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \frac 1 a \arctan \frac x a + C\)





Arctangent Logarithmic Formulation and substituting back $t \to \dfrac x a$



$\blacksquare$





