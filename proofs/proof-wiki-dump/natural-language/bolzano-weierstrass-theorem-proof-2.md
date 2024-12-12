# 

Source: https://proofwiki.org/wiki/Bolzano-Weierstrass_Theorem/Proof_2



Theorem
Every bounded sequence of real numbers has a convergent subsequence.


Proof
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


Notes
This proof uses Cauchy's Convergence Criterion.
To avoid a circular proof, we must create a proof for the criterion that does not depend on the Bolzano-Weierstrass Theorem, such as this.


Also see
Heine-Borel Theorem


Source of Name
This entry was named for Bernhard Bolzano and Karl Weierstrass.





