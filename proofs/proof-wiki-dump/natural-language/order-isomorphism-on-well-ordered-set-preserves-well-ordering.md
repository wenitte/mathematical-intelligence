# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_on_Well-Ordered_Set_preserves_Well-Ordering

Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.
Let $\phi: \struct {S_1, \preccurlyeq_1} \to \struct {S_2, \preccurlyeq_2}$ be an order isomorphism.

Then $\struct {S_1, \preccurlyeq_1}$ is a well-ordered set if and only if $\struct {S_2, \preccurlyeq_2}$ is also a well-ordered set.


Proof
Let $\struct {S_1, \preccurlyeq_1}$ be a well-ordered set.
Then by definition $\preccurlyeq_1$ is a well-ordering.
By Well-Ordering is Total Ordering, $\preccurlyeq_1$ is a total ordering.
From Order Isomorphism on Totally Ordered Set preserves Total Ordering, it follows that $\struct {S_2, \preccurlyeq_2}$ is a totally ordered set.
All that remains is to show that $\preccurlyeq$ is a well-founded relation.

Let $T_1 \subseteq S_1$.
As $\struct {S_1, \preccurlyeq_1}$ is a well-ordered set:

$\exists m_1 \in T_1: \forall t \in T_1: t = m_1 \lor \neg \paren {t \preccurlyeq_1 m_1}$
Now consider the image $m_2$ of $m_1$ in $S_2$:

$m_2 = \map \phi {m_1}$

Aiming for a contradiction, suppose $\struct {S_2, \preccurlyeq_2}$ is not a well-ordered set.
Let there exist $T_2 \subseteq S_2$ such that:

$\exists x \in T_2: x \ne m_2, x \preccurlyeq_2 m_2$
By Inverse of Order Isomorphism is Order Isomorphism, if $\phi$ is an order isomorphism then so is $\phi^{-1}$.
Hence:

$\map {\phi^{-1} } x \ne \map {\phi^{-1} } {m_2}, \map {\phi^{-1} } x \preccurlyeq_2 \map {\phi^{-1} } {m_2}$
But this contradicts the fact that $\struct {S_1, \preccurlyeq_1}$ is well-ordered.
Hence by Proof by Contradiction $\struct {S_2, \preccurlyeq_2}$ must be a well-ordered set.

The same technique is used to show that if $\struct {S_2, \preccurlyeq_2}$ is a well-ordered set then so is $\struct {S_1, \preccurlyeq_1}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.4$
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 6.32$




