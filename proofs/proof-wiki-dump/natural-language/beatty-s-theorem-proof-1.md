# 

Source: https://proofwiki.org/wiki/Beatty%27s_Theorem/Proof_1

Theorem
Let $r, s \in \R \setminus \Q$ be an irrational number such that $r > 1$ and $s > 1$.
Let $\BB_r$ and $\BB_s$ be the Beatty sequences on $r$ and $s$ respectively.

Then $\BB_r$ and $\BB_s$ are complementary Beatty sequences if and only if:

$\dfrac 1 r + \dfrac 1 s = 1$


Proof
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


Source of Name
This entry was named for Samuel Beatty.





