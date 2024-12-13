# 

Source: https://proofwiki.org/wiki/Point_in_Convex_Set_is_Extreme_Point_iff_Singleton_is_Extreme_Set

Theorem
Let $X$ be a vector space over $\R$. 
Let $K$ be a convex subset of $X$. 
Let $a \in K$.

Then $a$ is an extreme point of $K$ if and only if:

$\set a$ is an extreme set in $K$.


Proof
We have: 

$a$ is an extreme point of $K$.
if and only if: 

whenever $a = t x + \paren {1 - t} y$ for some $x, y \in K$ and $t \in \openint 0 1$, we have $x = y = a$.
We can rewrite this: 

whenever $t x + \paren {1 - t} y \in \set a$ for some $x, y \in K$ and $t \in \openint 0 1$, we have $x, y \in \set a$.
This is precisely the criteria for $\set a$ being an extreme set in $K$.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $21.6$: The Krein-Milman Theorem




