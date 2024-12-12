# 

Source: https://proofwiki.org/wiki/Characterization_of_Invertible_Bounded_Linear_Transformations



Theorem
Let $\struct {U, \norm \cdot_U}$ and $\struct {V, \norm \cdot_V}$ be normed vector spaces.
Let $A : V \to U$ be a linear transformation with inverse $A^{-1} : U \to V$.

Then $A^{-1}$ is a bounded linear transformation if and only if:

there exists a real number $c > 0$ such that $\norm {A x}_U \ge c \norm x_V$ for all $x \in V$.

That is, $A$ is invertible as a bounded linear transformation if and only if:

there exists a real number $c > 0$ such that $\norm {A x}_U \ge c \norm x_V$ for all $x \in V$.


Proof
From Inverse of Linear Transformation is Linear Transformation, we have: 

$A^{-1}$ is a linear transformation.
So we are interested in determining when $A^{-1}$ is bounded.

Necessary Condition
Suppose that $A^{-1}$ was bounded.
Then:

there exists a real number $M > 0$ such that $\norm {A^{-1} y}_V \le M \norm y_U$ for all $y \in U$.
Let $x \in V$ and set $y = A x \in U$.
Then: 

$\norm {A^{-1} y}_V \le M \norm y_U$
We have: 














\(\ds \norm {A^{-1} y}_V\)

\(=\)







\(\ds \norm {A^{-1} A x}_V\)




















\(\ds \)

\(=\)







\(\ds \norm x_V\)









and:

$\norm y_U = \norm {A x}_U$
giving:

$\norm x_V \le M \norm {A x}_U$
So, we have: 

$\norm {A x}_U \ge \dfrac 1 M \norm x_V$
for all $x \in V$.
Then, setting $c = 1/M$, we have that: 

there exists a real number $c > 0$ such that $\norm {A x}_U \ge c \norm x_V$ for all $x \in V$.
$\Box$


Sufficient Condition
Suppose that: 

there exists a real number $c > 0$ such that $\norm {A x}_U \ge c \norm x_V$ for all $x \in V$.
Let $y \in U$ and let $x = A^{-1} y \in V$.
Then:

$\norm {A x}_U \ge c \norm x_V$
We have: 














\(\ds \norm {A x}_U\)

\(=\)







\(\ds \norm {A A^{-1} y}_U\)




















\(\ds \)

\(=\)







\(\ds \norm y_U\)









and:

$\norm x_V = \norm {A^{-1} y}_V$
so:

$\norm y_U \ge c \norm {A^{-1} y}_V$
So, we have: 

$\norm {A^{-1} y}_V \le \dfrac 1 c \norm y_U$
for all $y \in U$. 
So:

$A^{-1}$ is bounded.
$\blacksquare$





