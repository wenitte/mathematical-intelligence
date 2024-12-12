# 

Source: https://proofwiki.org/wiki/Directed_iff_Filtered_in_Dual_Ordered_Set



Theorem
Let $\struct {S, \preceq_1}$ be an ordered set.
Let $\struct {S, \preceq_2}$ be a dual ordered set of $\struct {S, \preceq_1}$
Let $X \subseteq S$.

Then:

$X$ is directed in $\struct {S, \preceq_1}$
if and only if:

$X$ is filtered in $\struct {S, \preceq_2}$.


Proof
Sufficient Condition
Assume that:

$X$ is directed in $\struct {S, \preceq_1}$
Thus $X$ is non-empty.
Let $x, y \in S$.
By definition of directed:

$\exists z \in S: x \preceq_1 z \land y \preceq_1 z$
Thus by definition of dual ordered set:

$z \preceq_2 x \land z \preceq_2 y$
$\Box$


Necessary Condition
Assume that:

$X$ is filtered in $\struct {S, \preceq_2}$
Thus $X$ is non-empty.
Let $x, y \in S$.
By definition of filtered:

$\exists z \in S: z \preceq_2 x \land z \preceq_2 y$
Thus by definition of dual ordered set:

$x \preceq_1 z \land y \preceq_1 z$
$\blacksquare$


Sources
Mizar article YELLOW_7:26




