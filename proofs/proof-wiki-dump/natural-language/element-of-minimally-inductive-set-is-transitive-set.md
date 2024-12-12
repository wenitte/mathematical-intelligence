# 

Source: https://proofwiki.org/wiki/Element_of_Minimally_Inductive_Set_is_Transitive_Set

Theorem
Let $\omega$ be the minimally inductive set.
Let $n \in \omega$.

Then $x \in n \implies x \subseteq n$.

That is, every element of $n$ is also a subset of it.
In other words, each element of $\omega$ is a transitive set.


Proof
Let $S \subseteq$ be the set of all transitive elements of $\omega$.
That is:

$n \in S \iff n \in \omega \land \forall x \in n: x \subseteq n$

It is vacuously true that $0 \in S$, as there are no $x \in 0$.
Now suppose $n \in S$.
If $x \in n^+$ then either $x \in n$ or $x = n$.
In the first case:

$x \subseteq n$ as $n \in S$
and so:

$x \subseteq n^+$
In the second case, by definition of successor set:

$x \subseteq n^+$

By Principle of Mathematical Induction for Minimally Inductive Set it follows that:

$S = \omega$
Hence the result.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 12$: The Peano Axioms




