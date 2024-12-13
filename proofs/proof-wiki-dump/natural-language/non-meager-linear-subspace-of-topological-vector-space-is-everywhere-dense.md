# 

Source: https://proofwiki.org/wiki/Non-Meager_Linear_Subspace_of_Topological_Vector_Space_is_Everywhere_Dense

Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a topological vector space over $\GF$.
Let $L$ be a proper non-meager linear subspace of $X$. 

Then $L$ is everywhere dense.


Proof
Aiming for a contradiction, suppose that $L$ is not everywhere dense.
Then $L^- \ne X$.
From Closure of Linear Subspace of Topological Vector Space is Linear Subspace, $L^-$ is then a proper closed linear subspace of $X$.
From Proper Closed Linear Subspace of Topological Vector Space is Meager, it follows that $L^-$ is meager. 
From Subset of Meager Set is Meager Set, $L$ is meager.
This is contrary to our assumption that $L$ is non-meager.
So $L$ is everywhere dense.
$\blacksquare$





