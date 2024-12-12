# 

Source: https://proofwiki.org/wiki/Dedekind_Completeness_is_Self-Dual



Theorem
Let $\struct {S, \preceq}$ be an ordered set.

Then $\struct {S, \preceq}$ is Dedekind complete if and only if every non-empty subset of $S$ that is bounded below admits an infimum in $S$.

That is, an ordered set is Dedekind complete if and only if its dual is Dedekind complete.


Proof
Necessary Condition
Let $\struct {S, \preceq}$ be Dedekind complete.
Let $A \subseteq S$ be non-empty and bounded below.

Let $B \subseteq S$ be set of all lower bounds for $A$.
Then every element of $A$ is an upper bound for $B$.
Therefore, $B$ is non-empty and bounded above.
By the definition of Dedekind completeness, $B$ admits a supremum $x \in S$.

By the definition of supremum, it follows that every element of $A$ succeeds $x$.
That is, $x$ is a lower bound for $A$.
If $y \in S$ is a lower bound for $A$, then $y \in B$, and so $y \preceq x$.
Hence, $x$ is the infimum of $A$.
$\Box$


Sufficient Condition
Follows directly from the Necessary Condition and Dual of Dual Ordering.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations: Exercise $3.13$




