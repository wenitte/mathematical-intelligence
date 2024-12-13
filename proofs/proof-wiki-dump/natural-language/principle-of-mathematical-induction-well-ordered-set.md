# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/Well-Ordered_Set



Theorem
Let $\struct {S, \preceq}$ be a well-ordered set.

Let $T \subseteq S$ be a subset of $S$ such that:

$\forall s \in S: \paren {\forall t \in S: t \prec s \implies t \in T} \implies s \in T$

Then $T = S$.


Proof
Aiming for a contradiction, suppose that $T \ne S$.
From Set Difference is Subset, $S \setminus T \subset S$.
From Set Difference with Proper Subset, $S \setminus T \ne \O$.

By the definition of a well-ordered set, there exists a smallest element $s$ of $S \setminus T$.
As $s \in S$, it follows from the definition of $T$ that:

$\forall t \in S: t \prec s \implies t \in T$
But then $s \in T$ by hypothesis, contradicting the definition of $s$.
Hence the result, by Proof by Contradiction.
$\blacksquare$


Also see
Well-Ordered Induction


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals: Theorem $1.7.1$




