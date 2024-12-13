# 

Source: https://proofwiki.org/wiki/Localization_of_Ring_Exists/Lemma_1

Lemma for Localization of Ring Exists
Let $A$ be a commutative ring with unity.
Let $S \subseteq A$ be a multiplicatively closed subset with $0 \notin S$.
Let $\sim$ be the relation defined on the Cartesian product $A \times S$ by:

$\tuple {a, s} \sim \tuple {b, t} \iff \exists u \in S: a t u = b s u$

The relation $\sim$ is an equivalence relation.


Proof
Since by definition $1 \in S$ and $a s = a s$ for all $a \in A, s \in S$, it follows that $\sim$ is reflexive.

Also $\sim$ is clearly symmetric because if $a t u = b s u$ then $b s u = a t u$ by symmetry of $=$.

Lastly suppose that:

$\tuple {a, s} \sim \tuple {b, t}$
and:

$\tuple {b, t} \sim \tuple {c, u}$
Then there are $v, w \in S$ such that:

$a t v = b s v$
$b u w = c t w$
Therefore:

$a u t v w = b u w s v = c t w s v$
and so:

$a u \paren {t v w} = c s \paren {t v w}$
Since $S$ is multiplicatively closed:

$\tuple {a, s} \sim \tuple {c, u}$
Thus $\sim$ is transitive.
$\blacksquare$





