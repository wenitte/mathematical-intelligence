# 

Source: https://proofwiki.org/wiki/Arzel%C3%A0-Ascoli_Theorem


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $X$ be a compact Hausdorff space.
Let $Y$ be a metric space.
Let $\CC$ be the set of all continuous functions $X \to Y$.
Consider $\CC$ as a metric space with the supremum metric:

$\ds \map {d_\infty} {f, g} := \sup_{x \mathop \in X} \map d {\map f x, \map g x}$
Then a set $F \subseteq \CC$ is relatively compact if and only if it is pointwise equicontinuous and pointwise relatively compact.


Proof
Pointwise properties imply relative compactness
By Sequentially Compact Metric Space is Compact, it suffices to show that every sequence in $F$ has a uniformly convergent subsequence.
Note that the limit need not lie in $F$.
For the proof, we will first construct a set $P \subseteq X$ which we will use like a countable dense subset.
Then we will use $P$ to construct a subsequence of any given sequence in $F$.
This subsequence will yield the result.
$\Box$


Constructing $P$
By pointwise equicontinuity, for every $n \in \N$, there is a neighbourhood $U_{n; x}$ around any $x$ such that for all $f \in F$ and all $y \in U$, we have:


This article, or a section of it, needs explaining.In particular: What's this notation? $U_{n; x}$ It's not standard, and it's also ugly and difficult to readYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\map {d_\infty} {\map f x, \map f y} < n^{-1}$
This gives, for every $n \in \N$, a cover $\set {U_{n; x}: x \in X}$ of $X$.
By compactness of $X$, each of these has a finite subcover.
Let $P_n$ consist of one point from each $U_{n; x}$ in this subcover.
Let $\ds P = \bigcup_{n \mathop = 1}^\infty P_n$.
As Countable Union of Finite Sets is Countable, $P$ is countable.
Therefore, we may let $P$ be enumerated by a sequence $\sequence {p_n}$.
$\Box$


Construction of subsequence
Let $\sequence {f_n}$ be a sequence in $F$.
Inductively construct sequences $\sequence {f_{n; k} }$ for each positive integer $k$ as follows.
We set $f_{n; 1} := f_n$.
If $\sequence {f_{n; k} }$ is constructed, consider $\sequence {\map {f_{n; k} } {p_k} }$.
As each $f \in F$ is pointwise relatively compact, the image of this sequence is relatively compact.
Therefore, by Countably Compact First-Countable Space is Sequentially Compact, there is a monotone $a: \N \to \N$ such that $\sequence {\map {f_{\map a n; k} } {p_k} }$ converges.
Let $f_{n; k + 1} := f_{\map a n; k}$.
Let $g_n := f_{n; n}$.
The sequence $\sequence {g_n}$ is a subsequence of $\sequence {f_n}$.
$\Box$


Convergence of subsequence
Let $\epsilon > 0$ be aribitrary.
Let $N \in \N$ such that $N^{-1} < \dfrac \epsilon 3$.
By construction of $\sequence {g_n}$, for any $p \in P_N$, $\map {g_n} p$ converges.
By Convergent Sequence in Metric Space is Cauchy Sequence, we can find $N_p$ such that for all $n, m \ge N_p$:

$\map d {\map {g_n} p, \map {g_m} p} < \dfrac \epsilon 3$
By construction of $P_N$, for each $x \in X$, we can pick a $p_x \in P_N$ such that for all $n$:

$\map d {\map {g_n} x, \map {g_n} {p_x} } < \dfrac \epsilon 3$
Let $K := \max \set {N_p: p \in P_N}$.
This means that for all $n, m \ge K$, we have:














\(\ds d_\infty(g_n, g_m)\)

\(=\)







\(\ds \sup_{x \mathop \in X} \map d {\map {g_n} x, \map {g_m} x}\)





Definition of Supremum Metric














\(\ds \)

\(\le\)







\(\ds \sup_{x \mathop \in X} \map d {\map {g_n} x, \map {g_n} {p_x} } + \map d {\map {g_n} {p_x}, \map {g_m} {p_x} } + \map d {\map {g_m} {p_x}, \map {g_m} x}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \sup_{x \mathop \in X} \frac \epsilon 3 + \dfrac \epsilon 3 + \dfrac \epsilon 3\)





a priori














\(\ds \)

\(=\)







\(\ds \epsilon\)









Therefore, $\sequence {g_n}$ is a Cauchy sequence in $\CC$.
This implies that $\sequence {g_n}$ converges.


This article, or a section of it, needs explaining.In particular: Why is this sufficient? $Y$ need not be complete. It appears the corresponding page does not yet exist.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

$\Box$


Relative compactness implies pointwise properties
By Evaluation Mapping is Continuous, the map $e: \CC \to Y; f \mapsto \map f x$ is continuous.
Hence if $F$ is relatively compact, so is $e \sqbrk F = \set {\map f x: f \in F}$, because Continuous Image of Compact Space is Compact.
That is, $F$ is then also pointwise relatively compact.
Now suppose by way of contradiction that $F$ is relatively compact, but not pointwise equicontinuous.
Then there is an $x \in X$ and an $\epsilon > 0$ such that for all neighbourhoods $U$ of $x$, there are $x_U \in U$ and $f_U \in F$ such that:

$\map {d_\infty} {\map {f_U} x, \map {f_U} {x_U} } \ge \epsilon$
By Countably Compact First-Countable Space is Sequentially Compact, any sequence consisting of such $f_U$ has a convergent subsequence.
However, the terms of this subsequence are still in $f_U$. 
Therefore, by Limit Preserves Inequality, we have for all $x_U$:

$\map {d_\infty} {\map f x, \map f {x_U} } \ge \epsilon$
This means that $f$ is not continuous.
This is in contradiction to the Uniform Limit Theorem.
$\blacksquare$


Source of Name
This entry was named for Cesare Arzelà and Giulio Ascoli.





