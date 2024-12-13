# 

Source: https://proofwiki.org/wiki/Localization_of_Ring_Exists/Lemma_3

Lemma for Localization of Ring Exists
Let $A$ be a commutative ring with unity.
Let $S \subseteq A$ be a multiplicatively closed subset with $0 \notin S$.
Let $\sim$ be the relation defined on the Cartesian product $A \times S$ by:

$\tuple {a, s} \sim \tuple {b, t} \iff \exists u \in S: a t u = b s u$

Let $A_S$ denote the quotient set $\paren {A \times S} / \sim$.
Let $\dfrac a s$ denote the equivalence class of $\tuple {a, s}$ in $\paren {A \times S} / \sim$.

Let $B$ be a ring.
Let $g: A \to B$ be a mapping such that:

$g \sqbrk S \subseteq B^\times$
where $B^\times$ denotes the set of units of $B$.

The map $\map h {\dfrac a s} = \map g a \map g s^{-1}$ is a well defined ring homomorphism $A_S \to B$.


Proof
Let $\dfrac a s = \dfrac b t \in A_S$.
Then there exists $u \in S$ such that $a t u = b s u$.
Therefore, by the homomorphism property, and the fact that $g \sqbrk S \subseteq B^\times$:

$\map g a \map g t = \map g b \map g s \to \map g a \map g s^{-1} = \map g b \map g t^{-1}$
We have that $g$ is a ring homomorphism.
As $B$ is a commutative ring it follows that $h$ is also a ring homomorphism.
$\blacksquare$





