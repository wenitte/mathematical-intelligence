# 

Source: https://proofwiki.org/wiki/Infinite_Series_of_Functions_is_Uniformly_Convergent_iff_Sequence_of_Partial_Sums_is_Uniformly_Cauchy


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $S \subseteq \R$.
Let $\sequence {f_n}$ be a sequence of real functions $S \to \R$.

Then the infinite series: 

$\ds \sum_{n \mathop = 1}^\infty f_n$
converges uniformly on $S$ if and only if for all $\varepsilon \in \R_{> 0}$ there exists $N \in \N$ such that:

$\ds \size {\sum_{k \mathop = m + 1}^n \map {f_k} x} < \varepsilon$
for all $x \in S$ and $n > m > N$.


Proof
Let $\sequence {s_n}$ be a sequence of real functions $S \to \R$ with: 

$\ds \map {s_n} x = \sum_{k \mathop = 1}^n \map {f_k} x$
for each $n \in \N$ and $x \in S$.
By definition of uniform convergence of an infinite series:

$\ds \sum_{n \mathop = 1}^\infty f_n$ is uniformly convergent if and only if $\sequence {s_n}$ is uniformly convergent.
By Sequence of Functions is Uniformly Cauchy iff Uniformly Convergent:

$\sequence {s_n}$ is uniformly convergent if and only if it is uniformly Cauchy.
That is:

for all $\varepsilon \in \R_{> 0}$ there exists $N \in \N$ such that for all $m, n > N$ we have:
$\size {\map {s_n} x - \map {s_m} x} < \varepsilon$ for all $x \in S$.
Note that if $n = m$: 

$\size {\map {s_n} x - \map {s_m} x} = 0 < \varepsilon$
Without loss of generality, we can therefore take $n > m$.
If $n > m$, then:














\(\ds \size {\map {s_n} x - \map {s_m} x}\)

\(=\)







\(\ds \size {\sum_{k \mathop = 1}^n \map {f_k} x - \sum_{k \mathop = 1}^m \map {f_k} x}\)




















\(\ds \)

\(=\)







\(\ds \size {\sum_{k \mathop = m + 1}^n \map {f_k} x}\)









So $\sequence {s_n}$ is uniformly Cauchy if and only if for all $\varepsilon \in \R_{> 0}$ there exists $N \in \N$ such that:

$\ds \size {\sum_{k \mathop = m + 1}^n \map {f_k} x} < \varepsilon$
for all $n > m > N$ and $x \in S$.
$\blacksquare$


Sources
1973: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): $\S 9.6$: Uniform Convergence of Infinite Series of Functions: Theorem $9.5$




