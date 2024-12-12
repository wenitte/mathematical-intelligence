# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_-a_to_a_of_Power_of_a_plus_x_by_Power_of_a_minus_x

Theorem
$\ds \int_{-a}^a \paren {a + x}^{m - 1} \paren {a - x}^{n - 1} \rd x = \paren {2 a}^{m + n - 1} \frac {\map \Gamma m \map \Gamma n} {\map \Gamma {m + n} }$
where:

$\Gamma$ denotes the Gamma function
$a$, $m$ and $n$ are positive real numbers.


Proof
Note the resemblance of this result to the integral defining the beta function.
In view of this, we apply the substitution: 

$u = \dfrac {a + x} {2 a}$
We then have, by Derivative of Power: 

$\dfrac {\d u} {\d x} = \dfrac 1 {2 a}$
and:














\(\ds 1 - u\)

\(=\)







\(\ds 1 - \frac {a + x} {2 a}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 a - a - x} {2 a}\)




















\(\ds \)

\(=\)







\(\ds \frac {a - x} {2 a}\)









so that: 

$a + x = 2 a u$
and:

$a - x = \paren {2 a} \paren {1 - u}$
and:

$\dfrac {\d x} {\d u} = 2 a$

We therefore have: 














\(\ds \int_{-a}^a \paren {a + x}^{m - 1} \paren {a - x}^{n - 1} \rd x\)

\(=\)







\(\ds 2 a \int_0^1 \paren {2a u}^{m - 1} \paren {2 a \paren {1 - u} }^{n - 1} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \paren {2 a}^{m + n - 2 + 1} \int_0^1 u^{m - 1} \paren {1 - u}^{n - 1} \rd u\)




















\(\ds \)

\(=\)







\(\ds \paren {2 a}^{m + n - 1} \map \Beta {m, n}\)





Definition 1 of Beta Function














\(\ds \)

\(=\)







\(\ds \paren {2 a}^{m + n - 1} \frac {\map \Gamma m \map \Gamma n} {\map \Gamma {m + n} }\)





Definition 2 of Beta Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Miscellaneous Definite Integrals: $15.120$




