# 

Source: https://proofwiki.org/wiki/Integer_Multiples_under_Multiplication_form_Semigroup



Theorem
Let $n \Z$ be the set of integer multiples of $n$.
Then $\struct {n \Z, \times}$ is a semigroup.
If $\size n > 1$ then $\struct {n \Z, \times}$ has no identity.


Proof
Closure
Let $p, q \in n \Z$.
Then for some $p', q' \in \Z$:

$p = n p'$
$q = n q'$
Hence:

$p q = \paren {n p'} \paren {n q'}$
By the commutativity and associativity of integer multiplication:

$p q = n \paren {n \paren {p' q'} }$
Hence $p q \in n \Z$ and $n \Z$ is closed under $\times$.
$\Box$


Assocativity
By definition $n \Z \subseteq \Z$.
Hence $\times$ is associative on $n \Z$ as a direct results of Restriction of Associative Operation is Associative.
$\Box$


Identity Element
If $\size n = 1$ then $\paren {n \Z, \times}$ is a monoid from Integers under Multiplication form Countably Infinite Commutative Monoid.
If $n \ne 1$ then $\left({n \Z, \times}\right)$ is a semigroup but not a monoid as it is without an identity as $1 \notin n \Z$.
$\blacksquare$


Sources
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$: Semigroups, Monoids and Groups
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$: Semigroups, Monoids and Groups: Exercise $1$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $2$: Examples of Groups and Homomorphisms: $13$




