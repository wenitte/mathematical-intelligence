# 

Source: https://proofwiki.org/wiki/Binary_Operation_on_Subset_is_Binary_Operation

Theorem
Let $S$ be a set.
Let $\circ$ be a binary operation on $S$.

Let $T \subseteq S$.
Let $\circ {\restriction}_T$ be the restriction of $\circ$ to $T$.

Then $\circ {\restriction}_T$ is a binary operation on $T$.


Proof
Let $\Bbb U$ be a universal set.
Let $\circ: S \times S \to \Bbb U$ be a binary operation on $S$.
Let $T \subseteq S$.
Let $\tuple {a, b} \in T \times T$.
By definition of ordered pair and cartesian product:

$a \in T$ and $b \in T$
As $T \subseteq S$, it follows that:

$a \in S$ and $b \in S$
Thus:

$\tuple {a, b} \in S \times S$
As $\circ$ is a binary operation on $S$, it follows that:

$\map \circ {a, b} \in \Bbb U$
But by definition of restriction of $\circ$:

$\map \circ {a, b} = \map {\circ {\restriction}_T} {a, b}$
Thus:

$\map {\circ {\restriction}_T} {a, b} \in \Bbb U$
As $a$ and $b$ are arbitrary elements of $T$, it follows that this holds for all $a, b \in T$.
Hence the result by definition of binary operation.
$\blacksquare$





