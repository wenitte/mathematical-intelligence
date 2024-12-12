# 

Source: https://proofwiki.org/wiki/External_Direct_Product_of_Abelian_Groups_is_Abelian_Group



Theorem
Let $\struct {G, \circ_1}$ and $\struct {H, \circ_2}$ be groups.

Then the group direct product $\struct {G \times H, \circ}$ is abelian if and only if both $\struct {G, \circ_1}$ and $\struct {H, \circ_2}$ are abelian.


General Result
The external direct product of a finite sequence of abelian groups is itself an abelian group.


Proof
Let $\struct {G, \circ_1}$ and $\struct {H, \circ_2}$ be groups whose identities are $e_G$ and $e_H$ respectively.
From External Direct Product of Groups is Group, $\struct {G \times H, \circ}$ is indeed a group whose identity is $\tuple {e_G, e_H}$.

Suppose $\struct {G, \circ_1}$ and $\struct {H, \circ_2}$ are both abelian.
Then from External Direct Product Commutativity, $\struct {G \times H, \circ}$ is also abelian.

Now suppose that $\struct {G \times H, \circ}$ is abelian.
Then:














\(\ds \tuple {g_1 \circ_1 g_2, e_H}\)

\(=\)







\(\ds \tuple {g_1 \circ_1 g_2, e_H \circ_2 e_H}\)





Definition of $e_H$














\(\ds \)

\(=\)







\(\ds \tuple {g_1, e_H} \circ \tuple {g_2, e_H}\)





Definition of Group Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {g_2, e_H} \circ \tuple {g_1, e_H}\)





as $\struct {G \times H, \circ}$ is abelian














\(\ds \)

\(=\)







\(\ds \tuple {g_2 \circ_1 g_1, e_H \circ_2 e_H}\)





Definition of Group Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {g_2 \circ_1 g_1, e_H}\)





Definition of $e_H$




Thus:

$g_1 \circ_1 g_2 = g_2 \circ_1 g_1$
and $\struct {G, \circ_1}$ is seen to be abelian.

The same argument holds for $\struct {H, \circ_2}$.
$\blacksquare$


Also see
External Direct Product of Groups is Group


Sources
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$: Semigroups, Monoids and Groups
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $1$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $1$: Definitions and Examples: Exercise $6$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Proposition $13.1 \ (1)$




