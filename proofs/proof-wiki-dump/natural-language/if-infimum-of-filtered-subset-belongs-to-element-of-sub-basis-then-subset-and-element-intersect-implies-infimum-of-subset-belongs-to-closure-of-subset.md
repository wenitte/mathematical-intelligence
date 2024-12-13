# 

Source: https://proofwiki.org/wiki/If_Infimum_of_Filtered_Subset_belongs_to_Element_of_Sub-Basis_then_Subset_and_Element_Intersect_implies_Infimum_of_Subset_belongs_to_Closure_of_Subset

Theorem
Let $T = \struct {S, \preceq, \tau}$ be a complete topological lattice with lower topology.
Let $B$ be an analytic sub-basis of $T$.
Let $F$ be a filtered subset of $S$ such that

$\forall A \in B: \inf F \in A \implies F \cap A \ne \O$

Then $\inf F \in F^-$
where $F^-$ denotes the topological closure of $F$.


Proof
We will prove that

$\forall A \in B, x \in F \cap A, y \in F: y \preceq x \implies y \in A$
Let $A \in B$, $x \in F \cap A$, $y \in F$.
By definition of sub-basis:

$A$ is open.
By Open Subset is Lower Section in Lower Topology:

$A$ is a lower section.
By definition of intersection:

$x \in A$.
Thus by definition of lower section:

$y \preceq x \implies y \in A$.
$\Box$

Define $\ds H := \set {\bigcap G: G \subseteq B, G \text { is finite} }$
By definitions of sub-basis and basis:

$H$ is basis of $T$.
We will prove that

$\forall A \in H: \inf F \in A \implies F \cap A \ne \O$
Let $A \in H$ such that

$\inf F \in A$
By definition of $H$:

$\exists G \subseteq B: A = \bigcap G \land G$ is finite.
By definition of intersection:

$\forall C \in G: \inf F \in C \in B$
By assumption:

$\forall C \in G: F \cap C \ne \O$
By definition of non-empty set:

$\forall C \in G: \exists x: x \in F \cap C$
By Axiom of Choice:

$\exists f: G \to F: \forall C \in G: \map f C \in F \cap C$
By Image of Mapping from Finite Set is Finite:

$f \sqbrk G$ is finite.
By Filtered iff Finite Subsets have Lower Bounds:

$\exists h \in F: \forall x \in f \sqbrk G: h \preceq x$
Then

$\forall C \in G: h \in C$
By definition of intersection:

$h \in \bigcap G$
Thus by definitions of intersection and non-empty set:

$F \cap A \ne \O$
$\Box$

Thus by Characterization of Closure by Basis:

$\inf F \in F^-$
$\blacksquare$


Sources
Mizar article WAYBEL19:10




