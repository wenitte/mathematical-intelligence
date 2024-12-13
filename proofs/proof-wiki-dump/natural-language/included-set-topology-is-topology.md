# 

Source: https://proofwiki.org/wiki/Included_Set_Topology_is_Topology



Theorem
Let $T = \struct {S, \tau_H}$ be an included set space.

Then $\tau_H$ is a topology on $S$, and $T$ is a topological space.


Proof
Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
Let $U_1, U_2 \in \tau_H$.
By definition of included set topology:

$H \subseteq U_1$ and $H \subseteq U_2$
From Intersection is Largest Subset:

$H \subseteq U_1 \cap U_2$
By definition of included set topology:

$U_1 \cap U_2 \in \tau_H$
$\Box$


Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
Let $\UU \subseteq \tau_H$.
By definition of included set topology:

$\forall U \in \UU: H \subseteq U$
Hence from Subset of Union:

$H \subseteq \bigcup \UU$
$\Box$


Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
By definition of included set topology:

$S \in \tau_H$
$\Box$

So all the properties are fulfilled for $\tau_H$ to be a topology on $S$.
$\blacksquare$





