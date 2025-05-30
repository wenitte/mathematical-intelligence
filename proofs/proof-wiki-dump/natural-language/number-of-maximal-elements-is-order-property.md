# 

Source: https://proofwiki.org/wiki/Number_of_Maximal_Elements_is_Order_Property

Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered set.
Let $\map M S$ be the number of maximal elements of $\struct {S, \preccurlyeq}$.

Then $\map M S$ is an order property.


Proof
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be isomorphic ordered sets.
Hence let $\phi: S_1 \to S_2$ be an order isomorphism.
By definition of order property, we need to show that the number of maximal elements of $\struct {S_1, \preccurlyeq_1}$ is equal to the number of maximal elements of $\struct {S_2, \preccurlyeq_2}$.

Let $s \in \struct {S_1, \preccurlyeq_1}$ be a maximal element of $\struct {S_1, \preccurlyeq_1}$.
Then:

$\forall x \in S_1: s \preccurlyeq_1 x \implies x = s$
Let $\map \phi y, \map \phi s \in S_2$ such that $\map \phi s \preccurlyeq_2 \map \phi y$.
Then as $\phi$ is an order isomorphism:

$s \preccurlyeq_1 y$
and so as $s$ is a maximal element of $\struct {S_1, \preccurlyeq_1}$:

$y = s$
From Order Embedding is Injection it follows that $\map \phi s$ is a maximal element of $\struct {S_2, \preccurlyeq_2}$.

Similarly, let $\map \phi s \in \struct {S_2, \preccurlyeq_2}$ be a maximal element of $\struct {S_2, \preccurlyeq_2}$.
Then:

$\forall \map \phi y \in S_2: \map \phi s \preccurlyeq_2 \map \phi y \implies \map \phi y = \map \phi s$
Let $x \in S_1: x \preccurlyeq_1 s$.
Then as $\phi$ is an order isomorphism:

$\map \phi s \preccurlyeq_2 \map \phi x$
and so as $\map \phi s$ is a maximal element of $\struct {S_2, \preccurlyeq_2}$:

$\map \phi x = \map \phi s$
That is:

$x = s$
and it follows that $s$ is a maximal element of $\struct {S_1, \preccurlyeq_1}$.

Hence:

all maximal elements of $\struct {S_1, \preccurlyeq_1}$ are also maximal elements of $\struct {S_2, \preccurlyeq_2}$
and:

all maximal elements of $\struct {S_2, \preccurlyeq_2}$ are also maximal elements of $\struct {S_1, \preccurlyeq_1}$
and the result follows.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations




