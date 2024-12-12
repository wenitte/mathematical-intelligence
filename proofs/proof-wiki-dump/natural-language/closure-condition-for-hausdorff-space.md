# 

Source: https://proofwiki.org/wiki/Closure_Condition_for_Hausdorff_Space



Theorem
Let $\struct {S, \tau}$ be a topological space.

Then $\struct {S, \tau}$ is a Hausdorff space if and only if:

For all $x, y \in S$ such that $x \ne y$, there exists an open set $U$ such that $x \in U$ and $y \notin U^-$, where $U^-$ is the closure of $U$.


Proof
Necessary Condition
Let $\struct {S, \tau}$ be a Hausdorff space.
Let $x, y \in S$ with $x \ne y$.
Then by the definition of Hausdorff space there exist open sets $U, V \subseteq S$ such that:

$x \in U$
$y \in V$
$U \cap V = \O$
By Empty Intersection iff Subset of Complement, $U \subseteq S \setminus V$.

By definition, $S \setminus V$ is closed.
Thus by definition of closure:

$U^- \subseteq S \setminus V$
Since $y \in V$, by definition of relative complement it follows that $y \notin S \setminus V$.
By definition of subset, $y \notin U^-$.
$\Box$


Sufficient Condition
Suppose that for each $x, y \in S$ such that $x \ne y$ there exists an open set $U$ such that $x \in U$ and $y \notin U^-$.
Let $x, y \in S$ with $x \ne y$.
Let $U$ be as described.
Let $V = S \setminus U^-$.
Then $y \in V$ by the definition of set difference.
Since $U \subseteq U^-$, it follows that $U \cap V = \O$.
As such $U$ and $V$ exist for all such $x$ and $y$, it follows that $\struct {S, \tau}$ is a Hausdorff space.
$\blacksquare$





