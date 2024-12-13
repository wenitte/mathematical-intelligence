# 

Source: https://proofwiki.org/wiki/Meet-Irreducible_Open_Set_Induces_Completely_Prime_Filter


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{S, \tau}$ be a topological space.

Let:

$W \in \tau : W \ne S : W$ is meet-irreducible

Let:

$\FF = \set{U \in \tau : U \nsubseteq W}$.

Then:

$\FF$ is a completely prime filter in the complete lattice $\struct{\tau, \subseteq}$


Proof
$\FF$ satisfies Filter Axiom $\paren{1}$
We have by hypothesis:

$W \ne S$

From Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology:

$S \in \tau$
By definition of $\FF$:

$S \in \FF$
By definition of empty set:

$\FF \ne \O$

It follows that $\FF$ satisfies Filter Axiom $\paren{1}$.
$\Box$

$\FF$ satisfies Filter Axiom $\paren{2}$
Let $U, V \in \FF$.

By definition of $\FF$:

$U \nsubseteq W$ and $V \nsubseteq W$
From the contrapositive statement of Characterization of Meet-Irreducible Open Set:

$U \cap V \nsubseteq W$
By definition of $\FF$:

$U \cap V \in \FF$
From Intersection is Subset:

$U \cap V \subseteq U$ and $U \cap V \subseteq V$

It follows that $\FF$ satisfies Filter Axiom $\paren{2}$.
$\Box$

$\FF$ satisfies Filter Axiom $\paren{3}$
Let $U \in \FF$.
Let $V \in \tau$ such that $U \subseteq V$.

From the contrapositive statement of Subset Relation is Transitive:

$V \nsubseteq W$
By definition of $\FF$:

$V \in \FF$

It follows that $\FF$ satisfies Filter Axiom $\paren{3}$.
$\Box$

$\FF$ is Proper
We have by hypothesis:

$W \in \tau$
From Set is Subset of Itself:

$W \notin \FF$
Hence:

$\FF \ne \tau$

It follows that $\FF$ is a proper subset of $\tau$ by definition. 
$\Box$

$\FF$ satisfies Complete Primeness
Let $\VV \subseteq \tau$:

$\bigcup \VV \in \FF$

By definition of $\FF$:

$\bigcup \VV \nsubseteq W$
By definition of subset:

$\exists x \in \bigcup \VV : x \notin W$
By definition of set union:

$\exists V \in \VV : x \in V$
By definition of subset:

$\exists V \in \VV : V \nsubseteq W$
$\Box$

It has been shown that $\FF$ is a completely prime filter by definition.
$\blacksquare$


Also see
Topology forms Complete Lattice




