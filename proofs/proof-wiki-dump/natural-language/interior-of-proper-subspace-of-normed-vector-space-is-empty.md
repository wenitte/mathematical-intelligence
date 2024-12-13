# 

Source: https://proofwiki.org/wiki/Interior_of_Proper_Subspace_of_Normed_Vector_Space_is_Empty

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $\GF$. 
Let $U$ be a proper vector subspace of $X$. 
Let $U^\circ$ be the interior of $U$. 

Then $U^\circ = \O$. 


Proof
Aiming for a contradiction, suppose $U^\circ \ne \O$.
Take $x \in U^\circ$.
Then there exists $\epsilon > 0$ such that $\map {B_\epsilon} x \subseteq U$, where $\map {B_\epsilon} x$ is the open ball centered at $x$ with radius $\epsilon$.
Since $U$ is a vector subspace, we have:

$\map {B_\epsilon} 0 = \map {B_\epsilon} x - x \subseteq U$
So if $x \in X$ has $\norm x < \epsilon$, then $x \in U$.

Take $x \in U \setminus \set {\mathbf 0_X}$. 
Then, we have: 

$\norm {\dfrac \epsilon {2 \norm x} x} = \dfrac \epsilon 2 < \epsilon$
so that: 

$\dfrac \epsilon {2 \norm x} x \in U$
Since $U$ is a vector subspace, we have $x \in U$. 

We also have:

$\mathbf 0_X \in U$
so:

$U = X$
This contradicts the hypothesis that $U \ne X$.
So by Proof by Contradition we have:

$U^\circ = \O$
$\blacksquare$





