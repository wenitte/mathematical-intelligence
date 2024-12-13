# 

Source: https://proofwiki.org/wiki/Linearly_Independent_over_the_Rational_Numbers_iff_Linearly_Independent_over_the_Integers



Theorem
Let $z_1, z_2, \ldots, z_n$ be complex numbers.

Then:

$z_1, z_2, \ldots, z_n$ are linearly independent over the rational numbers $\Q$
if and only if:

$z_1, z_2, \ldots, z_n$ are linearly independent over the integers $\Z$.


Proof
Forward implication
Let $z_1, z_2, \ldots, z_n$ be linearly independent over the rational numbers $\Q$.
That is, if $q_1, q_2, \ldots, q_n$ are rational numbers such that:

$q_1 z_1 + q_2 z_2 + \cdots + q_n z_n = 0$
then:

$q_1 = q_2 = \cdots = q_n = 0$

Let $a_1, a_2, \ldots, a_n$ be integers such that:

$a_1 z_1 + a_2 z_2 + \cdots + a_n z_n = 0$
Then, by Integers form Subdomain of Rationals and the assumption, it follows that:

$a_1 = a_2 = \cdots = a_n = 0$
Hence it follows by definition that $z_1, z_2, \ldots, z_n$ are linearly independent over the integers $\Z$.
$\Box$


Backward implication
Let $z_1, z_2, \ldots, z_n$ be linearly independent over the integers $\Z$.
That is, if $a_1, a_2, \ldots, a_n$ are integers such that:

$a_1 z_1 + \cdots + a_n z_n = 0$
then:

$a_1 = \cdots = a_n = 0$

Let $q_1, q_2, \ldots, q_n$ be rational numbers such that:

$q_1 z_1 + q_2 z_2 + \cdots + q_n z_n = 0$
Let the lowest common multiple of the denominators of $q_1, q_2, \ldots, q_n$ be $m$.
Then, by the definition of lowest common multiple:

$m q_1, m q_2, \ldots, m q_n \in \Z$
Thus:

$m q_1 z_1 + m q_2 z_2 + \cdots + m q_n z_n = 0$
where the coefficients of $z_1, z_2, \ldots, z_n$ are all integers.
Hence, by the assumption:

$m q_1 = m q_2 = \cdots = m q_n = 0$
Since $m$ is non-zero, it follows that:

$q_1 = q_2 = \cdots = q_n = 0$
It follows by definition that $z_1, z_2, \ldots, z_n$ are linearly independent over the rational numbers $\Q$.
$\blacksquare$





