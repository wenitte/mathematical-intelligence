# 

Source: https://proofwiki.org/wiki/Annihilator_of_Subspace_of_Banach_Space_is_Subspace_of_Normed_Dual

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a Banach space over $\GF$.
Let $M$ be a vector subspace of $X$. 
Let $X^\ast$ be the normed dual space of $X$. 
Let $w^\ast$ be the weak-$\ast$ topology on $X^\ast$.
Let $M^\bot$ be the annihilator of $M$. 

Then $M^\bot$ is a linear subspace of $X^\ast$. 


Proof
For each $x \in X$, we have: 

$\map { {\mathbf 0}_{X^\ast} } x = 0$ for each $x \in X$.
In particular:

$\map { {\mathbf 0}_{X^\ast} } x = 0$ for each $x \in M$
so that: 

${\mathbf 0}_{X^\ast} \in M^\bot$
So we have $M^\bot \ne \O$.
From One-Step Vector Subspace Test, it is enough to show that for each $f, g \in M^\bot$ and $\lambda \in \GF$ we have: 

$f + \lambda g \in M^\bot$
Let $f, g \in M^\bot$ and $\lambda \in \GF$. 
Then $\map f x = 0$ and $\map g x = 0$.
So $0 = \map f x + \lambda \map g x = \map {\paren {f + \lambda g} } x$.
So we have $f + \lambda g \in M^\bot$.
From One-Step Vector Subspace Test, $M^\bot$ is a linear subspace of $X^\ast$.
$\blacksquare$





