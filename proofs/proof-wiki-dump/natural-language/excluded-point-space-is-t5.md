# 

Source: https://proofwiki.org/wiki/Excluded_Point_Space_is_T5

Theorem
Let $T = \struct {S, \tau_{\bar p} }$ be an excluded point space.

Then $T$ is a $T_5$ space.


Proof
Let $A, B \subseteq S$ such that:

$A^- \cap B = A \cap B^- = \O$
where $A^-$ denotes the closure of $A$.
Every closed set of $T$ contains $\set p$.
From Limit Points in Excluded Point Space and the definition of closure:

$A^- = A \cup \set p, B^- = B \cup \set p$
So if $A^- \cap B = A \cap B^- = \O$ then $p \in A^-$ and $p \in B^-$.
Thus, $p \notin A$ and $p \notin B$ and so by definition $A$ and $B$ are open sets in $T$.
It follows that $A \cap B = \O$.

Hence the result, as we have shown that:

$\forall A, B \subseteq X, A^- \cap B = A \cap B^- = \O: \exists U, V \in \tau_{\bar p}: A \subseteq U, B \subseteq V, U \cap V = \O$
where $U = A$ and $V = B$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $13 \text { - } 15$. Excluded Point Topology: $2$




