# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Order_Isomorphism



Theorem
The following definitions of the concept of Order Isomorphism are equivalent:
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be ordered sets.

Definition 1
Let $\phi: S \to T$ be a bijection such that:

$\phi: S \to T$ is order-preserving
$\phi^{-1}: T \to S$ is order-preserving.
Then $\phi$ is an order isomorphism.

Definition 2
Let $\phi: S \to T$ be a surjective order embedding.
Then $\phi$ is an order isomorphism.

Definition 3
Let $\phi: S \to T$ be a bijection such that:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
Then $\phi$ is an order isomorphism.


Proof
Definition 1 implies Definition 2
Let $\phi: S \to T$ be an order isomorphism by Definition 1.
Then $\phi$ is bijective, and thus trivially surjective.
Let $x, y \in S$.
Then by Definition 1:

$x \preceq_1 y \implies \map \phi x \preceq_2 \map \phi y$
Suppose that $\map \phi x \preceq_2 \map \phi y$.
Then by Definition 1:

$\map {\phi^{-1} } {\map \phi x} \preceq_1 \map {\phi^{-1} } {\map \phi y}$
By the definition of inverse:

$x \preceq_1 y$
Thus by Rule of Implication:

$\map \phi x \preceq_2 \map \phi y \implies x \preceq_1 y$.
So:

$x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
As this holds for all $x, y \in S$ and $\phi$ is surjective, $\phi$ is an order isomorphism by Definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\phi: S \to T$ be an order isomorphism by Definition 2.
Then $\phi$ is a surjective order embedding.
By Order Embedding is Injection, $\phi$ is injective.
As it is also surjective, $\phi$ is bijective, and thus satisfies the first condition of Definition 1.
Since $\phi$ is an order embedding:

$\forall x, y \in S: \paren {x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y}$
Thus

$\forall x, y \in S: \paren {x \preceq_1 y \implies \map \phi x \preceq_2 \map \phi y}$
This satisfies the second condition of Definition 1.
Furthermore:

$\forall x, y \in S: \paren {\map \phi x \preceq_2 \map \phi y \implies x \preceq_1 y}$
Let $p, q \in T$ and let $p \preceq_2 q$.
Then since $\phi$ is bijective, it has an inverse $\phi^{-1}$ such that

$\map \phi {\map {\phi^{-1} } p} = p$
$\map \phi {\map {\phi^{-1} } q} = q$
Thus:

$\map \phi {\map {\phi^{-1} } p} \preceq_2 \map \phi {\map {\phi^{-1} } q}$
Therefore:

$\map {\phi^{-1} } p \preceq_1 \map {\phi^{-1} } q$
Thus we see that:

$\forall p, q \in T: \paren {p \preceq_2 q \implies \map {\phi^{-1} } p \preceq_2 \map {\phi^{-1} } q}$
Thus we have satisfied the final condition of Definition 1.
$\blacksquare$


Definition 1 iff Definition 3
Let $\phi: S \to T$ be an order isomorphism by Definition 1.
Then by Definition 1:














\(\ds \map \phi x\)

\(\preceq_2\)







\(\ds \map \phi y\)














\(\ds \leadsto \ \ \)





\(\ds \map {\phi^{-1} } {\map \phi x}\)

\(\preceq_1\)







\(\ds \map {\phi^{-1} } {\map \phi y}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\preceq_1\)







\(\ds y\)










That is:

$\forall x, y \in S: \map \phi x \preceq_2 \map \phi y \implies x \preceq_1 y$
which together with:

$\forall x, y \in S: x \preceq_1 y \implies \map \phi x \preceq_2 \map \phi y$
gives:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
Hence $\phi$ is an order isomorphism by Definition 3.

The above argument reverses.
$\blacksquare$





