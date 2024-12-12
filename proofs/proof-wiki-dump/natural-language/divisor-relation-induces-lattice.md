# 

Source: https://proofwiki.org/wiki/Divisor_Relation_induces_Lattice

Theorem
Let $\struct {\Z_{> 0}, \divides}$ be the ordered set comprising:

The set of positive integers $\Z_{> 0}$
The divisor relation $\divides$ defined as:
$a \divides b := \exists k \in \Z_{> 0}: b = ka$

Then $\struct {\Z_{> 0}, \divides}$ is a lattice.


Proof
It follows from Divisor Relation on Positive Integers is Partial Ordering that $\struct {\Z_{> 0}, \divides}$ is indeed an ordered set.

Let $a, b \in \Z_{>0}$.
Let $d = \gcd \set {a, b}$ be the greatest common divisor of $a$ and $b$.
By definition, $d$ is the infimum of $\set {a, b}$.

Similarly, let $m = \lcm \set {a, b}$ be the lowest common multiple of $a$ and $b$.
By definition, $m$ is the supremum of $\set {a, b}$.

Hence, as $\set {a, b}$ has both an infimum and a supremum in $\Z_{>0}$, it follows that $\struct {\Z_{> 0}, \divides}$ is a lattice.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 7$: Example $7.8$




