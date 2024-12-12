# 

Source: https://proofwiki.org/wiki/Commutativity_of_Powers_in_Semigroup

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $a, b \in S$ both be cancellable elements of $S$.

Then:

$\forall m, n \in \N_{>0}: a \circ b = b \circ a \implies a^m \circ b^n = b^n \circ a^m$
but it is not necessarily the case that:

$\forall m, n \in \N_{>0}: a^m \circ b^n = b^n \circ a^m \implies a \circ b = b \circ a$


Proof
Let $a, b \in S: a \circ b = b \circ a$.
Then from Powers of Commuting Elements of Semigroup Commute:

$\forall m, n \in \N_{>0}: a^m \circ b^n = b^n \circ a^m$
$\Box$

However, consider the dihedral group $D_3$ $= \gen {a, b: a^3 = b^2 = e, b a b = a^{−1} }$.
A group is a semigroup.
Moreover, the Cancellation Laws hold in a group.
Hence both $a$ and $b$ are cancellable.
We have $a^3 \circ b^2 = b^2 \circ a^3 = e \circ e = e$.
However $a \circ b \ne b \circ a$.
Hence the result by Proof by Counterexample.
$\blacksquare$





