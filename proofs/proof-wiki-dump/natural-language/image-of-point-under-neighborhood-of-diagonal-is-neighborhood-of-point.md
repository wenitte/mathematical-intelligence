# 

Source: https://proofwiki.org/wiki/Image_of_Point_under_Neighborhood_of_Diagonal_is_Neighborhood_of_Point


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological space.
Let $\tau_{X \times X}$ denote the product topology on the cartesian product $X \times X$.

Let $V$ be a neighborhood of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct {X \times X, \tau_{X \times X} }$.

Then:

$\forall x \in X : \map V x$ is a neighborhood of $x$ in $T$
Proof
Let $x \in X$.

By definition of diagonal:

$\tuple{x, x} \in \Delta_X$
From Set is Neighborhood of Subset iff Neighborhood of all Points of Subset:

$V$ is a neighborhood of $\tuple{x, x}$

By definition of the product topology:

$\BB = \set {U_1 \times U_2: U_1, U_2 \in \tau}$ is a basis for $\tau_{X \times X}$
From Characterization of Neighborhood by Basis:

$\exists U_1, U_2 \in \tau : \tuple{x, x} \in U_1 \times U_2$ and $U_1 \times U_2 \subseteq V$

By definition of Cartesian product:

$x \in U_1, x \in U_2$

We have:














\(\ds U_2\)

\(=\)







\(\ds \map {\paren{U_1 \times U_2} } x\)





Image of Element under Cartesian Product of Subsets














\(\ds \)

\(\subseteq\)







\(\ds \map V x\)





Corollary to Image under Subset of Relation is Subset of Image under Relation




Hence $\map V x$ is a neighborhood of $x$ in $T$ by definition.
The result follows.
$\blacksquare$





