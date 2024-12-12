# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Surjections

  This article was Featured Proof on 12th September 2021.




Theorem
Let $S$ and $T$ be finite sets.
Let $\card S = m, \card T = n$.
Let $C$ be the number of surjections from $S$ to $T$.

Then:

$C = n! \ds {m \brace n}$
where $\ds {m \brace n}$ denotes a Stirling number of the second kind.


Proof
Let $T$ be the codomain of a surjection $f$ from $S$ to $T$.
By the Quotient Theorem for Surjections, $f$ induces an equivalence $\RR_f$ on $T$:

$f = r \circ q_{\RR_f}$
where:

$\RR_f$ is the equivalence induced by $f$ on $T$
$r: S / \RR_f \to T$ is a bijection from the quotient set $S / \RR_f$ to $T$
$q_{\RR_f}: S \to S / \RR_f$ is the quotient mapping induced by $\RR_f$.

From the Fundamental Theorem on Equivalence Relations, $\RR_f$ induces a partition on $S$.
From Cardinality of Set of Induced Equivalence Classes of Surjection, $\RR_f$ has $m$ components.
From Number of Set Partitions by Number of Components, there are $\ds {m \brace n}$ different ways of performing such a partitioning.

From Cardinality of Set of Injections, there are $n!$ different bijections from $S / \RR_f \to T$.

The total number of surjections is then the product of these:

$C = n! \ds {m \brace n}$
$\blacksquare$


Examples
Example: $m = n + 1$
Let $m = n + 1$.
Then:

$C = \dfrac {n \paren {n + 1}!} 2$


Example: $m = n + 2$
Let $m = n + 2$.
Then:

$C = \dfrac {n \paren {3 n + 1} \paren {n + 2}!} {24}$




