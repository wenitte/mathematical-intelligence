# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_One_plus_Fourth_Power_of_x/Proof_2

Theorem
$\ds \int \frac 1 {1 + x^4} \rd x = \frac 1 {2 \sqrt 2} \paren {\map \arctan {\frac 1 {\sqrt 2} \paren {x - \frac 1 x} } + \frac 1 2 \ln \size {\frac {x^2 + \sqrt 2 x + 1} {x^2 - \sqrt 2 x + 1} } } + C$


Proof
A special case of Primitive of $\dfrac 1 {x^4 + a^4}$, setting $a = 1$.














\(\ds \int \frac {\d x} {x^4 + a^4}\)

\(=\)







\(\ds \frac 1 {4 a^3 \sqrt 2} \map \ln {\frac {x^2 + a x \sqrt 2 + a^2} {x^2 - a x \sqrt 2 + a^2} } - \frac 1 {2 a^3 \sqrt 2} \paren {\map \arctan {1 - \frac {x \sqrt 2} a} - \map \arctan {1 + \frac {x \sqrt 2} a} } + C\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {1 + x^4}\)

\(=\)







\(\ds \frac 1 {4 \sqrt 2} \map \ln {\frac {x^2 + x \sqrt 2 + 1} {x^2 - x \sqrt 2 + 1} } - \frac 1 {2 \sqrt 2} \paren {\map \arctan {1 - x \sqrt 2} - \map \arctan {1 + x \sqrt 2} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \paren {\dfrac 1 2 \map \ln {\frac {x^2 + x \sqrt 2 + 1} {x^2 - x \sqrt 2 + 1} } - \paren {\map \arctan {1 - x \sqrt 2} - \map \arctan {1 + x \sqrt 2} } } + C\)





extracting factor














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \paren {\dfrac 1 2 \map \ln {\frac {x^2 + x \sqrt 2 + 1} {x^2 - x \sqrt 2 + 1} } - \map \arctan {\dfrac {\paren {1 - x \sqrt 2} - \paren {1 + x \sqrt 2} } {1 + \paren {1 - x \sqrt 2} \paren {1 + x \sqrt 2} } } } + C\)





Difference of Arctangents














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \paren {\dfrac 1 2 \map \ln {\frac {x^2 + x \sqrt 2 + 1} {x^2 - x \sqrt 2 + 1} } - \map \arctan {\dfrac {-2 x \sqrt 2} {1 + \paren {1 - 2 x^2} } } } + C\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \paren {\dfrac 1 2 \map \ln {\frac {x^2 + x \sqrt 2 + 1} {x^2 - x \sqrt 2 + 1} } + \map \arctan {\sqrt 2 \dfrac x {1 - x^2} } } + C\)





Inverse Tangent is Odd Function














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \paren {\dfrac 1 2 \map \ln {\frac {x^2 + x \sqrt 2 + 1} {x^2 - x \sqrt 2 + 1} } + \paren {\frac \pi 2 - \map \arctan {\frac 1 {\sqrt 2} \paren {\frac {1 - x^2} x} } } } + C\)





Sum of Arctangent and Arccotangent














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \paren {\frac 1 2 \ln \size {\frac {x^2 + \sqrt 2 x + 1} {x^2 - \sqrt 2 x + 1} } + \map \arctan {\frac 1 {\sqrt 2} \paren {x - \frac 1 x} } } + C'\)





Arctangent is Odd Function, setting $C' = \dfrac \pi 2 + C$



$\blacksquare$





