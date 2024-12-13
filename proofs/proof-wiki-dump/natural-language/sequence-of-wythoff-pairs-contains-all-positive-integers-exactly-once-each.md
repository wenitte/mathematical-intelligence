# 

Source: https://proofwiki.org/wiki/Sequence_of_Wythoff_Pairs_contains_all_Positive_Integers_exactly_Once_Each

Theorem
Consider the sequence of Wythoff pairs arranged in sequential order:

$\tuple {0, 0}, \tuple {1, 2}, \tuple {3, 5}, \tuple {4, 7}, \tuple {6, 10}, \tuple {8, 13}, \ldots$

Apart from the first Wythoff pair $\tuple {0, 0}$, every positive integer appears in this sequence exactly once.


Proof
By definition, the $n$th Wythoff pair is $\tuple {\floor {n \phi}, \floor {n \phi^2} }$.
Thus the coordinates of the sequence of Wythoff pairs are the terms of the lower and upper Wythoff sequences.
By definition:

the lower Wythoff sequence is the Beatty sequence $\BB_x$ on the golden section $\phi$.
the upper Wythoff sequence is the complementary Beatty sequence on the golden section $\phi$.
Also by definition, the complementary Beatty sequence on $x$ is the integer sequence formed by the integers which are missing from $\BB_x$.
Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1 \cdotp 61803 \, 39887 \, 49894 \, 84820 \, 45868 \, 34365 \, 63811 \, 77203 \, 09179 \, 80576  \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1 \cdotp 61803 \, 39887 \, 49894 \, 84820 \, 45868 \, 34365 \, 63811 \, 77203 \, 09179 \, 80576  \ldots$




