# 

Source: https://proofwiki.org/wiki/Fa%C3%A0_di_Bruno%27s_Formula/Proof_2



Theorem
Let $D_x^k u$ denote the $k$th derivative of a function $u$ with respect to $x$.
Then:

$\ds D_x^n w = \sum_{j \mathop = 0}^n D_u^j w \sum_{\substack {\sum_{p \mathop \ge 1} k_p \mathop = j \\ \sum_{p \mathop \ge 1} p k_p \mathop = n \\ \forall p \mathop \ge 1: k_p \mathop \ge 0} } n! \prod_{m \mathop = 1}^n \dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} }$


Proof
For convenience, let:

$w_j := D_u^j w$
$u_k := D_x^k u$

Then:














\(\ds \map {D_x} {w_j}\)

\(=\)







\(\ds w_{j + 1} u_1\)





Derivative of Composite Function














\(\ds \map {D_x} {u_k}\)

\(=\)







\(\ds u_{k + 1}\)





Definition of Higher Derivative




Thus:














\(\ds D_x^1 w\)

\(=\)







\(\ds w_1 u_1\)





Derivative of Composite Function














\(\ds D_x^2 w\)

\(=\)







\(\ds \paren {w_2 u_1 u_1 + w_1 u_2}\)





Derivative of Composite Function: Second Derivative














\(\ds D_x^3 w\)

\(=\)







\(\ds \paren {\paren {w_3 u_1 u_1 u_1 + w_2 u_2 u_1 + w_2 u_1 u_2} + \paren {w_2 u_1 u_2 + w_1 u_3} }\)





Derivative of Composite Function: Third Derivative or directly




Analogously, let a corresponding tableau be set up of set partitions as follows:














\(\ds \DD^1\)

\(=\)







\(\ds \set 1\)




















\(\ds \DD^2\)

\(=\)







\(\ds \set {\set 2 \mid \set 1} + \set {2, 1}\)




















\(\ds \DD^3\)

\(=\)







\(\ds \set {\set 3 \mid \set 2 \mid \set 1} + \set {\set {3, 2} \mid \set 1} + \set {\set 2 \mid \set {3, 1} } + \set {\set 3 \mid \set {2, 1} } + \set {3, 2, 1}\)










Thus inspired, let $a_1 a_2 \cdots a_j$ denote a partition of the set $\set {1, 2, \ldots, n-1}$.
Let:














\(\ds \DD a_1 a_2 \cdots a_j\)

\(:=\)







\(\ds \set n a_1 a_2 \cdots a_j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a_1 \cup \set n} a_2 \cdots a_j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a_1 \paren {a_2 \cup \set n} \cdots a_j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \cdots\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a_1 a_2 \cdots \paren {a_j \cup \set n}\)










This rule is isomorphic to:














\(\ds \map {D_x} {w_j u_{r_1} u_{r_2} \ldots u_{r_j} }\)

\(=\)







\(\ds w_{j + 1} u_1 u_{r_1} u_{r_2} \ldots u_{r_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds w_j u_{r_1 + 1} u_{r_2} \ldots u_{r_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds w_j u_{r_1} u_{r_2 + 1} \ldots u_{r_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \cdots\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds w_j u_{r_1} u_{r_2} \ldots u_{r_j + 1}\)









where the term $w_j u_{r_1} u_{r_2} \ldots u_{r_j}$ corresponds to a partition $a_1 a_2 \cdots a_j$.
Thus there exists a bijection from $\DD^n$ to $D_x^n w$.


This article, or a section of it, needs explaining.In particular: Link this to Number of Set Partitions by Number of ComponentsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Thus, collecting like terms in $D_x^n w$, we obtain a sum of terms:

$\map c {k_1, k_2, \ldots} w_j u_i^{k_1} u_2^{k_2} \ldots$
where:

$j = k_1 + k_2 + \cdots$
and:

$n = k_1 + 2 k_2 + \cdots$
and where:

$\map c {k_1, k_2, \ldots}$ is the number of partitions of $\set {1, 2, \ldots, n}$ into $j$ subsets where there are $k_t$ subsets with $t$ elements.

Consider an array of $k_t$ boxes of capacity $t$.
The number of ways to put $n$ different elements into these boxes is the multinomial coefficient:

$\dbinom n {1, 1, \ldots, 1, 2, 2, \ldots, 2, 3, 3, \ldots, 3, 4, \ldots} = \dfrac {n!} {\paren {1!}^{k_1} \paren {2!}^{k_2} \paren {3!}^{k_3} \cdots}$
It remains to divide by $k_1! \, k_2! \, k_3! \ldots$ corresponding to the number of ways each group of $k_t$ can be permuted
Hence:

$\map c {k_1, k_2, \ldots} = \dfrac {n!} {k_1! \paren {1!}^{k_1} \, k_2! \paren {2!}^{k_2} k_3! \paren {3!}^{k_3} \cdots}$
and the result follows.
$\blacksquare$


Source of Name
This entry was named for Francesco Faà di Bruno.


Sources
1938: H.S. Wall: On the $n$th Derivative of $f \left({x}\right)$ (Bull. Amer. Math. Soc. Vol. 44: pp. 395 – 398)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $21$




