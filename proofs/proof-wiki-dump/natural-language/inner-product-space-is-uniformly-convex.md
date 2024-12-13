# 

Source: https://proofwiki.org/wiki/Inner_Product_Space_is_Uniformly_Convex

Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space.
Then $V$ is uniformly convex.


Proof
Let $\norm \cdot$ be the inner product norm for $\struct {V, \innerprod \cdot \cdot}$.
Let $\epsilon > 0$. 
Let $x, y \in V$ be such that: 

$\norm x = \norm y = 1$
and:

$\norm {x - y} > \epsilon$
Then from the Parallelogram Law (Inner Product Space), we have:

$\norm {x + y}^2 + \norm {x - y}^2 = 2 \paren {\norm x^2 + \norm y^2} = 4$
So that: 

$\norm {x + y}^2 = 4 - \norm {x - y}^2$
Since:

$\norm {x - y} > \epsilon$
we have:

$\norm {x + y}^2 < 4 - \epsilon^2$
From positive homogeneity, we have: 

$\ds \norm {\frac {x + y} 2}^2 < 1 - \frac {\epsilon^2} 4$
We now pick $\delta$ such that: 

$\ds \paren {1 - \delta}^2 = 1 - \frac {\epsilon^2} 4$
Note that since:

$\norm {x - y} \le \norm x + \norm y$
we have: 

$\norm {x - y} \le 2$
So if there exists $x, y \in V$ with $\norm x = \norm y = 1$ such that: 

$\norm {x - y} > \epsilon$
we have $0 < \epsilon < 2$. 
Hence, if $\epsilon \ge 2$, the demand is vacuously true, and we can pick any positive real $\delta > 0$.
Now take $0 < \epsilon < 2$.
We then have: 

$\ds 0 < 4 - \epsilon^2 < 4$
so that: 

$\ds 0 < 1 - \frac {\epsilon^2} 4 < 1$
So, we may pick: 

$\ds \delta = 1 - \sqrt {1 - \frac {\epsilon^2} 4} > 0$
Then, for each $x, y \in V$ such that $\norm x = \norm y = 1$ and $\norm {x - y} > \epsilon$, we have: 

$\ds \norm {\frac {x + y} 2}^2 < \paren {1 - \delta}^2$
Since $0 < 1 - \delta < 1$, we have: 

$\ds \norm {\frac {x + y} 2} < 1 - \delta$
Since $\epsilon > 0$ was arbitrary, for each $\epsilon > 0$ we have found $\delta > 0$ such that:

whenever $x, y \in V$ have $\norm x = \norm y = 1$ and $\norm {x - y} > \epsilon$, we have:
$\ds \norm {\frac {x + y} 2} < 1 - \delta$
as required.
So $V$ is uniformly convex.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $8$: Exercises




