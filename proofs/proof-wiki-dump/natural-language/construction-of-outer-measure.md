# 

Source: https://proofwiki.org/wiki/Construction_of_Outer_Measure



Theorem
Let $X$ be a set.
Let $\powerset X$ be the power set of $X$.
Let $\AA$ be a subset of $\powerset X$ which contains the empty set.

Let $\overline \R_{\ge 0}$ denote the set of positive extended real numbers.
Let $\gamma: \AA \to \overline \R_{\ge 0}$ be a mapping such that $\map \gamma \O = 0$.

Let $\mu^*: \powerset X \to \overline \R_{\ge 0}$ be the mapping defined as:

$\ds \forall S \in \powerset X: \map {\mu^*} S = \inf \set {\sum_{n \mathop = 0}^\infty \map \gamma {A_n}: \forall n \in \N : A_n \in \AA, \ S \subseteq \bigcup_{n \mathop = 0}^\infty A_n}$
where the infimum of the empty set is $+\infty$.

Then $\mu^*$ is an outer measure on $X$.


Proof
We check each of the criteria for an outer measure.
From the assumption $\map \gamma \O = 0$:

$\map {\mu^*} \O = 0$
Any cover of a set is also a cover of a subset of it.
Thus $\mu^*$ is monotone by Infimum of Subset.

It remains to be shown that $\mu^*$ is countably subadditive.
Let $\sequence {S_n}$ be a sequence of subsets of $X$.
Let $\ds S := \bigcup_{n \mathop = 0}^\infty S_n$.

Suppose there does not exist a countable cover for $S_n$ by elements of $\AA$ for some  $n \in \N$.
Then there does not exist a countable cover for $S$ by elements of $\AA$.
In this case, the result follows immediately.

Now suppose that for each $n \in \N$, there exists a countable cover for $S_n$ by elements of $\AA$.
Let $\epsilon \in \R_{>0}$ be an arbitrary (strictly) positive real number.
By definition of infimum, for each $n \in \N$, we can apply the axiom of countable choice to choose a countable cover $\CC_n \subseteq \AA$ of $S_n$ such that:

$\ds \sum_{x \mathop \in \CC_n} \map \gamma x < \map {\mu^*} {S_n} + \frac \epsilon {2^{n + 1} }$
Let $\ds \CC = \bigcup_{n \mathop = 0}^\infty \CC_n$.
Then $\CC$ is a subset of $\AA$ and a cover for $S$.
Furthermore, $\CC$ is the countable union of countable sets.
By Countable Union of Countable Sets is Countable, $\CC$ is itself countable.
Therefore:














\(\ds \map {\mu^*} S\)

\(\le\)







\(\ds \sum_{x \mathop \in \CC} \map \gamma x\)





by definition of $\mu^*$














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 0}^\infty \sum_{x \mathop \in \CC_n} \map \gamma x\)





since each $x \in \CC$ belongs to some $\CC_n$














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\map {\mu^*} {S_n} + \frac \epsilon {2^{n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \epsilon + \sum_{n \mathop = 0}^\infty \map {\mu^*} {S_n}\)





Sum of Infinite Geometric Sequence



Since $\epsilon$ was arbitrary, the result follows.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Consequences

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Make this a corollary.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
It follows immediately that the induced outer measure is an outer measure.


Sources
2006: J. Yeh: Real Analysis: Theory of Measure and Integration




