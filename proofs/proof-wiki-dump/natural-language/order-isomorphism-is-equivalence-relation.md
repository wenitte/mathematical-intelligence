# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_is_Equivalence_Relation



Theorem
Order isomorphism between ordered sets is an equivalence relation.
So any given family of ordered sets can be partitioned into disjoint classes of isomorphic sets.


Proof 1
Let $\struct {S_1, \preccurlyeq_1} \cong \struct {S_2, \preccurlyeq_2}$ denote that $\struct {S_1, \preccurlyeq_1}$ is isomorphic to $\struct {S_2, \preccurlyeq_2}$.

Checking in turn each of the criteria for equivalence:


Reflexivity
Let $\struct {S, \preccurlyeq}$ be an ordered set.
Then $\struct {S, \preccurlyeq}$ is isomorphic to itself.

Thus $\cong$ is seen to be reflexive.
$\Box$


Symmetric
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.
Let $\struct {S_1, \preccurlyeq_1}$ be isomorphic to $\struct {S_2, \preccurlyeq_2}$.

Then $\struct {S_2, \preccurlyeq_2}$ is isomorphic to $\struct {S_1, \preccurlyeq_1}$.

Thus $\cong$ is seen to be symmetric.
$\Box$


Transitive
Let $\struct {S_1, \preccurlyeq_1}$, $\struct {S_2, \preccurlyeq_2}$ and $\struct {S_3, \preccurlyeq_3}$ be ordered sets.
Let $\struct {S_1, \preccurlyeq_1}$ be isomorphic to $\struct {S_2, \preccurlyeq_2}$.
Let $\struct {S_2, \preccurlyeq_2}$ be isomorphic to $\struct {S_3, \preccurlyeq_3}$.

Then $\struct {S_1, \preccurlyeq_1}$ is isomorphic to $\struct {S_3, \preccurlyeq_3}$.

Thus $\cong$ is seen to be transitive.
$\Box$

$\cong$ has been shown to be reflexive, symmetric and transitive.
Hence the result.
$\blacksquare$


Proof 2
An ordered set is a relational structure where order isomorphism is a special case of relation isomorphism.
The result follows directly from Relation Isomorphism is Equivalence Relation.
$\blacksquare$


Also see
Order Isomorphic Sets are Equivalent




