# 

Source: https://proofwiki.org/wiki/Inverse_of_Open_Set_in_Product_Space_is_Open_in_Inverse_Product_Space


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{S_1, \tau_1}$ and $\struct{S_2, \tau_2}$ be topological spaces.

Let $\tau_{S_1 \times S_2}$ be the product topology on the Cartesian product $S_1 \times S_2$.
Let $\tau_{S_2 \times S_1}$ be the product topology on the Cartesian product $S_2 \times S_1$.

Let $V \subseteq S_1 \times S_2$.
Let $V^{-1} \subseteq S_2 \times S_1$ denote the inverse of $V$ viewed as a relation on $S_1 \times S_2$.

Then:

$V$ is open in $\struct{S_1 \times S_2, \tau_{S_1 \times S_2}}$ if and only if $V^{-1}$ is open in $\struct{S_2 \times S_1, \tau_{S_2 \times S_1}}$
Proof
Necessary Condition
Let $V$ be open in $\struct{S_1 \times S_2, \tau_{S_1 \times S_2}}$.

Let $\tuple{s_2, s_1} \in V^{-1}$

By definition of inverse:

$\tuple{s_1, s_2} \in V$

By definition of product topology:

$\BB_{12} = \set{U \times W : U \in \tau_1, W \in \tau_2}$ is a basis for $\tau_{S_1 \times S_2}$

By definition of basis:

$\exists U \in \tau_1, W \in \tau_2 : \tuple{s_1, s_2} \in U \times W \subseteq V$

By definition of inverse:

$\tuple{s_2, s_1} \in W \times U \subseteq V^{-1}$

By definition of product topology:

$\BB_{21} = \set{W \times U : W \in \tau_2, U \in \tau_1}$ is a basis for $\tau_{S_2 \times S_1}$

Since $\tuple{s_2, s_1}$ was arbitrary, we have:

$\forall \tuple{s_2, s_1} \in V^{-1} : \exists W \times U \in \BB_{21} : \tuple{s_2, s_1} \in W \times U \subseteq V^{-1}$

From Characterization of Set Equals Union of Sets:

$V^{-1} = \bigcup \set{W \times U \in \BB_{21} : W \times U \subseteq V^{-1}}$

By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$V^{-1}$ is open in $\struct{S_2 \times S_1, \tau_{S_2 \times S_1}}$
$\Box$

Sufficient Condition
Let $V^{-1}$ be open in $\struct{S_2 \times S_1, \tau_{S_2 \times S_1}}$.

From Necessary Condition above:

$\paren{V^{-1}}^{-1}$ is open in $\struct{S_1 \times S_2, \tau_{S_1 \times S_2}}$

From Inverse of Inverse Relation:

$\paren{V^{-1}}^{-1} = V$

Hence:

$V$ is open in $\struct{S_1 \times S_2, \tau_{S_1 \times S_2}}$
$\blacksquare$





