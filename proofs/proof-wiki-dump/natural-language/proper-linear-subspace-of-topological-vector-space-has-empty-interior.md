# 

Source: https://proofwiki.org/wiki/Proper_Linear_Subspace_of_Topological_Vector_Space_has_Empty_Interior

Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a topological vector space over $\GF$.
Let $L$ be a proper linear subspace of $X$. 

Then:

$L^\circ = \O$
where $L^\circ$ denotes the interior of $L$. 


Proof
Aiming for a contradiction, suppose that $L^\circ \ne \O$.
Let $x \in L^\circ$. 
Then there exists an open neighborhood $U$ of $x$ such that $U \subseteq L$. 
From Translation of Open Set in Topological Vector Space is Open, $U - x$ is an open neighborhood of ${\mathbf 0}_X$ with $U - x \subseteq L - x$.
Since $L$ is a linear subspace of $X$, we have $L - x = L$.
Let $V = U - x$.
From Topological Vector Space as Union of Dilations of Open Neighborhood of Origin, we have:

$\ds X = \bigcup_{n \mathop = 1}^\infty n V$
On the other hand, since $L$ is a linear subspace of $X$ and $V \subseteq L$, we also have:

$\ds \bigcup_{n \mathop = 1}^\infty n V \subseteq L$
and so $L = X$.
This contradicts that $L$ is a proper linear subspace.
Hence $L^\circ = \O$.
$\blacksquare$





