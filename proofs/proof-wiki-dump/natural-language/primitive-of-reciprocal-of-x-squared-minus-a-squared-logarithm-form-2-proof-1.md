# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_minus_a_squared/Logarithm_Form_2/Proof_1

Theorem
$\ds \int \frac {\d x} {x^2 - a^2} = \frac 1 {2 a} \ln \size {\frac {x - a} {x + a} } + C$


Proof
Let $x > a$.
Then:














\(\ds \int \frac {\d x} {x^2 - a^2}\)

\(=\)







\(\ds -\frac 1 a \arcoth {\frac x a} + C\)





Primitive of Reciprocal of $x^2 - a^2$ in $\arcoth$ form














\(\ds \)

\(=\)







\(\ds -\frac 1 a \paren {\dfrac 1 2 \map \ln {\dfrac {x + a} {x - a} } } + C\)





$\arcoth {\dfrac x a}$ in Logarithm Form














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 a} \map \ln {\frac {x + a} {x - a} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \map \ln {\frac {x - a} {x + a} } + C\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {\frac {x - a} {x + a} } + C\)





as $\dfrac {x - a} {x + a} > 0$ for $x > a$




Let $x < -a$.
Let $z = -x$.
Then:

$\d x = -\d z$
and we then have:














\(\ds \int \frac {\d x} {x^2 - a^2}\)

\(=\)







\(\ds \int \frac {-\d z} {\paren {-z}^2 - a^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\int \frac {\d z} {z^2 - a^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 a} \map \ln {\frac {z - a} {z + a} } + C\)





from above














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \map \ln {\frac {z + a} {z - a} } + C\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \map \ln {\frac {-x + a} {-x - a} } + C\)





substituting $-x$ back for $z$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \map \ln {\frac {\size {x - a} } {\size {x + a} } } + C\)





as $x < -a$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {\frac {x - a} {x + a} } + C\)









The result follows.
$\blacksquare$





