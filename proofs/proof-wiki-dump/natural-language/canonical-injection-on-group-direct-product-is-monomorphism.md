# 

Source: https://proofwiki.org/wiki/Canonical_Injection_on_Group_Direct_Product_is_Monomorphism



Theorem
Let $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$ be groups with identities $e_1, e_2$ respectively.
Let $\struct {G_1 \times G_2, \circ}$ be the group direct product of $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$

Then the canonical injections:

$\inj_1: \struct {G_1, \circ_1} \to \struct {G_1, \circ_1} \times \struct {G_2, \circ_2}: \forall x \in G_1: \map {\inj_1} x = \tuple {x, e_2}$
$\inj_2: \struct {G_2, \circ_2} \to \struct {G_1, \circ_1} \times \struct {G_2, \circ_2}: \forall x \in G_2: \map {\inj_2} x = \tuple {e_1, x}$
are group monomorphisms.


Proof 1
From Canonical Injection is Injection we have that the canonical injections are in fact injective.

It remains to prove the morphism property.
Let $x, y \in G_1$.
Then:














\(\ds \map {\inj_1} {x \circ_1 y}\)

\(=\)







\(\ds \tuple {x \circ_1 y, e_2}\)





Definition of $\inj_1$














\(\ds \)

\(=\)







\(\ds \tuple {x \circ_1 y, e_2 \circ_2 e_2}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \tuple {x, e_2} \circ \tuple {y, e_2}\)





Definition of Group Direct Product














\(\ds \)

\(=\)







\(\ds \map {\inj_1} x \circ \map {\inj_1} y\)





Definition of $\inj_1$



and the morphism property has been demonstrated to hold for $\inj_1$.

Thus $\inj_1: \struct {G_1, \circ_1} \to \struct {G_1, \circ_1} \times \struct {G_2, \circ_2}$ has been shown to be an injective group homomorphism and therefore a group monomorphism.

The same argument applies to $\inj_2$.
$\blacksquare$


Proof 2
A specific instance of Canonical Injection is Monomorphism, where the algebraic structures in question are groups.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




