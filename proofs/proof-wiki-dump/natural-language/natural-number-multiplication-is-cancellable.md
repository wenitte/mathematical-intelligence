# 

Source: https://proofwiki.org/wiki/Natural_Number_Multiplication_is_Cancellable

Theorem
Let $\N$ be the natural numbers.
Let $\times$ be multiplication on $\N$.

Then:

$\forall x, y, z \in \N_{>0}: x \times z = y \times z \implies x = y$
$\forall x, y, z \in \N_{>0}: x \times y = x \times z \implies y = z$

That is, $\times$ is cancellable on $\N_{>0}$.


Proof
By Natural Number Multiplication is Commutative, proving one of the assertions suffices.

From Ordering on Natural Numbers is Compatible with Multiplication it follows that:

$\forall x, y, z \in \N: x < y \iff x \times z < y \times z$
Interchanging $x$ and $y$, we obtain:

$\forall x, y, z \in \N: y < x \iff y \times z < x \times z$
From Ordering on Natural Numbers is Trichotomy, the only remaining possibility is:

$\forall x, y, z \in \N: x = y \iff x \times z = y \times z$

Hence, $\times$ is cancellable on $\N_{>0}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.13$: Corollary
1982: Alan G. Hamilton: Numbers, Sets and Axioms ... (previous) ... (next): $\S 1$: Numbers: $1.1$ Natural Numbers and Integers: Examples $1.1 \ \text {(h)}$




