# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_on_Totally_Ordered_Set_preserves_Total_Ordering



Theorem
Let $\struct {S, \preccurlyeq_1}$ and $\struct {T, \preccurlyeq_2}$ be ordered sets.
Let $\phi: \struct {S, \preccurlyeq_1} \to \struct {T, \preccurlyeq_2}$ be an order isomorphism.

Then $\struct {S, \preccurlyeq_1}$ is a totally ordered set if and only if $\struct {T, \preccurlyeq_2}$ is also a totally ordered set.


Proof
Necessary Condition
Let $\struct {S, \preccurlyeq_1}$ be a totally ordered set
Then by definition $\preccurlyeq_1$ is a total ordering.
Let $x, y \in S$.
Then either $x \preccurlyeq_1 y$ or $y \preccurlyeq_1 x$.
From the definition of order isomorphism, either:

$\map \phi x \preccurlyeq_2 \map \phi y$
or:

$\map \phi y \preccurlyeq_2 \map \phi x$
and so by definition $\preccurlyeq_2$ is also a total ordering.
So by definition $\struct {T, \preccurlyeq_2}$ is also a totally ordered set.
$\Box$


Sufficient Condition
By Inverse of Order Isomorphism is Order Isomorphism, if $\phi$ is an order isomorphism then so is $\phi^{-1}$.
Applying the other implication (proven above) to $\phi^{-1}$, it follows that if $\struct {T, \preccurlyeq_2}$ is a totally ordered set then so is $\struct {S, \preccurlyeq_1}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.4$




