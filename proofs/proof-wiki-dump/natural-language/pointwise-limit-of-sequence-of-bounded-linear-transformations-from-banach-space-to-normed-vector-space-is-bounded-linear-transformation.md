# 

Source: https://proofwiki.org/wiki/Pointwise_Limit_of_Sequence_of_Bounded_Linear_Transformations_from_Banach_Space_to_Normed_Vector_Space_is_Bounded_Linear_Transformation

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot_X}$ be a Banach space over $\Bbb F$.
Let $\struct {Y, \norm \cdot_Y}$ be a normed vector space over $\Bbb F$.
Let $T : X \to Y$ be a function.
Let $\sequence {T_n}_{n \mathop \in \N}$ be a sequence of bounded linear transformations such that: 

$\ds T x = \lim_{n \mathop \to \infty} T_n x$
for each $x \in X$.

Then $T$ is a bounded linear transformation.


Proof
We first show that $T$ is a linear transformation.
Let $\alpha, \beta \in \Bbb F$ and $x, y \in X$. 
Then, we have: 














\(\ds \map T {\alpha x + \beta y}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {T_n} {\alpha x + \beta y}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\alpha T_n x + \beta T_n y}\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \alpha \lim_{n \mathop \to \infty} T_n x + \beta \lim_{n \mathop \to \infty} T_n y\)




















\(\ds \)

\(=\)







\(\ds \alpha T x + \beta T y\)









So $T$ is linear
Now we show that $T$ is bounded.
We use the Banach-Steinhaus Theorem.
From Modulus of Limit: Normed Vector Space, we have: 

$\ds \norm {T x}_Y = \lim_{n \mathop \to \infty} \norm {T_n x}_Y$
From Convergent Real Sequence is Bounded, we have: 

$\norm {T_n x}_Y$ is bounded in $n$ for each $x \in X$.
That is: 

$\ds \sup_{n \in \N} \norm {T_n x}_Y$ is finite for each $x \in X$.
So, from the Banach-Steinhaus Theorem, we have: 

$\ds \sup_{n \in \N} \norm {T_n}$ is finite, where $\norm \cdot$ is the norm on bounded linear transformation.
Pick $M > 0$ such that: 

$\norm {T_n} \le M$
for each $n \in \N$.
Then: 

$\norm {T_n x}_Y \le M \norm x_X$
for each $x \in X$ and $n \in \N$ from the definition of the norm on bounded linear transformation. 
Then for each $x \in X$ we have: 














\(\ds \norm {T x}_Y\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {T_n x}_Y\)




















\(\ds \)

\(\le\)







\(\ds M \norm x_X\)





Limits Preserve Inequalities



So $T$ is bounded.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $22.2$: The Principle of Uniform Boundedness




