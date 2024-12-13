# 

Source: https://proofwiki.org/wiki/Sandwich_Principle_for_G-Towers/Corollary_1



Theorem
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $M$ be a $g$-tower.

Let $x, y \in M$ be arbitrary.
Then:

$x \subsetneqq y \implies \map g x \subseteq y$


Proof
From Lemma $2$ of $g$-Tower is Nest we have that:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$

From the Sandwich Principle: Corollary 1:

$\forall x, y \in M: x \subseteq y \subseteq \map g x \implies x = y \lor y = \map g x$

That is, if:

$x \subsetneqq y$
then:

$\map g x \subseteq y$
$\blacksquare$


Also see
Sandwich Principle


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 2$ Superinduction and double superinduction: Theorem $2.4 \ (2)$




