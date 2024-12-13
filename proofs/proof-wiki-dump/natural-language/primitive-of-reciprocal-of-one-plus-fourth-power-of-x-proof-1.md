# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_One_plus_Fourth_Power_of_x/Proof_1

Theorem
$\ds \int \frac 1 {1 + x^4} \rd x = \frac 1 {2 \sqrt 2} \paren {\map \arctan {\frac 1 {\sqrt 2} \paren {x - \frac 1 x} } + \frac 1 2 \ln \size {\frac {x^2 + \sqrt 2 x + 1} {x^2 - \sqrt 2 x + 1} } } + C$


Proof
From Primitive of $\dfrac {1 + x^2} {1 + x^4}$, we have:

$\ds \int \frac {x^2 + 1} {x^4 + 1} \rd x = \frac 1 {\sqrt 2} \map \arctan {\frac 1 {\sqrt 2} \paren {x - \frac 1 x} } + C$
From Primitive of $\dfrac {-1 + x^2} {1 + x^4}$, we have:

$\ds \int \frac {x^2 - 1} {x^4 + 1} \rd x = \frac 1 {2 \sqrt 2} \ln \size {\frac {x^2 - \sqrt 2 x + 1} {x^2 + \sqrt 2 x + 1} } + C$
We therefore have: 














\(\ds \int \frac 1 {1 + x^4} \rd x\)

\(=\)







\(\ds \frac 1 2 \int \frac {x^2 + 1 - \paren {x^2 - 1} } {1 + x^4} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\int \frac {x^2 + 1} {x^4 + 1} \rd x - \int \frac {x^2 - 1} {x^4 + 1} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \paren {\map \arctan {\frac 1 {\sqrt 2} \paren {x - \frac 1 x} } - \frac 1 2 \ln \size {\frac {x^2 - \sqrt 2 x + 1} {x^2 + \sqrt 2 x + 1} } } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \paren {\map \arctan {\frac 1 {\sqrt 2} \paren {x - \frac 1 x} } + \frac 1 2 \ln \size {\frac {x^2 + \sqrt 2 x + 1} {x^2 - \sqrt 2 x + 1} } } + C\)





Logarithm of Reciprocal



$\blacksquare$





