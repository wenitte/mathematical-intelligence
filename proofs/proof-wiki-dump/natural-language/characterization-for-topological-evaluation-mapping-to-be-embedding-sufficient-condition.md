# 

Source: https://proofwiki.org/wiki/Characterization_for_Topological_Evaluation_Mapping_to_be_Embedding/Sufficient_Condition

Theorem
Let $X$ be a topological space.

Let $\family {Y_i}_{i \mathop \in I}$ be an indexed family of topological spaces for some indexing set $I$.
Let $\family {f_i : X \to Y_i}_{i \mathop \in I}$ be an indexed family of continuous mappings.

Let $\ds Y = \prod_{i \mathop \in I} Y_i$ be the product space of $\family {Y_i}_{i \mathop \in I}$. 
Let $f : X \to Y$ be the evaluation mapping  induced by $\family{f_i}_{i \mathop \in I}$.

Let:

$(1)\quad$ the topology on $X$ be the initial topology with respect to $\family {f_i}_{i \mathop \in I}$
$(2)\quad$ the family $\family {f_i}$ separates points

Then:

$f$ is an embedding


Proof
From Evaluation Mapping is Injective iff Mappings Separate Points:

$f$ is an injection
From Injection to Image is Bijection:

$f \restriction_{X \times f \sqbrk X} \mathop : X \to f \sqbrk X$ is a bijection

From Topological Evaluation Mapping is Continuous:

$f$ is continuous
From Continuity of Composite of Inclusion on Mapping:

$f \restriction_{X \times f \sqbrk X}$ is continuous

Let $\SS = \set{ f_i^{-1} \sqbrk V : i \in I, V \subseteq Y_i \text{ is open}}$.
Let $f_i^{-1} \sqbrk V \in \SS$ for some $i \in I, V \subseteq Y_i$ is open.
Let $\pr_i$ denote the projection from $Y$ to $Y_i$.
We have:














\(\ds f \sqbrk {f_i^{-1} \sqbrk V}\)

\(=\)







\(\ds f \sqbrk {\paren{\pr_i \circ f}^{-1} \sqbrk V}\)





Composite of Evaluation Mapping and Projection














\(\ds \)

\(=\)







\(\ds f \sqbrk {f^{-1} \sqbrk {\pr_i^{-1} \sqbrk V} }\)





Preimage of Subset under Composite Mapping














\(\ds \)

\(=\)







\(\ds \pr_i^{-1} \sqbrk V \cap f \sqbrk X\)





Image of Preimage under Mapping



By definition of product topology:

$\pr_i^{-1} \sqbrk V$ is open in $Y$
By definition of subspace:

$f \sqbrk {f_i^{-1} \sqbrk V} = \pr_i^{-1} \sqbrk V \cap f \sqbrk X$ is open in $f \sqbrk X$
By definition of restriction:

$f \restriction_{X \times f \sqbrk X} \sqbrk {f_i^{-1} \sqbrk V} = f \sqbrk {f_i^{-1} \sqbrk V}$

We have shown that:

$\forall U \in \SS : f \restriction_{X \times f \sqbrk X} \sqbrk U \text{ is open in } Y$
By definition of initial topology:

$\SS$ is a sub-basis for the topology on $X$
From Injection is Open Mapping iff Image of Sub-Basis Set is Open:

$f \restriction_{X \times f \sqbrk X}$ is an open mapping

By definition, $f \restriction_{X \times f \sqbrk X}$ is a homeomorphism.
By definition, $f$ is an embedding.
$\blacksquare$





