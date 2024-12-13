# 

Source: https://proofwiki.org/wiki/Preordering_induces_Equivalence_Relation



Theorem
Let $\struct {S, \RR}$ be a relational structure such that $\RR$ is a preordering.
Let $\sim$ be the relation induced by $\RR$:

$x \sim y$ if and only if $x \precsim y$ and $y \precsim x$.

Then $\sim$ is an equivalence relation.


Proof
To show that $\sim$ is an equivalence relation, we must show that it is reflexive, transitive, and symmetric.
By the definition of preordering, $\precsim$ is transitive and reflexive.


Transitive
Let $p, q, r \in S$.
Suppose that $p \sim q$ and $q \sim r$.
Then $p \precsim q$, $q \precsim r$, $r \precsim q$, and $q \precsim p$.
Since $\precsim$ is transitive:

$p \precsim r$ and $r \precsim p$.
Thus by the definition of $\sim$, $p \sim r$.
Since this holds for all $p$, $q$, and $r$, $\sim$ is transitive.
$\Box$


Reflexive
Let $p \in S$.
Since $\precsim$ is reflexive:

$p \precsim p$
Thus by the definition of $\sim$:

$p \sim p$
As this holds for all $p$, $\sim$ is reflexive.
$\Box$


Symmetric
Let $p, q \in S$ with $p \sim q$.
Then $p \precsim q$ and $q \precsim p$.
Thus $q \sim p$.
Since this holds for all $p$ and $q$, $\sim$ is symmetric.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: Further exercises: $5$
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $39 \ \text{(a)}$




