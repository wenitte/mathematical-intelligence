# 

Source: https://proofwiki.org/wiki/Convex_Subset_of_Topological_Vector_Space_containing_Zero_Vector_in_Interior_is_Absorbing_Set

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \tau}$ be a topological vector space over $\GF$. 
Let $C \subseteq X$ be a convex set such that ${\mathbf 0}_X \in C^\circ$, where $C^\circ$ denotes the interior of $C$. 

Then $C$ is an absorbing set.


Proof
Let $x \in X$. 
Let $V$ be an open neighborhood of ${\mathbf 0}_X$ contained in $C$. 
Then from Multiple of Vector in Topological Vector Space Converges, we have: 

$\ds \frac x n \to {\mathbf 0}_X$
So by the definition of a convergent sequence, for some $N \in \N$ we have: 

$\ds \frac x N \in V$
Then: 

$\ds x \in N V \subseteq N C$
Since $x \in X$ was arbitrary, we can apply Characterization of Convex Absorbing Set in Vector Space and obtain that: 

$C$ is absorbing set.
$\blacksquare$





