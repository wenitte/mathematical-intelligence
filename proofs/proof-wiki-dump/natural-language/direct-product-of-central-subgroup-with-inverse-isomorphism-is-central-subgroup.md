# 

Source: https://proofwiki.org/wiki/Direct_Product_of_Central_Subgroup_with_Inverse_Isomorphism_is_Central_Subgroup

Theorem
Let $G$ and $H$ be groups.
Let $\map Z G$ denote the center of $G$.
Let $Z$ and $W$ be central subgroups of $G$ and $H$ respectively.

Let:

$Z \cong W$
where $\cong$ denotes isomorphism.
Let such a group isomorphism be $\theta: Z \to W$.
Let $X$ be the set defined as:

$X = \set {\tuple {x, \map \theta x^{-1} }: x \in Z}$

Then $X$ is a central subgroup of $G \times H$.


Proof
First note that by Group Homomorphism Preserves Inverses:

$\forall x \in G: \map \phi {x^{-1} } = \paren {\map \phi x}^{-1} = \map \phi x^{-1}$
and so there is no amphiboly in the notation used.

It is established that $\tuple {x, \map \theta x^{-1} } \in G \times H$:

$x \in G$
$\map \theta x \in H$ and so $\map \theta x^{-1} \in H$.
Let:

$e_G$ be the identity element of $G$
$e_H$ be the identity element of $H$

We have that $e_G \in Z$, and so:














\(\ds \tuple {e_G, \map \theta {e_G}^{-1} }\)

\(=\)







\(\ds \tuple {e_G, \map \theta {e_G} }\)





as $e_G^{-1} = e_G$














\(\ds \)

\(=\)







\(\ds \tuple {e_G, e_H}\)





Group Homomorphism Preserves Identity



Thus $\tuple {e_G, e_H} \in X$ and so $X \ne \O$.

Then we note that:














\(\ds \tuple {x, \map \theta x^{-1} } \tuple {x^{-1}, \map \theta x}\)

\(=\)







\(\ds \tuple {x x^{-1}, \map \theta x^{-1} \map \theta x}\)





Definition of Group Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {e_G, e_H}\)





as $\theta$ is a group isomorphism














\(\ds \)

\(=\)







\(\ds \tuple {x^{-1} x, \map \theta x \map \theta x^{-1} }\)





as $\theta$ is a group isomorphism














\(\ds \)

\(=\)







\(\ds \tuple {x^{-1}, \map \theta x} \tuple {x, \map \theta x^{-1} }\)





Definition of Group Direct Product



and so $\tuple {x^{-1}, \map \theta x}$ is the inverse of $\tuple {x, \map \theta x^{-1} }$ in $H$.

Let $x, y \in G$.
Then $x^{-1} \in G$ from Group Axiom $\text G 0$: Closure.

Hence if:

$\tuple {x, \map \theta x^{-1} } \in X$
it follows that:

$\tuple {x^{-1}, \map \theta x} \in X$
Let $x, y^{-1} \in G$.
Then:

$\tuple {x, \map \theta x^{-1} } \in X$
and:

$\tuple {y^{-1}, \map \theta y} \in X$

Thus:














\(\ds \tuple {x, \map \theta x^{-1} } \tuple {y^{-1}, \map \theta y}\)

\(=\)







\(\ds \tuple {x y^{-1}, \map \theta x^{-1} \map \theta y}\)





Definition of Group Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {x y^{-1}, \map \theta {x^{-1} y} }\)





as $\theta$ is a group isomorphism














\(\ds \)

\(=\)







\(\ds \tuple {x y^{-1}, \map \theta {\paren {y^{-1} x}^{-1} } }\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds \tuple {x y^{-1}, \map \theta {\paren {x y^{-1} }^{-1} } }\)





$x$ and $y$ are in the center of $G$, so commute














\(\ds \)

\(=\)







\(\ds \tuple {x y^{-1}, \map \theta {x y^{-1} }^{-1} }\)









So:

$\tuple {x, \map \theta x^{-1} } \tuple {y^{-1}, \map \theta y} \in X$
and it follows from the One-Step Subgroup Test that $X$ is a subgroup of $G \times H$.
$\Box$

We have that $Z$ is a central subgroup of $G$.
We also have that the image of $\theta$ is $W$.
From Direct Product of Central Subgroups, $Z \times W$ is a central subgroup of $G \times H$.
It follows that $X$ is a central subgroup of $G \times H$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Definition $13.9$




