# 

Source: https://proofwiki.org/wiki/One-Step_Vector_Subspace_Test

Theorem
Let $V$ be a vector space over a division ring $K$ whose unity is $1_K$.
Let $U \subseteq V$ be a non-empty subset of $V$ such that:

$\forall u, v \in U: \forall \lambda \in K: u + \lambda v \in U$

Then $U$ is a subspace of $V$.


Proof
We need to verify the vector space axioms for $U$.

We start with observing that the properties for a unitary module:

Vector Space Axiom $(\text V 5)$: Distributivity over Scalar Addition
Vector Space Axiom $(\text V 6)$: Distributivity over Vector Addition
Vector Space Axiom $(\text V 7)$: Associativity with Scalar Multiplication
Vector Space Axiom $(\text V 8)$: Identity for Scalar Multiplication
are true for all elements of $V$.
Hence, since $U \subseteq V$, they hold for all elements of $U$ as well.

The same holds for the axioms:

Vector Space Axiom $(\text V 1)$: Commutativity
Vector Space Axiom $(\text V 2)$: Associativity

From Vector Inverse is Negative Vector, we have for all $u \in U$:

$u + \paren {-1_K} u = 0_V$
which by hypothesis is an element of $U$.
Since $U$ is non-empty, this means $0_V \in U$.
Hence it is seen that axioms:

Vector Space Axiom $(\text V 3)$: Identity
Vector Space Axiom $(\text V 4)$: Inverses
are satisfied.

The last axiom that remains is Vector Space Axiom $(\text V 0)$: Closure.
From Vector Space Axiom $(\text V 8)$: Identity for Scalar Multiplication and by hypothesis:

$\forall u, v \in U: u + v = u + 1_K v \in U$

Having verified all the vector space axioms, we conclude that $U$ is a subspace of $V$.
$\blacksquare$


Also see
Vector Subspace of Real Vector Space
Two-Step Vector Subspace Test




