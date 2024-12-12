# 

Source: https://proofwiki.org/wiki/Bounded_Linear_Transformation_preserves_Cauchy_Sequences

Theorem
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces.
Let $T : X \to Y$ be a bounded linear transformation.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a Cauchy sequence in $X$.

Then $\sequence {T x_n}_{n \mathop \in \N}$ is a Cauchy sequence in $Y$. 


Proof
Since $T$ is a bounded linear transformation, there exists $M > 0$ such that: 

$\norm {T x}_Y \le M \norm x_X$
for all $x \in X$. 
So, since $T$ is linear, we have:

$\norm {T x_n - T x_m}_Y \le M \norm {x_n - x_m}_X$
Let $\epsilon > 0$.
Since $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy, there exists $N \in \N$ such that: 

$\ds \norm {x_n - x_m}_X < \frac \epsilon M$
for $n, m \ge N$. 
Then: 

$\ds \norm {T x_n - T x_m} < M \paren {\frac \epsilon M} = \epsilon$
for $n, m \ge N$. 
So $\sequence {T x_n}_{n \mathop \in \N}$ is a Cauchy sequence in $Y$.
$\blacksquare$





