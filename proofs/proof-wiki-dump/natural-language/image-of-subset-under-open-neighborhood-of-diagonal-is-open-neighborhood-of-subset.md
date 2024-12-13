# 

Source: https://proofwiki.org/wiki/Image_of_Subset_under_Open_Neighborhood_of_Diagonal_is_Open_Neighborhood_of_Subset


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological space.
Let $\tau_{X \times X}$ denote the product topology on the cartesian product $X \times X$.

Let $U$ be an open neighborhood of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct {X \times X, \tau_{X \times X} }$.

Then:

$\forall A \subseteq X : U \sqbrk A$ is an open neighborhood of $A$ in $T$
Proof
Let $A \subseteq X$.

From Image of Subset under Neighborhood of Diagonal is Neighborhood of Subset:

$U \sqbrk A$ is a neighborhood of $A$ in $T$

From Image of Subset under Relation equals Union of Images of Elements:

$U \sqbrk A = \ds \bigcup_{x \in A} \map U x$

From Image of Point under Open Neighborhood of Diagonal is Open Neighborhood of Point:

$\forall x \in A : \map U x$ is an open neighborhood of $x$ in $T$

By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$U \sqbrk A \in \tau$

Since $A$ was arbitrary:

$\forall A \subseteq X : U \sqbrk A$ is an open neighborhood of $A$ in $T$
$\blacksquare$





