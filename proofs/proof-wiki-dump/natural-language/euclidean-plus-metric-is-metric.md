# 

Source: https://proofwiki.org/wiki/Euclidean_Plus_Metric_is_Metric



Theorem
Let $\R$ be the set of real numbers.
Let $d: \R \times \R \to \R$ be the Euclidean plus metric:

$\map d {x, y} := \size {x - y} + \ds \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\max_{j \mathop \le i} \frac 1 {\size {x - r_j}} - \max_{j \mathop \le i} \frac 1 {\size {y - r_j} } } }$

Then $d$ is indeed a metric.


Proof
Recall that $\set {r_j}_{j \mathop \in \N}$ is an enumeration of the rational numbers $\Q$.

Also, we note that:














\(\ds \)

\(\)







\(\ds \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\max_{j \mathop \le i} \frac 1 {\size {x - r_j} } - \max_{j \mathop \le i} \frac 1 {\size {x - r_j} } } }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 1}^\infty 2^{-i} 1\)





Definition of Infimum of Subset of Real Numbers














\(\ds \)

\(=\)







\(\ds 1\)





Sum of Infinite Geometric Sequence: Corollary 1 with $z = \dfrac 1 2$



meaning that this is a convergent series and so the definition is meaningful.

Next the axioms for a metric are checked in turn.


Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map d {x, x}\)

\(=\)







\(\ds \size {x - x} + \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\max_{j \mathop \le i} \frac 1 {\size {x - r_j} } - \max_{j \mathop \le i} \frac 1 {\size {x - r_j} } } }\)




















\(\ds \)

\(=\)







\(\ds 0 + \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, 0}\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $i \in \N$ be fixed.
Define:

$\map {f_i} x := \ds \max_{j \mathop \le i} \frac 1 {\size {x - r_j} }$

Then:














\(\ds \)

\(\)







\(\ds \inf \set {1, \size {\map {f_i} x - \map {f_i} y} } + \inf \set {1, \size {\map {f_i} y - \map {f_i} z} }\)




















\(\ds \)

\(=\)







\(\ds \inf \set {1 + 1, 1 + \size {\map {f_i} y - \map {f_i} z}, \size {\map {f_i} x - \map {f_i} y} + 1, \size {\map {f_i} x - \map {f_i} y} + \size {\map {f_i} y - \map {f_i} z} }\)





Sum of Infima is Infimum of Sums




Now since $\inf \set {1, \size {\map {f_i} x - \map {f_i} z} } \le 1$, it follows that:














\(\ds \inf \set {1, \size {\map {f_i} x - \map {f_i} z} }\)

\(\le\)







\(\ds 1 + 1\)




















\(\ds \inf \set {1, \size {\map {f_i} x - \map {f_i} z} }\)

\(\le\)







\(\ds 1 + \size {\map {f_i} y - \map {f_i} z}\)




















\(\ds \inf \set {1, \size {\map {f_i} x - \map {f_i} z} }\)

\(\le\)







\(\ds \size {\map {f_i} x - \map {f_i} y} + 1\)










Suppose now that $\size {\map {f_i} x - \map {f_i} z} \le 1$.
Then:














\(\ds \inf \set {1, \size {\map {f_i} x - \map {f_i} z} }\)

\(=\)







\(\ds \size {\map {f_i} x - \map {f_i} z}\)




















\(\ds \)

\(\le\)







\(\ds \size {\map {f_i} x - \map {f_i} y} + \size {\map {f_i} y - \map {f_i} z}\)





Triangle Inequality for Real Numbers




On the other hand, if:

$\size {\map {f_i} x - \map {f_i} z} > 1$
then also:

$\size {\map {f_i} x - \map {f_i} y} + \size {\map {f_i} y - \map {f_i} z} > 1$
and:














\(\ds \inf \set {1, \size {\map {f_i} x - \map {f_i} z} }\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(<\)







\(\ds \size {\map {f_i} x - \map {f_i} y} + \size {\map {f_i} y - \map {f_i} z}\)










Combining both cases with the estimates above, we conclude:

$\ds \inf \set {1, \size {\map {f_i} x - \map {f_i} z} } \le \inf \set {1, \size {\map {f_i} x - \map {f_i} y} } + \inf \set {1, \size {\map {f_i} y - \map {f_i} z} }$

Finally, now, we have:














\(\ds \map d {x, z}\)

\(=\)







\(\ds \size {x - z} + \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\map {f_i} x - \map {f_i} z} }\)




















\(\ds \)

\(\le\)







\(\ds \paren {\size {x - y} + \size {y - z} } + \sum_{i \mathop = 1}^\infty 2^{-i} \le \inf \set {1, \size {\map {f_i} x - \map {f_i} y} } + \inf \set {1, \size {\map {f_i} y - \map {f_i} z} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\size {x - y} + \sum_{i \mathop = 1}^\infty 2^{-i} \le \inf \set {1, \size {\map {f_i} x - \map {f_i} y} } } + \paren {\size {y - z} + \sum_{i \mathop = 1}^\infty 2^{-i} \le \inf \set {1, \size {\map {f_i} y - \map {f_i} z} } }\)




















\(\ds \)

\(=\)







\(\ds \map d {x, y} + \map d {y, z}\)









$\Box$


Proof of Metric Space Axiom $(\text M 3)$
We have that:














\(\ds \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\max_{j \mathop \le i} \frac 1 {\size {x - r_j} } - \max_{j \mathop \le i} \frac 1 {\size {y - r_j} } } }\)

\(=\)







\(\ds \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {-\paren {\max_{j \mathop \le i} \frac 1 {\size {x - r_j} } - \max_{j \mathop \le i} \frac 1 {\size {y - r_j} } } } }\)





Absolute Value of Negative














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\max_{j \mathop \le i} \frac 1 {\size {y - r_j} } - \max_{j \mathop \le i} \frac 1 {\size {x - r_j} } } }\)










Hence:














\(\ds \map d {x, y}\)

\(=\)







\(\ds \size {x - y} + \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\max_{j \mathop \le i} \frac 1 {\size {x - r_j} } - \max_{j \mathop \le i} \frac 1 {\size {y - r_j} } } }\)




















\(\ds \)

\(=\)







\(\ds \size {y - x} + \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\max_{j \mathop \le i} \frac 1 {\size {x - r_j} } - \max_{j \mathop \le i} \frac 1 {\size {y - r_j} } } }\)





$\size {\, \cdot \,}$ is a metric














\(\ds \)

\(=\)







\(\ds \size {y - x} + \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\max_{j \mathop \le i} \frac 1 {\size {y - r_j} } - \max_{j \mathop \le i} \frac 1 {\size {x - r_j} } } }\)





from above














\(\ds \)

\(=\)







\(\ds \map d {y, x}\)









$\Box$


Proof of Metric Space Axiom $(\text M 4)$
Suppose that $x \ne y$.
Then:














\(\ds \size {x - y} + \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\max_{j \mathop \le i} \frac 1 {\size {x - r_j} } - \max_{j \mathop \le i} \frac 1 {\size {y - r_j} } } }\)

\(\ge\)







\(\ds \size {x - y}\)




















\(\ds \)

\(>\)







\(\ds 0\)





$\size {\, \cdot \,}$ is a metric



$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $30$. The Rational Numbers: $5$




