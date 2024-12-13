# 

Source: https://proofwiki.org/wiki/Localization_of_Ring_Exists/Lemma_2

Lemma
Let $A$ be a commutative ring with unity.
Let $S \subseteq A$ be a multiplicatively closed subset with $0 \notin S$.

Let $\sim$ be the relation defined on the Cartesian product $A \times S$ by:

$\tuple {a, s} \sim \tuple {b, t} \iff \exists u \in S: a t u = b s u$

Let $A_S$ denote the quotient set $\paren {A \times S} / \sim$.
Let $\dfrac a s$ denote the equivalence class of $\tuple {a, s}$ in $\paren {A \times S} / \sim$.

For $\dfrac a s, \dfrac b t \in A_S$, let the following operations be defined:

$\dfrac a s + \dfrac b t = \dfrac {a t + b s} {s t}$
$\dfrac a s \cdot \dfrac b t = \dfrac {a b} {s t}$

The operations $+$ and $\cdot$ are well defined on $A_S$.


Proof
From Lemma 1 we have that $\sim$ is an equivalence relation on $A \times S$.
Let:

$\dfrac a s = \dfrac c u$
$\dfrac b t = \dfrac d v$
be two sets of representatives for two distinct equivalence classes in $A_S$.

We have $w, z \in S$ such that:

$\paren {a u - c s} w = 0$
and

$\paren {b v - d t} z = 0$
Therefore:

$z w \paren {\paren {a u - c s} w - \paren {b v - d t} z} = 0$
and:

$z w \paren {\paren {a t + b s} u v - \paren {c v + d u} s t}$
So:

$\tuple {a t + b s, s t} \sim \tuple {c v + d u, u v}$
That is:

$\dfrac {a t + b s} {s t} = \dfrac {c v + d u} {u v}$

For the operation $\cdot$, with $z, w$ as above we have:

$\paren {a b u v - c d s t} z w = 0$
So:

$\tuple {a b, s t} \sim \tuple {d c, u v}$
and:

$\dfrac {a b} {s t} = \dfrac {d c} {u v}$
$\blacksquare$





