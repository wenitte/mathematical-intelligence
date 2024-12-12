# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Subsets



Theorem
Let $S$ be a set such that $\card S = n$.
Let $m \le n$.

Then the number of subsets $T$ of $S$ such that $\card T = m$ is:

$\dbinom n m = \dfrac {n!} {m! \paren {n - m}!}$


Proof 1
For each $X \subseteq \N_n$ and $Y \subseteq S$, let $\map B {X, Y}$ be the set of all bijections from $X$ onto $Y$.
Let $\Bbb S$ be the set of all subsets of $S$ with $m$ elements.
By Cardinality of Power Set of Finite Set and Cardinality of Subset of Finite Set, $\Bbb S$ is finite, so let $s = \card {\Bbb S}$.
Let $\beta: \map B {\N_n, S} \to \Bbb S$ be the mapping defined as:

$\forall f \in \map B {\N_n, S}: \map \beta f = \map f {\N_m}$

For each $Y \in \Bbb S$, the mapping:

$\Phi_Y: \map {\beta^{-1} } Y \to \map B {\N_m, Y} \times \map B {\N_n - \N_m, S - Y}$
defined as:

$\map {\Phi_Y} f = \tuple {f_{\N_m}, f_{\N_n - \N_m} }$
is also (clearly) a bijection.

By Cardinality of Set of Bijections:

$\card {\map B {\N_m, Y} } = m!$
and:

$\card {\map B {\N_n - \N_m, S - Y} } = \paren {n - m}!$
So by Cardinality of Cartesian Product of Finite Sets:

$\card {\map {\beta^{-1} } Y} = m! \paren {n - m}!$
It is clear that $\set {\map {\beta^{-1} } Y: Y \in \Bbb S}$ is a partition of $\map B {\N_n, S}$.
Therefore by Number of Elements in Partition:

$\card {\map B {\N_n, S} } = m! \paren {n - m}! s$
Consequently, as $\card {\map B {\N_n, S} } = n!$ by Cardinality of Set of Bijections, it follows that:

$m! \paren {n - m}! s = n!$
and the result follows.
$\blacksquare$


Proof 2
Let $\dbinom n m$ denote the number of subsets of $m$ elements of $S$.
From Number of Permutations, the number of $m$-permutations of $S$ is:

${}^m P_n = \dfrac {n!} {\paren {n - m}!}$
Consider the way ${}^m P_n$ can be calculated.
First one makes the selection of which $m$ elements of $S$ are to be arranged.
This number is $\dbinom n m$.
Then for each selection, the number of different arrangements of these is $m!$, from Number of Permutations.
So:














\(\ds m! \cdot \dbinom n m\)

\(=\)







\(\ds {}^m P_n\)





Product Rule for Counting














\(\ds \)

\(=\)







\(\ds \frac {n!} {\paren {n - m}!}\)





Number of Permutations








\(\ds \leadsto \ \ \)





\(\ds \dbinom n m\)

\(=\)







\(\ds \frac {n!} {m! \paren {n - m}!}\)





Product Rule for Counting



$\blacksquare$


Proof 3
Let $\N_n$ denote the set $\set {1, 2, \ldots, n}$.
Let $\struct {S_n, \circ}$ denote the symmetric group on $\N_n$.
Let $r \in \N: 0 < r \le n$.
Let $B_r$ denote the set of all subsets of $\N_n$ of cardinality $r$:

$B_r  := \set {S \subseteq \N_n: \card S = r}$

Let $*$ be the mapping $*: S_n \times B_r \to B_r$ defined as:

$\forall \pi \in S_n, \forall S \in B_r: \pi * B_r = \pi \sqbrk S$
where $\pi \sqbrk S$ denotes the image of $S$ under $\pi$.
From Group Action of Symmetric Group on Subset it is established that $*$ is a group action.

The stabilizer of any $U \in B_r$ is the set of permutations on $\N_n$ that fix $U$.

Let $U = \set {1, 2, \ldots, r}$.
So:

$\tuple {a_1, a_2, \ldots, a_r}$ can be any one of the $r!$ permutations of $1, 2, \ldots, r$
$\tuple {a_{r + 1}, a_{r + 2}, \ldots, _n}$ can be any one of the $\paren {n - r}!$ permutations of $r + 1, r + 2, \ldots, n$.
Thus:

$\order {\Stab U} = r! \paren {n - r}!$
From Group Action of Symmetric Group on Subset is Transitive:

$B_r = \Orb U$
and so:

$\card {B_r} = \card {\Orb U}$
From the Orbit-Stabilizer Theorem:

$\card {\Orb U} = \dfrac {\order {S_n} } {\order {\Stab U} } = \dfrac {n!} {r! \paren {n - r}!}$
But $\card {B_r}$ is the number of subsets of $\N_n$ of cardinality $r$.
Hence the result.
$\blacksquare$


Proof 4
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\dbinom n m = \dfrac {n!} {m! \paren {n - m}!}$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \dbinom 1 m\)

\(=\)







\(\ds \dfrac {1!} {1! \paren {m - 1}!}\)




















\(\ds \)

\(=\)







\(\ds \begin {cases} 1 & : m = 0 \text { or } m = 1 \\ 0 & : \text {otherwise} \end {cases}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1!} {0! \paren {1 - 0}!}\)





for $m = 0$














\(\ds \)

\(=\)







\(\ds \dfrac {1!} {1! \paren {1 - 1}!}\)





for $m = 1$



Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\dbinom k m = \dfrac {k!} {m! \paren {k - m}!}$

from which it is to be shown that:

$\dbinom {k + 1} m = \dfrac {\paren {k + 1}!} {m! \paren {k + 1 - m}!}$


Induction Step
This is the induction step:
The number of ways to choose $m$ elements from $k + 1$ elements is:

the number of ways to choose $m$ elements elements from $k$ elements (deciding not to select the $k + 1$th element)
added to:

the number of ways to choose $m - 1$ elements elements from $k$ elements (after having selected the $k + 1$th element for the $n$th selection)















\(\ds \dbinom {k + 1} m\)

\(=\)







\(\ds \binom k m + \binom k {m - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {k!} {m! \paren {k - m}!} + \dfrac {k!} {\paren {m - 1}! \paren {k - m + 1}!}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {k + 1}!} {m! \paren {k - m + 1}!}\)





after algebra














\(\ds \)

\(=\)







\(\ds \binom {k + 1} m\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>0}: \dbinom n m = \dfrac {n!} {m! \paren {n - m}!}$


Also denoted as
The number of subsets of cardinality $m$ that can be taken from a set of cardinality $n$ can also be seen as:

${}_n C_m$
${}^n C_m$
${C_n}^m$
In order to avoid any ambiguity, $\mathsf{Pr} \infty \mathsf{fWiki}$ will tend to use $\dbinom n m$.


Also presented as
This result is also presented in the form:

The number of combinations of $n$ objects taken $m$ at a time
or:

The number of selections of $n$ objects taken $r$ at a time
or:

The number of ways of selecting $m$ objects out of $n$
or:

The number of ways of choosing $m$ objects from $n$ where order does not matter
or:

The number of ways of choosing a set of $m$ elements from the $n$ elements of the set $S$
Such wording is insufficiently precise for $\mathsf{Pr} \infty \mathsf{fWiki}$.


Examples
Also see
Definition:Binomial Coefficient
Binomial Theorem


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 1$: Operations on Sets
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (next): $\text I$. Algebra: Permutations and Combinations
1964: A.M. Yaglom and I.M. Yaglom: Challenging Mathematical Problems With Elementary Solutions: Volume $\text { I }$ ... (previous) ... (next): Problems
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.3$. Partitions: Example $35$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.4$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.6$: Theorem $8: \ 3$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): combination
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): combination
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): selection




