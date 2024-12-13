# 

Source: https://proofwiki.org/wiki/Mapping_on_Increasing_Union

Theorem
Let $S_0, S_1, S_2, \ldots, S_i, \ldots$ be sets such that:

$S_0 \subseteq S_1 \subseteq S_2 \subseteq \ldots \subseteq S_i \subseteq \ldots$
that is, each set is contained in the next as a subset.

Let $S$ be the increasing union of $S_0, S_1, S_2, \ldots, S_i, \ldots$:

$\ds S = \bigcup_{i \mathop \in \N} S_i$

For each $i \in \N$, let $f_i: S_i \to T$ be a mapping such that:

$\forall j < i: f_i \restriction_{S_j} = f_j$
where $f_i \restriction_{S_j}$ denotes the restriction of $f_i$ to $S_j$.

Then there is a unique mapping:

$f: S \to T$
which extends each $f_i$ to $S$.


Proof
Suppose $f: S \to T$ and $g: S \to T$ are both extensions of $f_i$ to $S$ for all $i \in \N$ such that $f \ne g$.
We have been given the domain and codomain of $f$.
Suppose there exists any $g: S \to T$ which is different from $f$.
This must be because $f$ and $g$ do not agree throughout their entire domain.
Thus:

$\exists x \in S: \map f x \ne \map g x$
Then by definition of set union:

$\exists S_k \subseteq S: x \in S_k$.
From the definition, both $f$ and $g$ are extensions of $S_k$.
But this means they must agree on $S_k$.
That is:

$\forall x \in S_k: \map f x = \map g x$
This contradicts the supposition that $\map f x \ne \map g x$.
Thus:

$\forall x \in S: \map f x = \map g x$
and $f$ has been shown to equal $g$.
Hence the result.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.4$: Composition and Restriction: Problem $\text{A}.4.1$




