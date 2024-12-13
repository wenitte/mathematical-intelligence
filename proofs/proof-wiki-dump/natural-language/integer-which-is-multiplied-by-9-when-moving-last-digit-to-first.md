# 

Source: https://proofwiki.org/wiki/Integer_which_is_Multiplied_by_9_when_moving_Last_Digit_to_First



Theorem
Let $N$ be the positive integer:

$N = 10 \, 112 \, 359 \, 550 \, 561 \, 797 \, 752 \, 808 \, 988 \, 764 \, 044 \, 943 \, 820 \, 224 \, 719$
$N$ is the smallest positive integer $N$ such that if you move the last digit to the front, the result is the positive integer $9 N$.


Corollary
The positive integers formed by concatenating the decimal representation of $N$ with itself any number of times have the same property:

$\sqbrk {NN}, \sqbrk {NNN}, \sqbrk {NNNN}, \ldots$


Proof 1
First we demonstrate that $N$ has this property:














\(\ds \)

\(\)







\(\ds 10 \, 112 \, 359 \, 550 \, 561 \, 797 \, 752 \, 808 \, 988 \, 764 \, 044 \, 943 \, 820 \, 224 \, 719 \times 9\)




















\(\ds \)

\(=\)







\(\ds 91 \, 011 \, 235 \, 955 \, 056 \, 179 \, 775 \, 280 \, 898 \, 876 \, 404 \, 494 \, 382 \, 022 \, 471\)










A way to find $N$ is given below.

Suppose $N = \sqbrk {a_k a_{k - 1} \dots a_1}$ satisfies the property above.
Consider the rational number represented by $q = 0.\dot {a_k} a_{k - 1} \dots \dot {a_1}$.
Since $a_k \ne 0$, we require $q \ge 0.1$.

By the property we have:

$9 q = 0 . \dot {a_1} a_k \dots \dot {a_2}$
Then:

$90 q = a_1 . \dot {a_k} a_{k - 1} \dots \dot {a_1}$
Notice that the recurring part of $90 q$ is the same as the recurring part of $q$.
Subtracting, we get $89 q = a_1$.
We have:

$a_1 \ge 89 \times 0.1 = 8.9$
so:

$a_1 = 9$
which gives:

$q = \dfrac 9 {89}$


Decimal Expansion
$\dfrac 9 {89} = 0 \cdotp \dot 10112 \, 35955 \, 05617 \, 97752 \, 80898 \, 87640 \, 44943 \, 82022 \, 471 \dot 9$
$\Box$

which gives us:

$N = 10 \, 112 \, 359 \, 550 \, 561 \, 797 \, 752 \, 808 \, 988 \, 764 \, 044 \, 943 \, 820 \, 224 \, 719$
as the smallest positive integer satisfying the property.
$\blacksquare$


Proof 2
From Integer which is Multiplied by Last Digit when moving Last Digit to First, $N$ is equal to the recurring part of the fraction:

$q = \dfrac {a_1} {10 a_1 - 1}$
where $a_1 = 9$.
Thus:

$q = \dfrac 9 {10 \times 9 - 1} = \dfrac 9 {89}$

Hence:

Decimal Expansion
$\dfrac 9 {89} = 0 \cdotp \dot 10112 \, 35955 \, 05617 \, 97752 \, 80898 \, 87640 \, 44943 \, 82022 \, 471 \dot 9$
$\Box$

The result follows.
$\blacksquare$


Also see
Integer which is Multiplied by Last Digit when moving Last Digit to First: the example given here is a special case


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $10,112,359,550,561,797,752,808,988,764,044,943,820,224,719$




