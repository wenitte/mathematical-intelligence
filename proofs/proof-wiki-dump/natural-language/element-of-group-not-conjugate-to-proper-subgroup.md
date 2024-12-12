# 

Source: https://proofwiki.org/wiki/Element_of_Group_Not_Conjugate_to_Proper_Subgroup

Theorem
Let $G$ be a finite group.
Let $H$ be a proper subgroup of $G$.

Then there is at least one element of $G$ not contained in $H$ or in any of its conjugates.


Proof
Let $S \subseteq G$ be defined by:

$S := \set {g \in G: \exists h \in H, a \in G: g = a h a^{-1} }$
It is required to show that $S \ne G$.

Let $\map {N_G} H$ be the normalizer of $H$ in $G$.
By Subgroup is Subgroup of Normalizer, $H \le \map {N_G} H$.
Therefore, by definition of index:

$\index G {\map {N_G} H} \le \index G H$

Each of the conjugates of $H$ has $\order H$ elements.
By Number of Distinct Conjugate Subsets is Index of Normalizer, there are $\index G {\map {N_G} H}$ conjugates.
Therefore:

$\card S \le \order H \index G {\map {N_G} H}$
with equality if and only if all conjugates of $H$ are disjoint.
Combining this with the earlier inequality, we find that:

$\card S \le \order H \index G H = \order G$

Now if $H$ is normal in $G$, then by Normalizer of Subgroup is Largest Subgroup containing that Subgroup as Normal Subgroup:

$\index G {\map {N_G} H} < \index G H$
for $\map {N_G} H = G$ in that case, and $H$ is a proper subgroup.
If $H$ is not normal in $G$, then it has multiple conjugates.
By Conjugate of Subgroup is Subgroup, they all are subgroups of $G$.
In particular, then, the identity of $G$ is common to all of them.
Hence they are not disjoint, and:

$\card S < \order H \index G {\map {N_G} H}$

In either case, it follows that:

$\card S < \order G$
as desired.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 49 \beta$




