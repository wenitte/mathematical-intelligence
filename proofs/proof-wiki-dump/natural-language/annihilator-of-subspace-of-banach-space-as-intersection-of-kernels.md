# 

Source: https://proofwiki.org/wiki/Annihilator_of_Subspace_of_Banach_Space_as_Intersection_of_Kernels

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a Banach space over $\GF$.
Let $M$ be a vector subspace of $X$. 
Let $X^\ast$ be the normed dual space of $X$. 
Let $M^\bot$ be the annihilator of $M$. 

Then: 

$\ds M^\bot = \bigcap_{x \mathop \in M} \map \ker {x^\wedge}$
where $x^\wedge$ denotes the evaluation linear transformation evaluated at $x$. 


Proof
We have: 














\(\ds M^\bot\)

\(=\)







\(\ds \set {g \in X^\ast : \map g x = 0 \text { for all } x \in M}\)





Definition of Annihilator of Subspace of Banach Space














\(\ds \)

\(=\)







\(\ds \bigcap_{x \mathop \in M} \set {g \in X^\ast : \map g x = 0}\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{x \mathop \in M} \set {g \in X^\ast : \map {x^\wedge} g = 0}\)





Definition of Evaluation Linear Transformation














\(\ds \)

\(=\)







\(\ds \bigcap_{x \mathop \in M} \map \ker {x^\wedge}\)





Definition of Kernel of Linear Transformation



$\blacksquare$





