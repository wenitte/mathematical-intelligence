# 

Source: https://proofwiki.org/wiki/Homomorphic_Image_of_Quotient_Group_under_Epimorphism

Theorem
Let $G_1$ and $G_2$ be groups whose identities are $e_{G_1}$ and $e_{G_2}$ respectively.
Let $\phi: G_1 \to G_2$ be a group epimorphism.
Let $K := \map \ker \phi$ be the kernel of $\phi$.
Let $N$ be a normal subgroup of $G_1$ such that $K \subseteq N$.

Then:

$\dfrac {G_1} N \cong \dfrac {G_2} {\map \phi N}$
where $\dfrac {G_1} N$ denotes the quotient group of $G_1$ by $N$.


Proof
From Group Epimorphism Preserves Normal Subgroups, $\map \phi N$ is normal in $G_2$.
Let $N' := \map \phi N$.
From Quotient Group Epimorphism is Epimorphism, we construct the (group) epimorphism $q: G_2 \to \dfrac {G_2} {N'}$.
Now consider the composite mapping $q \circ \phi: G \to \dfrac {G_2} {N'}$ defined as:

$\forall q \in G: \map {q \circ \phi} g = \map q {\map \phi g}$
From Composite of Group Epimorphisms is Epimorphism, $q \circ \phi$ is an epimorphism.

Let $g \in G$ such that:

$\map {q \circ \phi} g = e_{G_2 / N'}$
where $e_{G_2 / N'}$ is the identity of $\dfrac {G_2} {N'}$.
Then $\map \phi g \in \map \ker q$.
But then by Group Epimorphism Induces Bijection between Subgroups it must be that $g \in N$.
Hence from the First Isomorphism Theorem, $\dfrac {G_2} {N'} \cong \dfrac {G_1} N$.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $29$: Corollary




