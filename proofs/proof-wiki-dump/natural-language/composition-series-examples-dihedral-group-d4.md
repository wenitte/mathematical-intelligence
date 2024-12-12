# 

Source: https://proofwiki.org/wiki/Composition_Series/Examples/Dihedral_Group_D4

Example of Composition Series
There are $2$ composition series of the dihedral group $D_4$, up to isomorphism:

$\set e \lhd C_2 \lhd C_4 \lhd D_4$
$\set e \lhd C_2 \lhd K_4 \lhd D_4$
where:

$C_n$ denotes the cyclic group of order $n$.
$K_4$ denotes the Kline $4$-group.


Proof
Let $D_4$ be defined as by Group Presentation of Dihedral Group:

$D_4 = \gen {\alpha, \beta: \alpha^4 = \beta^2 = e, \beta \alpha \beta = \alpha^{−1} }$

From Subgroups of Dihedral Group $D_4$, $D_4$ has $2$ subgroups of index $2$:

$\set {e, \alpha, \alpha^2, \alpha^3}$
$\set {e, \alpha^2, \beta, \beta \alpha^2}$

We have that:

$\set {e, \alpha, \alpha^2, \alpha^3} = \gen \alpha = C_4$
and:

$\set {e, \alpha^2, \beta, \beta \alpha^2} = D_2 = K_4$
that is, the Kline $4$-group.

By Subgroup of Index 2 is Normal, both of these are normal.
Thus we have so far:

$\set e \lhd \cdots \lhd C_4 \lhd D_4$
$\set e \lhd \cdots \lhd K_4 \lhd D_4$

We have from Cyclic Group is Abelian and Subgroup of Abelian Group is Normal that all subgroups of $C_4$ are normal in $C_4$.
This leads directly to the composition series:

$\set e \lhd C_2 \lhd C_4 \lhd D_4$

Similarly, the Kline $4$-group is abelian, and it has subgroups of order $2$, that is, $C_2$.
This leads to the composition series:

$\set e \lhd C_2 \lhd K_4 \lhd D_4$
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Normal and Composition Series: $\S 74 \ \beta$




