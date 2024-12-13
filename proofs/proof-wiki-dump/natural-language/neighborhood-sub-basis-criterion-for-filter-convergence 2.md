# 

Source: https://proofwiki.org/wiki/Neighborhood_Sub-Basis_Criterion_for_Filter_Convergence



Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $\FF$ be a filter on $S$.
Let $p \in S$.

Then $\FF$ converges to $p$ if and only if $\FF$ contains as a subset a neighborhood sub-basis at $p$.


Proof
Sufficient Condition
Let $\FF$ converges to $p$.
Then it contains every neighborhood of $p$.
The set of neighborhoods of $p$ is trivially a neighborhood sub-basis at $p$.
$\Box$


Necessary Condition
Let $S_p$ be a neighborhood sub-basis at $p$.
Let $S_p \subseteq \FF$.
Let $N$ be a neighborhood of $p$.
Then by the definition of neighborhood sub-basis, there is a finite $T_N \subseteq S_p$ such that:

$\bigcap T_N \subseteq N$
Since a filter is by definition closed under finite intersections:

$\bigcap T_N \in \FF$
Then:

$\bigcap T_N \in \FF$
and:

$\bigcap T_N \subseteq N$
so by the definition of a filter:

$N \in \FF$
Because $\FF$ contains every neighborhood of $p$, $\FF$ converges to $p$. 
$\blacksquare$





