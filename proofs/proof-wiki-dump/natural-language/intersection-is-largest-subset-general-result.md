# 

Source: https://proofwiki.org/wiki/Intersection_is_Largest_Subset/General_Result



Theorem
Let $T$ be a set.
Let $\powerset T$ be the power set of $T$.
Let $\mathbb T$ be a subset of $\powerset T$.

Then:

$\paren {\forall X \in \mathbb T: S \subseteq X} \iff S \subseteq \bigcap \mathbb T$


Family of Sets
In the context of a family of sets, the result can be presented as follows:

Let $\family {S_i}_{i \mathop \in I}$ be a family of sets indexed by $I$.

Then for all sets $X$:

$\ds \paren {\forall i \in I: X \subseteq S_i} \iff X \subseteq \bigcap_{i \mathop \in I} S_i$
where $\ds \bigcap_{i \mathop \in I} S_i$ is the intersection of $\family {S_i}$.


Proof
Let $\mathbb T \subseteq \powerset T$.
Suppose that $\forall X \in \mathbb T: S \subseteq X$.
Consider any $x \in S$.
By definition of subset, it follows that:

$\forall X \in \mathbb T: x \in X$
Thus it follows from definition of set intersection that:

$x \in \bigcap \mathbb T$
Thus by definition of subset, it follows that:

$S \subseteq \bigcap \mathbb T$

So:

$\paren {\forall X \in \mathbb T: S \subseteq X} \implies S \subseteq \bigcap \mathbb T$
$\Box$

Now suppose that $S \subseteq \bigcap \mathbb T$.
From Intersection is Subset: General Result we have:

$\forall X \in \mathbb T: \bigcap \mathbb T \subseteq X$
So from Subset Relation is Transitive, it follows that:

$\forall X \in \mathbb T: S \subseteq \bigcap \mathbb T \subseteq X$
So it follows that $\forall X \in \mathbb T: S \subseteq X$.
So:

$S \subseteq \bigcap \mathbb T \implies \paren {\forall X \in \mathbb T: S \subseteq X}$
$\Box$

Hence:

$\paren {\forall X \in \mathbb T: S \subseteq X} \iff S \subseteq \bigcap \mathbb T$
$\blacksquare$


Caution
Be careful of the way this result is stated:

$\paren {\forall X \in \mathbb T: S \subseteq X} \iff S \subseteq \bigcap \mathbb T$
Without the brackets, this would read:

$\forall X \in \mathbb T: S \subseteq X \iff S \subseteq \bigcap \mathbb T$
That is:

For all $X \in \mathbb T$, it is the case that $S \subseteq X$ if and only if $S \subseteq \bigcap \mathbb T$
This is not the same thing at all.
For example, if $\mathbb T = \powerset T$ (as it well might), then $T \in \mathbb T$, and $\bigcap \mathbb T = \O$.
This would imply that:

$T \subseteq \bigcap \mathbb T$
That is:

$T \subseteq \O$
which is obviously rubbish.


Also see
Union is Smallest Superset: General Result


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Exercise $3.6 \ \text{(e)}$




