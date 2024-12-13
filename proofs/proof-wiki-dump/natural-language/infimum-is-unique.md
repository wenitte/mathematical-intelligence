# 

Source: https://proofwiki.org/wiki/Infimum_is_Unique

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T$ be a non-empty subset of $S$.
Then $T$ has at most one infimum in $S$.


Proof
Let $c$ and $c'$ both be infima of $T$ in $S$.
From the definition of infimum, $c$ and $c'$ are lower bounds of $T$ in $S$.

By that definition:

$c$ is a lower bound of $T$ in $S$ and $c'$ is an infimum of $T$ in $S$ implies that $c \preceq c'$
$c'$ is a lower bound of $T$ in $S$ and $c$ is an infimum of $T$ in $S$ implies that $c' \preceq c$.

So:

$c' \preceq c \land c \preceq c'$
and thus by the antisymmetry of the ordering $\preceq$:

$c = c'$
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.1$: Real Numbers




