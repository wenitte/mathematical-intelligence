# 

Source: https://proofwiki.org/wiki/Compact_Subspace_of_Linearly_Ordered_Space/Lemma_2

Lemma
Let $\struct {X, \preceq, \tau}$ be a linearly ordered space.
Let $Y \subseteq X$ be a non-empty subset of $X$.

Let the following hold:

$(1): \quad$ For every non-empty $S \subseteq Y$, $S$ has a supremum and an infimum in $X$.
$(2): \quad$ For every non-empty $S \subseteq Y$: $\sup S, \inf S \in Y$.
Then:

$\struct {Y, \preceq', \tau'}$ is a linearly ordered space.


Proof
By definition of a generalized ordered space:

$\tau'$ has a sub-basis consisting of upper and lower sections in $Y$.
To prove that $\struct {Y, \preceq', \tau'}$ is a linearly ordered space, we need to show that each element of this sub-basis is open in the $\preceq'$ order topology.
Let $U$ be a non-empty, $\tau'$-open upper section in $Y$.
If $U = \O$ or $U = Y$, then $U$ is open in the $\preceq'$-order topology by the definition of topology.
Suppose then that $\O \subsetneqq U \subsetneqq Y$.
Let $C = Y \setminus U$.
Then $C$ is non-empty and $\tau'$-closed.
$Y$ is $\tau'$-closed by Closed Set in Linearly Ordered Space.
Thus $C$ is also $\tau'$-closed.
$C$ has a supremum in $X$ by the premise.
Let $c = \sup_X C$
Since $C$ is $\tau'$-closed, Closed Set in Linearly Ordered Space shows that $c \in C$.
Since $c \in C = Y \setminus U$ and $U$ is an upper section in $Y$:

$c \prec u$ for all $u \in U$.
Furthermore, if $y \in Y$ and $c \prec y$, then by the definition of supremum, $y \notin C$, so $y \in U$.
Thus:

$U = {c^\succeq}_Y$
where ${c^\succeq}_Y$ denotes the upper closure of $c$ in $Y$.
So $U$ is open in the $\preceq'$-order topology for $Y$.
The same argument shows that $\tau'$-open lower sections in $Y$ are open in the $\preceq'$-order topology.
Thus $\tau'$ is the $\preceq'$-order topology.
$\blacksquare$





