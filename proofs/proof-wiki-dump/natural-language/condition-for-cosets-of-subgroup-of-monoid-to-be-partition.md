# 

Source: https://proofwiki.org/wiki/Condition_for_Cosets_of_Subgroup_of_Monoid_to_be_Partition



Theorem
Let $\struct {S, \circ}$ be a monoid whose identity element is $e$.
Let $\struct {H, \circ}$ be a subgroup of $\struct {S, \circ}$.

Let the identity element of $\struct {H, \circ}$ be $e$.
Then:

the set of left cosets of $\struct {H, \circ}$ in $\struct {S, \circ}$ form a partition of $S$
and:

the set of right cosets of $\struct {H, \circ}$ in $\struct {S, \circ}$ form a partition of $S$.


Proof
Because of the fact that it is not necessarily the case that $x \in S$ has an inverse, we cannot invoke the result Left Congruence Modulo Subgroup is Equivalence Relation.
Instead we prove partitionhood directly.

First we recall the definition of left coset and right coset:

The left coset of $H$ by $x$, is:
$x \circ H = \set {y \in S: \exists h \in H: y = x \circ h}$
The right coset of $H$ by $x$, is:
$H \circ x = \set {y \in S: \exists h \in H: y = h \circ x}$

Next we recall the definition of partition:

A partition of $S$ is a set of non-empty subsets $\Bbb S$ of $S$ such that each element of $S$ lies in exactly one element of $\Bbb S$.

Testing each of the criteria for a partition as follows:


No coset is empty, and each element in at least one coset









\(\ds \forall k \in S: \, \)



\(\ds k \circ e\)

\(=\)







\(\ds k\)





Monoid Axiom $\text S 2$: Identity








\(\ds \leadsto \ \ \)

\(\ds \forall k \circ H \subseteq S: \, \)



\(\ds k\)

\(\in\)







\(\ds k \circ H\)





Definition of Left Coset: as $e \in H$



Thus:

no left coset of $\struct {H, \circ}$ in $\struct {S, \circ}$ is empty.
every element of $S$ is in at least one left coset of $\struct {H, \circ}$.

Also:










\(\ds \forall k \in S: \, \)



\(\ds e \circ k\)

\(=\)







\(\ds k\)





Monoid Axiom $\text S 2$: Identity








\(\ds \leadsto \ \ \)

\(\ds \forall H \circ k \subseteq S: \, \)



\(\ds k\)

\(\in\)







\(\ds H \circ k\)





Definition of Right Coset: as $e \in H$




Thus:

no right coset of $\struct {H, \circ}$ in $\struct {S, \circ}$ is empty.
every element of $S$ is in at least one right coset of $\struct {H, \circ}$.
$\Box$


Each element in no more than one coset
Let $r, s \in S$ such that:

$r \in s \circ H$
for some $s \in S$.
It will be shown that $r \circ H$ and $s \circ H$ are the same left coset.
We have that:

$r \in r \circ H$
from above.
By definition of left coset:

$r \in \set {y \in S: \exists h \in H: y = s \circ h}$
That is:

$r = s \circ h$
and so:

$r \circ h^{-1} = s \circ \paren {h \circ h^{-1} }$
leading to:

$r \circ h^{-1} = s$
That is:

$s \in \set {y \in S: \exists h^{-1} \in H: y = r \circ h^{-1} }$
and so:

$s \in r \circ H$
That is:

$r \circ H = s \circ H$

Similarly, if $r \in H \circ s$, then $H \circ r$ and $H \circ s$ are the same right coset.

Thus:

each element of $S$ is in no more than one left coset of $\struct {H, \circ}$ in $\struct {S, \circ}$
and

each element of $S$ is in no more than one right coset of $\struct {H, \circ}$ in $\struct {S, \circ}$.
$\Box$

Thus:

the set of left cosets of $\struct {H, \circ}$ in $\struct {S, \circ}$ form a partition of $S$
and:

the set of right cosets of $\struct {H, \circ}$ in $\struct {S, \circ}$ form a partition of $S$
as we were to prove.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.15$




