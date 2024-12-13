# 

Source: https://proofwiki.org/wiki/Numbers_Equal_to_Number_of_Digits_in_Factorial

Theorem
For $n \in \set {1, 22, 23, 24}$ the number of digits in the decimal representation of $n!$ is equal to $n$.


Proof
First we note that:

$1! = 1$
which has $1$ digit.

Then from Examples of Factorials:

$2! = 2$
which has $1$ digit.

Multiplying $n$ by a $1$-digit number increases the number of digits of $n$ by no more than $1$.
Thus from $n = 3$ to $n = 9$, $n!$ has no more than $n - 1$ digits.

From $21$ Factorial:

$21! = 51 \, 090 \, 942 \, 171 \, 709 \, 440 \, 000$
and so $21!$ has $20$ digits.
Multiplying $n$ by a $2$-digit number increases the number of digits of $n$ by at least $1$.
Thus from $n = 10$ to $n = 20$, $n!$ has no more than $n - 1$ digits.

It is noted that:

From $22$ Factorial:
$22! = 1 \, 124 \, 000 \, 727 \, 777 \, 607 \, 680 \, 000$
which has $22$ digits.
From $23$ Factorial:
$23! = 25 \, 852 \, 016 \, 738 \, 884 \, 976 \, 640 \, 000$
which has $23$ digits.
From $24$ Factorial:
$24! = 620 \, 448 \, 401 \, 733 \, 239 \, 439 \, 360 \, 000$
which has $24$ digits.

But from $25$ Factorial:

$25! = 15 \, 511 \, 210 \, 043 \, 330 \, 985 \, 984 \, 000 \, 000$
which has $26$ digits.

As above, multiplying $n$ by a number with $2$ digits or more increases the number of digits of $n$ by at least $1$.
So if $n!$ has more than $n$ digits, $\paren {n + 1}!$ has more than $n + 1$ digits.
It follows by induction that for all $n \ge 25$, $n!$ has more than $n$ digits.
Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $22$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $22$




