# 

Source: https://proofwiki.org/wiki/Mappings_Partially_Ordered_by_Extension

Theorem
Let $S$ and $T$ be sets.
Let $F$ be the set of all mappings from $S$ to $T$.

Let $\RR \subseteq F \times F$ be the relation defined as:

$\tuple {f, g} \in \RR \iff \Dom f \subseteq \Dom g \land \forall x \in \Dom f: \map f x = \map g x$
That is, $f \mathrel \RR g$ if and only if $g$ is an extension of $f$.

Then $\RR$ is an ordering on $F$.


Proof
Let $x \in \Dom f$ such that $\map f x = y$.
Then by definition $x \in \Dom g$ and $\map g x = y$.
Thus by definition of subset, $f \subseteq g$.
We have that Subset Relation is Ordering.
Hence the result.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 14$: Order




