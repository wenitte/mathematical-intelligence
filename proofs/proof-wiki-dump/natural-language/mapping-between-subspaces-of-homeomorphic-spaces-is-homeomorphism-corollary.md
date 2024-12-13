# 

Source: https://proofwiki.org/wiki/Mapping_between_Subspaces_of_Homeomorphic_Spaces_is_Homeomorphism/Corollary

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: T_1 \to T_2$ be a homeomorphism.

Let $H \subseteq S_1$.
Let $\overline H$ denote the complement $S_1 \setminus H$ of $H$ relative to $S_1$.
Let $T_{\overline H} = \struct {\overline H, \tau_{\overline H} }$ be the topological subspace of $T_1$ under the subspace topology $\tau_{\overline H}$ induced by $\tau_1$.
Let $\overline K = f \sqbrk {\overline H}$ be the image of $\overline H$ under $f$.
Let $T_{\overline K} = \struct {\overline K, \tau_{\overline K} }$ be the topological subspace of $T_2$ under the subspace topology $\tau_{\overline K}$ induced by $\tau_2$.

Let $h: \overline H \to \overline K$ be the restriction of $f$ to $\overline H$.

Then $h$ is a homeomorphism.


Proof
By definition of relative complement, $\overline H \subseteq S_1$.
As $f$ is a homeomorphism, it is a fortiori a bijection.
Hence from Image of Relative Complement under Bijection is Relative Complement of Image:

$f \sqbrk {\overline H} = \overline K$
Hence Mapping between Subspaces of Homeomorphic Spaces is Homeomorphism applies directly, using $\overline H$ for $H$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 17$




