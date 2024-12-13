# 

Source: https://proofwiki.org/wiki/Ordered_Set_of_All_Mappings_is_Ordered_Set



Theorem
Let $L = \struct {S, \preceq}$ be an ordered set.
Let $X$ be a set.

Then $L^X$ is also an ordered set.


Proof
By definition of ordered set of all mappings:

$L^X = \struct {S^X, \precsim}$
where

$\forall f, g \in S^X: f \precsim g \iff f \preceq g$
$\preceq$ denotes the ordering on mappings,
$S^X$ denotes the set of all mappings from $X$ into $S$.


Reflexivity
Let $f \in S^X$.
By definition of reflexivity:

$\forall x \in X: \map f x \preceq \map f x$
By definition of ordering on mappings:

$f \preceq f$
Thus by definition of $\precsim$:

$f \precsim f$
$\Box$


Transitivity
Let $f, g, h \in S^X$ such that

$f \precsim g$ and $g \precsim h$
By definition of $\precsim$:

$f \preceq g$ and $g \preceq h$
By definition of ordering on mappings:

$\forall x \in X: \map f x \preceq \map g x$
and

$\forall x \in X: \map g x \preceq \map h x$
By definition of transitivity:

$\forall x \in X: \map f x \preceq \map h x$
By definition of ordering on mappings:

$f \preceq h$
Thus by definition of $\precsim$:

$f \precsim h$
$\Box$


Antisymmetry
Let $f, g \in S^X$ such that

$f \precsim g$ and $g \precsim f$
By definition of $\precsim$:

$f \preceq g$ and $g \preceq f$
By definition of ordering on mappings:

$\forall x \in X: \map f x \preceq \map g x$
and

$\forall x \in X: \map g x \preceq \map f x$
By definition of antisymmetry:

$\forall x \in X: \map f x = \map g x$
Thus by Equality of Mappings:

$f = g$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.20$
Mizar article YELLOW_1:funcreg 12
Mizar article YELLOW_1:funcreg 15
Mizar article YELLOW_1:funcreg 16




