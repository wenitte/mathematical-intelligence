# 

Source: https://proofwiki.org/wiki/Exists_Ordinal_Greater_than_Set_of_Ordinals

Theorem
Let $S$ be a set of ordinals.
Then there exists an ordinal greater than every element of $S$:

If $S$ contains a greatest ordinal $\alpha$, then $\alpha^+$ is greater than every element of $S$
If $S$ does not contain a greatest ordinal, then $\bigcup S$ is greater than every element of $S$.


Proof
Recall that Class of All Ordinals is Well-Ordered by Subset Relation.
Suppose $S$ contains a greatest ordinal $\alpha$.
Because $\alpha^+$ is greater than $\alpha$ by definition, it follows a priori that $\alpha^+$ is greater than every element of $S$.
$\Box$

Suppose $S$ does not contain a greatest ordinal.
Consider the union $\bigcup S$ of $S$.
If $\bigcup S \in S$ it would be the greatest element of $S$.
Hence $\bigcup S \notin S$.
Let $\alpha \in S$.
Then:

$\alpha \ne \bigcup S$
But:

$\alpha \subseteq \bigcup S$
and so:

$\alpha \subsetneqq S$
From Union of Set of Ordinals is Ordinal, $\bigcup S$ is an ordinal.
Hence by definition of the usual ordering on ordinals:

$a < \bigcup S$
Thus $\bigcup S$ is greater than every element of $S$.
Hence the result.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $5$: Ordinal Numbers: $\S 1$ Ordinal numbers: Theorem $1.18$




