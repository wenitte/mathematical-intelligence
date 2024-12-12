# 

Source: https://proofwiki.org/wiki/Dominance_Relation_is_Ordering



Theorem
Let $S$ and $T$ be cardinals.
Let $S \preccurlyeq T$ denote that $S$ is dominated by $T$.

Let $\mathbb S$ be any set of cardinals.
Then the relational structure $\struct {\mathbb S, \preccurlyeq}$ is an ordered set.

That is, $\preccurlyeq$ is an ordering (at least partial) on $\mathbb S$.


Proof
From the definition, a cardinal is a set, so standard set theoretic results apply.

So, checking in turn each of the criteria for an ordering:


Reflexivity
For any cardinal $S$, the identity mapping $I_S: S \to S$ is an injection.
Thus:

$\forall S \in \mathbb S: S \preccurlyeq S$
So $\preccurlyeq$ is reflexive.
$\Box$


Transitivity
Let $S_1, S_2, S_3 \in \mathbb S$ such that $f: S_1 \to S_2$ and $g: S_2 \to S_3$ be injections.
From Composite of Injections is Injection, $g \circ f$ is an injection and so $S_1 \preccurlyeq S_3$.
So $\preccurlyeq$ is transitive.
$\Box$


Antisymmetry
Suppose $S \preccurlyeq T$ and $T \preccurlyeq S$.
Then from the Cantor-Bernstein-Schröder Theorem, $S \sim T$ and, as $S$ and $T$ are cardinals, $S = T$ by definition.

So $\preccurlyeq$ is antisymmetric on a set of cardinals.
$\Box$
Hence the result.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $2$. Set Theoretical Equivalence and Denumerability

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1975: T.S. Blyth: Set Theory and Abstract Algebra: $\S 8$: Theorem $8.2$ (Corollary)




