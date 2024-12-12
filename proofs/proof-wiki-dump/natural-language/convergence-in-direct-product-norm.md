# 

Source: https://proofwiki.org/wiki/Convergence_in_Direct_Product_Norm



Theorem
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces.
Let $X \times Y$ be a direct product of vector spaces $X$ and $Y$ together with induced component-wise operations.
Let $\norm {\, \cdot \,}_{X \times Y}$ be the direct product norm.
Let $\sequence {\tuple {x_n, y_n} }_{n \mathop \in \N}$ be a sequence in $X \times Y$.

Then: 

$\tuple {x_n, y_n}$ converges to $\tuple {x, y}$ in $X \times Y$
if and only if:

$x_n$ converges to $x$ in $X$
and:

$y_n$ converges to $y$ in $Y$.


Proof
Neccessary Condition
Suppose that:

$\tuple {x_n, y_n}$ converges to $\tuple {x, y}$ in $X \times Y$
Then, for each $\epsilon > 0$, there exists $N \in \N$ such that: 

$\ds \norm {\tuple {x_n, y_n} - \tuple {x, y} }_{X \times Y} < \epsilon$
for all $n \ge N$.
This is equivalent to: 

$\ds \norm {\tuple {x_n - x, y_n - y} }_{X \times Y} < \epsilon$
by the definition of induced component-wise operations.
From the definition of the direct product norm, this is equivalent to: 

$\ds \map \max {\norm {x_n - x}_X, \norm {y_n - y}_Y} < \epsilon$
This is equivalent to: 

$\norm {x_n - x}_X < \epsilon$
and:

$\norm {y_n - y}_Y < \epsilon$
for $n \ge N$. 
That is: 

$\sequence {x_n}_{n \mathop \in \N}$ converges to $x$ and $\sequence {y_n}_{n \mathop \in \N}$ converges to $y$.
$\Box$

Sufficient Condition
Suppose that: 

$x_n$ converges to $x$ in $X$
and:

$y_n$ converges to $y$ in $Y$.
Let $\epsilon > 0$.
Then we can pick $N_1 \in \N$ such that: 

$\norm {x_n - x}_X < \epsilon$
for $n \ge N_1$.
Similarly, we can pick $N_2 \in \N$ such that: 

$\norm {y_n - y}_Y < \epsilon$
Let:

$N = \max \set {N_1, N_2}$
Then, for $n \ge N$, we have: 

$\norm {x_n - x}_X < \epsilon$
and:

$\norm {y_n - y}_Y < \epsilon$
so that: 

$\map \max {\norm {x_n - x}_X, \norm {y_n - y}_Y} < \epsilon$
From the definition of the direct product norm, we have: 

$\norm {\tuple {x_n - x, y_n - y} }_{X \times Y} < \epsilon$
From the definition of induced component-wise operations, we have: 

$\norm {\tuple {x_n, y_n} - \tuple {x, y} }_{X \times Y} < \epsilon$
for all $n \ge N$.
So:

$\tuple {x_n, y_n}$ converges to $\tuple {x, y}$ in $X \times Y$
$\blacksquare$





