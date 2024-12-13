# 

Source: https://proofwiki.org/wiki/Locally_Compact_Hausdorff_Topological_Vector_Space_has_Finite_Dimension



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \tau}$ be a locally compact Hausdorff topological vector space over $\GF$. 

Then $X$ is a finite dimensional vector space.


Proof
Since $X$ is locally compact, there exists a von Neumann-bounded open neighborhood $V$ of ${\mathbf 0}_X$ such that: 

$\map \cl V$ is compact.
From Dilations of von Neumann-Bounded Neighborhood of Origin in Topological Vector Space form Local Basis for Origin:

$\BB = \set {2^{-n} V : n \in \N}$ is a local basis for ${\mathbf 0}_X$.
We have that:

$\ds \map \cl V \subseteq \bigcup_{x \in X} \paren {x + \frac 1 2 V}$
Since $\map \cl V$ is compact, there exists $x_1, \ldots, x_m \in X$ such that:

$\ds \map \cl V \subseteq \bigcup_{j \mathop = 1}^m \paren {x_j + \frac 1 2 V}$
Let:

$Y = \span \set {x_j : 1 \le j \le m}$
Then $Y$ is finite dimensional.
We show that $Y = X$.
From Finite-Dimensional Subspace of Hausdorff Topological Vector Space is Closed, $Y$ is closed.

Lemma
$\ds V \subseteq \bigcap_{n \mathop = 1}^\infty \paren {Y + 2^{-n} V}$
$\Box$
Recall that $\BB$ is a local basis for ${\mathbf 0}_X$.
From Expression for Closure of Set in Topological Vector Space: Corollary, we obtain: 

$\ds \bigcap_{n \mathop = 1}^\infty \paren {Y + 2^{-n} V} = \map \cl Y$
Since $Y$ is closed, we have:

$\map \cl Y = Y$
from Set is Closed iff Equals Topological Closure.
Hence from the Lemma, we have:

$V \subseteq Y$
Hence for each $k \in \N$, we have:

$k V \subseteq Y$
From Topological Vector Space as Union of Dilations of Open Neighborhood of Origin, we have:

$\ds X = \bigcup_{n \mathop = 1}^\infty k V$
From Set Union Preserves Subsets: General Result, we obtain:

$\ds \bigcup_{n \mathop = 1}^\infty k V \subseteq Y$
so that:

$X \subseteq Y$
Since we have $Y \subseteq X$, we obtain $Y = X$.
So $X$ is a finite dimensional vector space.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.22$: Theorem




