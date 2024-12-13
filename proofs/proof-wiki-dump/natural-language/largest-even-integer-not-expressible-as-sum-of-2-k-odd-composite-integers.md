# 

Source: https://proofwiki.org/wiki/Largest_Even_Integer_not_expressible_as_Sum_of_2_k_Odd_Composite_Integers



Theorem
Let $k \in \Z_{>0}$ be a (strictly) positive integer.
The largest even integer which cannot be expressed as the sum of $2 k$ odd positive composite integers is $18 k + 20$.


Proof
Let $n$ be an even integer greater than $18 k + 20$.
Then $n - 9 \paren {2 k - 2}$ is an even integer greater than $18 k + 20 - 9 \paren {2 k - 2} = 38$.
By Positive Even Integers not Expressible as Sum of 2 Composite Odd Numbers, every even integer greater than $38$ can be expressed as the sum of $2$ odd positive composite integers.
Thus $n - 9 \paren {2 k - 2}$ can be expressed as the sum of $2$ odd positive composite integers.
So, let $a$ and $b$ be odd composite integers such that $a + b = n - 9 \paren {2 k - 2}$.
Then:

$9 \paren {2 k - 2} + a + b = n$
This is an expression for $n$ as the sum of $2 k$ odd positive composite integers, in which $2 k - 2$ of them are occurrences of $9$.
Thus such an expression can always be found for $n > 18 k + 20$.
$\Box$

It remains to be shown that $18 k + 20$ is not expressible as the sum of $2 k$ odd positive composite integers.
The $k = 1$ case is demonstrated in Positive Even Integers not Expressible as Sum of 2 Composite Odd Numbers.

Now suppose $k \ge 2$. 
The two smallest odd positive composite integers are $9$ and $15$.
Suppose $18 k + 20$ is expressible as the sum of $2 k$ odd positive composite integers.
Then at least $2 k - 3$ of them are $9$'s, because:

$9 \paren {2 k - 4} + 4 \times 15 = 18 k + 24 > 18 k + 20$
Then the problem reduces to finding an expression of $18 k + 20 - 9 \paren {2 k - 3} = 47$ as the sum of $3$ odd positive composite integers.
The first few odd positive composite integers are:

$9, 15, 21, 25, 27, 33, 35, 39, 45$
Their differences with $47$ are:

$38, 32, 26, 22, 20, 14, 12, 8, 2$
The integers above are in the set of integers not expressible as a sum of $2$ odd positive composite integers.
The full set of these can be found in Positive Even Integers not Expressible as Sum of 2 Composite Odd Numbers.
Thus $18 k + 20$ is not expressible as the sum of $2 k$ odd positive composite integers.
This proves the result.
$\blacksquare$


Historical Note
According to the footnote to the presentation of the solution to Positive Even Integers not Expressible as Sum of 2 Composite Odd Numbers in 1990: Solution to Problem 1328 (Math. Mag. Vol. 63, no. 4: pp. 273 – 280)  www.jstor.org/stable/2690953, this particular result was deduced by the Shippensburg University Mathematical Problem Solving Group.


Sources
Oct. 1990: Solution to Problem 1328 (Math. Mag. Vol. 63, no. 4: pp. 273 – 280)  www.jstor.org/stable/2690953
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $38$




