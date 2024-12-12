# 

Source: https://proofwiki.org/wiki/Dipper_Operation_is_Associative



Theorem
Let $m, n \in \Z$ be integers such that $m \ge 0, n > 0$.
Let $\N_{< \paren {m \mathop + n} }$ denote the initial segment of the natural numbers:

$\N_{< \paren {m \mathop + n} } := \set {0, 1, \ldots, m + n - 1}$

The dipper operation on $\N_{< \paren {m \mathop + n} }$ is associative.


Proof
Recall the definition of the dipper operation on $\N_{< \paren {m \mathop + n} }$ defined as:

$\forall a, b \in \Z_{>0}: a +_{m, n} b = \begin{cases} a + b & : a + b < m \\ a + b - k n & : a + b \ge m \end{cases}$
where $k$ is the largest integer satisfying:

$m + k n \le a + b$

Let $a, b, c \in \N_{< \paren {m \mathop + n} }$ be arbitrary.
There are a number of cases to address.
By Dipper Operation is Commutative it is possible to arrange $a$, $b$ and $c$ into any order, and the result of $\paren {a +_{m, n} b} +_{m, n} c$ and $a +_{m, n} \paren {b +_{m, n} c}$ will be unaffected.
Without loss of generality, therefore, it is sufficient to consider the scenario where $a \le b \le c$.


Case 1
Let $a + b + c < m$.
Then:














\(\ds \paren {a +_{m, n} b} +_{m, n} c\)

\(=\)







\(\ds \paren {a + b} + c\)





Definition of $+_{m, n}$














\(\ds \)

\(=\)







\(\ds a + \paren {b + c}\)





Natural Number Addition is Associative














\(\ds \)

\(=\)







\(\ds a +_{m, n} \paren {b +_{m, n} c}\)





Definition of $+_{m, n}$




Otherwise $a + b + c \ge m$.


Case 2
Let $a + b < m$ and $b + c < m$.
Then:














\(\ds \paren {a +_{m, n} b} +_{m, n} c\)

\(=\)







\(\ds \paren {a + b} +_{m, n} c\)





Definition of $+_{m, n}$














\(\ds \)

\(=\)







\(\ds \paren {a + b} + c - k n\)





Definition of $+_{m, n}$

\(\quad\) where $k = \max \set {k: m + k n \le \paren {a + b} + c}$












\(\ds \)

\(=\)







\(\ds a + \paren {b + c} - k n\)





Natural Number Addition is Associative

\(\quad\) where $k = \max \set {k: m + k n \le a + \paren {b + c} }$












\(\ds \)

\(=\)







\(\ds a +_{m, n} \paren {b + c}\)





Definition of $+_{m, n}$














\(\ds \)

\(=\)







\(\ds a +_{m, n} \paren {b +_{m, n} c}\)





Definition of $+_{m, n}$





Case 3
Let $a + b < m$ and $b + c \ge m$.
Then:














\(\ds \paren {a +_{m, n} b} +_{m, n} c\)

\(=\)







\(\ds \paren {a + b} +_{m, n} c\)





Definition of $+_{m, n}$














\(\ds \)

\(=\)







\(\ds \paren {a + b} + c - k n\)





Definition of $+_{m, n}$

\(\quad\) where $k = \max \set {k: m + k n \le \paren {a + b} + c}$

and:














\(\ds a +_{m, n} \paren {b +_{m, n} c}\)

\(=\)







\(\ds a +_{m, n} \paren {b + c - k_1 n}\)





Definition of $+_{m, n}$

\(\quad\) where $k_1 = \max \set {k: m + k n \le b + c}$












\(\ds \)

\(=\)







\(\ds \begin {cases} a + \paren {b + c - k_1 n} & : a + \paren {b + c - k_1 n} < m \\ a + \paren {b + c - k_1 n} - k_2 n & : a + \paren {b + c - k_1 n} \ge m \end {cases}\)





Definition of $+_{m, n}$

\(\quad\) where $k_2 = \max \set {k: m + k n \le a + \paren {b + c - k_1 n} }$












\(\ds \)

\(=\)







\(\ds a + \paren {b + c} - k n\)







\(\quad\) where $k = \max \set {k: m + k n \le a + \paren {b + c} }$












\(\ds \)

\(=\)







\(\ds \paren {a + b} + c - k n\)





Natural Number Addition is Associative

\(\quad\) where $k = \max \set {k: m + k n \le \paren {a + b} + c}$



Case 4
Let $a + b \ge m$ and $b + c \ge m$.
Then:














\(\ds \paren {a +_{m, n} b} +_{m, n} c\)

\(=\)







\(\ds \paren {a + b - k_1 n} +_{m, n} c\)





Definition of $+_{m, n}$

\(\quad\) where $k_1 = \max \set {k: m + k n \le a + b}$












\(\ds \)

\(=\)







\(\ds \begin {cases} \paren {a + b - k_1 n} + c & : \paren {a + b - k_1 n} + c < m \\  \paren {a + b - k_1 n} + c - k_2 n & : \paren {a + b - k_1 n} + c \ge m \end {cases}\)





Definition of $+_{m, n}$

\(\quad\) where $k_2 = \max \set {k: m + k n \le \paren {a + b - k_1 n} + c}$












\(\ds \)

\(=\)







\(\ds \paren {a + b} + c - k n\)







\(\quad\) where $k = \max \set {k: m + k n \le \paren {a + b} + c}$

and:














\(\ds a +_{m, n} \paren {b +_{m, n} c}\)

\(=\)







\(\ds a +_{m, n} \paren {b + c - k_1 n}\)





Definition of $+_{m, n}$

\(\quad\) where $k_1 = \max \set {k: m + k n \le b + c}$












\(\ds \)

\(=\)







\(\ds \begin {cases} a + \paren {b + c - k_1 n} & : a + \paren {b + c - k_1 n} < m \\ a + \paren {b + c - k_1 n} - k_2 n & : a + \paren {b + c - k_1 n} \ge m \end {cases}\)





Definition of $+_{m, n}$

\(\quad\) where $k_2 = \max \set {k: m + k n \le a + \paren {b + c - k_1 n} }$












\(\ds \)

\(=\)







\(\ds a + \paren {b + c} - k n\)







\(\quad\) where $k = \max \set {k: m + k n \le a + \paren {b + c} }$












\(\ds \)

\(=\)







\(\ds \paren {a + b} + c - k n\)





Natural Number Addition is Associative




So in all cases:

$\paren {a +_{m, n} b} +_{m, n} c = a +_{m, n} \paren {b +_{m, n} c}$
and the result follows by definition of associative operation.
$\blacksquare$


Also see
Dipper Operation is Commutative


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Exercise $2.8 \ \text{(b)}$




