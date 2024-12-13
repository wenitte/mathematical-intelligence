# 

Source: https://proofwiki.org/wiki/Relation_Isomorphism_preserves_Well-Ordering

Theorem
Let $\struct {A, \RR}$ and $\struct {B, \SS}$ be relational structures which are relationally isomorphic.
Let $\struct {A, \RR}$ be a well-ordered set.

Then $\struct {B, \SS}$ is also a well-ordered set.


Proof
Let $\struct {A, \RR}$ be a well-ordered set.
Recall the definition:
The ordering $\preceq$ is a well-ordering on $S$ if and only if every non-empty subset of $S$ has a smallest element under $\preceq$:

$\forall T \subseteq S, T \ne \O: \exists a \in T: \forall x \in T: a \preceq x$

By Well-Ordering is Total Ordering, $\RR$ is a total ordering.
From Relation Isomorphism preserves Total Ordering:

$\SS$ is a total ordering on $B$.

Let $\phi: \struct {A, \RR} \to \struct {B, \SS}$ be a relation isomorphism.

Let $A' \subseteq A$.
As $\struct {A, \RR}$ is a well-ordered set:

$\exists m_1 \in A': \forall a \in A': a = m_1 \lor \neg \paren {a \mathrel \RR m_1}$

Now consider the image $m_2$ of $m_1$ in $B$:

$m_2 = \map \phi {m_1}$
Aiming for a contradiction, suppose $\struct {B, \SS}$ is not a well-ordered set.
Let there exist $B' \subseteq B$ such that:

$\exists x \in B': x \ne m_2, x \mathrel \SS m_2$
By Inverse of Relation Isomorphism is Relation Isomorphism, $\phi^{-1}$ is a relation isomorphism.
Hence:

$\map {\phi^{-1} } x \ne \map {\phi^{-1} } {m_2}, \map {\phi^{-1} } x \mathrel \SS \map {\phi^{-1} } {m_2}$
But this contradicts the fact that $\struct {A, \RR}$ is well-ordered.
Hence by Proof by Contradiction $\struct {B, \SS}$ must be a well-ordered set.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.10$




