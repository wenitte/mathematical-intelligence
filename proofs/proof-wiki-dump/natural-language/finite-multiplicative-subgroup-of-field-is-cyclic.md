# 

Source: https://proofwiki.org/wiki/Finite_Multiplicative_Subgroup_of_Field_is_Cyclic

Theorem
Let $\struct {F, +, \times}$ be a field.
Let $\struct {F^*, \times}$ denote the multiplicative group of $F$.
Let $C$ be a finite subgroup of $\struct {F^*, \times}$.

Then $C$ is cyclic.


Proof
We have a fortiori that $\struct {F^*, \times}$ is an abelian group.
From Subgroup of Abelian Group is Abelian, $C$ is a finite abelian group.
From Fundamental Theorem of Finite Abelian Groups, $C$ is the internal group direct product of cyclic groups $H_1, H_2, \ldots, H_r$ whose orders are given as:

$\order {H_i} = {p_i}^{e_i}$
for some prime numbers $p_1, p_2, \ldots, p_r$ and positive integers $e_1, e_2, \ldots, e_r$.
From Internal and External Group Direct Products are Isomorphic:

$C \cong H_1 \times H_2 \times \cdots \times H_r$
where $\cong$ denotes (group) isomorphism.
As Powers of Coprime Numbers are Coprime, the orders of $H_1, \ldots, H_r$ are coprime.
By Group Direct Product of Cyclic Groups, $H_1 \times \ldots \times H_r$ is cyclic.
Hence $C$ is cyclic.
$\blacksquare$





