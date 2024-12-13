# 

Source: https://proofwiki.org/wiki/Restriction_of_Dipper_Operation_to_Non-Zero_Initial_Segment_is_Closed

Theorem
Let $m, n \in \N_{>0}$ be non-zero natural numbers.
Let $\N_{< \paren {m \mathop + n} }$ denote the initial segment of the natural numbers:

$\N_{< \paren {m \mathop + n} } := \set {0, 1, \ldots, m + n - 1}$
Let $+_{m, n}$ denote the dipper operation on $\N_{< \paren {m \mathop + n} }$:

$\forall a, b \in \N_{< \paren {m \mathop + n} }: a +_{m, n} b = \begin{cases} a + b & : a + b < m \\ a + b - k n & : a + b \ge m \end{cases}$
where $k$ is the largest integer satisfying:

$m + k n \le a + b$

Let $\N^*_{< \paren {m \mathop + n} }$ denote the set defined as $\N_{< \paren {m \mathop + n} } \setminus \set 0$:

$\N^*_{< \paren {m \mathop + n} } := \set {1, 2, \ldots, m + n - 1}$
Then $+_{m, n}$ is closed on $\N^*_{< \paren {m \mathop + n} }$.


Proof
From Dipper Operation is Closed on Initial Segment, $+_{m, n}$ is closed on $\N_{< \paren {m \mathop + n} }$.
That is:

$\forall a, b \in \N_{< \paren {m \mathop + n} }: a +_{m, n} b < m + n$
It remains to be shown that:

$\forall a, b \in \N^*_{< \paren {m \mathop + n} }: a +_{m, n} b > 0$

Let $a + b < m$.
Then as $a > 0$ and $b > 0$ it follows that $a + b < 0$.
That is:

$a +_{m, n} b > 0$

Let $a + b > m$.
Then:

$a +_{m, n} b = a + b - k n$
where $k$ is the largest integer satisfying $m + k n \le a + b$.
That is:

$m < a + b - k n$
But as $m > 0$ we must have that:

$0 < a +_{m, n} b$
and the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.7 \ \text {(b)}$




