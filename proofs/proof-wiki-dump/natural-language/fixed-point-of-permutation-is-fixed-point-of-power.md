# 

Source: https://proofwiki.org/wiki/Fixed_Point_of_Permutation_is_Fixed_Point_of_Power



Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $\sigma \in S_n$.
Let $i \in \Fix \sigma$, where $\Fix \sigma$ denotes the set of fixed elements of $\sigma$.

Then for all $m \in \Z$:

$i \in \Fix {\sigma^m}$


Proof
It follows from Integers form Ordered Integral Domain that for any integer $m$ either:

$m = 0$
or

$m > 0$
or:

$m < 0$


Case 1
By Element to the Power of Zero is Identity:

$m = 0 \implies \sigma^m = e$
So:

$\sigma^m \paren i = e \paren i = i$
$\Box$


Case 2
Follows from Fixed Point of Mappings is Fixed Point of Composition: General Result.
$\Box$


Case 3
For all $m < 0$, $m = -k$ for some (strictly) positive integer $k$.

Therefore:

$\sigma^k \paren i = i \implies i = \sigma^{-k} \paren i$
Hence the result.
$\blacksquare$





