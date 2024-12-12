# 

Source: https://proofwiki.org/wiki/Annihilator_of_Subspace_of_Banach_Space_is_Zero_iff_Subspace_is_Everywhere_Dense



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a Banach space over $\GF$.
Let $M$ be a vector subspace of $X$. 
Let $X^\ast$ be the normed dual space of $X$. 
Let $M^\bot$ be the annihilator of $M$. 

Then: 

$M^\bot = \set { {\mathbf 0}_{X^\ast} }$
if and only if:

$M$ is everywhere dense in $X$.


Proof
Necessary Condition
Suppose that:

$M$ is not everywhere dense in $X$.
From Closure of Linear Subspace of Topological Vector Space is Linear Subspace, $\map \cl M$ is a closed linear subspace of $X$.
From Set is Closed iff Equals Topological Closure, we have $X \ne \map \cl M$.
So $\map \cl M$ is a proper closed linear subspace of $X$.
From Existence of Distance Functional, there exists $f \in X^\ast \setminus \set { {\mathbf 0}_{X^\ast} }$ such that: 

$\map f x = 0$ for all $x \in M$
so that $f \in M^\bot$.
So $M^\bot \ne \set { {\mathbf 0}_{X^\ast} }$
From Proof by Contraposition, we have: 

if $M^\bot = \set { {\mathbf 0}_{X^\ast} }$ then $M$ is everywhere dense in $X$.
$\Box$

Sufficient Condition
Suppose that: 

$M$ is everywhere dense in $X$.
Let $f \in M^\bot$. 
Then for all $x \in M$ we have $\map f x = 0$. 
From Metric Space is Hausdorff, $\GF$ is Hausdorff.
Since $M$ is everywhere dense, we have:

$\map f x = 0$ for all $x \in X$.
So if $f \in M^\bot$, then $f = {\mathbf 0}_{X^\ast}$. 
Further, we have ${\mathbf 0}_{X^\ast} \in M^\bot$. 
Hence we obtain: 

$M^\bot = \set { {\mathbf 0}_{X^\ast} }$
$\blacksquare$





