# 

Source: https://proofwiki.org/wiki/Complex_Sequence_is_Null_iff_Positive_Integer_Powers_of_Sequence_are_Null



Theorem
Let $\sequence {z_n}_{n \mathop \in \N}$ be a complex sequence.
Let $k \in \N$. 

Then: 

$z_n \to 0$
if and only if:

$z_n^k \to 0$


Proof
Necessary Condition
Suppose that: 

$z_n \to 0$
Let $\epsilon > 0$. 
Then from the definition of convergent sequence we can find $N \in \N$ such that for $n \ge N$ we have: 

$\cmod {z_n} < \epsilon^{1/k}$
then: 

$\cmod {z_n}^k < \epsilon$
From Power of Complex Modulus equals Complex Modulus of Power, this gives: 

$\cmod {z_n^k} < \epsilon$
for all $n \ge N$. 
So:

$z_n^k \to 0$
$\Box$

Sufficient Condition
Suppose that: 

$z_n^k \to 0$ for some $k$.
Let $\epsilon > 0$. 
Then we can find $N \in \N$ such that: 

$\cmod {z_n^k} < \epsilon^k$
From Power of Complex Modulus equals Complex Modulus of Power, we have:

$\cmod {z_n}^k < \epsilon^k$
so:

$\cmod {z_n} < \epsilon$
Since $\epsilon > 0$ was arbitrary, we have: 

$z_n \to 0$
from the definition of a convergent complex sequence. 
$\blacksquare$





