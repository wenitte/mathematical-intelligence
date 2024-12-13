# 

Source: https://proofwiki.org/wiki/Intersection_of_Neighborhood_of_Diagonal_with_Inverse_is_Neighborhood


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological space.

Let $\tau_{X \times X}$ denote the product topology on the cartesian product $X \times X$.

Let $R$ be a neighborhood of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct{X \times X, \tau_{X \times X}}$.

Let $R^{-1}$ denote the inverse relation of $R$ where $R$ is viewed as a relation on $X \times X$. 

Then:

$R \cap R^{-1}$ is a neighborhood of $\Delta_X$ in $\struct{X \times X, \tau_{X \times X}}$.
Proof
From Set is Neighborhood of Subset iff Neighborhood of all Points of Subset:

$\forall \tuple{x, x} \in \Delta_X : R$ is a neighborhood of $\tuple{x, x}$

From Inverse of Neighborhood of Diagonal Point is Neighborhood:

$\forall \tuple{x, x} \in \Delta_X : R^{-1}$ is a neighborhood of $\tuple{x, x}$

From Intersection of Neighborhoods in Topological Space is Neighborhood

$\forall \tuple{x, x} \in \Delta_X : R \cap R^{-1}$ is a neighborhood of $\tuple{x, x}$

From Set is Neighborhood of Subset iff Neighborhood of all Points of Subset:

$R \cap R^{-1}$ is a neighborhood of $\Delta_X$ in $\struct{X \times X, \tau_{X \times X}}$
$\blacksquare$





