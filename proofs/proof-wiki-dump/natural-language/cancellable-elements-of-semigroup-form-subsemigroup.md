# 

Source: https://proofwiki.org/wiki/Cancellable_Elements_of_Semigroup_form_Subsemigroup

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $C$ be the set of cancellable elements of $\struct {S, \circ}$.

Then $\struct {C, \circ}$ is a subsemigroup of $\struct {S, \circ}$.


Proof
Now let $C$ be the set of cancellable elements of $\struct {S, \circ}$.
Let $x, y \in C$.
Then $x$ and $y$ are both left cancellable and right cancellable.

Thus by Left Cancellable Elements of Semigroup form Subsemigroup:

$x \circ y$ is left cancellable
and by Right Cancellable Elements of Semigroup form Subsemigroup:

$x \circ y$ is right cancellable.

Thus $x \circ y$ is both left cancellable and right cancellable, and therefore cancellable.
Thus $x \circ y \in C$.

Thus $\struct {C, \circ}$ is closed and is therefore by the Subsemigroup Closure Test a subsemigroup of $\struct {S, \circ}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Theorem $8.5$




