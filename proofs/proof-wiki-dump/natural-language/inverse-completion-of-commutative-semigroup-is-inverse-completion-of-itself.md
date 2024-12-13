# 

Source: https://proofwiki.org/wiki/Inverse_Completion_of_Commutative_Semigroup_is_Inverse_Completion_of_Itself

Theorem
Let $\struct {S, \circ}$ be a commutative semigroup.
Let $\struct {C, \circ} \subseteq \struct {S, \circ}$ be the subsemigroup of cancellable elements of $\struct {S, \circ}$.
Let $\struct {T, \circ'}$ be an inverse completion of $\struct {S, \circ}$.

Then $\struct {T, \circ'}$ is its own inverse completion.


Proof
Let $x \circ' y^{-1}$ be cancellable for $\circ'$, where $x \in S$ and $y \in C$.
We have that $y$ is invertible for $\circ'$.
So by Invertible Element of Associative Structure is Cancellable:

$y$ is cancellable for $\circ'$.
Now by definition of inverse element:

$x = \paren {x \circ' y^{-1} } \circ' y$
Thus $x$ is also cancellable for $\circ'$.
By Cancellable Elements of Semigroup form Subsemigroup, $x$ is cancellable for $\circ$.
So:

$x \in S \implies x \in C$
Thus $x$ is invertible for $\circ'$.
Hence by Inverse of Product in Associative Structure:

$x \circ' y$ is invertible for $\circ'$.
So every cancellable element of $\struct {T, \circ'}$ is invertible.
So, by definition, $\struct {T, \circ'}$ is its own inverse completion.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers: Theorem $20.1: \ 3^\circ$




