# 

Source: https://proofwiki.org/wiki/Sandwich_Principle/Proof_1

Theorem
Let $A$ be a class.
Let $g: A \to A$ be a mapping on $A$ such that:

for all $x, y \in A$, either $\map g x \subseteq y$ or $y \subseteq x$.

Then:

$\forall x, y \in A: x \subseteq y \subseteq \map g x \implies x = y \lor y = \map g x$

That is, there is no element $y$ of $A$ such that:

$x \subset y \subset \map g x$
where $\subset$ denotes a proper subset.


Proof
We are given that:

for all $x, y \in A$, either $\map g x \subseteq y$ or $y \subseteq x$.

Let $x, y \in A$ such that:

$x \subseteq y \subseteq \map g x$

Aiming for a contradiction, suppose both $x \subset y$ and $y \subset \map g x$.
From $x \subset y$, it follows by definition of proper subset that:

$\exists a \in y: a \notin x$
and so it is not the case that $y \subseteq x$.
From $y \subset \map g x$, it follows by definition of proper subset that:

$\exists b \in \map g x: b \notin y$
and so it is not the case that $\map g x \subseteq y$.
Hence neither $y \subseteq x$ nor $\map g x \subseteq y$.
This contradicts the property of $g$.
Hence by Proof by Contradiction it follows that $y \subset \map g x$ and $x \subset y$ cannot both be true.

Therefore either $x = y$ or $y = \map g x$.
Hence the result.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Lemma $4.9$




