# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Finite_Sets_is_Finite/Proof_1

Theorem
Let $S$ be a finite set of finite sets.

Then the union of $S$ is finite.


Proof
The proof proceeds by induction.
Let $S$ be a finite set with cardinality $n$.
If $n = 0$ then $S = \O$, so $\bigcup S = \O$, which is finite.
Suppose that an arbitrary finite set with cardinality $n$ of finite sets has a finite union.

Let $S$ have cardinality $n^+$.
Then there is a bijection $f: n^+ \to S$.
Then:

$\ds \bigcup S = \bigcup_{k \mathop \in n^+} \map f k = \bigcup_{k \mathop \in n} \map f k \cup \map f n$

This article, or a section of it, needs explaining.In particular: Explain in detail.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Union of Finite Sets is Finite, $\bigcup S$ is finite.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 6$: Finite Sets: Corollary $6.8$




