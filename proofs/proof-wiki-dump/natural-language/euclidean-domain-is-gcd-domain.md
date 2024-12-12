# 

Source: https://proofwiki.org/wiki/Euclidean_Domain_is_GCD_Domain

Theorem
Let $\struct {D, +, \times}$ be a Euclidean domain.
Then any two elements $a, b \in D$ have a greatest common divisor $d$ such that:

$d \divides a \land d \divides b$
$x \divides a \land x \divides b \implies x \divides d$
and $d$ is written $\gcd \set {a, b}$.
For any $a, b \in D$:

$\exists s, t \in D: s a + t b = d$
Any two greatest common divisors of any $a, b$ are associates.


Proof
Let $a, b \in D$.
Let $U \subseteq D$ be the set of all elements $h a + k b$ of $D$ where $h, k \in D$.
Then $U$ is an ideal of $D$.
Note that $U = \ideal a + \ideal b$ where $\ideal a$ and $\ideal b$ are Principal Ideal.
By Sum of Ideals is Ideal, $U$ is an ideal.
By Euclidean Domain is Principal Ideal Domain, $U$ is a principal ideal, $\ideal d$ say.
As $a, b \in U$ it follows that $d$ is a divisor of $a$ and $b$, that is:

$d \divides a \land d \divides b$
Since $d$ itself is in $U$, we have:

$\exists s, t \in D: s a + t b = d$
By Common Divisor in Integral Domain Divides Linear Combination:

$x \divides a \land x \divides b \implies x \divides d$
So $d$ is a greatest common divisor of $a$ and $b$.

If $d$ and $d'$ are both greatest common divisors of $a$ and $b$, then $d \divides a \land d \divides b$ and so $d \divides d'$.
Similarly $d' \divides d$.
So $d$ and $d'$ are associates.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 28$. Highest Common Factor: Theorem $54$




