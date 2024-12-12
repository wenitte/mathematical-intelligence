# 

Source: https://proofwiki.org/wiki/Content_of_Subdivided_Rectangle



Theorem
Let $R$ be a closed $n$-rectangle.
Let $P$ be a subdivision of $R$.

Then:

$\ds \map V R = \sum_{r \mathop \in P^*} \map V r$
where:

$\map V R$ denotes the content of the rectangle $R$
$P^*$ denotes the set of subrectangles of $P$.


Proof
We will proceed by induction on $n$.

Basis for the Induction
First, consider the case $n = 1$.
Let $R = \closedint a b$.
Let us write:

$P = \tuple {\set {x_0, x_1, \dotsc, x_m}}$
where:

$a = x_0 < x_1 < \dotso < x_m = b$
Then, we have:














\(\ds \sum_{r \mathop \in P^*} \map V r\)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \map V {\closedint {x_{k - 1} } {x_k} }\)





Definition of Subrectangle of Finite Subdivision of Rectangle














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \paren {x_k - x_{k - 1} }\)





Definition of Content of Rectangle














\(\ds \)

\(=\)







\(\ds x_m - x_0\)





Telescoping Series














\(\ds \)

\(=\)







\(\ds b - a\)





Definition of Finite Subdivision of Rectangle














\(\ds \)

\(=\)







\(\ds \map V {\closedint a b}\)





Definition of Content of Rectangle














\(\ds \)

\(=\)







\(\ds \map V R\)





Definition of $R$



Therefore, the theorem holds for the case $n = 1$, which is the basis for the induction.
$\Box$

Induction Hypothesis
Let us now assume as the induction hypothesis that the theorem holds for some fixed $n = q \ge 1$.
We will then deduce the theorem for $n = q + 1$.

Induction Step
Let $R = R' \times \closedint a b$, where $R'$ is a closed $q$-rectangle.
Write:

$P = \tuple {P_1, P_2, \dotsc, P_q, P_{q + 1}}$
and let:

$P' = \tuple {P_1, P_2, \dotsc, P_q}$
so that $P'$ is a subdivision of $R'$.
Let:

$P_{q + 1} = \set {x_0, x_1, \dotsc, x_m}$
where:

$a = x_0 < \dotso < x_m = b$
For each $k \in \set {1, 2, \dotsc, m}$, let $S_k$ be the set of all subrectangles $r$ of $P$ with the form:

$r = r' \times \closedint {x_{k - 1}} {x_k}$
where $r'$ is a subrectangle of $P'$.
By definition, each subrectangle of $P$, is an element of exactly one $S_k$.
Thus:














\(\ds \sum_{r \mathop \in P^*} \map V r\)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \sum_{r \mathop \in S_k} \map V r\)





Sum over Disjoint Union of Finite Sets














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \sum_{r' \mathop \in P'^*} \map V {r' \times \closedint {x_{k - 1} } {x_k} }\)





Definition of $S_k$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \sum_{r' \mathop \in P'^*} \map V {r'} \paren {x_k - x_{k - 1} }\)





Definition of Content of Rectangle














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \paren {x_k - x_{k - 1} } \sum_{r' \mathop \in P'^*} \map V {r'}\)





Summation of Multiple of Mapping on Finite Set














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \paren {x_k - x_{k - 1} } \map V {R'}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \map V {R'} \sum_{k \mathop = 1}^m \paren {x_k - x_{k - 1} }\)





Summation of Multiple of Mapping on Finite Set














\(\ds \)

\(=\)







\(\ds \map V {R'} \paren {x_m - x_0}\)





Telescoping Series














\(\ds \)

\(=\)







\(\ds \map V {R'} \paren {b - a}\)





Definition of $P_{q + 1}$














\(\ds \)

\(=\)







\(\ds \map V R\)





Definition of Content of Rectangle



$\Box$

Therefore, we may apply the Principle of Mathematical Induction to deduce the theorem in its full generality.
$\blacksquare$





