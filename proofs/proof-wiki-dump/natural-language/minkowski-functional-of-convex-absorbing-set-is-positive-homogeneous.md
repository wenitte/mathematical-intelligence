# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Convex_Absorbing_Set_is_Positive_Homogeneous

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a vector space over $\GF$.
Let $A$ be a convex absorbing set. 
Let $\mu_A$ be the Minkowski functional of $A$. 

Then $\mu_A$ is positive homogeneous. 
That is, for each $t \ge 0$ we have:

$\map {\mu_A} {t x} = t \map {\mu_A} x$


Proof
From Absorbing Set in Vector Space contains Zero Vector, we have ${\mathbf 0}_X \in A$. 
So $\map {\mu_A} {\mathbf 0_X} = 0$.
So the claim clearly holds for $t = 0$.
Now take $t > 0$. 
We argue that: 

$\set {s > 0 : t x \in s C} = t \set {s > 0 : x \in s C}$
We have: 

$s \in \set {s > 0 : t x \in s C}$
if and only if $s > 0$ and:

$t x \in s C$
This is equivalent to: 

$x \in \paren {\dfrac s t} C$
which is equivalent to: 

$\dfrac s t \in \set {s > 0 : x \in s C}$
Hence we deduce: 

$\set {s > 0 : t x \in s C} = t \set {s > 0 : x \in s C}$
From Multiple of Infimum, we obtain: 

$\map {\mu_C} {t x} = t \map {\mu_C} x$
$\blacksquare$





