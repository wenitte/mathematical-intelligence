# 

Source: https://proofwiki.org/wiki/Primitive_of_Minus_One_plus_x_Squared_over_One_plus_Fourth_Power_of_x/Proof_1

Theorem
$\ds \int \frac {x^2 - 1} {x^4 + 1} \rd x = \frac 1 {2 \sqrt 2} \ln \size {\frac {x^2 - \sqrt 2 x + 1} {x^2 + \sqrt 2 x + 1} } + C$


Proof
We have:














\(\ds \int \frac {x^2 - 1} {x^4 + 1} \rd x\)

\(=\)







\(\ds \int \frac {1 - \frac 1 {x^2} } {x^2 + \frac 1 {x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {1 - \frac 1 {x^2} } {\paren {x + \frac 1 x}^2 - 2} \rd x\)





Completing the Square



Note that, by Derivative of Power: 

$\dfrac \d {\d x} \paren {x + \dfrac 1 x} = 1 - \dfrac 1 {x^2}$
So, we have:














\(\ds \int \frac {1 - \frac 1 {x^2} } {\paren {x + \frac 1 x}^2 - 2} \rd x\)

\(=\)







\(\ds \int \frac 1 {u^2 - 2} \rd u\)





substituting $u = x + \dfrac 1 x$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \ln \size {\frac {u - \sqrt 2} {u + \sqrt 2} } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \ln \size {\frac {x + \frac 1 x - \sqrt 2} {x + \frac 1 x + \sqrt 2} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \ln \size {\frac {x^2 - \sqrt 2 x + 1} {x^2 + \sqrt 2 x + 1} } + C\)









$\blacksquare$





