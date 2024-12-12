# 

Source: https://proofwiki.org/wiki/Composition_Series/Examples/Quaternion_Group_Q

Example of Composition Series
There is $1$ composition series of the quaternion group $Q$, up to isomorphism:

$\set e \lhd C_2 \lhd C_4 \lhd Q$
where:

$C_n$ denotes the cyclic group of order $n$.


Proof
Let $Q$ be defined as by Group Presentation of Quaternion Group:

$Q = \gen {\alpha, \beta: \alpha^4 = e, \beta^2 = \alpha^2, \alpha \beta \alpha = \beta}$

From Subgroups of Quaternion Group, $Q$ has $3$ subgroups of index $2$:














\(\ds \)

\(\)







\(\ds \set {e, \alpha, \alpha^2, \alpha^3}\)




















\(\ds \)

\(\)







\(\ds \set {e, \beta, \alpha^2, \alpha^2 \beta}\)




















\(\ds \)

\(\)







\(\ds \set {e, \alpha \beta, \alpha^2, \alpha^3 \beta}\)









Moreover from Subgroups of Quaternion Group, we see that all three of these subgroups are cyclic.

By Subgroup of Index 2 is Normal, these are normal.
Thus we have so far:

$\set e \lhd \cdots \lhd C_4 \lhd Q$

We have from Cyclic Group is Abelian and Subgroup of Abelian Group is Normal that all subgroups of $C_4$ are normal in $C_4$.
This leads directly to the composition series:

$\set e \lhd C_2 \lhd C_4 \lhd Q$
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Normal and Composition Series: $\S 74 \ \beta$




