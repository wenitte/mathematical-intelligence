# 

Source: https://proofwiki.org/wiki/Finite-Dimensional_Subspace_of_Hausdorff_Topological_Vector_Space_is_Closed

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a Hausdorff topological vector space over $\GF$.
Let $n \in \N$. 
Let $Y$ be a subspace of $X$ with dimension $n$. 

Then $Y$ is closed.


Proof
Let $f : \GF^n \to Y$ be a vector space isomorphism.
From Isomorphism from Cartesian Space to Finite-Dimensional Subspace of Hausdorff Topological Vector Space is Homeomorphism, $f$ is a homeomorphism. 
Let $B$ be the unit ball in $\GF^n$. 
Let $D$ be the closed unit ball in $\GF^n$. 
Let $S$ be the unit sphere in $\GF^n$ and: 

$K = f \sqbrk S$
In Isomorphism from Cartesian Space to Finite-Dimensional Subspace of Hausdorff Topological Vector Space is Homeomorphism, it was determined that there exists a balanced open neighborhood $V$ of $\mathbf 0_X$ such that: 

$V \cap K = \O$
Now let $\map \cl Y$ be the closure of $Y$. 
From Set is Closed iff Equals Topological Closure, we just need to show that $Y^- \subseteq Y$. 
From Topological Vector Space as Union of Dilations of Open Neighborhood of Origin, there exists $t > 0$ such that: 

$p \in t V$
It follows that: 

$p \in \map \cl {Y \cap t V}$
In Isomorphism from Cartesian Space to Finite-Dimensional Subspace of Hausdorff Topological Vector Space is Homeomorphism, it was determined that: 

$f^{-1} \sqbrk V \subseteq B$
so that: 

$Y \cap \paren {t V} \subseteq t f \sqbrk B$
by Image of Preimage under Mapping.
From Image of Dilation of Set under Linear Transformation is Dilation of Image, we have: 

$Y \cap \paren {t V} \subseteq f \sqbrk {t B}$
That is: 

$Y \cap \paren {t V} \subseteq f \sqbrk {t D}$
Since $D$ is compact, we have: 

$t D$ is compact
from Dilation of Compact Set in Topological Vector Space is Compact.
From Continuous Image of Compact Space is Compact, $f \sqbrk {t D}$ is compact.
Since $X$ is a Hausdorff topological vector space, $X$ is in particular Hausdorff.
From Compact Subspace of Hausdorff Space is Closed, $f \sqbrk {t D}$ is therefore closed, and we obtain: 

$\map \cl {Y \cap \paren {t V} } \subseteq f \sqbrk {t D}$
So: 

$p \in f \sqbrk {t D}$
giving $p \in Y$. 
So we have $Y^- = Y$ as desired.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.21$: Theorem




