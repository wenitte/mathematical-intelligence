# 

Source: https://proofwiki.org/wiki/Modulo_Multiplication_on_Reduced_Residue_System_is_Cancellable

Theorem
Let $m \in \Z_{> 0}$ be a (strictly) positive integer.
Let $\Z'_m$ be the reduced residue system modulo $m$:

$\Z'_m = \set {\eqclass k m \in \Z_m: k \perp m}$
Let $S = \struct {\Z'_m, \times_m}$ be the algebraic structure consisting of $\Z'_m$ under modulo multiplication.

Then $\times_m$ is cancellable, in the sense that:

$\forall a, b, c \in \Z'_m: a \times_m c = b \times_m c \implies a = b$
and:

$\forall a, b, c \in \Z'_m: c \times_m a = c \times_m b \implies a = b$


Proof
Let $a, b, c \in \Z'_m$ such that $a \times_m c = b \times_m c$
Let $p, q, r$ be integers such that:

$p \in a$
$q \in b$
$r \in c$
By definition of residue class, this means:














\(\ds p r\)

\(\equiv\)







\(\ds q r\)

\(\ds \pmod m\)












\(\ds \leadsto \ \ \)





\(\ds p\)

\(\equiv\)







\(\ds q\)

\(\ds \pmod m\)



Cancellability of Congruences: Corollary 1



Thus as $p \in a$ and $q \in b$ it follows that $a = b$.
Hence the result.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 6$: Examples of Finite Groups: $\text{(iii)}$




