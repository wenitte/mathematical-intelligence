# 

Source: https://proofwiki.org/wiki/Abundancy_Index_of_Product_is_greater_than_Abundancy_Index_of_Proper_Factors

Theorem
Let $n \in \Z_{>0}$ be a composite number such that $n = r s$, where $r, s \in \Z_{>1}$.
Then:

$\dfrac {\map {\sigma_1} n} n > \dfrac {\map {\sigma_1} r} r$
and consequently also:

$\dfrac {\map {\sigma_1} n} n > \dfrac {\map {\sigma_1} s} s$
where $\sigma_1$ denotes the divisor sum function.

That is, the abundancy index of a composite number is strictly greater than the abundancy index of its proper divisors.


Proof
Consider the divisors of $r$.
Let $d \divides r$, where $\divides$ indicates divisibility.

We have that:

$d \divides n$
and also that:

$d s \divides n$

Thus:














\(\ds \map {\sigma_1} r\)

\(=\)







\(\ds \sum_{d \mathop \divides r} d\)














\(\ds \leadsto \ \ \)





\(\ds s \map {\sigma_1} r\)

\(=\)







\(\ds \sum_{d s \mathop \divides n} d s\)














\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_1} n\)

\(>\)







\(\ds \sum_{d s \mathop \divides n} d s\)





as numbers of the form $d s$ do not exhaust divisors of $n$: note $1 \divides n$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\map {\sigma_1} n} n\)

\(>\)







\(\ds \dfrac {s \map {\sigma_1} r} n\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map {\sigma_1} r} {n / s}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map {\sigma_1} r} r\)










Similarly for $s$.
$\blacksquare$





