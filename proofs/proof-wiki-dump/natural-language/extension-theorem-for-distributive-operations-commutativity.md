# 

Source: https://proofwiki.org/wiki/Extension_Theorem_for_Distributive_Operations/Commutativity

Theorem
Let $\struct {R, *}$ be a commutative semigroup, all of whose elements are cancellable.
Let $\struct {T, *}$ be an inverse completion of $\struct {R, *}$.
Let $\circ$ be an operation on $R$ which distributes over $*$.

Let $\circ'$ be the unique operation on $T$ which distributes over $*$ in $T$ and induces on $R$ the operation $\circ$.

Then:

If $\circ$ is commutative, then so is $\circ'$


Proof
We have that $\circ'$ exists and is unique by Extension Theorem for Distributive Operations: Existence and Uniqueness.

Suppose $\circ$ is commutative.
As $\circ'$ distributes over $*$, for all $n \in R$, the mappings:














\(\ds x \mapsto x \circ' n\)

\(,\)







\(\ds x \in T\)




















\(\ds x \mapsto n \circ' x\)

\(,\)







\(\ds x \in T\)









are endomorphisms of $\struct {T, *}$ that coincide on $R$ by the commutativity of $\circ$ and hence are the same mapping.
Therefore $\forall x \in T, n \in R: x \circ' n = n \circ' x$.

Finally, for all $y \in T$, the mappings:














\(\ds z \mapsto z \circ' y\)

\(,\)







\(\ds z \in T\)




















\(\ds z \mapsto y \circ' z\)

\(,\)







\(\ds z \in T\)









are endomorphisms of $\struct {T, *}$ that coincide on $R$ by what we have proved and hence are the same mapping.
Therefore $\circ'$ is commutative.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.8: 2^\circ$




