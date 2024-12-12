# 

Source: https://proofwiki.org/wiki/Commutativity_of_Group_Direct_Product



Theorem
Let $\struct {G, \circ_g}$ and $\struct {H, \circ_h}$ be groups.

Let $\struct {G \times H, \circ}$ be the group direct product of $\struct {G, \circ_g}$ and $\struct {H, \circ_h}$, where the operation $\circ$ is defined as:

$\tuple {g_1, h_1} \circ \tuple {g_2, h_2} = \tuple {g_1 \circ_g g_2, h_1 \circ_h h_2}$

Let $\struct {H \times G, \star}$ be the group direct product of $\struct {H, \circ_h}$ and $\struct {G, \circ_g}$, where the operation $\star$ is defined as:

$\tuple {h_1, g_1} \star \tuple {h_2, g_2} = \tuple {h_1 \circ_h h_2, g_1 \circ_g g_2}$

The group direct product $\struct {G \times H, \circ}$ is isomorphic to the $\struct {H \times G, \star}$.


Proof
The mapping $\theta: G \times H \to H \times G$ defined as:

$\forall g \in G, h \in H: \map \theta {g, h} = \tuple {h, g}$
is to be shown to be a group homomorphism, and that $\theta$ is bijective, as follows:


Injective













\(\ds \map \theta {g_1, h_1}\)

\(=\)







\(\ds \map \theta {g_2, h_2}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {h_1, g_1}\)

\(=\)







\(\ds \tuple {h_2, g_2}\)





Definition of $\theta$








\(\ds \leadsto \ \ \)





\(\ds \tuple {g_1, h_1}\)

\(=\)







\(\ds \tuple {g_2, h_2}\)





Equality of Ordered Pairs



Thus $\theta$ is injective by definition.
$\Box$


Surjective













\(\ds \tuple {h, g}\)

\(\in\)







\(\ds H \times G\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {g, h}\)

\(\in\)







\(\ds G \times H\)














\(\ds \leadsto \ \ \)

\(\ds \exists \tuple {g, h} \in G \times H: \, \)



\(\ds \tuple {h, g}\)

\(=\)







\(\ds \map \theta {g, h}\)









Thus $\theta$ is surjective by definition.
$\Box$


Group Homomorphism
Let $\tuple {g_1, h_1}, \tuple {g_2, h_2} \in G \times H$.
Then:














\(\ds \map \theta {\tuple {g_1, h_1} \circ \tuple {g_2, h_2} }\)

\(=\)







\(\ds \map \theta {g_1 \circ_g g_2, h_1 \circ_h h_2}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds \tuple {h_1 \circ_h h_2, g_1 \circ_g g_2}\)





Definition of $\theta$














\(\ds \)

\(=\)







\(\ds \tuple {h_1, g_1} \star \tuple {h_2, g_2}\)





Definition of $\star$














\(\ds \)

\(=\)







\(\ds \map \theta {g_1, h_1} \star \map \theta {g_2, h_2}\)





Definition of $\theta$




thus proving that $\theta$ is a homomorphism.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Proposition $13.1 \ (2)$




