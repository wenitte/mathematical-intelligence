# 

Source: https://proofwiki.org/wiki/Dipper_Operation_is_Closed_on_Initial_Segment

Theorem
Let $m \in \N$ be a natural number.
Let $n \in \N_{>0}$ be a non-zero natural number.
Let $\N_{< \paren {m \mathop + n} }$ denote the initial segment of the natural numbers:

$\N_{< \paren {m \mathop + n} } := \set {0, 1, \ldots, m + n - 1}$

Let $+_{m, n}$ denote the dipper operation on $\N_{< \paren {m \mathop + n} }$:

$\forall a, b \in \N_{< \paren {m \mathop + n} }: a +_{m, n} b = \begin{cases} a + b & : a + b < m \\ a + b - k n & : a + b \ge m \end{cases}$
where $k$ is the largest integer satisfying:

$m + k n \le a + b$

Then $+_{m, n}$ is closed on $\N_{< \paren {m \mathop + n} }$.


Proof
Let $a + b < m$.
Then:

$0 \le a +_{m, n} b < m$
and so:

$a +_{m, n} b \in \N_{< \paren {m \mathop + n} }$

Let $a + b > m$.
Then:

$a +_{m, n} b = a + b - k n$
where $k$ is the largest such that $m + k n < a + b$
Hence:














\(\ds m + k n\)

\(\le\)

\(\, \ds a + b \, \)

\(\, \ds < \, \)



\(\ds m + \paren {k + 1} n\)





Definition of $k$








\(\ds \leadsto \ \ \)





\(\ds m\)

\(\le\)

\(\, \ds a + b - k n \, \)

\(\, \ds < \, \)



\(\ds m + n\)





subtracting $k n$ from all parts








\(\ds \leadsto \ \ \)





\(\ds m\)

\(\le\)

\(\, \ds a +_{m, n} b \, \)

\(\, \ds < \, \)



\(\ds m + n\)





Definition of $+_{m, n}$



That is:

$a +_{m, n} b \in \N_{< \paren {m \mathop + n} }$

That is, $+_{m, n}$ is closed on $\N_{< \paren {m \mathop + n} }$.
$\blacksquare$





