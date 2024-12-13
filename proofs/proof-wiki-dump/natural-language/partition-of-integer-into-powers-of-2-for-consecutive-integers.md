# 

Source: https://proofwiki.org/wiki/Partition_of_Integer_into_Powers_of_2_for_Consecutive_Integers

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $\map b n$ denote the number of ways $n$ can be partitioned into (integer) powers of $2$.

Then:

$\map b {2 n} = \map b {2 n + 1}$


Proof
We prove the theorem by establishing a bijection between the set of partitions of $2 n$ with that of $2 n + 1$, under the constraint where each partition is an integer power of $2$.

We have that $2^k$ is even for all $k > 0$.
Also, we have that $2 n + 1$ is odd for all $n$.
So, for each partition of $2 n + 1$ into integer powers of $2$, there is at least one part of size $1$.
Removing this part gives a partition of $2 n$ into integer powers of $2$.

The inverse of this is adding a part of size $1$ to a partition of $2 n$.
This will give a partition of $2 n + 1$ into integer powers of $2$.
Hence both removing and adding are well-defined mappings.
Thus they are bijections.

Therefore:

$\map b {2 n} = \map b {2 n + 1}$
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-5}$ The Use of Computers in Number Theory: Exercise $12$




