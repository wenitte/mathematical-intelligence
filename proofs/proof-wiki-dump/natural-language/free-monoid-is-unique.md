# 

Source: https://proofwiki.org/wiki/Free_Monoid_is_Unique

Theorem
Let $S$ be a set.
Let $\struct {M, i}$ and $\struct {N, j}$ be free monoids over $S$.

Then there is a unique monoid isomorphism $f: M \to N$ such that:

$\size f \circ i = j$
$\size {f^{-1} } \circ j = i$
where $\size {\, \cdot \,}$ denotes the underlying set functor on $\mathbf{Mon}$.


Proof
By the (categorial) definition of free monoid, we have the following commutative diagram:
$\quad\quad \begin{xy}
<-4em,4em>*{\mathbf{Mon} :},
<-4em,1em>*{\mathbf{Set} :},
<0em,4em>*+{N} = "N",
<4em,4em>*+{M} = "M",
<8em,4em>*+{N} = "N2",
"N";"M" **@{.} ?>*@{>} ?*!/_1em/{\bar i},
"M";"N2" **@{.} ?>*@{>} ?*!/_1em/{\bar j},
<0em,1em>*+{\left\vert{N}\right\vert} = "NN",
<4em,1em>*+{\left\vert{M}\right\vert} = "MM",
<8em,1em>*+{\left\vert{N}\right\vert} = "NN2",
<4em,-3em>*+{S} = "S",
"NN";"MM" **@{-} ?>*@{>} ?*!/_1em/{\left\vert{\bar i}\right\vert},
"MM";"NN2" **@{-} ?>*@{>} ?*!/_1em/{\left\vert{\bar j}\right\vert},
"S";"NN" **@{-} ?>*@{>} ?*!/_1em/{j},
"S";"MM" **@{-} ?>*@{>} ?<>(.7)*!/_.6em/{i},
"S";"NN2" **@{-} ?>*@{>} ?*!/^1em/{j},
\end{xy}$
The outer rim of these diagrams also needs to satisfy the universal property.
Since obviously $\operatorname{id}_N$ fits in place of $\bar j \circ \bar i$, we conclude these are equal.
Exchanging the rôles of $\struct {M, i}$ and $\struct {N, j}$ proves that $\bar i \circ \bar j = \operatorname{id}_M$ as well.

Hence $\bar i$ is the sought monoid isomorphism.
Its uniqueness follows from the universal property of the free monoid.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.7$




