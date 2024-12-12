# 

Source: https://proofwiki.org/wiki/Extension_Theorem_for_Distributive_Operations/Identity

Theorem
Let $\struct {R, *}$ be a commutative semigroup, all of whose elements are cancellable.
Let $\struct {T, *}$ be an inverse completion of $\struct {R, *}$.
Let $\circ$ be an operation on $R$ which distributes over $*$.

Let $\circ'$ be the unique operation on $T$ which distributes over $*$ in $T$ and induces on $R$ the operation $\circ$.

Then:

If $e$ is an identity for $\circ$, then $e$ is also an identity for $\circ'$.


Proof
We have that $\circ'$ exists and is unique by Extension Theorem for Distributive Operations: Existence and Uniqueness.

Let $e$ be the identity element of $\struct {R, \circ}$.
Then the restrictions to $R$ of the endomorphisms $\lambda_e: x \mapsto e \circ' x$ and $\rho_e: x \mapsto x \circ' e$ of $\struct {T, *}$ are monomorphisms.
But then $\lambda_e$ and $\rho_e$ are monomorphisms by the Extension Theorem for Homomorphisms.
Hence it follows that $e$ is the identity element of $T$.


This article, or a section of it, needs explaining.In particular: How does the above explain why $e$ is the identity element of $T$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.8: 3^\circ$




