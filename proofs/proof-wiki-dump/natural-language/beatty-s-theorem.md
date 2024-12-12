# 

Source: https://proofwiki.org/wiki/Beatty%27s_Theorem



Theorem
Let $r, s \in \R \setminus \Q$ be an irrational number such that $r > 1$ and $s > 1$.
Let $\BB_r$ and $\BB_s$ be the Beatty sequences on $r$ and $s$ respectively.

Then $\BB_r$ and $\BB_s$ are complementary Beatty sequences if and only if:

$\dfrac 1 r + \dfrac 1 s = 1$


Proof 1
We have been given that $r > 1$.
Let $\dfrac 1 r + \dfrac 1 s = 1$.
Then:

$s = \dfrac r {r - 1}$
It is to be shown that every positive integer lies in exactly one of the two Beatty sequences $\BB_r$ and $\BB_s$.
Consider the ordinal positions occupied by all the fractions $\dfrac j r$ and $\dfrac k s$ when they are jointly listed in nondecreasing order for positive integers $j$ and $k$.
Aiming for a contradiction, suppose that $\dfrac j r = \dfrac k s$ for some $j, k \in \Z_{>0}$.
Then:

$\dfrac r s = \dfrac j k$
which is rational.
But also:

$\dfrac r s = r \paren {1 - \dfrac 1 r} = r - 1$
which is not rational.
Therefore, no two of the numbers occupy the same position.
Consider some $\dfrac j r$.
There are $j$ numbers $\dfrac i r \le \dfrac j r$.
There are also $\floor {\dfrac {j s} r}$ numbers $\dfrac k s \le \dfrac j r$.
So the position of $\dfrac j r$ in the list is $j + \floor {\dfrac {j s} r}$.
The equation $\dfrac 1 r + \dfrac 1 s = 1$ implies:

$j + \floor {\dfrac {j s} r} = j + \floor {j \paren {s - 1} } = \floor {j s}$
Likewise, the position of $\dfrac k s$ in the list is $\floor {k r}$.
It is concluded that every positive integer corresponding to every position in the list is of the form $\floor {n r}$ or of the form $\floor {n r}$, but not both.
The converse statement is also true: if $p$ and $q$ are two real numbers such that every positive integer occurs precisely once in the above list, then $p$ and $q$ are irrational and the sum of their reciprocals is $1$.
$\blacksquare$


Proof 2
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


Also known as
Beatty's theorem is also known as the Rayleigh theorem, for Lord Rayleigh.


Source of Name
This entry was named for Samuel Beatty.





