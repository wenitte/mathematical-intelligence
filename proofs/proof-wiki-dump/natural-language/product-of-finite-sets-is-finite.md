# 

Source: https://proofwiki.org/wiki/Product_of_Finite_Sets_is_Finite

Theorem
Let $S$ and $T$ be finite sets.

Then $S \times T$ is a finite set.


Proof 1
By the definition of Cartesian product:

$S \times T = \set {\tuple {s, t}: s \in S, t \in T}$
Then by definition of set union:

$S \times T = \ds \bigcup_{s \mathop \in S} \set s \times T$
Also, the mapping $g_s: \set s \times T \to T$ defined by:

$\map {g_s} {s, t} = t$
is a bijection.
Therefore, since $T$ is finite, so is $\set s \times T$ for all $s \in S$.
Since $S$ is finite, the result follows from Finite Union of Finite Sets is Finite.
$\blacksquare$


Proof 2
Let $\card S$ denote the cardinal number of $S$.
Let $\cdot$ denote ordinal multiplication.

By Cardinal Product Equinumerous to Ordinal Product, it follows that $S \times T \sim \card S \cdot \card T$.
But then $\card S$ and $\card T$ are members of the minimally inductive set.
Therefore, $\card S \cdot \card T \in \omega$ by Natural Number Multiplication is Closed.

Since $S \times T$ is equinumerous to a member of the minimally inductive set, it follows that $S \times T$ is finite.
$\blacksquare$





