# 

Source: https://proofwiki.org/wiki/Meet_in_Inclusion_Ordered_Set

Theorem
Let $P = \struct {X, \subseteq}$ be an inclusion ordered set.
Let $A, B \in X$ such that

$A \cap B \in X$

Then $A \wedge B = A \cap B$


Proof
By Intersection is Subset:

$A \cap B \subseteq A$ and $A \cap B \subseteq B$
By definition:

$A \cap B$ is a lower bound for $\set {A, B}$
We will prove that

$\forall C \in X: C$ is a lower bound for $\set {A, B} \implies C \subseteq A \cap B$
Let $C \in X$ such that:

$C$ is a lower bound for $\set {A, B}$.
By definition of lower bound:

$C \subseteq A$ and $C \subseteq B$
Thus by Intersection is Largest Subset:

$C \subseteq A \cap B$
$\Box$

By definition of infimum:

$\inf \set {A, B} = A \cap B$
Thus by definition of meet:

$A \wedge B = A \cap B$
$\blacksquare$


Sources
Mizar article YELLOW_1:9




