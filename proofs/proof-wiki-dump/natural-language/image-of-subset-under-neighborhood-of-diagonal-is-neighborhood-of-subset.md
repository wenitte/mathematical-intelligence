# 

Source: https://proofwiki.org/wiki/Image_of_Subset_under_Neighborhood_of_Diagonal_is_Neighborhood_of_Subset


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological space.
Let $\tau_{X \times X}$ denote the product topology on the cartesian product $X \times X$.

Let $V$ be a neighborhood of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct {X \times X, \tau_{X \times X} }$.

Then:

$\forall A \subseteq X : V \sqbrk A$ is a neighborhood of $A$ in $T$
Proof
Let $A \subseteq X$.

From Image of Subset under Relation equals Union of Images of Elements:

$V \sqbrk A = \ds \bigcup_{x \in A} \map V x$
From Subset of Union:

$\forall x \in A : \map V x \subseteq V \sqbrk A$

From Image of Point under Neighborhood of Diagonal is Neighborhood of Point:

$\forall x \in A : \map V x$ is a neighborhood of $x$ in $T$
From Superset of Neighborhood in Topological Space is Neighborhood:

$\forall x \in A : \map V A$ is a neighborhood of $x$ in $T$
From Set is Neighborhood of Subset iff Neighborhood of all Points of Subset:

$\map V A$ is a neighborhood of $A$ in $T$
$\blacksquare$





