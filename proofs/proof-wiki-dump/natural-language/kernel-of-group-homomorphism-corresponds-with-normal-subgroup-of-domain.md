# 

Source: https://proofwiki.org/wiki/Kernel_of_Group_Homomorphism_Corresponds_with_Normal_Subgroup_of_Domain

Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups.
Let $\phi: \struct {G, \circ} \to \struct {H, *}$ be a group homomorphism.
Let $\map \ker \phi$ be the kernel of $\phi$.

Then there exists $N \lhd G$, a normal subgroup of $G$ such that:

$N = \map \ker \phi$

Conversely, let $N \lhd G$ be normal subgroup of $G$.
Then there exists $\phi: \struct {G, \circ} \to \struct {H, *}$, a group homomorphism, whose kernel $\map \ker \phi$ is such that:

$\map \ker \phi = N$


Proof
The first statement is Kernel is Normal Subgroup of Domain:

The kernel of $\phi$ is a normal subgroup of the domain of $\phi$:
$\map \ker \phi \lhd \Dom \phi$

The second statement is Quotient Group Epimorphism is Epimorphism:

The mapping $\phi: G \to G / N$, defined as:
$\phi: G \to G / N: \map \phi x = x N$
is a group epimorphism, and its kernel is $N$.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $25$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Quotient Groups: Theorem $3$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): normal subgroup or invariant subgroup




