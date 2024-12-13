# 

Source: https://proofwiki.org/wiki/Image_of_Canonical_Injection_is_Normal_Subgroup

Theorem
Let $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$ be groups with identity elements $e_1$ and $e_2$ respectively.
Let $\struct {G_1 \times G_2, \circ}$ be the group direct product of $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$.

Let:

$\inj_1: \struct {G_1, \circ_1} \to \struct {G_1 \times G_2, \circ}$ be the canonical injection from $\struct {G_1, \circ_1}$ to $\struct {G_1 \times G_2, \circ}$
$\inj_2: \struct {G_2, \circ_2} \to \struct {G_1 \times G_2, \circ}$ be the canonical injection from $\struct {G_2, \circ_2}$ to $\struct {G_1 \times G_2, \circ}$.

Then:

$(1): \quad \Img {\inj_1} \lhd \struct {G_1 \times G_2, \circ}$
$(2): \quad \Img {\inj_2} \lhd \struct {G_1 \times G_2, \circ}$

That is, the images of the canonical injections are normal subgroups of the group direct product of $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$.


Proof
From Image of Canonical Injection is Kernel of Projection:

$\Img {\inj_1} = \map \ker {\pr_2}$
$\Img {\inj_2} = \map \ker {\pr_1}$
That is:

the image of the (first) canonical injection is the kernel of the second projection
the image of the (second) canonical injection is the kernel of the first projection.
The domain of the projections is $G_1 \times G_2$, by definition.
The result follows from Kernel is Normal Subgroup of Domain.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




