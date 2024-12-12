# 

Source: https://proofwiki.org/wiki/Characterization_of_Completely_Prime_Filter_in_Complete_Lattice/Necessary_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a complete lattice.

Let $F \subseteq L$ be a completely prime filter.

Then:

$(1)\quad\forall A \subseteq L : \bigvee A \in F \iff \paren{\exists a \in A : a \in F}$
$(2)\quad\forall $ finite $A \subseteq L : \bigwedge A \in F \iff \paren{\forall a \in A : a \in F}$
where:

$\bigvee A$ denotes the supremum of $A$ in $L$
$\bigwedge A$ denotes the infimum of $A$ in $L$


Proof
$F$ satisfies Statement $(1)$
Let $A \subseteq L$.
Let $\bigvee A \in F$
By definition of completely prime filter:

$A \cap F \ne \O$
Let $x \in A \cap F$
By definition of set intersection:

$x \in A$ and $x \in F$

Let $x \in A : x \in F$
By definition of supremum:

$x \preceq \bigvee A$
By definition of filter:

$\bigvee A \in F$

Hence:

$(1)\quad\forall A \subseteq L : \bigvee A \in F \iff \paren{\exists a \in A : a \in F}$
$\Box$


$F$ satisfies Statement $(2)$
Let $A \subseteq L$ be finite.
Let $\bigwedge A \in F$
By definition of infimum:

$\forall x \in A : \bigwedge A \preceq x$
By definition of filter:

$\forall x \in A : x \in F$

Let:

$\forall x \in A : x \in F$
Let $A \ne \O$.
By definition of filter:

$F$ is sublattice of $L$
From Existence of Non-Empty Finite Infima in Meet Semilattice:

$\bigwedge A \in F$
Let $A = \O$.
From Infimum of Empty Set is Greatest Element:

$\top = \bigwedge A$
From Filter Contains Greatest Element:

$\top \in F$

Hence:

$(2)\quad\forall $ finite $A \subseteq L : \bigwedge A \in F \iff \paren{\forall a \in A : a \in F}$
$\Box$

The result follows.
$\blacksquare$





