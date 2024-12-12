# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Convex_Component_of_Open_Set_in_GO-Space_is_Open

{{tidy}}
{{MissingLinks}}

Theorem
Let $(S, \preceq, \tau)$ be a generalized ordered space.
Let $A$ be a $\tau$-open subset of $S$.
Let $C$ be a convex component of $A$ in $S$

Then $C$ is open relative to $\tau$.


Proof
Note: the term convex will be used here to refer to a set that is convex in $S$.
Since $(S, \preceq, \tau)$ is a generalized ordered space, $\tau$ has a basis $\mathcal B$ consisting of open convex sets.
Let $x \in C$.
Then $x \in A$, and $A$ is open in $S$.
Thus by the definition of a basis, there is a $U \in \mathcal B$ such that $x \subseteq U \subseteq A$.
Since $U$ is convex and contains $x$, $U \subseteq C$.
Thus $C$ contains an open neighborhood of each of its points, so $C$ is open.
$\blacksquare$





