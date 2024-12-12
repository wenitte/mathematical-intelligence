# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Normed_Vector_Space_is_Bounded

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space. 
Let $\sequence {x_n}_{n \in \N}$ be a convergent sequence. 

Then there exists $M > 0$ such that: 

$\norm {x_n} \le M$
for each $n \in \N$. 


Proof
Suppose that $x_n \to x$. 
From Convergent Sequence is Cauchy Sequence, $\sequence {x_n}_{n \in \N}$ is a Cauchy sequence.
So there exists $N \in \N$ such that:

$\norm {x_n - x_m} < 1$
for each $n, m \ge N$. 
That is: 

$\norm {x_n - x_N} < 1$
for $n \ge N$. 
From Reverse Triangle Inequality: Normed Vector Space, we have: 

$\norm {x_n} - \norm {x_N} < 1$
so that: 

$\norm {x_n} < 1 + \norm {x_N}$
for $n \ge N$. 
Now set: 

$M = \max \set {\norm {x_1}, \norm {x_2}, \ldots, \norm {x_{N - 1} }, 1 + \norm {x_N} }$
Then we have: 

$\norm {x_n} \le M$
for each $n \in \N$. 
$\blacksquare$





