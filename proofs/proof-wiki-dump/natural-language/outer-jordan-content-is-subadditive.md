# 

Source: https://proofwiki.org/wiki/Outer_Jordan_Content_is_Subadditive

Theorem
Let $A, B \subseteq \R^n$ be bounded subspaces of Euclidean $n$-space.

Then:

$\map {m^*} {A \cup B} \le \map {m^*} A + \map {m^*} B$
where $m^*$ denotes the outer Jordan content.


Proof
Let $\epsilon > 0$ be arbitrary.
By Characterizing Property of Infimum of Subset of Real Numbers, select:

$C$ to be a finite covering of $A$ by closed $n$-rectangles such that:
$\ds \sum_{R \mathop \in C} \map V R < \map {m^*} A + \frac \epsilon 2$
$D$ to be a finite covering of $B$ by closed $n$-rectangles such that:
$\ds \sum_{R \mathop \in D} \map V R < \map {m^*} B + \frac \epsilon 2$

Define $E = C \cup D$.
By Union of Finite Sets is Finite, $E$ is a finite set of closed $n$-rectangles.
So, by Union of Covers is Cover of Union:

$C \cup D$ is a finite covering of $A \cup B$ by closed $n$-rectangles.

We have:














\(\ds \map {m^*} {A \cup B}\)

\(\le\)







\(\ds \sum_{R \mathop \in E} \map V R\)





Definition of Outer Jordan Content














\(\ds \)

\(=\)







\(\ds \sum_{R \mathop \in C \cup D} \map V R\)




















\(\ds \)

\(\le\)







\(\ds \sum_{R \mathop \in C} \map V R + \sum_{R \mathop \in D} \map V R\)





$\map V R$ is non-negative, so any double-counted elements only increase the sum














\(\ds \)

\(<\)







\(\ds \map {m^*} A + \map {m^*} B + \epsilon\)









As $\epsilon > 0$ was arbitrary, it follows from Real Plus Epsilon that:

$\map {m^*} {A \cup B} \le \map {m^*} A + \map {m^*} B$
$\blacksquare$





