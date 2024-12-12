# 

Source: https://proofwiki.org/wiki/Existence_of_Non-Measurable_Subset_of_Real_Numbers


It has been suggested that this page or section be merged into Vitali Set Existence Theorem.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
There exists a subset of the real numbers which is not measurable.


Proof
We construct such a set.
For $x, y \in \hointr 0 1$, define the sum modulo 1:

$x +_1 y = \begin {cases} x + y & : x + y < 1 \\ x + y - 1 & : x + y \ge 1 \end {cases}$
Let $E \subset \hointr 0 1$ be a measurable set.
Let $E_1 = E \cap \hointr 0 {1 - x}$ and $E_2 = E \cap \hointr {1 - x} 1$.
By Measure of Interval is Length, these disjoint intervals are measurable.
By Measurable Sets form Algebra of Sets, so are these intersections $E_1$ and $E_2$.
So:

$\map m {E_1} + \map m {E_2} = \map m E$

We have:

$E_1 +_1 x = E_1 + x$
By Lebesgue Measure is Translation Invariant:

$\map m {E_1 +_1 x} = \map m {E_1}$
Also:

$E_2 +_1 x = E_2 + x - 1$
and so:

$\map m {E_2 +_1 x} = \map m {E_2}$
Then we have:

$\map m {E +_1 x} = \map m {E_1 +_1 x} + \map m {E_2 +_1 x} = \map m {E_1} + \map m {E_2} = \map m E$
So, for each $x \in \hointr 0 1$, the set $E +_1 x$ is measurable and:

$\map m {E + x} = \map m E$

Taking, as before, $x, y \in \hointr 0 1$, define the relation:

$x \sim y \iff x - y \in \Q$
where $\Q$ is the set of rational numbers.
By Difference is Rational is Equivalence Relation, $\sim$ is an equivalence relation.
As this is an equivalence relation we can invoke the fundamental theorem on equivalence relations.
Hence $\sim$ partitions $\hointr 0 1$ into equivalence classes.
By the axiom of choice, there is a set $P$ which contains exactly one element from each equivalence class.

Aiming for a contradiction, suppose $P$ is measurable.
Let $\set {r_i}_{i \mathop = 0}^\infty$ be an enumeration of the rational numbers in $\hointr 0 1$ with $r_0 = 0$.
Let $P_i := P +_1 r_i$.
Then $P_0 = P$.
Let $x \in P_i \cap P_j$.
Then:

$x = p_i + r_i = p_j + r_j$
where $p_i, p_j$ are elements of $P$.
But then $p_i - p_j$ is a rational number.
Since $P$ has only one element from each equivalence class:

$i = j$
The $P_i$ are pairwise disjoint.
Each real number $x \in \hointr 0 1$ is in some equivalence class and hence is equivalent to an element of $P$.
But if $x$ differs from an element in $P$ by the rational number $r_i$, then $x \in P_i$ and so:

$\ds \bigcup P_i = \hointr 0 1$
Since each $P_i$ is a translation modulo $1$ of $P$, each $P_i$ will be measurable if $P$ is, with measure $\map m {P_i} = \map m P$.
But if this were the case, then:

$\ds m \hointr 0 1 = \sum_{i \mathop = 1}^\infty m \paren {P_i} = \sum_{i \mathop = 1}^\infty \map m P$
Therefore:

$\map m P = 0$ implies $m \hointr 0 1 = 0$
and:

$\map m P \ne 0$ implies $m \hointr 0 1 = \infty$
This contradicts Measure of Interval is Length.
So the set $P$ is not measurable.
$\blacksquare$


Axiom of Choice
This proof depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI).
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.



This article, or a section of it, needs explaining.In particular: While BPI has been invoked as being necessary for this theorem, no explanation has been added as to why, or how, or where it would be applied.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Sources
1984: Gerald B. Folland: Real Analysis: Modern Techniques and their Applications : $\S 1.1$




