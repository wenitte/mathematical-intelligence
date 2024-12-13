# 

Source: https://proofwiki.org/wiki/Projections_on_Direct_Product_of_Group_Homomorphisms



Theorem
Let $G, H_1$ and $H_2$ be groups.
Let $H_1 \times H_2$ be the group direct product of $H_1$ and $H_2$.

Let $f_1: G \to H_1$ and $f_2: G \to H_2$ be group homomorphisms.
Let $f_1 \times f_2: g \to H_1 \times H_2$ be the direct product of $f_1$ and $f_2$.

Let:

$\pr_1: H_1 \times H_2 \to H_1$ be the first projection from $H_1 \times H_2$ to $H_1$
$\pr_2: H_1 \times H_2 \to H_2$ be the second projection from $H_1 \times H_2$ to $H_2$.

Then:

$(1) \quad \pr_1 \circ \paren {f_1 \times f_2} = f_1$
$(2) \quad \pr_2 \circ \paren {f_1 \times f_2} = f_2$
where $\circ$ is the operation of composition of mappings.


Proof
The proof of $(2)$ follows exactly the same lines as the proof of $(1)$, so the proof of $(1)$ only will be shown here.


Matching Domains
From Domain of Composite Relation, the domain of $\pr_1 \circ \paren {f_1 \times f_2}$ is the domain of $f_1 \times f_2$.
By definition of the direct product of $f_1$ and $f_2$, the domain of $f_1 \times f_2$ is $G$.
Also by definition, the domain of $f_1$ is also $G$.

Thus the domains of $\pr_1 \circ \paren {f_1 \times f_2}$ and $f_1$ are the same. 
$\blacksquare$


Matching Codomains
From Codomain of Composite Relation, the codomain of $\pr_1 \circ \paren {f_1 \times f_2}$ is the codomain of $\pr_1$.
By definition of the first projection $H_1 \times H_2$, the codomain of $\pr_1$ is $H_1$.
Also by definition, the codomain of $f_1$ is also $H_1$.

Thus the codomains of $\pr_1 \circ \paren {f_1 \times f_2}$ and $f_1$ are the same. 
$\blacksquare$


Matching Images
Let $g \in G$.
Then:














\(\ds \map {\pr_1 \circ \paren {f_1 \times f_2} } g\)

\(=\)







\(\ds \map {\pr_1} {\map {\paren {f_1 \times f_2} } g}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\pr_1} {\map {f_1} g, \map {f_2} g}\)





Definition of Direct Product of $f_1$ and $f_2$














\(\ds \)

\(=\)







\(\ds \map {f_1} g\)





Definition of First Projection



So:

$g \in G \implies \map {\pr_1 \circ \paren {f_1 \times f_2} } g = \map {f_1} g$
and so Equality of Mappings has been demonstrated.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




