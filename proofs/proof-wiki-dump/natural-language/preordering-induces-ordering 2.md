# 

Source: https://proofwiki.org/wiki/Preordering_induces_Ordering



Theorem
Let $\struct {S, \RR}$ be a relational structure such that $\RR$ is a preordering.
Let $\sim_\RR$ denote the equivalence on $S$ induced by $\RR$:

$x \sim_\RR y$ if and only if $x \mathrel \RR y$ and $y \mathrel \RR x$

Let $\preccurlyeq_\RR$ be the relation defined on the quotient set $S / {\sim_\RR}$ by:

$\eqclass x {\sim_\RR} \preccurlyeq_\RR \eqclass y {\sim_\RR} \iff x \mathrel \RR y$
where $\eqclass x {\sim_\RR}$ denotes the equivalence class of $x$ under $\sim_\RR$.

Then $\preccurlyeq_\RR$ is an ordering.


Proof
First we note from Ordering Induced by Preordering is Well-Defined that $\preccurlyeq_\RR$ is a well-defined relation.

Checking in turn each of the criteria for an ordering:


Reflexivity
Let $A \in S / {\sim_\RR}$.
By the definition of quotient set, $A$ is non-empty.
Thus there exists $a \in A$.
Since $\RR$ is a preordering, it is reflexive.
Hence:

$a \mathrel \RR a$
So by definition of $\preccurlyeq_\RR$:

$\eqclass a {\sim_\RR} \preccurlyeq_\RR \eqclass a {\sim_\RR}$
Thus $\preccurlyeq_\RR$ has been shown to be reflexive.
$\Box$


Transitivity
Let $A, B, C \in S / {\sim_\RR}$ such that $A \preccurlyeq_\RR B$ and $B \preccurlyeq_\RR C$.
Then:

$\exists a \in A, b_1 \in B: a \mathrel \RR b_1$
$\exists b_2 \in B, c \in C: b_2 \mathrel \RR c$

By the definition of quotient set:

$b_1 \sim_\RR b_2$
By definition, $\sim_\RR$ is the equivalence on $S$ induced by $\RR$.
Hence:

$b_1 \mathrel \RR b_2$
We have:

$a \mathrel \RR b_1$
$b_1 \mathrel \RR b_2$
$b_2 \mathrel \RR c$
$\RR$ is transitive
Hence from Transitive Chaining:

$a \precsim c$
Thus by the definition of $\RR$:

$A \preccurlyeq_\RR C$
We have that $A$, $B$ and $C$ are arbitrary.
It follows that $\preccurlyeq_\RR $ is transitive.
$\Box$


Antisymmetry
Let $A, B \in S / {\sim_\RR}$ such that $A \preccurlyeq_\RR B$ and $B \preccurlyeq_\RR A$.
Then:

$\eqclass a {\sim_\RR} \preccurlyeq_\RR \eqclass b {\sim_\RR}$
$\eqclass b {\sim_\RR} \preccurlyeq_\RR \eqclass a {\sim_\RR}$
That is:
By definition of $S / {\sim_\RR}$:

$a \mathrel \RR b$
$b \mathrel \RR a$
But by definition of $\sim_\RR$, that means:

$a \sim_\RR b$
Hence:

$a, b \in \eqclass a {\sim_\RR}$
and:

$a, b \in \eqclass b {\sim_\RR}$
Hence by Fundamental Theorem on Equivalence Relations:

$\eqclass a {\sim_\RR} = \eqclass b {\sim_\RR}$
So $\preccurlyeq_\RR$ has been shown to be antisymmetric.
$\Box$

$\preccurlyeq_\RR$ has been shown to be reflexive, transitive and antisymmetric.
Hence by definition it is an ordering.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: Further exercises: $5$
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $40 \ \text {(b)}$




