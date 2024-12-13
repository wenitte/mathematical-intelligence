# 

Source: https://proofwiki.org/wiki/Locally_Bounded_Hausdorff_Topological_Vector_Space_with_Heine-Borel_Property_has_Finite_Dimension

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \tau}$ be a locally bounded Hausdorff topological vector space over $\GF$ with the Heine-Borel property.

Then $X$ is a finite dimensional vector space.


Proof
Since $\struct {X, \tau}$ is locally bounded, there exists a von Neumann-bounded open neighborhood $V$ of ${\mathbf 0}_X$. 
From Closure of von Neumann-Bounded Subset of Topological Vector Space is von Neumann-Bounded, $\map \cl V$ is von Neumann-bounded.
From Topological Closure is Closed, $\map \cl V$ is closed.
So $\map \cl V$ is von Neumann-bounded and closed.
From the Heine-Borel property, $\map \cl V$ is compact.
So $V$ is an open neighborhood of ${\mathbf 0}_X$ with compact closure.
Hence $X$ is locally compact.
Hence from Locally Compact Hausdorff Topological Vector Space has Finite Dimension, $X$ is a finite dimensional vector space.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.24$: Theorem




