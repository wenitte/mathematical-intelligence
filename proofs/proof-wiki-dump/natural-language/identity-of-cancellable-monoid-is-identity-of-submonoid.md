# 

Source: https://proofwiki.org/wiki/Identity_of_Cancellable_Monoid_is_Identity_of_Submonoid



Theorem
Let $\struct {S, \circ}$ be a monoid, all of whose elements are cancellable.
Let $\struct {T, \circ}$ be a submonoid of $\struct {S, \circ}$.

Then the identity of $\struct {T, \circ}$ is the same element as the identity of $\struct {S, \circ}$.


Proof
By Identity of Monoid is Unique:

there is only one identity element of $\struct {S, \circ}$
and:

there is only one identity element of $\struct {T, \circ}$.

Let $e_S$ be the identity of $\struct {S, \circ}$, and $e_T$ the identity of $\struct {T, \circ}$.
From Identity is only Idempotent Cancellable Element, $e_S$ is the only cancellable element of $\struct {S, \circ}$ which is idempotent.
But all elements of $\struct {S, \circ}$ are cancellable.
Thus $e_S$ is the only idempotent element of $\struct {S, \circ}$.

Again, all elements of $\struct {S, \circ}$ are cancellable.
Thus from Cancellable Element is Cancellable in Subset, all elements of $\struct {T, \circ}$ are cancellable.
Thus, $e_T$ is the only element of $\struct {T, \circ}$ which is idempotent.
Thus, as $e_T \in S$, we have $e_S \circ e_T = e_T = e_T \circ e_T$ and thus $e_S = e_T$.
$\blacksquare$


Also see
Identity of Submonoid is not necessarily Identity of Monoid


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets




