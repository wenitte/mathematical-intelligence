# 

Source: https://proofwiki.org/wiki/Completely_Prime_Filter_Induces_Meet-Irreducible_Open_Set


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{S, \tau}$ be a topological space.

Let $\FF$ be a completely prime filter in the complete lattice $\struct{\tau, \subseteq}$.

Let $W = \bigcup \set{U \in \tau : U \notin \FF}$.

Then:

$W$ is a meet-irreducible open set
Proof
By definition of completely prime filter:

$\FF$ is a proper subset of $\tau$
Hence:

$\set{U \in \tau : U \notin \FF} \ne \O$

By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$W \in \tau$

From Filter Contains Greatest Element:

$S \in \FF$

By definition of completely prime filter:

$W \notin \FF$
and so:

$W \ne S$

Let $U_1, U_2 \in \tau$:

$U_1 \cap U_2 \subseteq W$

By the contrapositive statement of Meet Semilattice Filter Axiom $\paren{\text {MSF} 1 }$: Upper Section of Meet Semilattice:

$U_1 \cap U_2 \notin \FF$
as $W \notin \FF$

By the contrapositive statement of Meet Semilattice Filter Axiom $\paren{\text {MSF} 2 }$: Subsemilattice of Meet Semilattice:

either $U_1 \notin \FF$ or $U_2 \notin \FF$

Hence:

either $U_1 \subseteq W$ or $U_2 \subseteq W$

From Characterization of Meet-Irreducible Open Set, $W$ is a meet-irreducible open set.
$\blacksquare$


Also see
Topology forms Complete Lattice




