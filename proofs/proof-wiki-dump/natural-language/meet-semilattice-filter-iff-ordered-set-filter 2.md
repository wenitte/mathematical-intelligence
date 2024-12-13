# 

Source: https://proofwiki.org/wiki/Meet_Semilattice_Filter_iff_Ordered_Set_Filter



Theorem
Let $\struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $F \subseteq S$ be a non-empty subset of $S$.

Then:

$F$ is a meet semilattice filter of $\struct {S, \wedge, \preceq}$ if and only if $F$ is an ordered set filter of $\struct {S, \preceq}$.


Proof
Necessary Condition
Let $F$ be a meet semilattice filter of $\struct {S, \wedge, \preceq}$.
To show that $F$ is an ordered set filter of $\struct {S, \preceq}$ it is sufficient to show:












  \(\ds \forall x, y \in F: \exists z \in F:\)

\(\ds z \preceq x \text{ and } z \preceq y \)   







  


Let $x, y \in F$.
Let $z = x \wedge y$.
By definition of meet semilattice filter, $F$ is a subsemilattice, so:

$z \in F$
By definition of Meet:

$z \preceq x \text{ and } z \preceq y$
The result follows.
$\Box$


Sufficient Condition
Let $F$ be an ordered set filter of $\struct {S, \preceq}$.
To show that $F$ is a meet semilattice filter of $\struct {S, \wedge, \preceq}$ it is sufficient to show:










$F$ is a subsemilattice of $S$:   

  \(\ds \forall x, y \in F:\)

\(\ds x \wedge y \in F \)   







  


Let $x, y \in F$.
By definition of ordered set filter:

$\exists z \in F : z \preceq x \text { and } z \preceq y$
By definition of meet:

$z \preceq x \wedge y$
By definition of ordered set filter:

$x \wedge y \in F$
The result follows.
$\blacksquare$





