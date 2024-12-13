# 

Source: https://proofwiki.org/wiki/Pullback_of_Quotient_Group_Isomorphism_is_Subgroup



Theorem
Let $\struct {G, \circ}$ be a group whose identity element is $e_G$.
Let $\struct {H, *}$ be a group whose identity element is $e_H$.
Let $N \lhd G, K \lhd H$ be normal subgroups of $G$ and $H$ respectively.
Let:

$G / N \cong H / K$
where:

$G / N$ denotes the quotient of $G$ by $N$
$\cong$ denotes group isomorphism.
Let $\theta: G / N \to H / K$ be such a group isomorphism.

Let $G \times^\theta H$ be the pullback of $G$ and $H$ via $\theta$.

Then $G \times^\theta H$ is a subgroup of $G \times H$.


Proof
This result is proved by an application of the Two-Step Subgroup Test:


Condition $(1)$
From the definition of pullback:

$\tuple {e_G, e_H} \in G \times^\theta H$
if and only if:

$\map \theta {e_G \circ N} = e_H * K$
By Coset by Identity, $e_G \circ N, e_H * K$ are the identities of $G / N$ and $H / K$
From Group Homomorphism Preserves Identity:

$\map \theta {e_G \circ N} = e_H * K$
So $\tuple {e_G, e_H} \in G \times^\theta H$
Thus $G \times^\theta H$ is non-empty.
$\Box$


Condition $(2)$
Let $\tuple {g, h}$ and  $\tuple {g', h'}$ be elements of $G \times^\theta H$.
It follows by definition of $\theta$ that:

$\map \theta {g \circ N} = h * K$
and:

$\map \theta {g' \circ N} = h' * K$

By the morphism property:

$\map \theta {g \circ N} * \map \theta {g' \circ N} = \map \theta {g \circ N \circ g' \circ N} = \map \theta {\paren {g \circ g'} \circ N}$

Hence:














\(\ds \paren {h * h'} * K\)

\(=\)







\(\ds h * K * h' * K\)




















\(\ds \)

\(=\)







\(\ds \map \theta {g \circ N} * \map \theta {g' \circ N}\)




















\(\ds \)

\(=\)







\(\ds \map \theta {\paren {g \circ g'} \circ N}\)









Thus:

$\tuple {g \circ g', h * h'} \in G \times^\theta H$
Hence $G \times^\theta H$ is closed under the operation.
$\Box$


Condition $(3)$
Let $\tuple {g, h} \in G \times^\theta H$.
Then:














\(\ds \map \theta {g \circ N}\)

\(=\)







\(\ds h * K\)














\(\ds \leadsto \ \ \)





\(\ds \map \theta {g \circ N}^{-1}\)

\(=\)







\(\ds h^{-1} * K\)










Then:














\(\ds \map \theta {g \circ N}^{-1}\)

\(=\)







\(\ds \map \theta {g^{-1} \circ N}\)





Group Homomorphism Preserves Inverses








\(\ds \leadsto \ \ \)





\(\ds \map \theta {g^{-1} \circ N}\)

\(=\)







\(\ds h^{-1} * K\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {g^{-1}, h^{-1} }\)

\(\in\)







\(\ds G \times^\theta H\)










Thus $G \times^\theta H$ is closed under inverses.
$\Box$

Therefore by the Two-Step Subgroup Test:

$G \times^\theta H \le G \times H$
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Definition $13.11$




