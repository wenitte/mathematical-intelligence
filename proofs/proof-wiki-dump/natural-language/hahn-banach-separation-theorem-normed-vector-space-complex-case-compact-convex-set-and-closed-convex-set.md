# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Separation_Theorem/Normed_Vector_Space/Complex_Case/Compact_Convex_Set_and_Closed_Convex_Set

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\C$.
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $\struct {X, \norm \cdot}$.
Let $A$ be a compact convex set.
Let $B$ be a closed convex set disjoint from $A$.

Then there exists $f \in X^\ast$, $c \in \R$ and $\epsilon > 0$ such that: 

$A \subseteq \set {x \in X : \map \Re {\map f x} \le c - \epsilon}$
and:

$B \subseteq \set {x \in X : \map \Re {\map f x} \ge c + \epsilon}$
That is: 

there exists $f \in X^\ast$, $c \in \R$ and $\epsilon > 0$ such that $\map \Re {\map f a} \le c - \epsilon < c + \epsilon \le \map \Re {\map f b}$ for $a \in A$ and $b \in B$.


Proof
Let $\struct {X_\R, \norm {\, \cdot \,}_\R}$ be the realification of $X$ equipped with the restricted norm.  
Applying Hahn-Banach Separation Theorem: Real Case: Open Convex Set and Convex Set to $\struct {X_\R, \norm {\, \cdot \,}_\R}$, there exists a bounded linear functional $g : X_\R \to \R$, $c \in \R$ and $\epsilon > 0$ such that: 

$A \subseteq \set {x \in X : \map g x < c - \epsilon}$
and:

$B \subseteq \set {x \in X : \map g x \ge c + \epsilon}$
From Bounded Real-Valued Linear Functional is Real Part of Unique Bounded Complex-Valued Linear Functional, there exists $f \in X^\ast$ such that: 

$\map g x = \map \Re {\map f x}$
for each $x \in X$. 
Then $f \in X^\ast$ satisfies: 

$A \subseteq \set {x \in X : \map \Re {\map f x} < c - \epsilon}$
and:

$B \subseteq \set {x \in X : \map \Re {\map f x} \ge c + \epsilon}$
as desired.
$\blacksquare$





