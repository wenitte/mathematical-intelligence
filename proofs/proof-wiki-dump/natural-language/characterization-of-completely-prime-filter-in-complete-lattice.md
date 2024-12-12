# 

Source: https://proofwiki.org/wiki/Characterization_of_Completely_Prime_Filter_in_Complete_Lattice


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a complete lattice.

Let $F \subseteq L$.

Then:

$F$ is a completely prime filter
if and only if

$(1)\quad\forall A \subseteq L : \bigvee A \in F \iff \paren{\exists a \in A : a \in F}$
$(2)\quad\forall $ finite $A \subseteq L : \bigwedge A \in F \iff \paren{\forall a \in A : a \in F}$
where:

$\bigvee A$ denotes the supremum of $A$ in $L$
$\bigwedge A$ denotes the infimum of $A$ in $L$


Proof
Necessary Condition
Let $F$ be a completely prime filter.

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


Sufficient Condition
Let $F$ satisfy:

$(1)\quad\forall A \subseteq L : \bigvee A \in F \iff \paren{\exists a \in A : a \in F}$
$(2)\quad\forall $ finite $A \subseteq L : \bigwedge A \in F \iff \paren{\forall a \in A : a \in F}$


$F$ is a Proper Subset
From Supremum of Empty Set is Smallest Element:

$\bot = \bigvee \O$
By definition of empty set:

$\forall x \in F : x \notin \O$
By the contrapositive statement of $(1)$:

$\bot = \bigvee \O \notin F$
It follows that $F \neq L$
$\Box$


$F$ is not Empty
From Infimum of Empty Set is Greatest Element:

$\top = \bigwedge \O$
By definition of empty set, $\O$ vacuously satisfies:

$\forall x \in \O : x \in F$
By $(2)$:

$\top = \bigwedge \O \in F$
It follows that $F \neq \O$

Hence $F$ satisfies filter axiom (1).
$\Box$


$F$ is a Down-Directed Subset of $L$
Let $x, y \in F$.
From $(2)$:

$x \wedge y \in F$
From Meet Precedes Operands:

$x \wedge y \preceq x$ and $x \wedge y \preceq y$

Hence $F$ satisfies filter axiom (2).
$\Box$


$F$ is an Upper Section of $L$
Let $x \in F$.
Let $x \preceq y$.
From Successor is Supremum:

$x \vee y = y$
From $(1)$:

$y \in F$

Hence $F$ satisfies filter axiom (3).
$\Box$

It follows that $F$ is a filter.


$F$ is Completely Prime
Let $A \subseteq L$.
Let $\bigvee A \in F$.

From $(1)$:

$\exists a \in A : a \in F$

By definition of subset:

$a \in A \cap F$

Hence $A \cap F \ne \O$.
$\Box$

Hence $F$ is a completely prime filter by definition.
$\blacksquare$





