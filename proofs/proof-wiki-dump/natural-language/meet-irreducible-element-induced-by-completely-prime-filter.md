# 

Source: https://proofwiki.org/wiki/Meet_Irreducible_Element_Induced_by_Completely_Prime_Filter


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a frame.
Let $\top$ denote the greatest element of $L$.

Let $p$ be a completely prime filter of $L$.
Let:

$b = \bigvee \set{a \in L : a \notin p}$
where:

$\bigvee \set{a \in L : a \notin p}$ denotes the supremum of the set $\set{a \in L : a \notin p}$

Then:

$b$ is a meet irreducible element not equal to $\top$


Proof
Let: 

$x, y \in S : x \wedge y = b$

By definition of infimum:

$b \preceq x$
$b \preceq y$

By the contrapositive statement of the definition of completely prime filter:

$b \notin p$

By the contrapositive statement of filter axiom $(2)$:

either $x \notin p$ or $y \notin p$

By definition of supremum:

either $x \preceq b$ or $y \preceq b$

By ordering axiom $(3)$:

either $x = b$ or $y = b$

The result follows by definition of meet irreducible element.
$\blacksquare$





