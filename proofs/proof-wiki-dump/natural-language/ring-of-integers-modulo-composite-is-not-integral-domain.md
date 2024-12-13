# 

Source: https://proofwiki.org/wiki/Ring_of_Integers_Modulo_Composite_is_not_Integral_Domain

Theorem
Let $m \in \Z: m \ge 2$.
Let $\struct {\Z_m, +, \times}$‎ be the ring of integers modulo $m$.

Let $m$ be a composite number.

Then $\struct {\Z_m, +, \times}$ is not an integral domain.


Proof
Let $m \in \Z: m \ge 2$ be composite.
Then:

$\exists k, l \in \N_{> 0}: 1 < k < m, 1 < l < m: m = k \times l$
Thus:














\(\ds \eqclass 0 m\)

\(=\)







\(\ds \eqclass m m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {k l} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass k m \times \eqclass l m\)










So $\struct {\Z_m, +, \times}$‎ is a ring with zero divisors.
So by definition $\struct {\Z_m, +, \times}$‎ is not an integral domain.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $21$. Rings and Integral Domains
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 18$. Definition of a Ring: Example $29$




