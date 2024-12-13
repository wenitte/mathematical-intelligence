# 

Source: https://proofwiki.org/wiki/Ring_of_Integers_Modulo_Prime_is_Field/Proof_3

Theorem
Let $m \in \Z: m \ge 2$.
Let $\struct {\Z_m, +, \times}$‎ be the ring of integers modulo $m$.

Then:

$m$ is prime
if and only if:

$\struct {\Z_m, +, \times}$ is a field.


Proof
Let $m$ be prime.
From Ring of Integers Modulo Prime is Integral Domain, $\struct {\Z_m, +, \times}$ is an integral domain.
Let $\eqclass a m \ne \eqclass 0 m$ be a residue class modulo $m$.
We need to find a residue class modulo $m$ $\eqclass x m$ such that $\eqclass a m \eqclass x m = \eqclass 1 m$.
Because $m$ is prime and $m \nmid a$, we have:

$\gcd \set {a, m} = 1$
Hence from Bézout's Identity:

$1 = x a + y m$
for some $x, y \in \Z$.
Thus we have:














\(\ds \eqclass a m \eqclass x m\)

\(=\)







\(\ds \eqclass {a x} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {1 - y m} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass 1 m\)









So every non-zero residue class modulo $m$ has an inverse.
So by definition $\struct {\Z_m, +, \times}$ is a field.
$\Box$

Now suppose $m \in \Z: m \ge 2$ is composite.
From Ring of Integers Modulo Composite is not Integral Domain, $\struct {\Z_m, +, \times}$ is not an integral domain.
From Field is Integral Domain $\struct {\Z_m, +, \times}$ is not a field.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Fields: $\S 15$. Examples of Fields: Example $20$




