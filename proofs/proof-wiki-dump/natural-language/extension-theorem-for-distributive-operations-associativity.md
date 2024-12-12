# 

Source: https://proofwiki.org/wiki/Extension_Theorem_for_Distributive_Operations/Associativity

Theorem
Let $\struct {R, *}$ be a commutative semigroup, all of whose elements are cancellable.
Let $\struct {T, *}$ be an inverse completion of $\struct {R, *}$.
Let $\circ$ be an operation on $R$ which distributes over $*$.

Let $\circ'$ be the unique operation on $T$ which distributes over $*$ in $T$ and induces on $R$ the operation $\circ$.

Then:

If $\circ$ is associative, then so is $\circ'$.


Proof
We have that $\circ'$ exists and is unique by Extension Theorem for Distributive Operations: Existence and Uniqueness.

Suppose $\circ$ is associative.
As $\circ'$ distributes over $*$, for all $n, p \in R$, the mappings:














\(\ds x \mapsto \paren {x \circ' n} \circ' p\)

\(,\)







\(\ds x \in T\)




















\(\ds x \mapsto x \circ' \paren {n \circ' p}\)

\(,\)







\(\ds x \in T\)









are endomorphisms of $\struct {T, *}$ that coincide on $R$ by the associativity of $\circ$ and hence are the same mapping.
Therefore:

$\forall x \in T, n, p \in R: \paren {x \circ' n} \circ' p = x \circ' \paren {n \circ' p}$

Similarly, for all $x \in T, p \in R$, the mappings:














\(\ds y \mapsto \paren {x \circ' y} \circ' p\)

\(,\)







\(\ds y \in T\)




















\(\ds y \mapsto x \circ' \paren {y \circ' p}\)

\(,\)







\(\ds y \in T\)









are endomorphisms of $\struct {T, *}$ that coincide on $R$ by what we have proved and hence are the same mapping.
Therefore:

$\forall x, y \in T, p \in R: \paren {x \circ' y} \circ' p = x \circ' \paren {y \circ' p}$

Finally, for all $x, y \in T$, the mappings:














\(\ds z \mapsto \paren {x \circ' y} \circ' z\)

\(,\)







\(\ds z \in T\)




















\(\ds z \mapsto x \circ' \paren {y \circ' z}\)

\(,\)







\(\ds z \in T\)









are endomorphisms of $\struct {T, *}$ that coincide on $R$ by what we have proved and hence are the same mapping.
Therefore $\circ'$ is associative.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.8: 1^\circ$




