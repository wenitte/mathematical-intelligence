# 

Source: https://proofwiki.org/wiki/Sandwich_Principle_for_G-Towers



Theorem
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $M$ be a $g$-tower.

Let $x, y \in M$ be arbitrary.
Then it cannot be the case that:

$x \subsetneqq y \subsetneqq \map g x$


Corollary 1
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $M$ be a $g$-tower.

Let $x, y \in M$ be arbitrary.
Then:

$x \subsetneqq y \implies \map g x \subseteq y$


Corollary 2
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $M$ be a $g$-tower.

Let $x, y \in M$ be arbitrary such that $x \subseteq y$.
Then:

$\map g x \subseteq \map g y$


Proof
From Lemma $2$ of $g$-Tower is Nest we have that:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$

From the Sandwich Principle:

$\forall x, y \in M: x \subseteq y \subseteq \map g x \implies x = y \lor y = \map g x$

That is, there is no element $y$ of $M$ such that:

$x \subsetneqq y \subsetneqq \map g x$
$\blacksquare$


Also see
Sandwich Principle


Linguistic Note
The name Sandwich Principle for this lemma appears to have been coined by Raymond M. Smullyan and Melvin Fitting in their Set Theory and the Continuum Problem, revised ed.
As they explain, when $x \subset y \subset z$, we may consider $y$ to be sandwiched between $x$ and $z$.
Thus the Sandwich Principle tells us that, given the conditions constraining $x$, $y$ and $\map g x$, there can be no such $y$ sandwiched between $x$ and $\map g x$.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 2$ Superinduction and double superinduction: Theorem $2.4 \ (1)$




