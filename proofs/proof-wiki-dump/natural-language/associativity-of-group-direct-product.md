# 

Source: https://proofwiki.org/wiki/Associativity_of_Group_Direct_Product



Theorem
The group direct product $G \times \paren {H \times K}$ is (group) isomorphic to $\paren {G \times H} \times K$.


Proof
Let $G, H, K$ be groups.

The mapping $\theta: G \times \paren {H \times K} \to \paren {G \times H} \times K$ defined as:

$\forall g \in G, h \in H, k \in K: \map \theta {\tuple {g, \tuple {h, k} } } = \tuple {\tuple {g, h}, k}$
is shown to be a group isomorphism, as follows:


Injective
Let $\map \theta {\tuple {g_1, \tuple {h_1, k_1} } } = \map \theta {\tuple {g_2, \tuple {h_2, k_2} } }$.
By the definition of $\theta$:

$\tuple {\tuple {g_1, h_1}, k_1} = \tuple {\tuple {g_2, h_2}, k_2}$
By Equality of Ordered Pairs:

$\tuple {g_1, h_1} = \tuple {g_2, h_2}$
$k_1 = k_2$
and consequently:

$g_1 = g_2, h_1 = h_2$
Thus:

$\tuple {g_1, \tuple {h_1, k_1} } = \tuple {g_2, \tuple {h_2, k_2} }$
and so $\theta$ is injective.


Surjective
If $\tuple {\tuple {g, h}, k} \in \paren {G \times H} \times K$, then $g \in G, h \in H, k \in K$.
Thus:

$\tuple {g, \tuple {h, k} } \in G \times \paren {H \times K}$
and:

$\map \theta {\tuple {g, \tuple {h, k} } } = \tuple {\tuple {g, h}, k}$
and so $\theta$ is surjective.

Hence, by definition, $\theta$ is bijective.


Group Homomorphism
Now let $\tuple {g_1, \tuple {h_1, k_1} }, \tuple {g_2, \tuple {h_2, k_2} } \in G \times \tuple {H \times K}$.
Then:














\(\ds \map \theta {\tuple {g_1, \tuple {h_1, k_1} } \tuple {g_2, \tuple {h_2, k_2} } }\)

\(=\)







\(\ds \map \theta {\tuple {g_1 g_2, \tuple {h_1, k_1} \tuple {h_2, k_2} } }\)





Definition of Group Direct Product














\(\ds \)

\(=\)







\(\ds \map \theta {\tuple {g_1 g_2, \tuple {h_1 h_2, k_1 k_2} } }\)





Definition of Group Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {\tuple {g_1 g_2, h_1 h_2}, k_1 k_2}\)





Definition of $\theta$














\(\ds \)

\(=\)







\(\ds \tuple {\tuple {g_1, h_1} \tuple {g_2, h_2}, k_1 k_2}\)





Definition of Group Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {\tuple {g_1, h_1}, k_1} \tuple {\tuple {g_2, h_2}, k_2}\)





Definition of Group Direct Product














\(\ds \)

\(=\)







\(\ds \map \theta {\tuple {g_1, \tuple {h_1, k_1} } } \map \theta {\tuple {g_2, \tuple {h_2, k_2} } }\)





Definition of $\theta$



Hence, $\theta$ is a (group) homomorphism.
Hence, by definition, $\theta$ is a group isomorphism.
$\blacksquare$





