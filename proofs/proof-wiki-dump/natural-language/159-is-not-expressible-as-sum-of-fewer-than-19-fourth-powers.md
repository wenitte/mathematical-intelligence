# 

Source: https://proofwiki.org/wiki/159_is_not_Expressible_as_Sum_of_Fewer_than_19_Fourth_Powers



Theorem
$159$ cannot be expressed as the sum of fewer than $19$ fourth powers:

$159 = 14 \times 1^4 + 4 \times 2^4 + 3^4$


Proof
We have:

$4^4 = 256 > 159$
$3^4 = 81$
$2^4 = 16$
$1^4 = 1$
Let us attempt to construct an expression of $159$ as the sum of fewer than $19$ fourth powers:

If no $3^4$ is used in our sum, the sum consists only of $2^4$ and $1^4$.
Using $2^4$ is more efficient than using $1^4$, since $2^4$ can replace $16 \times 1^4$.
So we have:

$159 = 9 \times 2^4 + 15 \times 1^4$
which uses $24$ fourth powers.

If $3^4$ is used in our sum, the most efficient way is demonstrated above:

$159 = 14 \times 1^4 + 4 \times 2^4 + 3^4$
which uses $19$ fourth powers.

We cannot use more than $2$ instances of $3^4$, as $2 \times 3^4 = 162 > 159$.
$\blacksquare$


Also see
Hilbert-Waring Theorem
Smallest Number not Expressible as Sum of Fewer than 19 Fourth Powers
319 is not Expressible as Sum of Fewer than 19 Fourth Powers


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $159$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $159$




