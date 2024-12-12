# 

Source: https://proofwiki.org/wiki/Borel-Cantelli_Lemma



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of $\Sigma$-measurable sets.
If:

$\ds \sum_{n \mathop = 1}^\infty \map \mu {E_n} < \infty$
then:

$\ds \map \mu {\limsup_{n \mathop \to \infty} E_n} = 0$
where $\limsup$ denotes limit superior of sets.


Proof
By definition of limit superior:

$\ds \limsup_{n \mathop \to \infty} E_n = \bigcap_{i \mathop = 1}^\infty \bigcup_{j \mathop = i}^\infty E_j$
Thus, by Measure is Monotone and Intersection is Subset:

$(1): \quad \ds \map \mu {\limsup_{n \mathop \to \infty} E_n} = \map \mu {\bigcap_{i \mathop = 1}^\infty \bigcup_{j \mathop = i}^\infty E_j} \le \map \mu {\bigcup_{j \mathop = i}^\infty E_j}$
for all $i \in \N$.

By Measure is Subadditive:

$\ds \map \mu {\bigcup_{j \mathop = i}^\infty E_j} \le \sum_{j \mathop = i}^\infty \map \mu {E_j}$
However, by assumption $\ds \sum_{n \mathop = 1}^\infty \map \mu {E_n}$ converges.
By Tail of Convergent Series tends to Zero this implies:

$\ds \lim_{i \mathop \to \infty} \sum_{n \mathop = i}^\infty \map \mu {E_n} = 0$

Now $(1)$ implies, together with Lower and Upper Bounds for Sequences, that:

$\ds \map \mu {\limsup_{n \mathop \to \infty} E_n} \le 0$
But as $\mu$ is a measure, the converse inequality also holds.

Hence:

$\ds \map \mu {\limsup_{n \mathop \to \infty} E_n} = 0$
$\blacksquare$


Borel-Cantelli Lemma in Probability

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
As each probability space $\struct {X, \Sigma, \Pr}$ is a measure space, the result carries over to probability theory.
Hence, given any countable sequence of events $E_n$, the sum of whose probabilities is finite, the probability that infinitely many of the events occur is zero.


Also see
Second Borel-Cantelli Lemma


Source of Name
This entry was named for Émile Borel and Francesco Paolo Cantelli.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Borel-Cantelli lemma
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 6$: Problem $9$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Borel-Cantelli Lemma




