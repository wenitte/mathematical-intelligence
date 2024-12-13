# 

Source: https://proofwiki.org/wiki/Hilbert%27s_Basis_Theorem_for_Finitely_Generated_Algebras

Theorem
Let $A$ be a Noetherian ring.
Let $B$ be a finitely generated algebra over $A$.

Then $B$ is a Noetherian ring.


Proof
Let $\set {b_1, \ldots , b_n} \subseteq B$ be a generator of $B$.

Let $A \sqbrk {X_1, \ldots, X_n}$ be the ring of polynomial forms over $A$ in $\sequence {X_1, \ldots ,X_n}$.
By Hilbert's basis theorem for polynomial rings, $A \sqbrk {X_1, \ldots, X_n}$ is Noetherian.

Let $\phi : A \sqbrk {X_1, \ldots, X_n} \to B$ be the homomorphism defined by:

$\map f {X_1, \ldots , X_n} \mapsto \map f {b_1, \ldots , b_n}$
Then, by Definition of Generator of Algebra:

$\Img \phi = B$
Thus by First Ring Isomorphism Theorem:

$B \cong A \sqbrk {X_1, \ldots, X_n} / \map \ker \phi$

Now the right hand side is Noetherian, since Quotient Ring of Noetherian Ring is Noetherian.
Thus $B$ is Noetherian.
$\blacksquare$


Source of Name
This entry was named for David Hilbert.





