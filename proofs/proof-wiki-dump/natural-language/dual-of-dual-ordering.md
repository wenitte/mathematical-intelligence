# 

Source: https://proofwiki.org/wiki/Dual_of_Dual_Ordering

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $\struct {S, \succeq}$ be its dual.

Then the dual of $\struct {S, \succeq}$ is again $\struct {S, \preceq}$.


Proof
Denote with $\preceq'$ the dual of $\succeq$.
By definition of dual ordering, we thus have for all $a, b \in S$:

$a \preceq b$ if and only if $b \succeq a$
$b \succeq a$ if and only if $a \preceq' b$
Hence $a \preceq b$ if and only if $a \preceq' b$.

The result follows from Equality of Relations.
$\blacksquare$


Sources
Mizar article LATTICE3:8




