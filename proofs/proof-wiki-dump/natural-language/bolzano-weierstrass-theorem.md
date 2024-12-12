# 

Source: https://proofwiki.org/wiki/Bolzano-Weierstrass_Theorem


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Every bounded sequence of real numbers has a convergent subsequence.


General Form
Every infinite bounded space in a real Euclidean space has at least one limit point.


Proof 1
Let $\sequence {x_n}$ be a bounded sequence in $\R$.
By the Peak Point Lemma, $\sequence {x_n}$ has a monotone subsequence $\sequence {x_{n_r} }$.
Since $\sequence {x_n}$ is bounded, so is $\sequence {x_{n_r} }$.
Hence, by the Monotone Convergence Theorem (Real Analysis), the result follows.
$\blacksquare$


Proof 2
Let $\sequence {x_n}_{n \mathop \in \N}$ be a bounded sequence in $\R$.
By definition there are real numbers $a, b \in \R$ such that $ x_n \in \openint{a}{b}$ for all $n \in \N$.
We will construct a subsequence  $\sequence {x_{n_i}}_{i \mathop \in \N}$ and two sequences of real numbers $\sequence {b_i}_{i \mathop \in \N}$, $\sequence {c_i}_{i \mathop \in \N}$ as follows:
Set $a_0 = a$, and $b_0 = b$.
For $i \in \N$, at least one of the sets:

$\set {x_n: n > n_{i-1} , a_i < x_n < \dfrac {a_i + b_i} 2 }, \set {x_n : n > n_{i-1} , \dfrac {a_i + b_i} 2 < x_n < b_i }, \set {x_n : n > n_{i-1} , x_n = \dfrac {a_i + b_i } 2 }$
contains infinitely many elements.
If the set $\set {x_n : n > n_{i-1} , x_n = \dfrac {a_i + b_i} 2 }$ is infinite, the elements of this set form a subsequence that converges to $\dfrac {a_i + b_i} 2$, and the proof is done.
If instead the set $\set {x_n: n > n_{i-1} , a_i < x_n < \dfrac {a_i + b_i} 2 }$ is infinite, define $x_{n_i}$ as the element of that set with the smallest index.
In this case, set $a_{i+1} = a_i$, and $b_{i+1} = \dfrac { a_i + b_i } 2 $.
If instead the set $\set {x_n : n > n_{i-1} , \dfrac {a_i + b_i} 2 < x_n < b_i }$ is infinite, define $x_{n_i}$ as the element of that set with the smallest index.
In this case, set $a_{i+1} = \dfrac { a_i + b_i } 2 $, and $b_{i+1} = b_i$.
In both cases, we have $x_{n_i} \in \openint{ a_j }{ b_j }$ for all $j \in \N$ with $j < i$, so

$\size { x_{n_j} - x_{n_i} } < b_j - a_j = \dfrac{ a + b } {2^j}$
Repeat this process so we obtain a subsequence $\sequence {x_{n_i} }_{i \mathop \in \N}$.
Given $\epsilon > 0$, we can choose $j \in \N$ so $\size { x_{n_{i}} - x_{n_{i'}} } < \dfrac{ a + b } {2^j} < \epsilon$ for all $i , i' \geq j$.
By Definition of Real Cauchy Sequence, the subsequence is a Cauchy sequence.
By Cauchy's Convergence Criterion on Real Numbers, the subsequence converges.

$\blacksquare$


Also known as
Some sources refer to the Bolzano-Weierstrass Theorem as the Weierstrass-Bolzano Theorem.
It is also known as Weierstrass's Theorem, but that name is also applied to a completely different result.


Also see
Heine-Borel Theorem


Source of Name
This entry was named for Bernhard Bolzano and Karl Weierstrass.


Historical Note
The Bolzano-Weierstrass Theorem is a crucial property of the real numbers discovered independently by both Bernhard Bolzano and Karl Weierstrass during their work on putting real analysis on a rigorous logical footing.
It was originally referred to as Weierstrass's Theorem until Bolzano's thesis on the subject was rediscovered.


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Exercise $5$




