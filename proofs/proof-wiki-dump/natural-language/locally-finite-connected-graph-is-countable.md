# 

Source: https://proofwiki.org/wiki/Locally_Finite_Connected_Graph_is_Countable

Theorem
Let $G = \struct {V, E}$ be a graph which is connected and locally finite.

Then $G$ has countably many vertices and countably many edges.


Proof
We first show that $V$ is countable.
If $V$ is finite, then it is surely countable.
Suppose instead that $V$ is infinite.
Choose an arbitrary vertex $q \in V$.
Recursively define a sequence $\sequence {S_n}$:

Let $S_0 = \set q$.
Let $S_{n + 1}$ be the set of all vertices that are adjacent to some element of $S_n$ but not adjacent to any element of $S_k$ for $k < n$.
That is, $S_n$ is the set of vertices whose shortest path(s) to $q$ have $n$ edges.
Since $G$ is connected, $V = \ds \bigcup_{n \mathop \in \N} S_n$.


This article, or a section of it, needs explaining.In particular: Trivial, but requires talking about walks and all.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Furthermore, $S_n$ is finite and non-empty for each $n$.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
But by Countable Union of Finite Sets is Countable, $\ds \bigcup_{n \mathop \in \N} S_n$ is countable, so $V$ is countable.


This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Set of Unordered Pairs of Countable Set is Countable or some such.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
By Cartesian Product of Countable Sets is Countable, $V \times V$ is countable.
Let $E' = \set {\tuple {a, b}: \set {a, b} \in E}$.
By Subset of Countable Set is Countable, $E'$ is countable.
Let $g: E' \to E$ be defined by $\map g {a, b} = \set {a, b}$.
Then $g$ is surjective.
Thus by Surjection from Natural Numbers iff Countable and Composite of Surjections is Surjection, $E$ is countable as well.
$\blacksquare$


Axiom:Axiom of Countable Choice for Finite Sets
This theorem depends on Axiom:Axiom of Countable Choice for Finite Sets, by way of Countable Union of Finite Sets is Countable.
Although not as strong as the Axiom of Choice, Axiom:Axiom of Countable Choice for Finite Sets is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





