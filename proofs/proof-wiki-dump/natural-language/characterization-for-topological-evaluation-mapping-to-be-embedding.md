# 

Source: https://proofwiki.org/wiki/Characterization_for_Topological_Evaluation_Mapping_to_be_Embedding


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $X$ be a topological space.

Let $\family {Y_i}_{i \mathop \in I}$ be an indexed family of topological spaces for some indexing set $I$.
Let $\family {f_i : X \to Y_i}_{i \mathop \in I}$ be an indexed family of continuous mappings.

Let $\ds Y = \prod_{i \mathop \in I} Y_i$ be the product space of $\family {Y_i}_{i \mathop \in I}$. 
Let $f : X \to Y$ be the evaluation mapping induced by $\family{f_i}_{i \mathop \in I}$.

Then:

$f$ is an embedding
if and only if

$(1)\quad$ the topology on $X$ is the initial topology with respect to $\family {f_i}_{i \mathop \in I}$
$(2)\quad$ the family $\family {f_i}$ separates points


Proof
Necessary Condition
Let $f$ be an embedding.


$(1)$ The Topology on $X$ is the Initial Topology
Let $f \sqbrk X$ denote the image of $f$.
Let $\tau_{f \sqbrk X}$ be the subspace topology on $f \sqbrk X$.
By definition of embedding:

$f \restriction_{X \times f \sqbrk X}$ is a homeomorphism between $X$ and $f \sqbrk X$

From Subspace of Product Space has Initial Topology with respect to Restricted Projections:

$\tau_{f \sqbrk X}$ is the initial topology on $f \sqbrk X$ with respect to the mappings $\family {\pr_i \restriction_{f \sqbrk X} : f \sqbrk X \to Y_i}_{i \mathop \in I}$

Let $\tau$ be the topology on $X$.
From Homeomorphic Topology of Initial Topology is Initial Topology:

$\tau$ is the initial topology on $X$ with respect to $\family {\pr_i \restriction_{f \sqbrk X} \circ f \restriction_{X \times f \sqbrk X} : X \to Y_i}_{i \mathop \in I}$

We have:














\(\ds \pr_i \restriction_{f \sqbrk X} \circ f \restriction_{X \times f \sqbrk X}\)

\(=\)







\(\ds \pr_i \circ f\)





Composition of Mapping with Mapping Restricted to Image














\(\ds \)

\(=\)







\(\ds f_i\)





Composite of Evaluation Mapping and Projection



Hence:

$\tau$ is the initial topology on $X$ with respect to $\family {f_i : X \to Y_i}_{i \mathop \in I}$
$\Box$

$(2)$ The Family $\family {f_i}$ Separates Points
By definition of embedding:

$f$ is a homeomorphism between $X$ and $f \sqbrk X$
By definition of homeomorphism:

$f$ is an injection

From Evaluation Mapping is Injective iff Mappings Separate Points:

the family $\family {f_i}$ separates points.
$\Box$


Sufficient Condition
Let:

$(1)\quad$ the topology on $X$ be the initial topology with respect to $\family {f_i}_{i \mathop \in I}$
$(2)\quad$ the family $\family {f_i}$ separate points
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


Also see
Characterization for Continuous Mappings Separate Points from Closed Sets
Evaluation Mapping on T1 Space is Embedding iff Separates Points from Closed Sets


Sources
1970: Stephen Willard: General Topology: Chapter $3$: New Space from Old: $\S8$: Product Spaces, Weak Topologies: Theorem $8.12$




