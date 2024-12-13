# 

Source: https://proofwiki.org/wiki/Sequence_Characterization_of_Open_Sets


This page has been identified as a candidate for refactoring of advanced complexity.In particular: Might be worth turning this into a second definition of an open set.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\struct {X, d}$ be a metric space.
Let $G \subseteq X$.

Then the following are equivalent:

$(1): \quad G \subseteq X$ is an open set of $\struct {X, d}$
$(2): \quad \forall x \in G: \forall \sequence {x_n} \in X: x_n \to x: \exists n_0 \in \N: \forall n \ge n_0: \sequence {x_n} \in G$


Proof
$(1)$ implies $(2)$
Let $G \subseteq X$ be open in $\struct {X, d}$.
Let $x \in G$.
Let $\sequence {x_n}$ be a sequence in $X$ such that $x_n \to x$.
By definition of open set, there exists $\epsilon > 0$ such that:

$B_\epsilon \left({x}\right) \subseteq G$
where $B_\epsilon \left({x}\right)$ is the open $\epsilon$-ball of $x$.
Since $x_n \to x$, there exists $n_0 \in \N$ such that:

$\forall n \ge n_0: d \left({x_n, x}\right) < \epsilon$
Thus:

$\forall n \ge n_0: x_n \in B_\epsilon \left({x}\right) \subseteq G$
$\Box$


$(2)$ implies $(1)$
Let $G \subseteq X$.
Let:

$\forall x \in G: \forall \sequence {x_n} \in X: x_n \to x: \exists n_0 \in \N: \forall n \ge n_0: \sequence {x_n} \in G$
Aiming for a contradiction, suppose $G$ is not open in $\struct {X, d}$.
Then:

$\exists x \in G: \forall \epsilon \in \R_{>0}: B_\epsilon \left({x}\right) \nsubseteq G$
Therefore, for $n = 1, 2, \ldots$ we can inductively find a sequence:

$x_n \in B_{1/n} \left({x}\right) \cap \left({X \setminus G}\right) \implies x_n \notin G$
and:

$\forall n \in \N: d \left({x_n, x}\right) < \dfrac 1 n \implies x_n \to x \in G$ and $\forall n \in \N: x_n \notin G$
This contradicts hypothesis $(2)$.
Thus, by Proof by Contradiction, $G$ is open in $\struct {X, d}$.
$\blacksquare$


Also see
Definition:Open Set (Metric Space)




