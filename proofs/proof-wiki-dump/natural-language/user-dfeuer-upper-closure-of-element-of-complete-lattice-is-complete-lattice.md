# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Upper_Closure_of_Element_of_Complete_Lattice_is_Complete_Lattice

Theorem
Let $(L, \preceq)$ be a complete lattice.
Let $p \in L$.

Then $({\uparrow}p, \preceq)$ is a complete lattice.


Proof
Let $U = {\uparrow} p$
Let $S \subseteq U$.
If $S$ is empty, then $p$ is its supremum in $U$.
Otherwise, let $s$ be an arbitrary element of $S$.
Then $p \preceq s \preceq \bigvee S$ by the definition of supremum, so $\bigvee S \in U$ by the definition of upper closure.
Since $p \preceq x$ for each $x \in S$, $p \preceq \bigwedge S$ by the definition of infimum.
Thus $\bigwedge S \in U$.
Since every subset of $U$ has a supremum and infimum in $U$, $U$ is a complete lattice.
$\blacksquare$





