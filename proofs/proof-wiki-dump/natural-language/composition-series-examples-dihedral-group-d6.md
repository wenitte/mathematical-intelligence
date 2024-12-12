# 

Source: https://proofwiki.org/wiki/Composition_Series/Examples/Dihedral_Group_D6

Example of Composition Series
There are $3$ composition series of the dihedral group $D_6$, up to isomorphism:

$\set e \lhd C_3 \lhd C_6 \lhd D_6$
$\set e \lhd C_2 \lhd C_6 \lhd D_6$
$\set e \lhd C_3 \lhd D_3 \lhd D_6$
where $C_n$ denotes the cyclic group of order $n$.


Proof
Let $D_6$ be defined as by Group Presentation of Dihedral Group:

$D_6 = \gen {\alpha, \beta: \alpha^6 = \beta^2 = e, \beta \alpha \beta = \alpha^{−1} }$

From Subgroups of Symmetry Group of Regular Hexagon, $D_6$ has $3$ subgroups of index $2$:

$\set {e, \alpha, \alpha^2, \alpha^3, \alpha^4, \alpha^5}$
$\set {e, \alpha^2, \alpha^4, \beta, \alpha^2 \beta, \alpha^4 \beta}$
$\set {e, \alpha^2, \alpha^4, \alpha \beta, \alpha^3 \beta, \alpha^5 \beta}$

We have that:

$\set {e, \alpha, \alpha^2, \alpha^3, \alpha^4, \alpha^5} = \gen \alpha = C_6$
and:

$\set {e, \alpha^2, \alpha^4, \beta, \alpha^2 \beta, \alpha^4 \beta} = \gen {\alpha^2, \beta: \paren {\alpha^2}^3 = \beta^2 = e, \beta \alpha^2 \beta = \paren {\alpha^2}^{−1} } = D_3$
and:

$\set {e, \alpha^2, \alpha^4, \alpha \beta, \alpha^3 \beta, \alpha^5 \beta} = \gen {\alpha^2, \alpha \beta: \paren {\alpha^2}^3 = \paren {\alpha \beta}^2 = e, \paren {\alpha \beta} \alpha^2 \paren {\alpha \beta} = \paren {\alpha^2}^{−1} } = D_3$

By Subgroup of Index 2 is Normal, all these are normal.
Thus we have so far:

$\set e \lhd \cdots \lhd C_6 \lhd D_6$
$\set e \lhd \cdots \lhd D_3 \lhd D_6$

We have from Cyclic Group is Abelian and Subgroup of Abelian Group is Normal that all subgroups of $C_6$ are normal in $C_6$.
This leads directly to the composition series:

$\set e \lhd C_3 \lhd C_6 \lhd D_6$
$\set e \lhd C_2 \lhd C_6 \lhd D_6$

We have that $D_3$ is isomorphic to $S_3$, the symmetric group on $3$ letters.
From Normal Subgroups of $S_3$, the only normal subgroup of $D_3$ is $C_3$.
This leads to the composition series:

$\set e \lhd C_3 \lhd D_3 \lhd D_6$

As there are no more normal subgroups of $D_3$, there are no further composition series of $D_6$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Normal and Composition Series: $\S 74 \ \alpha$




