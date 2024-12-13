# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Separation_Theorem/Hausdorff_Locally_Convex_Space/Complex_Case/Open_Convex_Set_and_Convex_Set

Theorem
Let $\struct {X, \PP}$ be a Hausdorff locally convex space over $\C$ equipped with its standard topology. 
Let $X^\ast$ be the topological dual space of $\struct {X, \PP}$. 
Let $A \subseteq X$ be an open convex set.
Let $B \subseteq X$ be a convex set disjoint from $A$. 

Then there exists $f \in X^\ast$ and $c \in \R$ such that: 

$A \subseteq \set {x \in X : \map \Re {\map f x} < c}$
and:

$B \subseteq \set {x \in X : \map \Re {\map f x} \ge c}$
That is: 

there exists $f \in X^\ast$ and $c \in \R$ such that $\map \Re {\map f a} < c \le \map \Re {\map f b}$ for each $a \in A$ and $b \in B$.


Proof
Let $X_\R$ be the realification of $X$. 
Applying Hahn-Banach Separation Theorem: Hausdorff Locally Convex Space: Real Case: Open Convex Set and Convex Set, there exists a continuous $\R$-linear functional $g : X \to \R$ and $c \in \R$ such that: 

$\map g a < c \le \map g b$ for each $a \in A$ and $b \in B$.
From Continuous Real Linear Functional on Complex Topological Vector Space is Real Part of Continuous Complex Linear Functional, there exists $f \in X^\ast$ such that: 

$\map g x = \map \Re {\map f x}$ for each $x \in X$.
Then, we have: 

$\map \Re {\map f a} < c \le \map \Re {\map f b}$ for each $a \in A$ and $b \in B$.
$\blacksquare$





