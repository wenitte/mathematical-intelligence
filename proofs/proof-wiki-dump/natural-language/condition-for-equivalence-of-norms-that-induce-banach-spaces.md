# 

Source: https://proofwiki.org/wiki/Condition_for_Equivalence_of_Norms_that_induce_Banach_Spaces

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a vector space over $\Bbb F$.
Let $\norm \cdot_1$ and $\norm \cdot_2$ be norms on $X$ such that $\struct {X, \norm \cdot_1}$ and $\struct {X, \norm \cdot_2}$ are Banach spaces.
Suppose that, for some real number $C > 0$: 

$\norm x_2 \le C \norm x_1$ for all $x \in X$.

Then $\norm \cdot_1$ and $\norm \cdot_2$ are equivalent.


Proof
Consider $I : \struct {X, \norm \cdot_1} \to \struct {X, \norm \cdot_2}$ defined by: 

$I x = x$ for each $x \in X$.
Then for $x, y \in X$ and $\lambda \in \Bbb F$. 
Then we have: 

$\map I {\lambda x + y} = \lambda x + y = \lambda I x + I y$
so $I$ is linear. 
Similarly, we have:

$\norm {I x}_2 = \norm x_2 \le C \norm x_1$
so $I$ is a bounded linear transformation.
Clearly $I$ is a bijection, so by the Banach Isomorphism Theorem, the inverse $I^{-1} : \struct {X, \norm \cdot_2} \to \struct {X, \norm \cdot_1}$ is bounded.
So, there exists a real number $C' > 0$ such that: 

$\norm {I x}_1 = \norm x_1 \le C' \norm x_2$
Then we have: 

$\norm x_1 \le C' \norm x_2 \le C C' \norm x_1$
so that: 

$\ds \frac 1 {C'} \norm x_1 \le \norm x_2 \le C \norm x_1$
for $C, C' > 0$. 
So $\norm \cdot_1$ and $\norm \cdot_2$ are equivalent.
$\blacksquare$





