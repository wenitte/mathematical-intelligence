# 

Source: https://proofwiki.org/wiki/Continuous_Mapping_to_Product_Space/General_Result

Theorem
Let $X$ be a topological space.
Let $\family {Y_i}_{i \mathop \in I}$ be an indexed family of topological spaces for some indexing set $I$.
Let $\ds Y = \prod_{i \mathop \in I} Y_i$ be the product space of $\family {Y_i}_{i \mathop \in I}$. 
For each $i \in I$, let $\pr_i: X \to X_i$ denote the $i$th projection on $X$:

$\forall \family {x_j}_{j \mathop \in I} \in X: \map {\pr_i} {\family {x_j}_{j \mathop \in I} } = x_i$

Let $f$ be a mapping from $X$ to $Y$. 

Then $f$ is continuous if and only if $\pr_i \circ f$ is continuous for all $i \in I$.


Proof
Suppose $f$ is continuous.
From Projection from Product Topology is Continuous $\pr_i$ is continuous for each $i \in I$.
By Composite of Continuous Mappings is Continuous it follows that $\pr_i \circ f$ is continuous for each $i \in I$.

Conversely, suppose that each $\pr_i \circ f$ is continuous. 
Let $U = \pr_{i_1}^{-1} \sqbrk {U_{i_1} } \cap \cdots \cap \pr_{i_n}^{-1} \sqbrk {U_{i_n} }$ be an open set in the natural basis of the product topology for $Y$.
Note that by the definition of natural basis, $U$ is constrained to be the intersection of a finite number of sets of $\mathbb S$.

Then by Preimage of Intersection under Mapping we find:

$f^{-1} \sqbrk U = f^{-1} \sqbrk {\pr_{i_1}^{-1} \sqbrk {U_{i_1} } } \cap \cdots \cap f^{-1} \sqbrk {\pr_{i_n}^{-1} \sqbrk {U_{i_n} } }$
Since each $\pr_{i_j} \circ f$ is continuous, each:

$\paren {\pr_{i_j} \circ f}^{-1} \sqbrk {U_{i_j} } = f^{-1} \sqbrk {\pr_{i_j}^{-1} \sqbrk {U_{i_j} } }$
is open.
Therefore $f^{-1} \sqbrk U$ is open.

By the definition of basis, each open set of $Y$ can be written as a union of sets in the natural basis of the product topology for $Y$.
From Preimage of Union under Mapping, the union of the preimages of open sets of $Y$ equals the preimages of the union of those sets.
Thus the preimage of an open set of $Y$ is open in $X$.
Hence $f$ is continuous.
$\blacksquare$





