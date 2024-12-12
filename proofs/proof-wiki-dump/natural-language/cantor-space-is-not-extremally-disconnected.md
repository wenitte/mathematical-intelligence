# 

Source: https://proofwiki.org/wiki/Cantor_Space_is_not_Extremally_Disconnected

Theorem
Let $T = \struct {\CC, \tau_d}$ be the Cantor space.

Then $T$ is not extremally disconnected.


Proof
From Cantor Space satisfies all Separation Axioms we have that $T$ is a $T_2$ (Hausdorff) space.
Consider the real number $\dfrac 1 4 = 0.020202 \ldots_3$.
We have that:

$C_1 := \CC \cap \hointr 0 {\dfrac 1 4}$
$C_2 := \CC \cap \hointl {\dfrac 1 4} 1$
are disjoint sets both of which are open sets of $T$.
However, as $\dfrac 1 4 \in \CC$ we have that:

$\dfrac 1 4 \in C_1^-$
and

$\dfrac 1 4 \in C_2^-$
where $C_1^-$ and $C_2^-$ are the closures of $C_1$ and $C_2$ in $T$.
Thus $C_1^- \cap C_2^- \ne \O$.
The result follows from Extremally Disconnected by Disjoint Open Sets.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $29$. The Cantor Set: $7$




