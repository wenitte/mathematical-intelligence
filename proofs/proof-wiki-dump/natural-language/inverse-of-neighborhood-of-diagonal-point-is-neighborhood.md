# 

Source: https://proofwiki.org/wiki/Inverse_of_Neighborhood_of_Diagonal_Point_is_Neighborhood


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological Space.

Let $\tau_{X \times X}$ denote the product topology on the cartesian product $X \times X$.

Let $x \in X$.
Let $R$ be a neighborhood of $\tuple{x,x}$ in the product space $\struct{X \times X, \tau_{X \times X}}$.

Let $R^{-1}$ denote the inverse relation of $R$ where $R$ is viewed as a relation on $X \times X$. 

Then:

$R^{-1}$ is a neighborhood of $\tuple{x,x}$ in $\struct{X \times X, \tau_{X \times X}}$.
Proof
By definition of neighborhood:

$\tuple{x, x} \in R$

By definition of product topology:

$\BB = \set {V_1 \times V_2: V_1, V_2 \in \tau}$ is a basis for $\tau_{X \times X}$

From Characterization of Neighborhood by Basis:

$\exists V_1, V_2 \in \tau : \tuple{x, x} \in V_1 \times V_2 : V_1 \times V_2 \subseteq R$

By definition of symmetric relation:

$\tuple{x, x} \in V_2 \times V_1 : V_2 \times V_1 \subseteq R^{-1}$

By definition of product topology:

$V_2 \times V_1 \in \tau_{X \times X}$

Hence $R^{-1}$ is a neighborhood $\tuple{x, x}$ by definition.
$\blacksquare$





