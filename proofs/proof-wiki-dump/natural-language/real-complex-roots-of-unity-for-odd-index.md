# 

Source: https://proofwiki.org/wiki/Real_Complex_Roots_of_Unity_for_Odd_Index

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer such that $n$ is odd.
Let $U_n = \set {z \in \C: z^n = 1}$ be the set of complex $n$th roots of unity.

The only $x \in U_n$ such that $x \in \R$ is:

$x = 1$

That is, $1$ is the only complex $n$th root of unity which is a real number.


Proof
From Positive Real Complex Root of Unity, we have that $1$ is the only positive real number in $U_n$.
Aiming for a contradiction, suppose $z \in \R$ such that $z \in U_n$ and $z < 0$.
From Odd Power of Negative Real Number is Negative, $z^n < 0$.
But this contradicts the fact that $z_n = 1 > 0$.
Hence by Proof by Contradiction it follows there is no negative real number $z$ such that $z^n = 1$.
Thus $1$ is the only real number in $U_n$.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity




