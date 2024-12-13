# 

Source: https://proofwiki.org/wiki/Integer_to_Rational_Power_is_Irrational_iff_not_Integer_or_Reciprocal



Theorem
Let $m$ be a rational number.
Let $n$ be a positive integer.

Then $n^m$ is an irrational number if and only if $n^{\size m}$ is not an integer.


Proof
Necessary Condition
Let $n^{\size m} \notin \Z$.
We have that:

$n^m = n^{u/v}$ for some $u \in\Z$ and $v \in \Z_{\ne 0}$
Then it follows from the definition of a rational power and the existence of a real $v$th root of $n^u$ that:

$n^m = n^{u/v} = \paren {n^u}^{1/v} \in \R$

Aiming for a contradiction, suppose $n^m \in \Q$.
We have that:

$\size m = 0 \implies n^{\size m} \in \Z$
It follows that:

$\size m > 0$

Then:

$\size m > 0$
$m \in \Q$
$n^{\size m} > 0$
$n^m \in \Q$
imply that

$n^{\size m} = n^{p/q} = \dfrac r s$
for some $\tuple {p, q, r, s} \in \Z_{>0}^4$ where $r$ and $s$ have no common prime factors.

Raising both sides of $n^{p/q} = \dfrac r s$ to the power of $q$ yields:

$n^p = \dfrac {r^q} {s^q}$
We have that:

$\dfrac {r^q} {s^q} = n^p \in \Z$
Hence $r^q$ is divisible by $s^q$.
By the Fundamental Theorem of Arithmetic, $r^q$ and $s^q$ have the same prime factors as $r$ and $s$ respectively.

But we have that:

$s^q \divides r^q$
and:

$s \ne 1$
imply that $r$ and $s$ have a common prime factor.
But this would contradict the fact that $r$ and $s$ have no common prime factors.
Therefore $s = 1$.

Then:

$n^{\size m} = \dfrac r s$
and:

$s = 1$
imply that:

$r = n^{\size m} \notin \Z$
From this contradiction it follows that:

$n^m \notin \Q$
and since $n^m \in \R$:

$n^m \in \R \setminus \Q$
That is, $n^m$ is an irrational number.
$\Box$


Sufficient Condition
Now let $n^m$ be an irrational number.
That is:

$n^m \in \R \setminus \Q$
Then because $n^{-m}$ is the reciprocal of $n^m$:

$n^{-m} \in \R \setminus \Q$
So:

$n^{\size m} \in \R \setminus \Q$
and so since $\Z \subseteq \Q$:

$n^{\size m} \notin \Z$
$\blacksquare$





