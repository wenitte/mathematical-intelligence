# 

Source: https://proofwiki.org/wiki/Composition_Series/Examples/Symmetric_Group_Sn_for_n_gt_2_where_n_ne_4

Example of Composition Series
Let $n \in \Z$ such that $n > 2$ but $n \ne 4$.
There is $1$ composition series of the symmetric group on $n$ letters $S_n$, up to isomorphism:

$\set e \lhd A_n \lhd S_n$
where $A_n$ is the alternating group on $n$ letters.


Proof
First we note that from Alternating Group is Normal Subgroup of Symmetric Group:

$A_n \lhd S_n$
By Quotient of Symmetric Group by Alternating Group is Parity Group:

$\dfrac {S_n} {A_n}$ is a group of order $2$.
It follows that $A_n$ is the maximal normal subgroup of $S_n$.

$S_1$ is the trivial group whose composition series is simply:

$\set e = S_1$

From Composition Series of Symmetric Group $S_2$:

$\set e = A_2 \lhd S_2$
where $A_2$ is the (degenerate) alternating group on $2$ letters.

From Alternating Group is Simple except on 4 Letters, $A_n$ is a simple group for all $n \in \Z_{>0}$ except $n = 4$.
Indeed, we note that from Composition Series of Symmetric Group $S_4$:

$\set e \lhd K_4 \lhd A_4 \lhd S_4$
where $K_4$ is the Klein four-group.

By definition of simple group, $A_n$ for $n \ne 4$ has only itself and the trivial group as normal subgroups.
Hence $\set e$ is the maximal normal subgroup of $A_n$ for $n \ne 4$.
Hence the result:

$\set e \lhd A_n \lhd S_n$
$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): composition series




