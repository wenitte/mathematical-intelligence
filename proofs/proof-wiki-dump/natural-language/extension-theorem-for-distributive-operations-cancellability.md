# 

Source: https://proofwiki.org/wiki/Extension_Theorem_for_Distributive_Operations/Cancellability

Theorem
Let $\struct {R, *}$ be a commutative semigroup, all of whose elements are cancellable.
Let $\struct {T, *}$ be an inverse completion of $\struct {R, *}$.
Let $\circ$ be an operation on $R$ which distributes over $*$.

Then:

Every element of $R$ cancellable for $\circ$ is also cancellable for $\circ'$.


Proof
Let $a$ be an element of $R$ cancellable for $\circ$.
Then the restrictions to $R$ of the endomorphisms:

$\lambda_a: x \mapsto a \circ' x$
$\rho_a: x \mapsto x \circ' a$
of $\struct {T, *}$ are monomorphisms.
But then $\lambda_a$ and $\rho_a$ are monomorphisms by the Extension Theorem for Homomorphisms.
Hence $a$ is cancellable for $\circ'$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.8: 4^\circ$




