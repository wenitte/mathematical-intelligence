# 

Source: https://proofwiki.org/wiki/Induced_Outer_Measure_Restricted_to_Semiring_is_Pre-Measure

Theorem
Let $\SS$ be a semiring over a set $X$.
Let $\mu: \SS \to \overline \R_{\ge 0}$ be a pre-measure on $\SS$, where $\overline \R_{\ge 0}$ denotes the set of positive extended real numbers.
Let $\mu^*: \powerset X \to \overline \R_{\ge 0}$ be the outer measure induced by $\mu$.

Then:

$\ds \mu^*\restriction_\SS \, = \mu$
where $\restriction$ denotes restriction.


Proof
Let $S \in \SS$.
It follows immediately from the definition of the induced outer measure that $\map {\mu^*} S \le \map \mu S$.
Therefore, it suffices to show that if $\ds \sequence {A_n}_{n \mathop = 0}^\infty$ is a countable cover for $S$, then:

$\ds \map \mu S \le \sum_{n \mathop = 0}^\infty \map \mu {A_n}$
If the above statement is true, then it follows directly from the definition of infimum that $\map \mu S \le \map {\mu^*} S$, thus proving the theorem.


This page has been identified as a candidate for refactoring of medium complexity.In particular: The structure of this proof needs to be clarified. I recommend that the induction part of it be extracted into a separately-paged lemma, structured as our usual house style.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Define, for all natural numbers $n \in \N$:

$\ds B_n = A_n \setminus A_{n - 1} \setminus \cdots \setminus A_0$
where $\setminus$ denotes set difference.
We take $B_0 = A_0$.
Using the mathematical induction, we will prove that for all natural numbers $m < n$, $B_{n, m} = A_n \setminus A_{n-1} \setminus \cdots \setminus A_{n-m}$ is the finite union of pairwise disjoint elements of $\SS$.
We take $B_{n, 0} = A_n$.
The base case $m = 0$ is trivial.


The term Definition:Trivial as used here has been identified as being ambiguous.If you are familiar with this area of mathematics, you may be able to help improve $\mathsf{Pr} \infty \mathsf{fWiki}$ by determining the precise term which is to be used.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Disambiguate}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Now assume the induction hypothesis that the above statement is true for some natural number $m < n - 1$, and let $D_1, D_2, \ldots, D_N$ be pairwise disjoint elements of $\SS$ such that:

$\ds B_{n, m} = \bigcup_{k \mathop = 1}^N D_k$
Then:














\(\ds B_{n, m+1}\)

\(=\)







\(\ds B_{n, m} \setminus A_{n - m - 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{k \mathop = 1}^N D_k} \setminus A_{n - m - 1}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{k \mathop = 1}^N \paren {D_k \setminus A_{n - m - 1} }\)





by Set Difference is Right Distributive over Union



By the definition of a semiring, for all natural numbers $k \le N$, $D_k \setminus A_{n - m - 1}$ is the finite union of pairwise disjoint elements of $\SS$.
Hence $B_{n, m+1}$ is the finite union of pairwise disjoint elements of $\SS$, completing the induction step.
Therefore, $B_{n, n-1} = B_n$ is the finite union of pairwise disjoint elements of $\SS$, as desired.

Using the above result and applying the axiom of countable choice, we can, for all $n \in \N$, choose a finite set $\FF_n$ of pairwise disjoint elements of $\SS$ for which:

$\ds B_n = \bigcup \FF_n$

Now, $x \in S$ if and only if there exists an $n \in \N$ such that $x \in S \cap A_n$.
Taking the smallest such $n$, which exists because $\N$ is well-ordered, it follows that $x \notin A_0, A_1, \ldots, A_{n - 1}$, and so $x \in S \cap B_n$.
Therefore:

$\ds S = \bigcup_{n \mathop = 0}^\infty \paren {S \cap B_n}$

Hence:














\(\ds \map \mu S\)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop = 0}^\infty \paren {S \cap B_n} }\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop = 0}^\infty \paren {S \cap \bigcup_{T \mathop \in \FF_n} T} }\)





by definition of $\FF_n$














\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop = 0}^\infty \bigcup_{T \mathop \in \FF_n} \paren {S \cap T} }\)





Intersection Distributes over Union














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 0}^\infty \sum_{T \mathop \in \FF_n} \map \mu {S \cap T}\)





countable union of finite sets is countable and Definition of Countably Subadditive Function














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 0}^\infty \sum_{T \mathop \in \FF_n} \map \mu T\)





Definition of Monotone














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \map \mu {\bigcup \FF_n}\)





Definition of Additive Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \map \mu {B_n}\)





by definition of $\FF_n$














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 0}^\infty \map \mu {A_n}\)





Set Difference is Subset and Definition of Monotone



$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





