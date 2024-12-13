# 

Source: https://proofwiki.org/wiki/Inductive_Construction_of_Natural_Numbers_fulfils_Peano%27s_Axioms

Theorem
Let $P$ denote the set of natural numbers by definition as an inductive set.
Then $P$ fulfils Peano's axioms.


Proof
By definition of inductive set:

$\O \in P$
By definition of the natural numbers, $\O$ is identified with $0$ (zero).
Thus Peano's Axiom $\text P 1$: $0 \in P$ holds.
$\Box$

Let $x$ be a natural number.
By definition, $x$ is an element of every inductive set.
Thus if $x \in P$ it follows that $x^+ \in P$.
Thus Peano's Axiom $\text P 2$: $n \in P \implies \map s n \in P$ holds.
$\Box$

By Inductive Construction of Natural Numbers fulfils Peano's Axiom of Injectivity, Peano's Axiom $\text P 3$: $s$ is injective holds.
$\Box$

For all $n$, $n$ is an element of $n^+$.
But $0$ is identified with the empty set $\O$.
By definition, $\O$ has no elements.
Therefore it is not possible for $\O$ to equal $n^+$ for any $n$.
Thus Peano's Axiom $\text P 4$: $0 \notin \Img s$ holds.
$\Box$

Peano's Axiom $\text P 5$: Principle of Mathematical Induction holds immediately by definition of inductive set.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 3$ Derivation of the Peano postulates and other results




