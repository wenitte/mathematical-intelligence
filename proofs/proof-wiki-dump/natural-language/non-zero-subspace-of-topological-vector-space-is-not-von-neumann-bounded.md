# 

Source: https://proofwiki.org/wiki/Non-Zero_Subspace_of_Topological_Vector_Space_is_not_von_Neumann-Bounded

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a topological vector space over $\GF$. 
Let $Y \ne \set {\mathbf 0_X}$ be a non-trivial subspace of $X$. 

Then $Y$ is not von Neumann-bounded.


Proof
Let $x \in Y \setminus \set {\mathbf 0_X}$.
Then $t x \in Y$ for $t > 0$. 
Since $X$ is Hausdorff, there exists an open neighborhood $V$ of $x$ that does not contain $\mathbf 0_X$.
Then $t x \not \in t V$ for each $t > 0$. 
So we do not have $Y \subseteq t V$ for any $t > 0$. 
So $Y$ is not von Neumann-bounded.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.29$: Bounded sets




