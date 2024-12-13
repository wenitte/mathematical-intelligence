# 

Source: https://proofwiki.org/wiki/Linearly_Ordered_Space_is_Compact_iff_Complete



Theorem
Let $T = \struct {S, \preceq, \tau}$ be a linearly ordered space.
Then $T$ is a compact space if and only if it is complete.


Proof
Necessary Condition
Let $T$ be a compact space.
Let $A \subseteq S$.
Aiming for a contradiction, suppose $A$ has no supremum.
Consider the sets:

$P_\alpha = \set {x \in S: x \prec \alpha}$ for $\alpha \in A$
$B_\beta = \set {x \in S: \beta \prec x}$ for $\beta$ an upper bound of $A$.
We have that $P_\alpha$ and $B_\beta$ cover $S$ but contain no finite subcover.
Thus $T$ is not a compact space.
Similarly if $A$ has no infimum.
It follows that $A$ has both a supremum and infimum.
As $A$ is arbitrary, it follows that $S$ is a complete ordered set.
$\blacksquare$


Sufficient Condition
Let $T$ be a complete ordered set.
Let $\UU$ be an open cover of $S$.
Let $a$ be the infimum of $S$.
Let $B$ be the set of the elements $y \in S$ for which $\hointr a y$ have a finite cover from elements of $\UU$.
Let $\alpha$ be the supremum of $B$.
If $\alpha \in U \in \UU$, then $U \subseteq B$.
So unless $\alpha$ is the supremum of $S$ itself, there exists an open interval $\openint x y \subseteq U$ such that $\alpha \in \openint x y$.
But we have that $\alpha$ be the supremum of $B$.
Hence $\openint x y = \O$.
But that means $y \in B$ which is impossible.
Thus $B = S$.
That is, the set of elements of $S$ which have a finite subcover of $\UU$ is $S$ itself.
Hence $T$ is a compact space by definition.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $39$. Order Topology: $7$




