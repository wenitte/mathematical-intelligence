# 

Source: https://proofwiki.org/wiki/Densely_Ordered_is_Order_Property

Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be isomorphic ordered sets.
Let $\struct {S_1, \preccurlyeq_1}$ be densely ordered.

Then $\struct {S_2, \preccurlyeq_2}$ is also densely ordered.
That is, the property of being densely ordered is an order property.


Proof
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be isomorphic ordered sets.
Let $\struct {S_1, \preccurlyeq_1}$ be densely ordered.

Let $a, b \in S_2$ such that $a \prec b$.
Then as $\phi$ is an order isomorphism:

$\exists p, q \in S_1: a = \map \phi p, b = \map \phi q$
Then by definition of densely ordered:

$\exists r \in S_1: p \prec r \prec q$
By definition of order isomorphism:

$\map \phi p \prec \map \phi r \prec \map \phi q$
That is:

$\exists c \in S_2: a \prec c \prec b$
where $c = \map \phi r$.
The result follows by definition of densely ordered.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations




