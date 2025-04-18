# 

Source: https://proofwiki.org/wiki/Consecutive_Integers_are_Coprime



Theorem
$\forall h \in \Z$, $h$ and $h + 1$ have only two common factors: $1$ and $-1$.
That is, consecutive integers are always coprime.


Proof 1
$\gcd \set {h + 1, h} = \gcd \set {h, 1} = \gcd \set {1, 0} = 1$ from the Euclidean Algorithm.
$\blacksquare$


Proof 2
Let $k \in \Z: k \divides h$.
Also assume $k \divides \paren {h + 1}$.
Thus:

$\exists a, b \in \N: a k = h, b k = \paren {h + 1}$
Then:

$\paren {h + 1} - h = b k - a k$
and so:

$1 = \paren {b - a} k$
Since the integers form an integral domain, $\paren {b - a} \in \Z$.
Thus either $k = 1$ and $b - a = 1$, or $k = -1$ and $b - a = -1$.
Therefore, only $1$ and $-1$ can be factors of both $h$ and $\paren {h + 1}$.
$\blacksquare$


Proof 3
A direct application of GCD of Integer with Integer + $n$:

$\gcd \set {a, a + n} \divides n$
$\blacksquare$





