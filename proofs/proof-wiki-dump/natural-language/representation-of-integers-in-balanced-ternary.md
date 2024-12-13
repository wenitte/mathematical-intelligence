# 

Source: https://proofwiki.org/wiki/Representation_of_Integers_in_Balanced_Ternary

Theorem
Let $n \in \Z$ be an integer.
$n$ can be represented uniquely in balanced ternary:

$\ds n = \sum_{j \mathop = 0}^m r_j 3^j$
$\sqbrk {r_m r_{m - 1} \ldots r_2 r_1 r_0}$
such that:
where:

$m \in \Z_{>0}$ is a strictly positive integer such that $3^m < \size {2 n} < 3^{m + 1}$
all the $r_j$ are such that $r_j \in \set {\underline 1, 0, 1}$, where $\underline 1 := -1$.


Proof
Let $n \in \Z$.
Let $m \in \Z_{\ge 0}$ be such that:

$3^m + 1 \le \size {2 n} \le 3^{m + 1} - 1$
where $\size {2 n}$ denotes the absolute value of $2 n$.
As $2 n$ is even, this is always possible, because $3^r$ is always an odd integer for non-negative $r$.
Let $d = \dfrac {3^{m + 1} - 1} 2$.
Let $k = n + d$.
We have that:














\(\ds \size {2 n}\)

\(\le\)







\(\ds 3^{m + 1} - 1\)














\(\ds \leadsto \ \ \)





\(\ds \size n\)

\(\le\)







\(\ds d\)





Definition of $d$








\(\ds \leadsto \ \ \)





\(\ds -d\)

\(\le\)







\(\ds n \le d\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\le\)







\(\ds n + d \le 3^{m + 1} - 1\)










Let $k = n + d \in \Z$ be represented in ternary notation:

$k = \ds \sum_{j \mathop = 0}^m s_j 3^j$
where $s_j \in \set {0, 1, 2}$.
By the Basis Representation Theorem, this expression for $k$ is unique.

Now we have:














\(\ds d\)

\(=\)







\(\ds \dfrac {3^{m + 1} - 1} {3 - 1}\)





by definition














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^m 3^j\)





Sum of Geometric Sequence




Hence we see:














\(\ds n\)

\(=\)







\(\ds k - d\)





by definition














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^m s_j 3^j - \sum_{j \mathop = 0}^m 3^j\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^m \paren {s_j - 1} 3^j\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^m r_j 3^j\)





where $r_j \in \set {-1, 0, 1}$




Hence $n$ has a representation in balanced ternary.
The representation for $k$ in ternary notation is unique, as established.
Hence the representation in balanced ternary for $n$ is also unique.
$\blacksquare$


This article needs proofreading.In particular: Not completely sure that uniqueness has been properly proved.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-2}$ The Basis Representation Theorem: Exercise $4$




