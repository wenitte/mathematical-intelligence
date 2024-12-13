# 

Source: https://proofwiki.org/wiki/Preimage_of_Maximum_of_Bounded_Linear_Functional_on_Extreme_Set_in_Convex_Compact_Set_is_Extreme_Set

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\R$.
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $\struct {X, \norm \cdot}$.
Let $K$ be a compact convex subset of $X$. 
Let $M \subseteq K$ be an extreme set in $K$. 
Let $f \in X^\ast$. 
Let:

$\ds M^f = \set {x \in M : \map f x = \max_{y \in M} \map f y}$

Then $M^f$ is an extreme set in $K$.


Proof
Note that from the extreme value theorem for normed vector spaces we have that: 

$f$ attains its supremum
and so $M^f$ is well-defined.
From Mapping is Continuous iff Inverse Images of Open Sets are Open: Corollary, we have: 

$M^f$ is closed.
Let $x, y \in K$ and $t \in \openint 0 1$ be such that: 

$t x + \paren {1 - t} y \in M^f$
We show that $x, y \in M^f$. 
Since $M^f \subseteq M$, we have: 

$t x + \paren {1 - t} y \in M$
and so $x, y \in M$ since $M$ is an extreme set in $K$. 
Since $t x + \paren {1 - t} y \in M^f$, we have: 

$\ds \map f {t x + \paren {1 - t} y} = \max_{z \in M} \map f z$
Since $f \in X^\ast$, we have: 

$\ds t \map f x + \paren {1 - t} \map f y = \max_{z \in M} \map f z$
On the other hand, since $x, y \in M$, we have: 

$\ds \map f x \le \max_{z \in M} \map f z$
and:

$\ds \map f y \le \max_{z \in M} \map f z$
from the definition of maximum.
If: 

$\ds \map f x < \max_{z \in M} \map f z$
or: 

$\ds \map f y < \max_{z \in M} \map f z$
we have: 

$\ds t \map f x + \paren {1 - t} \map f y < \max_{z \in M} \map f z$
So, we must have: 

$\ds \map f x = \map f y = \max_{z \in M} \map f z$
So:

$x, y \in M^f$
So:

$M^f$ is an extreme set in $K$.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $21.6$: The Krein-Milman Theorem




