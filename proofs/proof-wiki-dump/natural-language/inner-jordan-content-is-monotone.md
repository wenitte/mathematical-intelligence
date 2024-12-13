# 

Source: https://proofwiki.org/wiki/Inner_Jordan_Content_is_Monotone

Theorem
Let $A, B \subseteq \R^n$ be bounded subspaces of Euclidean $n$-space.
Suppose that $A \subseteq B$.

Then:

$\map {m_*} A \le \map {m_*} B$
where $m_*$ denotes the inner Jordan content.


Proof
Let $R \subseteq \R^n$ be a closed $n$-rectangle that contains $B$.
Then, by Subset Relation is Transitive, $R$ contains $A$ as well.

By Set Difference with Subset is Superset of Set Difference:

$R \setminus B \subseteq R \setminus A$
So, by Outer Jordan Content is Monotone:

$\map {m^*} {R \setminus B} \le \map {m^*} {R \setminus A}$
Therefore:

$\map V R - \map {m^*} {R \setminus B} \ge \map V R - \map {m^*} {R \setminus A}$
Hence the result, by definition of inner Jordan content.
$\blacksquare$





