# 

Source: https://proofwiki.org/wiki/Cardinality_of_Infinite_Sigma-Algebra_is_at_Least_Cardinality_of_Continuum



Theorem
Let $\MM$ be an infinite $\sigma$-algebra on a set $X$.

Then $\MM$ is has cardinality at least that of the cardinality of the continuum $\mathfrak c$:

$\map \Card \MM \ge \mathfrak c$


Corollary
Let $\MM$ be an infinite $\sigma$-algebra on a set $X$.

Then $\MM$ is uncountable.


Proof
Let:

$\mathbb M_\infty := \set {A \in \MM : \map \Card {\MM_A} = \infty}$
where:

$\MM_A$ denotes the trace $\sigma$-algebra of $A$ in $\MM$

Let $A \in \mathbb M_\infty$.
Observe:














\(\ds \map \Card {\MM_B} + \map \Card {\MM_{A \mathop \setminus B} }\)

\(\ge\)







\(\ds \map \Card {\MM_B \cup \MM_{A \mathop \setminus B} }\)




















\(\ds \)

\(\ge\)







\(\ds \map \Card {\MM_A}\)




















\(\ds \)

\(=\)







\(\ds \infty\)









Thus:

$\forall B \in \MM_A : B \in {\mathbb M}_\infty \lor A \setminus B \in {\mathbb M}_\infty$
In particular:

$\forall A \in {\mathbb M}_\infty : \exists B \in {\mathbb M}_\infty : B \subsetneq A$
That is:

$\O \not \in \mathbb S$
where:

$\mathbb S := \set {\set {\tuple {A, B} : B \in \mathbb M_\infty, B \subsetneq A} : A \in \mathbb M_\infty}$
By Axiom of Choice, there is a choice function:

$\tilde f : \mathbb S \to \bigcup \mathbb S$
In particular, it satisfies:

$\forall A \in \mathbb M_\infty : \map {\tilde f} {\set {\tuple {A, B} : B \in \mathbb M_\infty, B \subsetneq A} } \in \set {\tuple {A, B} : B \in \mathbb M_\infty, B \subsetneq A}$
Hence there exists a mapping:

$f : \mathbb M_\infty \to \mathbb M_\infty$
such that:

$\forall A \in \mathbb M_\infty : \map f A \subsetneq A$
More specifically, we can define:

$\map f A := \map {\pr_2} {\map {\tilde f} {\set {\tuple {A, B} : B \in \mathbb M_\infty, B \subsetneq A} } }$
where $\pr_2$ denotes the second projection of $\paren {\mathbb M_\infty}^2$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: This boilerplate for applying AoC should be a theoremYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let:

$F_i := \map {f^i} X \setminus \map {f^{i + 1} } X$
for $i \in \N$.
Then $\sequence {F_i}_{i \mathop \in \N}$ are non-empty pairwise disjoint sets in $\MM$.

We can define an injection $\powerset \N \to \MM$ by:

$\ds N \mapsto \bigsqcup_{i \mathop \in N} F_i$
That is:

$\map \Card \MM \ge \map \Card {\powerset \N}$
But by Power Set of Natural Numbers has Cardinality of Continuum:

$\map \Card {\powerset \N} = \mathfrak c$
Hence the result.
$\blacksquare$

Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
1984: Gerald B. Folland: Real Analysis: Modern Techniques and their Applications: Exercise $1.3$




