# 

Source: https://proofwiki.org/wiki/Countable_Union_of_Finite_Sets_is_Countable


This page has been identified as a candidate for refactoring of medium complexity.In particular: It's starting to look like Countable Disjoint Union of Finite Ordinals is Countable would probably make a good lemma here.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
The following statements are equivalent in $\mathrm{ZF}^-$:

The Axiom of Countable Choice for Finite Sets holds.
The union of any countable set of finite sets is countable.


Proof
Axiom of Countable Choice for Finite Sets implies Countable Union Condition for Finite Sets
Suppose that the Axiom of Countable Choice for Finite Sets holds.
Let $\FF$ be a countable set of non-empty finite sets.
Then $\FF$ is either finite or countably infinite.
If $\FF$ is finite, then $\bigcup \FF$ is finite by Finite Union of Finite Sets is Finite, and thus countable.

Suppose instead that $\FF$ is countably infinite.
Then there is a bijection $\mathbf f: \N \to \FF$.
Written in the family notation, this means that $\mathbf f = \family {F_m}_{m \mathop \in \N}$, with the properties that:

$\forall m \in \N: F_m \in \FF$
for all $F \in \FF$ there is exactly one $m \in \N$ such that $F = F_m$
Hence $\ds \bigcup \FF$ is the same thing as $\ds \bigcup \limits_{m \mathop \in \N} F_m$.

Each $F \in \FF$ is finite..
Also, by hypothesis, each $F \in \FF$ is non-empty.
Hence the cardinality $k$ of $F$ is a (strictly) positive integer $k \ge 1$.
By definition of set equivalence, there exists a bijection $\set {0, \ldots, k - 1} \to F$.
Let $\map \BB F$ be the (non-empty) set of all such bijections $\set {0, \ldots, k - 1} \to F$.
Then by Cardinality of Set of Bijections:

$\map \BB F$ is finite.
The family $\family {\map \BB {F_m} }_{m \mathop \in \N}$ is then a countable family of non-empty finite sets.
By the axiom of countable choice for finite sets the family $\family {\map \BB {F_m} }_{m \mathop \in \N}$ has a choice function:

$\mathbf q = \family {q_m}_{m \mathop \in \N}$
Each $q_m$ is thus a bijection $\set {0, \ldots, \card {F_m} - 1} \to F_m$.

Define a mapping $\ds \gamma: \N^2 \to \bigcup_{m \mathop \in \N} F_m$ as:

$\forall m, n \in \N: \map \gamma {m, n} = \begin {cases}
\map {q_m} n & : n \le \card {F_m}-1 \\
\map {q_0} 0 & : \text {otherwise}
\end {cases}$
Every $\ds x \in \bigcup_{m \mathop \in \N} F_m$ is element of some $F_m \in \FF$.
Thereby $x$ is the image of some integer $n \le \card {F_m} - 1$ under the map $q_m$.
$x$ is then of the form $\map \gamma {m, n}$ for some $\tuple {m, n} \in \N^2$.
Since $x \in \bigcup_{m \mathop \in \N} F_m$ is arbitrary, $\gamma$ is surjective.

Finally, let $\sigma$ be some surjection $\N \to \N^2$.
From Cartesian Product of Countable Sets is Countable, such a map exists.
By Composite of Surjections is Surjection $\gamma \circ \sigma$ is a surjection $\N \to \bigcup \FF$.
Hence $\gamma \circ \sigma$ is countable.
$\Box$


Countable Union Condition for Finite Sets implies Axiom of Countable Choice for Finite Sets
Suppose that the union of every countable set of finite sets is countable.
Let $S$ be a countable set of non-empty finite sets.
Then $\bigcup S$ is countable.
Thus by Surjection from Natural Numbers iff Countable, there exists a surjection $f: \N \to \bigcup S$.
Define a mapping $g: S \to \bigcup S$ thus:

$\map g x = \map f {\min \set {n \in \N: \map f n \in x} }$
This is a valid definition:
For each $x \in S$, $x$ is non-empty, so it has an element $y$.
Then by the definition of union, $y \in \bigcup S$.
Since $f$ is a surjection, $\set {n \in \N: \map f n = y}$ is non-empty.
Thus $\set {n \in \N: \map f n \in x}$ is non-empty.
Thus by the Well-Ordering Principle, $\set {n \in \N: \map f n \in x}$ has a smallest element.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: The above is rather long-winded.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
But by the definition of smallest element:

$\min \set {n \in \N: \map f n \in x} \in \set {n \in \N: \map f n \in x}$
so $\map g x \in x$.
Thus $g$ is a choice function for $S$.
As this holds for every countable set of finite sets, the Axiom of Countable Choice for Finite Sets holds.
$\blacksquare$





