# 

Source: https://proofwiki.org/wiki/Krein-Milman_Theorem



Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\R$.
Let $K$ be a non-empty compact convex subset of $X$.
Let $\map E K$ be the set of extreme points in $K$. 

Then $K$ is the closed convex hull of $\map E K$.


Proof
Let $K'$ be the closed convex hull of $\map E K$.
We show that $K' = K$.
From Convex Hull is Smallest Convex Set containing Set, we have: 

$\map E K \subseteq \map {\operatorname {conv} } {\map E K}$
From Set is Subset of its Topological Closure, we therefore have: 

$\map E K \subseteq K'$
We also have, from Convex Hull preserves Subsets:

$\map {\operatorname {conv} } {\map E K} \subseteq \map {\operatorname {conv} } K$
From Convex Hull is Smallest Convex Set containing Set: Corollary, we have: 

$\map {\operatorname {conv} } {\map E K} \subseteq K$
Then, from Set Closure Preserves Set Inclusion, we have: 

$K' \subseteq K^-$
where $K^-$ is the closure of $K$.
From Compact Subspace of Hausdorff Space is Closed, we have that: 

$K$ is closed.
So we have: 

$K' \subseteq K$

Aiming for a contradiction, suppose suppose that $K' \ne K$.
Then there exists $a \in K \setminus K'$. 
Note that $K'$ is closed from Topological Closure is Closed.
Since $K$ is compact and $K' \subseteq K$, we have: 

$K'$ is compact
from Closed Subspace of Compact Space is Compact. 
From Closed Convex Hull in Normed Vector Space is Convex, we have that: 

$K'$ is convex.
Finally:

$\set a$ is closed
from Singleton in Normed Vector Space is Closed, and:

$\set a$ is convex
from Singleton is Convex Set.
So, from Hahn-Banach Separation Theorem in the case of a compact convex set and a closed convex set, there exists $f \in X^\ast$ such that: 

$\map f x < \map f a$
for each $x \in K'$. 
Now let: 

$\ds K^f = \set {x \in K : \map f x = \max_{y \mathop \in K} \map f y}$
From Preimage of Maximum of Bounded Linear Functional on Extreme Set in Convex Compact Set is Extreme Set:

$K^f$ is an extreme set in $K$.
Since: 

$\map f x < \map f a$ for each $x \in K'$
and $a \in K$, we have: 

$\ds \map f x < \max_{y \mathop \in K} \map f y$ for each $x \in K'$
from the definition of maximum.
So, we have: 

$K^f \cap K' = \O$
However, from Extreme Set in Compact Convex Set contains Extreme Point, we also have: 

$K^f$ contains an extreme point of $K$, say $x \in \map E K$
while: 

$\map E K \subseteq K$
So we have: 

$x \in K^f \cap K'$
contradicting that $K^f \cap K$ is empty.
So, there exists no such $a \in K \setminus K'$, and we have: 

$K = K'$
$\blacksquare$


Source of Name
This entry was named for Mark Grigorievich Krein and David Pinhusovich Milman.


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $21.6$: The Krein-Milman Theorem




