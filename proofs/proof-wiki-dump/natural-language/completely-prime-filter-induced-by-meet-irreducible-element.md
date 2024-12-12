# 

Source: https://proofwiki.org/wiki/Completely_Prime_Filter_Induced_by_Meet_Irreducible_Element


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a frame.

Let $b$ be a meet-irreducible element of $L$.
Let:

$p = \set{a \in L : a \npreceq b}$

Then:

$p$ is a completely prime filter of $L$.


Proof
From meet irreducible element, it is sufficient to show:

$(1)\quad\forall A \subseteq L : \bigvee A \in p \iff \paren{\exists a \in A : a \in p}$
$(2)\quad\forall $ finite $A \subseteq L : \bigwedge A \in p \iff \paren{\forall a \in A : a \in p}$
where:

$\bigvee A$ denotes the supremum of $A$ in $L$
$\bigwedge A$ denotes the infimum of $A$ in $L$

By definition of $p$, it is sufficient to show:

$(1')\quad\forall A \subseteq L : \bigvee A \npreceq b \iff \paren{\exists a \in A : a \npreceq b}$
$(2')\quad\forall $ finite $A \subseteq L : \bigwedge A \npreceq b \iff \paren{\forall a \in A : a \npreceq b}$


Statement $(1')$
Statement $(1')$ follows from the contrapositive statement of Characterization of Supremum Precedes Element.
$\Box$


Statement $(2')$
Let $A \subseteq L$ be finite.

Suppose $\bigwedge A \npreceq b$.
By definition of infimum:

$\bigwedge A$ is a lower bound for $A$.
By definition of lower bound:

$\forall a \in A : \bigwedge A \preceq a$
By Ordering Axiom $(2)$: Transitivity:

$\forall a \in A : a \npreceq b$

Suppose $\bigwedge A \preceq b$.
From Prime Element iff Meet Irreducible in Distributive Lattice:

$b$ is a prime element
From Characterization of Prime Element in Meet Semilattice:

$\exists a \in A : a \preceq b$

It follows that Statement $(2')$ holds.
$\Box$

The result follows.
$\blacksquare$





