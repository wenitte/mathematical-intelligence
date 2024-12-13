# 

Source: https://proofwiki.org/wiki/Integral_between_Limits_is_Independent_of_Direction

Theorem
Let $f$ be a real function which is integrable on the interval $\openint a b$.
Then:

$\ds \int_a^b \map f x \rd x = \int_a^b \map f {a + b - x} \rd x$


Corollary
Integral between Limits is Independent of Direction/Corollary

Proof
Let $z = a + b - x$.
Then:

$\dfrac {\d z} {\d x} = -1$
and:

$x = a \implies z = a + b - a = b$
$x = b \implies z = a + b - b = a$

So:














\(\ds \int_a^b \map f {a + b - x} \rd x\)

\(=\)







\(\ds \int_b^a \map f z \paren {-1} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int_a^b \map f z \rd z\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds \int_a^b \map f x \rd x\)





renaming variables



$\blacksquare$





