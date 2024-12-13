# 

Source: https://proofwiki.org/wiki/Multiple_Rule_for_Sequence_in_Normed_Vector_Space

Theorem
Let $\Bbb F$ be a subfield of $\C$. 
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\Bbb F$. 
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $X$ converging to $x$. 
Let $\lambda \in \Bbb F$. 

Then: 

$\lambda x_n \to \lambda x$


Proof
The case $\lambda = 0$ follows from Constant Sequence in Normed Vector Space Converges.
Now take $\lambda \ne 0$. 
Since $\sequence {x_n}_{n \mathop \in \N}$ converges to $x$, for each $\epsilon > 0$ there exists $N \in \N$ such that: 

$\ds \norm {x_n - x} < \frac \epsilon {\cmod \lambda}$ for all $n \ge N$.
Noting that: 

$\ds \cmod \lambda \norm {x_n - x} = \norm {\lambda x_n - \lambda x}$
from the norm axioms, we have:

$\ds \norm {\lambda x_n - \lambda x} < \epsilon$ for all $n \ge N$.
Since $\epsilon$ was arbitrary, it follows that: 

$\lambda x_n \to \lambda x$
$\blacksquare$





