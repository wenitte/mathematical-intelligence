# 

Source: https://proofwiki.org/wiki/Evaluation_Mapping_on_T1_Space_is_Embedding_if_Mappings_Separate_Points_from_Closed_Sets


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $X$ be a $T_1$ topological space.

Let $\family {Y_i}_{i \mathop \in I}$ be an indexed family of topological spaces for some indexing set $I$.
Let $\family {f_i : X \to Y_i}_{i \mathop \in I}$ be an indexed family of continuous mappings.
Let $\family {f_i}_{i \mathop \in I}$ separate points from closed sets.

Let $\ds Y = \prod_{i \mathop \in I} Y_i$ be the product space of $\family {Y_i}_{i \mathop \in I}$. 
Let $f : X \to Y$ be the evaluation mapping induced by $\family{f_i}_{i \mathop \in I}$.

Then:

$f$ is an embedding


Proof
Let $\BB = \set{f_i^{-1} \sqbrk V : i \in I, V \text{ is open in } Y_i}$.

From Preimage of Open Sets forms Basis if Continuous Mappings Separate Points from Closed Sets:

$\BB$ is a basis for $X$
From Analytic Basis is Analytic Sub-Basis:

$\BB$ is a sub-basis for $X$

By definition of a $T_1$ space:

all points of $X$ are closed
Since $\family {f_i}_{i \mathop \in I}$ separate points from closed sets then:

$\family {f_i}_{i \mathop \in I}$ separates points

From Characterization for Topological Evaluation Mapping to be Embedding:

the evaluation mapping $f$ is an embedding
$\blacksquare$


Sources
1955: John L. Kelley: General Topology: Chapter $4$: Embedding and Metrization, $\S$Embedding in Cubes, $5$ Embedding Lemma
1970: Stephen Willard: General Topology: Chapter $3$: New Space from Old: $\S8$: Product Spaces, Weak Topologies: Theorem $8.16$




