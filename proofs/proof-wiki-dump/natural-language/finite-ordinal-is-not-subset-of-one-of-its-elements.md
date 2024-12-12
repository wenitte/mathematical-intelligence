# 

Source: https://proofwiki.org/wiki/Finite_Ordinal_is_not_Subset_of_one_of_its_Elements

Theorem
Let $n$ be a finite ordinal.

Then:

$\nexists x \in n: n \subseteq x$
that is, $n$ is not a subset of one of its elements.


Proof
Let $S$ be the set of all those finite ordinals $n$ which are not a subset of any of its elements.
That is:

$n \in S \iff n \in \omega \land \forall x \in n: n \nsubseteq x$
We know that $0 = \O$ is not a subset of any of its elements, as $\O$ by definition has no elements.
So $0 \in S$.

Now suppose $n \in S$.
From Set is Subset of Itself:

$n \subseteq n$
But as $n \in S$ it follows by definition of $S$ that:

$n \notin n$
By definition of the successor of $n$, it follows that:

$n^+ \nsubseteq n$
Now from Subset Relation is Transitive:

$n^+ \subseteq x \implies n \subseteq x$
But since $n \in S$ it follows that:

$x \notin n$
So:

$n^+ \nsubseteq n$
and:

$\forall x \in n: n^+ \nsubseteq x$
So $n^+$ is not a subset of any of its elements.
That is:

$n^+ \in S$
So by the Principle of Mathematical Induction:

$S = \omega$
Hence the result.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 12$: The Peano Axioms




