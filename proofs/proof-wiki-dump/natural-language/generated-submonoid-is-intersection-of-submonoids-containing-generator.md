# 

Source: https://proofwiki.org/wiki/Generated_Submonoid_is_Intersection_of_Submonoids_containing_Generator

Theorem
Let $\struct {M, \circ}$ be a monoid whose identity is $e_M$.
Let $S \subseteq M$.
Let $\struct {H, \circ}$ be the submonoid of $\struct {M, \circ}$ generated by $S$.

Then $\struct {H, \circ}$ is the intersection of all submonoids of $\struct {M, \circ}$ containing $S \cup \set {e_M}$.


Proof
Let $\struct {H, \circ}$ be the submonoid of $\struct {M, \circ}$ generated by $S$.
Then by definition $H$ is the smallest (with respect to set inclusion) submonoid of $\struct {M, \circ}$ containing $S \cup \set {e_M}$.
Let $\mathbb S$ be the set of submonoids of $\struct {M, \circ}$ containing $S \cup \set {e_M}$.
We need to show that $H = \ds \bigcap \mathbb S$.

Because $H$ is a submonoid of $\struct {M, \circ}$ containing $S \cup \set {e_M}$:

$H \in \mathbb S$
By Intersection is Subset:

$\ds \bigcap \mathbb S \subseteq H$
$\Box$

By Intersection of Submonoids with Monoid Identity is Submonoid:

$\ds \bigcap \mathbb S$ is a submonoid of $\struct {M, \circ}$ containing $S \cup \set {e_M}$.
Because $H$ is the smallest (with respect to set inclusion) submonoid of $\struct {M, \circ}$ containing $S \cup \set {e_M}$:

$H \subseteq \ds \bigcap \mathbb S$

By definition of set equality:

$H = \ds \bigcap \mathbb S$
Hence the result.
$\blacksquare$


Sources
1999: J.C. Rosales and P.A. García-Sánchez: Finitely Generated Commutative Monoids ... (previous) ... (next): Chapter $1$: Basic Definitions and Results




