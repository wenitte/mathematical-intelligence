# 

Source: https://proofwiki.org/wiki/Increasing_Sequence_of_Sets_forms_Nest

Theorem
Let $\sequence {a_n}$ be an increasing sequence of sets:

$\forall k \in \N: S_k \subseteq S_{k + 1}$

Let $c = \set {a_1, a_1, \ldots, a_n, a_{n + 1}, \ldots}$ be the class of all terms of $\sequence {a_n}$.

Then $c$ is a nest.


Proof
Recall the definition of nest:
$c$ is a nest if and only if:

$\forall x, y \in c: x \subseteq y$ or $y \subseteq x$
Let $a_i$ and $a_j$ be arbitrary elements of $c$.
From Ordering on Natural Numbers is Trichotomy, either $i < j$ or $i = j$ or $i > j$.


Case $(1)$
Let $i = j$.
Then we have $a_i = a_j$ and so both $a_i \subseteq a_j$ and $a_j \subseteq a_i$.


Case $(2)$
Let $i \ne j$.
Without loss of generality, suppose $i < j$.
Then as Subset Relation is Transitive:

$a_i \subseteq a_j$
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: I believe the object of this exercise was to use theorems specifically introduced as part of the exposition by S&F in order to construct the minimally inductive class, but right now I have a day job to attendYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 8$ Definition by finite recursion: Exercise $8.5$




