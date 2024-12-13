# 

Source: https://proofwiki.org/wiki/Image_of_Canonical_Injection_is_Kernel_of_Projection

Theorem
Let $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$ be groups with identity elements $e_1$ and $e_2$ respectively.
Let $\struct {G_1 \times G_2, \circ}$ be the group direct product of $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$

Let:

$\pr_1: \struct {G_1 \times G_2, \circ} \to \struct {G_1, \circ_1}$ be the first projection from $\struct {G_1 \times G_2, \circ}$ to $\struct {G_1, \circ_1}$
$\pr_2: \struct {G_1 \times G_2, \circ} \to \struct {G_2, \circ_2}$ be the second projection from $\struct {G_1 \times G_2, \circ}$ to $\struct {G_2, \circ_2}$.

Let:

$\inj_1: \struct {G_1, \circ_1} \to \struct {G_1 \times G_2, \circ}$ be the canonical injection from $\struct {G_1, \circ_1}$ to $\struct {G_1 \times G_2, \circ}$
$\inj_2: \struct {G_2, \circ_2} \to \struct {G_1 \times G_2, \circ}$ be the canonical injection from $\struct {G_2, \circ_2}$ to $\struct {G_1 \times G_2, \circ}$.

Then:

$(1): \quad \Img {\inj_1} = \map \ker {\pr_2}$
$(2): \quad \Img {\inj_2} = \map \ker {\pr_1}$

That is:

the image of the (first) canonical injection is the kernel of the second projection
the image of the (second) canonical injection is the kernel of the first projection.


Proof
The canonical injection $\inj_1: \struct {G_1, \circ_1} \to \struct {G_1 \times G_2, \circ}$ is defined as:

$\forall x \in G_1: \map {\inj_1} x = \tuple {x, e_2}$
Thus:

$\Img {\inj_1} = \set {\tuple {x, e_2}: x \in G_1}$

The second projection $\pr_2: \struct {G_1 \times G_2, \circ} \to \struct {G_2, \circ_2}$ is defined as:

$\forall \tuple {x, y} \in G_1 \times G_2: \map {\pr_2} {x, y} = y$
Thus by definition of kernel:

$\map \ker {\pr_2} = \map {\pr_2^{-1} } {e_2} = \set {\tuple {x, e_2}: x \in G_1}$

As can be seen:

$\Img {\inj_1} = \map \ker {\pr_2}$

Similarly:

$\Img {\inj_2} = \set {\tuple {e_1, y}: y \in G_2}$
$\map \ker {\pr_1} = \map {\pr_1^{-1} } {e_1} = \set {\tuple {e_1, y}: y \in G_2}$
Hence the result.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




