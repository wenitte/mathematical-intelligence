# 

Source: https://proofwiki.org/wiki/Ordinal_Subset_of_Ordinal_is_Initial_Segment

Theorem
Let $S$ be an ordinal.
Let $T \subset S$ also be an ordinal.

Then $\exists a \in S: T = S_a$, where $S_a$ is the initial segment of $S$ determined by $a$.
That is, $T = S_a = a \in S$.


Proof
Recall that the Ordering on Ordinal is Subset Relation.

Let $a$ be the minimal element of $S \setminus T$.
By definition of minimal element:

$\forall x \in S: x \subset a$
Hence $x \notin S \setminus T$.
By definition of set difference:

$x \in T$
Thus by definition of initial segment:

$S_a \subseteq T$

Now let $b \in T$.
Then by definition of ordinal:

$T_b = b = S_b$

Now, if $a \subset b$ then $a \in S_b$.
So $a \in T_b$ and hence $a \in T$.
But $a \in S \setminus T$, so by definition of set difference, this is not the case.
So $a \not \subset b$.

We have that an ordinal is well-ordered by $\subseteq$.
So by the definition of well-ordering, $\subseteq$ is a total ordering on $S$
So it follows that $b \subseteq a$.

But $b \ne a$ since $b \in T$.
Hence $b \subset a$, and so $b \in S_a$.
This proves that $T \subseteq S_a$.

Thus $T = S_a$.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals: Theorem $1.7.7$




