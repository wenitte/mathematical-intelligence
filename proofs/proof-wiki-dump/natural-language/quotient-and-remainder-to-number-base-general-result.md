# 

Source: https://proofwiki.org/wiki/Quotient_and_Remainder_to_Number_Base/General_Result

Theorem
Let $n \in \Z: n > 0$ be an integer.
Let $n$ be expressed in base $b$:

$\ds n = \sum_{j \mathop = 0}^m {r_j b^j}$
that is:

$n = \sqbrk {r_m r_{m - 1} \ldots r_2 r_1 r_0}_b$
Let $0 \le s \le m$.

Then:

$\floor {\dfrac n {b^s} } = \sqbrk {r_m r_{m - 1} \ldots r_{s + 1} r_s}_b$
and:

$\ds n \mod {b^s} = \sum_{j \mathop = 0}^{s - 1} {r_j b^j} = \sqbrk {r_{s - 1} r_{s - 2} \ldots r_1 r_0}_b$
where:

$\floor {\, \cdot \,}$ denotes the floor function
$n \mod b$ denotes the modulo operation.


Proof
We have:














\(\ds \frac n {b^s}\)

\(=\)







\(\ds \frac {\sum_{j \mathop = 0}^m r_j b^j} {b^s}\)




















\(\ds \)

\(=\)







\(\ds \frac {\sum_{j \mathop = 0}^{s - 1} r_j b^j} {b^s} + \sum_{j \mathop = 0}^{m - s} r_{s + j} b^j\)




















\(\ds \)

\(=\)







\(\ds \frac {\sum_{j \mathop = 0}^{s - 1} r_j b^j} {b^s} + \sqbrk {r_m r_{m - 1} \ldots r_{s + 1} r_s}_b\)





Definition of Number Base



where:














\(\ds \frac {\sum_{j \mathop = 0}^{s - 1} r_j b^j} {b^s}\)

\(\le\)







\(\ds \frac {\paren {b - 1} \sum_{j \mathop = 0}^{s - 1} b^j} {b^s}\)





as $r_j \le b - 1$ for $\forall j$ by hypothesis














\(\ds \)

\(=\)







\(\ds \frac {\paren {b^s - 1} } {b^s}\)





Sum of Geometric Sequence














\(\ds \)

\(<\)







\(\ds 1\)









In particular:

$\sqbrk {r_m r_{m - 1} \ldots r_{s + 1} r_s}_b \le \dfrac n {b^s} < \sqbrk {r_m r_{m - 1} \ldots r_{s + 1} r_s}_b + 1$
By definition of floor function:

$\floor {\dfrac n {b^s} } = \sqbrk {r_m r_{m - 1} \ldots r_{s + 1} r_s}_b$

Finally:














\(\ds n \mod {b^s}\)

\(=\)







\(\ds n - b^s \floor {\dfrac n {b^s} }\)





Definition of Modulo Operation














\(\ds \)

\(=\)







\(\ds n - b^s \sqbrk {r_m r_{m - 1} \ldots r_{s + 1} r_s}_b\)





as shown above














\(\ds \)

\(=\)







\(\ds n - b^s \sum_{j \mathop = 0}^{m-s} r_{s+j} b^j\)





Definition of Number Base














\(\ds \)

\(=\)







\(\ds n - \sum_{j \mathop = s}^m r_j b^j\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^m r_j b^j - \sum_{j \mathop = s}^m r_j b^j\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{s-1} r_j b^j\)









$\blacksquare$





