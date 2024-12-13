# 

Source: https://proofwiki.org/wiki/Preimage_of_Normal_Subgroup_under_Epimorphism_is_Normal_Subgroup

Theorem
Let $\struct {G_1, \circ}$ and $\struct {G_2, *}$ be groups.
Let $\phi: \struct {G_1, \circ} \to \struct {G_2, *}$ be a group epimorphism.
Let $H$ be a normal subgroup of $\struct {G_2, *}$.
Then:

$\phi^{-1} \sqbrk H$ is a normal subgroup of $\struct {G_1, \circ}$
where $\phi^{-1} \sqbrk H$ denotes the preimage of $H$ under $\phi$.


Proof
Recall that as $\phi$ is an group epimorphism, it is also a fortiori a group Homomorphism.
Hence:

$\forall a, b \in G_1: \map \phi {a \circ b} = \map \phi a * \map \phi b$

Let $H$ be a normal subgroup of $\struct {G_2, *}$.
From Preimage of Subgroup under Epimorphism is Subgroup:

$\phi^{-1} \sqbrk H$ is a subgroup of $\struct {G_1, \circ}$.

It remains to be shown that $\phi^{-1} \sqbrk H$ is normal.
Let $K = \phi^{-1} \sqbrk H$.
That is:

$H = \map \phi K$

To prove that $K$ is normal, we are to show that:

$\forall g \in G: k \in K \iff g \circ k \circ g^{-1} \in K$
and:

$\forall g \in G: k \in K \iff g^{-1} \circ k \circ g \in K$

So, let $g \in G$ and $k \in K$ be arbitrary.
By definition of preimage of $H$ under $\phi$:

$\exists h \in H: \map \phi k = h$
Then:














\(\ds \map \phi {g \circ k \circ g^{-1} }\)

\(=\)







\(\ds \map \phi g * \map \phi k * \map \phi {g^{-1} }\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi g * h * \map \phi {g^{-1} }\)





as $h = \map \phi k$














\(\ds \)

\(\in\)







\(\ds H\)





as $H$ is normal








\(\ds \leadsto \ \ \)





\(\ds g \circ k \circ g^{-1}\)

\(\in\)







\(\ds K\)





Definition of Preimage of Subset under Mapping: $K = \phi^{-1} \sqbrk H$




In the same way:














\(\ds \map \phi {g^{-1} \circ k \circ g}\)

\(=\)







\(\ds \map \phi {g^{-1} } * \map \phi k * \map \phi g\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {g^{-1} } * h * \map \phi q\)





as $h = \map \phi k$














\(\ds \)

\(\in\)







\(\ds H\)





as $H$ is normal








\(\ds \leadsto \ \ \)





\(\ds g^{-1} \circ k \circ g\)

\(\in\)







\(\ds K\)





Definition of Preimage of Subset under Mapping: $K = \phi^{-1} \sqbrk H$



Thus:

$\forall g \in G: k \in K \implies g \circ k \circ g^{-1} \in K$
and:

$\forall g \in G: k \in K \implies g^{-1} \circ k \circ g \in K$
$\Box$

Then:














\(\ds g \circ k \circ g^{-1}\)

\(\in\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {g \circ k \circ g^{-1} }\)

\(\in\)







\(\ds H\)





Definition of $K$








\(\ds \leadsto \ \ \)





\(\ds \map \phi g * \map \phi k * \map \phi {g^{-1} }\)

\(\in\)







\(\ds H\)





Definition of Group Homomorphism








\(\ds \leadsto \ \ \)





\(\ds \map \phi k\)

\(\in\)







\(\ds H\)





as $H$ is normal








\(\ds \leadsto \ \ \)





\(\ds k\)

\(\in\)







\(\ds K\)





Definition of Preimage of Subset under Mapping: $K = \phi^{-1} \sqbrk H$



and:














\(\ds g^{-1} \circ k \circ g\)

\(\in\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {g^{-1} \circ k \circ g}\)

\(\in\)







\(\ds H\)





Definition of $K$








\(\ds \leadsto \ \ \)





\(\ds \map \phi {g^{-1} } * \map \phi k * \map \phi g\)

\(\in\)







\(\ds H\)





Definition of Group Homomorphism








\(\ds \leadsto \ \ \)





\(\ds \map \phi k\)

\(\in\)







\(\ds H\)





as $H$ is normal








\(\ds \leadsto \ \ \)





\(\ds k\)

\(\in\)







\(\ds K\)





Definition of Preimage of Subset under Mapping: $K = \phi^{-1} \sqbrk H$



Thus:

$\forall g \in G: k \in K \impliedby g \circ k \circ g^{-1} \in K$
and:

$\forall g \in G: k \in K \impliedby g^{-1} \circ k \circ g \in K$
$\Box$

Putting this together:

$\forall g \in G: k \in K \iff g \circ k \circ g^{-1} \in K$
and:

$\forall g \in G: k \in K \iff g^{-1} \circ k \circ g \in K$
and the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.20 \ \text {(b)}$




