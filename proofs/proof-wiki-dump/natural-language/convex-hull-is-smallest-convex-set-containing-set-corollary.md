# 

Source: https://proofwiki.org/wiki/Convex_Hull_is_Smallest_Convex_Set_containing_Set/Corollary



Theorem
Let $X$ be a vector space over $\R$.
Let $K \subseteq X$ be non-empty.

Then: 

$K$ is convex if and only if $\map {\operatorname {conv} } K = K$
where $\map {\operatorname {conv} } K$ denotes the convex hull of $K$.


Proof
Sufficient Condition
Suppose that: 

$\map {\operatorname {conv} } K = K$
From Convex Hull is Smallest Convex Set containing Set, we have: 

$\map {\operatorname {conv} } K$ is convex.
So:

$K$ is convex.
$\Box$

Necessary Condition
Suppose that: 

$K$ is convex.
From Convex Hull is Smallest Convex Set containing Set, we have: 

$K \subseteq \map {\operatorname {conv} } K$
Note that $K$ is a convex set with $K \subseteq K$, from Set is Subset of Itself.
So Convex Hull is Smallest Convex Set containing Set also gives: 

$\map {\operatorname {conv} } K \subseteq K$
so:

$\map {\operatorname {conv} } K = K$
$\blacksquare$





