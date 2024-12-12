# 

Source: https://proofwiki.org/wiki/G-Tower_is_Nest/Lemma_1

Lemma for $g$-Tower is Nest
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $\RR$ be a relation defined as:

$\forall x, y \in M: \tuple {x, y} \in \RR \iff \map g x \subseteq y \lor y \subseteq x$
where $\lor$ denotes disjunction (inclusive "or").

Then $\RR$ satisfies the $3$ conditions $\text D_1$, $\text D_2$ and $\text D_3$ of the Double Superinduction Principle.


Proof
Conditions $\text D_1$ and $\text D_2$ are proven by the Progressing Function Lemma.
It remains to demonstrate that $\text D_3$ is satisfied.

Let $C$ be a chain (or any set, for that matter) such that $\tuple {x, y} \in \RR$ for every $y \in C$.
Thus, for every $y \in C$, either $\map g x \subseteq y$ or $y \subseteq x$.
If $y \subseteq x$ holds for every $y \in C$ then $\ds \bigcup C \subseteq x$.
Hence $\tuple {x, \ds \bigcup C} \in \RR$.

If it is not the case that $y \subseteq x$ holds for every $y \in C$, then there exists at least one $y \in C$ such that $\map g x \subseteq y$.
Hence as $y \subseteq \ds \bigcup C$ it follows that $\map g x \subseteq \ds \bigcup C$.
Hence again $\tuple {x, \ds \bigcup C} \in \RR$.
The result follows.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 2$ Superinduction and double superinduction: Lemma $2.2$




