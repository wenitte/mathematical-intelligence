# 

Source: https://proofwiki.org/wiki/Characterization_for_Topological_Evaluation_Mapping_to_be_Embedding/Necessary_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $X$ be a topological space.

Let $\family {Y_i}_{i \mathop \in I}$ be an indexed family of topological spaces for some indexing set $I$.
Let $\family {f_i : X \to Y_i}_{i \mathop \in I}$ be an indexed family of continuous mappings.

Let $\ds Y = \prod_{i \mathop \in I} Y_i$ be the product space of $\family {Y_i}_{i \mathop \in I}$. 
Let $f : X \to Y$ be the evaluation mapping induced by $\family{f_i}_{i \mathop \in I}$.

Let $f$ be an embedding

Then:

$(1)\quad$ the topology on $X$ is the initial topology with respect to $\family {f_i}_{i \mathop \in I}$
$(2)\quad$ the family $\family {f_i}$ separates points


Proof
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
$\blacksquare$





