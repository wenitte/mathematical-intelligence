# 

Source: https://proofwiki.org/wiki/Beatty%27s_Theorem/Proof_2



Theorem
Let $r, s \in \R \setminus \Q$ be an irrational number such that $r > 1$ and $s > 1$.
Let $\BB_r$ and $\BB_s$ be the Beatty sequences on $r$ and $s$ respectively.

Then $\BB_r$ and $\BB_s$ are complementary Beatty sequences if and only if:

$\dfrac 1 r + \dfrac 1 s = 1$


Proof
Collisions
Aiming for a contradiction, suppose there exist integers $j > 0, k, m$ such that:

$j = \floor {k \cdot r} = \floor {m \cdot s}$
This is equivalent to the inequalities:

$j \le k \cdot r < j + 1$
and:

$j \le m \cdot s < j + 1$
As $r$ and $s$ are irrational, equality cannot happen.
So:

$j < k \cdot r < j + 1$
and:

$j < m \cdot s < j + 1$
which leads to:

$\dfrac j r < k < \dfrac {j + 1} r$
and:

$\dfrac j s < m < \dfrac {j + 1} s$
Adding these together and using the by hypothesis:

$j < k + m < j + 1$
Thus there is an integer strictly between two adjacent integers.
This is impossible.
Thus the supposition must be false.
$\Box$


Anti-collisions
Aiming for a contradiction, suppose that there exist integers $j > 0, k, m$ such that:

$k \cdot r < j$
and:

$j + 1 \le \paren {k + 1} \cdot r$
and:

$m \cdot s < j$
and:

$j + 1 \le \paren {m + 1} \cdot s$
Since $j + 1 \ne 0$, and $r$ and $s$ are irrational, equality cannot happen.
So:

$k \cdot r < j$
and:

$j + 1 < \paren {k + 1} \cdot r$
and:

$m \cdot s < j$
and:

$j + 1 < \paren {m + 1} \cdot s$
Then:

$k < \dfrac j r$:
and:

$\dfrac {j + 1} r < k + 1$
and:

$m < \dfrac j s$
and:

$\dfrac {j + 1} s < m + 1$
Adding corresponding inequalities:

$k + m < j$
and:

$j + 1 < k + m + 2$
$k + m < j < k + m + 1$
which is also impossible.
Thus the supposition is false.
$\blacksquare$


Source of Name
This entry was named for Samuel Beatty.





