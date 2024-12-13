# 

Source: https://proofwiki.org/wiki/Max_of_Subfamily_of_Operands_Less_or_Equal_to_Max

Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $x_1, x_2, \dotsc, x_n \in S$ for some $n \in \N_{>0}$.
Let $\set{k_1, k_2, \dotsc, k_m} \subseteq \set{1, 2, \dotsc, n}$

Then:

$\max \set {x_{k_1}, x_{k_2}, \dotsc, x_{k_m}} \preceq \max \set {x_1, x_2, \dotsc, x_n}$
where:

$\max$ denotes the max operation


Proof
From Max Operation Yields Supremum of Operands:

$\max \set {x_{k_1}, x_{k_2}, \dotsc, x_{k_m}} = \sup \set {x_{k_1}, x_{k_2}, \dotsc, x_{k_m} }$
and

$\max \set {x_1, x_2, \dotsc, x_n} = \sup \set {x_1, x_2, \dotsc, x_n}$

Since $\set {k_1, k_2, \dotsc, k_m} \subseteq \set {1, 2, \dotsc, n}$ then:

$\set {x_{k_1}, x_{k_2}, \dotsc, x_{k_m} } \subseteq \set {x_1, x_2, \dotsc, x_n}$

From Supremum of Subset:

$\sup \set {x_{k_1}, x_{k_2}, \dotsc, x_{k_m} } \preceq \sup \set {x_1, x_2, \dotsc, x_n}$
$\blacksquare$





