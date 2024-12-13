# 

Source: https://proofwiki.org/wiki/Sandwich_Principle



Theorem
Let $A$ be a class.
Let $g: A \to A$ be a mapping on $A$ such that:

for all $x, y \in A$, either $\map g x \subseteq y$ or $y \subseteq x$.

Then:

$\forall x, y \in A: x \subseteq y \subseteq \map g x \implies x = y \lor y = \map g x$

That is, there is no element $y$ of $A$ such that:

$x \subset y \subset \map g x$
where $\subset$ denotes a proper subset.


Corollary 1
Let:

$x \subset y$
where $\subset$ denotes a proper subset.
Then:

$\map g x \subseteq y$


Corollary 2
Let $g$ be a progressing mapping.
Let $x \subseteq y$.
Then:

$\map g x \subseteq \map g y$


Proof 1
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


Proof 2
We are given that:

for all $x, y \in A$, either $\map g x \subseteq y$ or $y \subseteq x$.

Let $x, y \in A$ such that:

$x \subseteq y \subseteq \map g x$

Then either we have:

$\map g x \subseteq y$ and $y \subseteq \map g x$
in which case, by definition of set equality:

$y = \map g x$
or we have that:

$x \subseteq y$ and $y \subseteq x$
in which case, by definition of set equality:

$x = y$

Thus either $y = \map g x$ or $x = y$ and the result follows.
$\blacksquare$


Also see
Sandwich Theorem or Sandwich Rule in the context of real analysis, also known as the Squeeze Theorem (preferred on $\mathsf{Pr} \infty \mathsf{fWiki}$)


Linguistic Note
The name Sandwich Principle for this lemma appears to have been coined by Raymond M. Smullyan and Melvin Fitting in their Set Theory and the Continuum Problem, revised ed.
As they explain, when $x \subset y \subset z$, we may consider $y$ to be sandwiched between $x$ and $z$.
Thus the Sandwich Principle tells us that, given the conditions constraining $x$, $y$ and $\map g x$, there can be no such $y$ sandwiched between $x$ and $\map g x$.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Lemma $4.9 \ (1)$




