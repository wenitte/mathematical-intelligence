# 

Source: https://proofwiki.org/wiki/Euler%27s_Number:_Limit_of_Sequence_implies_Limit_of_Series/Proof_2

Theorem
Let Euler's number $e$ be defined as:

$\ds e := \lim_{n \mathop \to \infty} \paren {1 + \frac 1 n}^n$

Then:

$\ds e = \sum_{k \mathop = 0}^\infty \frac 1 {k!}$

That is:

$e = \dfrac 1 {0!} + \dfrac 1 {1!} + \dfrac 1 {2!} + \dfrac 1 {3!} + \dfrac 1 {4!} \cdots$


Proof
It will be shown that:

$\ds \lim_{n \mathop \to \infty} \paren {1 + \frac 1 n}^n = \sum_{k \mathop = 0}^\infty \frac 1 {k!}$
Let $t_n := \paren {1 + \dfrac 1 n}^n$
Then:

$t_n = \dfrac 1 {0!} + \dfrac 1 {1!} + \paren {1 - \dfrac 1 n} \dfrac 1 {2!} + \paren {1 - \dfrac 1 n} \paren {1 - \dfrac 2 n} \dfrac 1 {3!} + \cdots + \paren {1 - \dfrac 1 n} \paren {1 - \dfrac 2 n} \cdots \paren {1 - \dfrac {n-1} n} \dfrac 1 {n!}$
Now let:

$\ds s_m := \sum_{k \mathop = 0}^m \frac 1 {k!}$
We have that:

$\forall n: t_n \le s_n$
Hence:

$\limsup \paren {t_n} \le e$
Now, for all $m$, for $n \ge m$:

$t_n \ge \dfrac 1 {0!} + \dfrac 1 {1!} + \paren {1 - \dfrac 1 n} \dfrac 1 {2!} + \paren {1 - \dfrac 1 n} \paren {1 - \dfrac 2 n} \dfrac 1 {3!} + \cdots + \paren {1 - \dfrac 1 n} \paren {1 - \dfrac 2 n} \cdots \paren {1 - \dfrac {m - 1} n} \dfrac 1 {m!}$
Hence, for all $m$, we have the right side as being a sequence in $n$, and then:

$\ds \liminf \paren {t_n} \ge \sum_{k \mathop = 0}^m \frac 1 {m!}$
Since this is true for all $m$:

$\liminf \paren {t_n} \ge e$
So $\ds \lim \paren {t_n}$ exists and is equal to $e$.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis: Theorem $3.31$




