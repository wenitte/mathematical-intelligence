# 

Source: https://proofwiki.org/wiki/Intersection_of_Complete_Meet_Subsemilattices_induces_Closure_Operator

Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered set.
Let $I$ be an indexing set.
Let $\family {f_i}_{i \mathop \in I}$ be an indexed family of closure operators on $S$.
Let $C_i = \map {f_i} S$ be the set of closed elements with respect to $f_i$ for each $i \in I$.
Suppose that for each $i \in I$, $C_i$ is a complete meet subsemilattice of $S$ in the following sense:

For each $D \subseteq C_i$, $D$ has an infimum in $S$ such that $\inf D \in C_i$.

Then $C = \ds \bigcap_{i \mathop \in I} C_i$ induces a closure operator on $S$.


Proof
Lemma
Let $\family {C_i}_{i \mathop \in I}$ be an indexed family of complete meet subsemilattices of $S$.

Then $C = \ds \bigcap_{i \mathop \in I} C_i$ is also a complete meet subsemilattice.
$\Box$

By the lemma, $C$ is a complete meet semilattice.
Let $x \in S$.
Then $C \cap x^\succcurlyeq$ has an infimum in $S$ which lies in $C$, where $x^\succcurlyeq$ is the upper closure of $x$.
By the definition of infimum:

$x \preceq \inf \struct {C \cap x^\succcurlyeq}$
so this infimum is in fact the smallest element of $C \cap x^\succcurlyeq$.
Thus $C$ induces a closure operator on $S$ by Closure Operator from Closed Elements.
$\blacksquare$





