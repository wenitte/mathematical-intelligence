# 

Source: https://proofwiki.org/wiki/Non-Zero_Natural_Numbers_under_Addition_do_not_form_Monoid

Theorem
Let $\N_{>0}$ be the set of natural numbers without zero, i.e. $\N_{>0} = \N \setminus \set 0$.
The structure $\struct {\N_{>0}, +}$ does not form a monoid.


Proof
From Natural Numbers under Addition form Commutative Monoid, $\struct {\N, +}$ forms a commutative monoid.
From Natural Numbers Bounded Below under Addition form Commutative Semigroup, $\struct {\N_{>0}, +}$ forms a commutative semigroup.
From Identity Element of Natural Number Addition is Zero, $0$ is the identity of $\struct {\N, +}$ 
From Natural Number Addition is Cancellable, all elements of $\struct {\N, +}$ are cancellable.

Aiming for a contradiction, suppose $\struct {\N_{>0}, +}$ is a monoid.
Then by definition $\struct {\N_{>0}, +}$ has an identity $e$.
From Identity of Cancellable Monoid is Identity of Submonoid, $e$ the same as the identity of $\struct {\N, +}$.
That is:

$e = 0$
But $0 \notin \N_{>0}$.
Thus it follows that $\struct {\N_{>0}, +}$ has no identity.
Hence by Proof by Contradiction it follows that $\struct {\N_{>0}, +}$ is not a monoid.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.1$: Monoids




