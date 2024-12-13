# 

Source: https://proofwiki.org/wiki/Interior_may_not_equal_Exterior_of_Exterior/Proof_1

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \subseteq S$ be a subset of the underlying set $S$ of $T$.
Let $A^e$ be the  exterior of $A$.
Let $A^\circ$ be the  interior of $A$.

Then it is not necessarily the case that:

$A^{ee} = A^\circ$


Proof
We have from Interior is Subset of Exterior of Exterior:

$A^\circ \subseteq A^{ee}$
It remains to be shown that there exist $A \subseteq S$ such that:

$A^\circ \ne A^{ee}$

Let $a, b, c \in R$ where $a < b < c$.
Let $A$ be the union of the two adjacent open intervals:

$A := \openint a b \cup \openint b c$
From Exterior of Exterior of Union of Adjacent Open Intervals:

$A^{ee} = \openint a c$
From Interior of Union of Adjacent Open Intervals:

$A^\circ := \openint a b \cup \openint b c$
Thus:

$b \in A^{ee}$
but:

$b \notin A^\circ$
and so:

$A^{ee} \subsetneq A^\circ$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $5 \ \text{(b)}$




