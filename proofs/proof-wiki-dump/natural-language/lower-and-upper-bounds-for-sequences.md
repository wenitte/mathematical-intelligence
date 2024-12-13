# 

Source: https://proofwiki.org/wiki/Lower_and_Upper_Bounds_for_Sequences



Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $x_n \to l$ as $n \to \infty$.

Then:

$(1): \quad \forall n \in \N: x_n \ge a \implies l \ge a$
$(2): \quad \forall n \in \N: x_n \le b \implies l \le b$


Corollary
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $\R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent to the following limits:














\(\ds \lim_{n \mathop \to \infty} x_n\)

\(=\)







\(\ds l\)




















\(\ds \lim_{n \mathop \to \infty} y_n\)

\(=\)







\(\ds m\)










Let there exist $N \in \N$ such that:

$\forall n \ge N: x_n \le y_n$
Then:

$l \le m$


Proof
$(1): \quad \forall n \in \N: x_n \ge a \implies l \ge a$:
Let $\epsilon > 0$.
Then:

$\exists N \in \N: n > N \implies \size {x_n - l} < \epsilon$
So from Negative of Absolute Value:

$l - \epsilon < x_n < l + \epsilon$
But $x_n \ge a$, so:

$a \le x_n < l + \epsilon$
Thus, for any $\epsilon > 0$:

$a < l + \epsilon$
From Real Plus Epsilon it follows that $a \le l$.
$\Box$

$(2): \quad \forall n \in \N: x_n \le b \implies l \le b$:
If $x_n \le b$ it follows that $-x_n \ge -b$ and the above result can be used.
$\blacksquare$


Warning
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $x_n \to l$ as $n \to \infty$.

Then it is not necessarily the case that:

$(1): \quad \forall n \in \N: x_n > a \implies l > a$
$(2): \quad \forall n \in \N: x_n < b \implies l < b$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Some simple properties of convergent sequences: $\S 4.23$




