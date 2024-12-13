# 

Source: https://proofwiki.org/wiki/Mutual_Order_Embedding_does_not_imply_Order_Isomorphism

Theorem
Let $\struct {S_1, \preceq_1}$ and $\struct {S_2, \preceq_2}$ be ordered sets.
Let it be possible for:

$\struct {S_1, \preceq_1}$ to be embedded in $\struct {S_2, \preceq_2}$
$\struct {S_2, \preceq_2}$ to be embedded in $\struct {S_1, \preceq_1}$.

Then it is not necessarily the case that $\struct {S_1, \preceq_1}$ and $\struct {S_2, \preceq_2}$ are isomorphic.


Proof
Consider the ordered structures:

$\struct {S_1, \preceq_1} := \struct {\R, \le}$
$\struct {S_2, \preceq_2} := \struct {\hointl {-\dfrac \pi 2} {\dfrac \pi 2}, \le}$
From Real Arctangent Function is Order Embedding into Reals, $\struct {S_1, \preceq_1}$ can be embedded into $\struct {S_2, \preceq_2}$.
From Inclusion Mapping is Order Embedding,  $\struct {S_1, \preceq_2}$ can be embedded into $\struct {S_2, \preceq_1}$.

Aiming for a contradiction, suppose  $\struct {\R, \le}$ and $\struct {\hointl {-\dfrac \pi 2} {\dfrac \pi 2}, \le}$ are isomorphic.
From Number of Maximal Elements is Order Property, $\struct {\R, \le}$ and $\struct {\hointl {-\dfrac \pi 2} {\dfrac \pi 2}, \le}$ have the same number of maximal elements.
But we note that:

$\struct {\R, \le}$ has no maximal elements
$\struct {\hointl {-\dfrac \pi 2} {\dfrac \pi 2}, \le}$ has one maximal element, that is $\dfrac \pi 2$.
It follows by Proof by Contradiction that $\struct {S_1, \preceq_1}$ and $\struct {S_2, \preceq_2}$ are not isomorphic.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $22$




