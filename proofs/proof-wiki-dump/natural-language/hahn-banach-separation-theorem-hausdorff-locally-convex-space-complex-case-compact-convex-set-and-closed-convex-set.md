# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Separation_Theorem/Hausdorff_Locally_Convex_Space/Complex_Case/Compact_Convex_Set_and_Closed_Convex_Set

Theorem
Let $\struct {X, \PP}$ be a Hausdorff locally convex space over $\C$ equipped with its standard topology. 
Let $X^\ast$ be the topological dual space of $\struct {X, \PP}$. 
Let $A \subseteq X$ be an compact convex set.
Let $B \subseteq X$ be a closed convex set disjoint from $A$. 

Then there exists $f \in X^\ast$ such that: 

$\ds \sup_{x \mathop \in A} \map \Re {\map f x} < \inf_{x \mathop \in B} \map \Re {\map f x}$


Proof
Let $X_\R$ be the realification of $X$. 
Applying Hahn-Banach Separation Theorem: Hausdorff Locally Convex Space: Real Case: Compact Convex Set and Closed Convex Set, there exists a continuous $\R$-linear functional $g : X \to \R$ and $c \in \R$ such that: 

$\ds \sup_{x \mathop \in A} \map g x < \inf_{x \mathop \in B} \map g x$
From Continuous Real Linear Functional on Complex Topological Vector Space is Real Part of Continuous Complex Linear Functional, there exists $f \in X^\ast$ such that: 

$\map g x = \map \Re {\map f x}$ for each $x \in X$.
Then, we have: 

$\ds \sup_{x \mathop \in A} \map \Re {\map f x} < \inf_{x \mathop \in B} \map \Re {\map f x}$
$\blacksquare$





