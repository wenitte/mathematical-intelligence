# 

Source: https://proofwiki.org/wiki/Intersection_of_Convex_Sets_is_Convex_Set_(Order_Theory)

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $\CC$ be a set of convex sets in $S$.

Then $\ds \bigcap \CC$ is convex.


Proof
Let $a, b, c \in S$.
Let $a, c \in \ds \bigcap \CC$.

Let $a \prec b \prec c$.
By the definition of intersection:

$\forall T \in \CC$: $a, c \in T$
Since each $T \in \CC$ is convex:

$\forall T \in \CC$: $b \in T$
Thus by the definition of intersection:

$b \in \ds \bigcap \CC$
Thus $\ds \bigcap \CC$ is convex.
$\blacksquare$





