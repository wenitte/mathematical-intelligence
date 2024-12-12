# 

Source: https://proofwiki.org/wiki/Dipper_Operation_is_Commutative



Theorem
Let $m, n \in \Z$ be integers such that $m \ge 0, n > 0$.
Let $\N_{< \paren {m \mathop + n} }$ denote the initial segment of the natural numbers:

$\N_{< \paren {m \mathop + n} } := \set {0, 1, \ldots, m + n - 1}$

The dipper operation on $\N_{< \paren {m \mathop + n} }$ is commutative.


Proof
Recall the definition of the dipper operation on $\N_{< \paren {m \mathop + n} }$ defined as:

$\forall a, b \in \Z_{>0}: a +_{m, n} b = \begin{cases} a + b & : a + b < m \\ a + b - k n & : a + b \ge m \end{cases}$
where $k$ is the largest integer satisfying:

$m + k n \le a + b$

Let $a + b < m$.
Then:














\(\ds a +_{m, n} b\)

\(=\)







\(\ds a + b\)





Definition of $a +_{m, n} b$














\(\ds \)

\(=\)







\(\ds b + a\)





Natural Number Addition is Commutative














\(\ds \)

\(=\)







\(\ds b +_{m, n} a\)





Definition of $b +_{m, n} a$




Otherwise $a + b \ge m$.
Then:














\(\ds a +_{m, n} b\)

\(=\)







\(\ds a + b - k n\)





Definition of $a +_{m, n} b$, for some $k \in \N$














\(\ds \)

\(=\)







\(\ds b + a - k n\)





Natural Number Addition is Commutative, for that same $k \in \N$














\(\ds \)

\(=\)







\(\ds b +_{m, n} a\)





Definition of $b +_{m, n} a$



So in both cases:

$a +_{m, n} b = b +_{m, n} a$
and the result follows by definition of commutative operation.
$\blacksquare$


Also see
Dipper Operation is Associative


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Exercise $2.8 \ \text{(b)}$




