# 

Source: https://proofwiki.org/wiki/Prime_Power_Group_has_Non-Trivial_Proper_Normal_Subgroup

Theorem
Let $G$ be a group, whose identity is $e$, such that $\order G = p^n: n > 1, p \in \mathbb P$.

Then $G$ has a proper normal subgroup which is non-trivial.


Proof
From Center of Group is Normal Subgroup, $\map Z G \lhd G$.
By Center of Group of Prime Power Order is Non-Trivial, $\map Z G$ is non-trivial.
If $\map Z G$ is a proper subgroup, the proof is finished.

Otherwise, $\map Z G = G$.
Then $G$ is abelian by definition.
However, then any $a \in G: a \ne e$ generates a non-trivial normal subgroup $\gen a$, as Subgroup of Abelian Group is Normal.

If $\order a = \order {\gen a} < \order G$, the proof is complete.

Otherwise:

$\order a = \order G = p^n$
Then $\order {a^p} = p^{n - 1}$ from Subgroup of Finite Cyclic Group is Determined by Order, so $a^p$ generates that non-trivial normal subgroup.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Conjugacy, Normal Subgroups, and Quotient Groups: $\S 52$ Lemma $2$




