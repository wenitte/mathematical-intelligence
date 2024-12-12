# 

Source: https://proofwiki.org/wiki/Basis_for_Topology_on_Cartesian_Product



Theorem
Let $T_1 = \struct{A_1, \tau_1}$ and $T_2 = \struct{A_2, \tau_2}$ be topological spaces.
Let $A_1 \times A_2$ be the Cartesian product of $A_1$ and $A_2$.
Let $\PP = \set {U_1 \times U_2 : U_1 \in \tau_1, U_2 \in \tau_2}$

Then $\PP$ is a synthetic basis on $A_1 \times A_2$.


Proof
We need to show that conditions $(\text B 1)$ and $(\text B 2)$ in the definition for basis hold for $\PP$.


$(\text B 1)$
Because $A_1 \in \tau_1$ and $A_2 \in \tau_2$, $A_1 \times A_2 \in \PP$.
$\Box$


$(\text B 2)$
Let $U_1, V_1 \in \tau_1$ and $U_2, V_2 \in \tau_2$.
From Cartesian Product of Intersections:

$\paren {U_1 \times U_2} \cap \paren {V_1 \times V_2} = \paren {U_1 \cap V_1} \times \paren {U_2 \cap V_2}$
Because $\paren {U_1 \cap V_1} \in \tau_1$ and $\paren {U_2 \cap V_2} \in \tau_2$:

$\paren {U_1 \cap V_1} \times \paren {U_2 \cap V_2} \in \PP$
So $\paren {U_1 \times U_2} \cap \paren {V_1 \times V_2}$ is the union of (one) set in $\PP$.
$\Box$

Hence the result.
$\blacksquare$


Also see
Natural Basis of Product Topology of Finite Product where it is shown that the basis $\PP$ is the natural basis of the product topology on a finite Cartesian product


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.5$: Products: Definition $3.5.1$




