# 

Source: https://proofwiki.org/wiki/Degree_of_Field_Extensions_is_Multiplicative



Theorem
Let $E, K$ and $F$ be fields.
Let $E / K$ and $K / F$ be finite field extensions.

Then $E / F$ is a finite field extension, and:

$\index E F = \index E K \index K F$
where $\index E F$ denotes the degree of $E / F$


Proof
First, note that $E / F$ is a field extension as $F \subseteq K \subseteq E$.
Suppose that $\index E K = m$ and $\index K F = n$.
Let $\alpha = \set {a_1, \ldots, a_m}$ be a basis of $E / K$, and $\beta = \set {b_1, \ldots, b_n}$ be a basis of $K / F$.
We wish to prove that the set:

$\gamma = \set {a_i b_j: 1 \le i \le m, 1 \le j \le n}$
is a basis of $E / F$.

As $\alpha$ is a basis of $E / K$, we have, for all $c \in E$:

$\ds c = \sum_{i \mathop = 1}^m c_i a_i$, for some $c_i \in K$.
Define $\ds b := \sum_{j \mathop = 1}^n b_j$ and $d_i := \dfrac {c_i} b$.
Note $b \ne 0$ since $\beta$ is linearly independent over $F$, and $d_i \in K$ since $b, c_i \in K$.

Now we have:

$\ds c = \sum_{i \mathop = 1}^m \frac {c_i} b \cdot b \cdot a_i = \sum_{i \mathop = 1}^m \sum_{j \mathop = 1}^n d_i a_i b_j$
Thus $\gamma$ is seen to be a spanning set of $E / F$.

To show $\gamma$ is linearly independent, suppose that for some $c_{i j} \in F$:

$\ds \sum_{i \mathop = 1}^m \sum_{j \mathop = 1}^n c_{i j} a_i b_j = 0$

Then we have (as fields are commutative rings):














\(\ds \sum_{i \mathop = 1}^m \sum_{j \mathop = 1}^n c_{i j} a_i b_j\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in \set {1, \ldots, m}: \, \)



\(\ds \sum_{j \mathop = 1}^n c_{i j} b_j\)

\(=\)







\(\ds 0\)





Definition of Linearly Independent Set: $\alpha$ over $K$








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in \set {1, \ldots, m}, j \in \set {1, \ldots, n}: \, \)



\(\ds c_{i j}\)

\(=\)







\(\ds 0\)





Definition of Linearly Independent Set: $\beta$ over $F$




Hence $\gamma$ is a linearly independent spanning set; thus it is a basis.

Recalling the definition of $\gamma$ as $\set {a_i b_j: 1 \le i \le m, 1 \le j \le n}$, we have:

$\size {\gamma} = m n = \index E K \index K F$
as was to be shown.
$\blacksquare$


Also known as
This result is also known as the degree equation, or the tower rule or tower law, from the definition of a tower of fields.


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 36$. The Degree of a Field Extension: Theorem $68$




