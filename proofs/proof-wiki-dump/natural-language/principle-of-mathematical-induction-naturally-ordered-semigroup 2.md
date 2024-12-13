# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/Naturally_Ordered_Semigroup



Theorem
Let $\struct {S, \circ, \preceq}$ be a naturally ordered semigroup.
Let $T \subseteq S$ such that $0 \in T$ and $n \in T \implies n \circ 1 \in T$.

Then $T = S$.


General Result
Let $\struct {S, \circ, \preceq}$ be a naturally ordered semigroup.
Let $p \in S$.

Let $T \subseteq S$ such that:

$x \in T \implies p \preceq x \land \paren {x \in T \implies x \circ 1 \in T}$

Then:

$S \setminus S_p \subseteq T$
where:

$\setminus$ denotes set difference
$S_p$ denotes the set of all elements of $S$ preceding $p$.


Proof
Aiming for a contradiction, suppose that $T \subsetneq S$.
That is, $T$ is a proper subset of $S$:

$T \ne S$
Let $T' = S \setminus T$.
Then by Set Difference with Proper Subset:

$T' \ne \O$

By Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered, $S$ is well-ordered.
By definition of well-ordered set, it follows that $T'$ has a smallest element $x$.
By definition of $T$:

$0 \in T$
and so by  definition of $T'$:

$0 \notin T'$
so:

$0 \prec x$
By Sum with One is Immediate Successor in Naturally Ordered Semigroup:

$1 \preceq x$
By the definition of a naturally ordered semigroup:

$\exists y \in S: y \circ 1 = x$
Again by Sum with One is Immediate Successor in Naturally Ordered Semigroup:

$y \prec x$
We have that $x$ is the smallest element of $T'$ and $y \prec x$.
Therefore:

$y \notin T'$
and so

$y \in T$
But from the definition of $T$:

$y \in T \implies y \circ 1 = x \in T$
But then by the definition of $T'$:

$x \in T' \implies x \notin T$
From this contradiction, it follows that:

$T = S$
$\blacksquare$


Also see
Principle of Mathematical Induction
Second Principle of Mathematical Induction for Naturally Ordered Semigroup


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.5$




