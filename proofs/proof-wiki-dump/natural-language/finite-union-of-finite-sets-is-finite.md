# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Finite_Sets_is_Finite



Theorem
Let $S$ be a finite set of finite sets.

Then the union of $S$ is finite.


Proof 1
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


Proof 2
Let $S = \set {A_1, \ldots, A_n}$ such that $A_k$ is finite $\forall k = 1, \ldots, n$.
Set:

$m = \max \set {\card {A_1}, \ldots, \card {A_n} }$
Then:

$\ds \card {\bigcup_{k \mathop = 1}^n A_k} \le \sum_{k \mathop = 1}^n \card {A_k} \le \sum_{k \mathop = 1}^n m = n m$

This article, or a section of it, needs explaining.In particular: needs to invoke a link to result that shows $\card {\bigcup_{k \mathop = 1}^n A_k} \le \sum_{k \mathop = 1}^n \card {A_k}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence the result.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 6$ Finite Sets: Exercise $6.3$




