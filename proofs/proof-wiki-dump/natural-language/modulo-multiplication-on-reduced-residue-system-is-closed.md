# 

Source: https://proofwiki.org/wiki/Modulo_Multiplication_on_Reduced_Residue_System_is_Closed

Theorem
Let $m \in \Z_{> 0}$ be a (strictly) positive integer.
Let $\Z'_m$ be the reduced residue system modulo $m$:

$\Z'_m = \set {\eqclass k m \in \Z_m: k \perp m}$
Let $S = \struct {\Z'_m, \times_m}$ be the algebraic structure consisting of $\Z'_m$ under the modulo multiplication.

Then $S$ is closed, in the sense that:

$\forall a, b \in \Z'_m: a \times_m b \in \Z'_m$


Proof
Let $\eqclass r m, \eqclass s m \in \Z'_m$.
Then by definition of reduced residue system:

$r, s \perp m$
By Bézout's Identity:

$\exists u_1, v_1 \in \Z: u_1 r + v_1 m = 1$
$\exists u_2, v_2 \in \Z: u_2 s + v_2 m = 1$
Then:














\(\ds \paren {u_1 r + v_1 m} \paren {u_2 s + v_2 m}\)

\(=\)







\(\ds u_1 u_2 r s + v_1 u_2 s m + u_1 v_2 r m + v_1 v_2 m^2\)




















\(\ds \)

\(=\)







\(\ds \paren {u_1 u_2} r s + \paren {v_1 u_2 s + u_1 v_2 r + v_1 v_2 m} m\)




















\(\ds \)

\(=\)







\(\ds 1\)









So, again by Bézout's Identity, $r s$ is coprime to $m$.
So the product of two elements of $\struct {\Z'_m, \times_m}$ is again in $\struct {\Z'_m, \times_m}$.
That is, $\struct {\Z'_m, \times_m}$ is closed.
$\blacksquare$


Proof
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 6$: Examples of Finite Groups: $\text{(iii)}$: $(1.31)$




