# 

Source: https://proofwiki.org/wiki/Direct_Product_of_Group_Homomorphisms_is_Homomorphism

Theorem
Let $\struct {G, \circ}, \struct {H_1, *_1}$ and $\struct {H_2, *_2}$ be groups.
Let $\struct {H_1 \times H_2, *}$ be the group direct product of $H_1$ and $H_2$.
Let $f_1: G \to H_1$ and $f_2: G \to H_2$ be group homomorphisms.
Let $f_1 \times f_2: g \to H_1 \times H_2$ be the direct product of $f_1$ and $f_2$.

Then $f_1 \times f_2$ is a group homomorphism.


Proof
The direct product of $f_1$ and $f_2$ $f_1 \times f_2: g \to H_1 \times H_2$ is defined as:

$\forall g \in G: \map {\paren {f_1 \times f_2} } g = \tuple {\map {f_1} g, \map {f_2} g}$

From External Direct Product of Groups is Group, the group direct product $H_1 \times H_2$ is a group.

It remains to be shown that $f_1 \times f_2$ fulfils the morphism property.
Let $g, h \in G$.
Then:














\(\ds \)

\(\)







\(\ds \map {\paren {f_1 \times f_2} } g * \map {\paren {f_1 \times f_2} } h\)




















\(\ds \)

\(=\)







\(\ds \tuple {\map {f_1} g, \map {f_2} g} * \tuple {\map {f_1} h, \map {f_2} h}\)





Definition of Direct Product of $f_1$ and $f_2$














\(\ds \)

\(=\)







\(\ds \tuple {\map {f_1} g *_1 \map {f_1} h, \map {f_2} g *_2 \map {f_2} h}\)





Definition of Group Direct Product $\struct {H_1 \times H_2, *}$














\(\ds \)

\(=\)







\(\ds \tuple {\map {f_1} {g \circ h}, \map {f_2} {g \circ h} }\)





$f_1$ and $f_2$ are Group Homomorphisms














\(\ds \)

\(=\)







\(\ds \map {\paren {f_1 \times f_2} } {g \circ h}\)





Definition of Direct Product of $f_1$ and $f_2$



$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




