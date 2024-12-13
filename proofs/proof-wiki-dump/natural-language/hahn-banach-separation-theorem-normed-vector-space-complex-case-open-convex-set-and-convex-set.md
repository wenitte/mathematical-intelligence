# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Separation_Theorem/Normed_Vector_Space/Complex_Case/Open_Convex_Set_and_Convex_Set

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\C$.
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $\struct {X, \norm \cdot}$.
Let $A \subseteq X$ be an open convex set.
Let $B \subseteq X$ be a convex set disjoint from $A$. 

Then there exists $f \in X^\ast$ and $c \in \R$ such that: 

$A \subseteq \set {x \in X : \map \Re {\map f x} < c}$
and:

$B \subseteq \set {x \in X : \map \Re {\map f x} \ge c}$
That is: 

there exists $f \in X^\ast$ and $c \in \R$ such that $\map \Re {\map f a} < c \le \map \Re {\map f b}$ for each $a \in A$ and $b \in B$.


Proof
Let $\struct {X_\R, \norm {\, \cdot \,}_\R}$ be the realification of $X$ equipped with the restricted norm.  
Applying Hahn-Banach Separation Theorem: Real Case: Open Convex Set and Convex Set to $\struct {X_\R, \norm {\, \cdot \,}_\R}$, there exists a bounded linear functional $g : X_\R \to \R$ and $c \in \R$ such that: 

$A \subseteq \set {x \in X : \map g x < c}$
and:

$B \subseteq \set {x \in X : \map g x \ge c}$
From Bounded Real-Valued Linear Functional is Real Part of Unique Bounded Complex-Valued Linear Functional, there exists $f \in X^\ast$ such that: 

$\map g x = \map \Re {\map f x}$
for each $x \in X$. 
Then $f \in X^\ast$ satisfies: 

$A \subseteq \set {x \in X : \map \Re {\map f x} < c}$
and:

$B \subseteq \set {x \in X : \map \Re {\map f x} \ge c}$
as desired.
$\blacksquare$





