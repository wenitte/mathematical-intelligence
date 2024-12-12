# 

Source: https://proofwiki.org/wiki/Continuous_Mapping_to_Product_Space/Corollary

Corollary to Continuous Mapping to Product Space
Let $T = T_1 \times T_2$ be the product space of two topological spaces $T_1$ and $T_2$.

Let $T'$ be a topological space.
Let $f: T' \to T_1$ be a mapping.
Let $g: T' \to T_2$ be a mapping.

Let $f \times g : T' \to T$ be the mapping defined by:

$\forall x \in T' : \map {\paren {f \times g}} x = \tuple {\map f x, \map g x}$

Then $f \times g$ is continuous if and only if $f$ and $g$ are continuous.


Proof
Let $\pr_1: T \to T_1$ and $\pr_2: T \to T_2$ be the first and second projections from $T$ onto its factors.
From Continuous Mapping to Product Space, $f \times g$ is continuous if and only if $\pr_1 \circ \paren {f \times g}$ and $\pr_2 \circ \paren {f \times g}$ are continuous.
Now:










\(\ds \forall x \in T': \, \)



\(\ds \map {\pr_1 \circ \paren {f \times g} } x\)

\(=\)







\(\ds \map {\pr_1} {\map {\paren {f \times g} } x}\)





Definition of Composite Mapping














\(\ds \)

\(=\)







\(\ds \map {\pr_1} {\tuple {\map f x, \map g x} }\)





Definition of Mapping $f \times g$














\(\ds \)

\(=\)







\(\ds \map f x\)





Definition of First Projection from $T$



From Equality of Mappings, $\pr_1 \circ \paren {f \times g} = f$.
Similarly:

$\pr_2 \circ \paren {f \times g} = g$
The result follows.
$\blacksquare$





