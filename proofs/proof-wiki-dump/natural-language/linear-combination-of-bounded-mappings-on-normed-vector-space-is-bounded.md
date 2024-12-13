# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Bounded_Mappings_on_Normed_Vector_Space_is_Bounded

Theorem
Let $\struct {R, \norm {\, \cdot \,}_R}$ be a normed division ring.
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $R$. 
Let $S$ be a set.
Let $f, g : S \to X$ be bounded mappings.
Let $\lambda \in R$. 

Then $f + \lambda g$ is bounded.


Proof
Since $f$ is bounded, there exists a real number $M_1 > 0$ such that:

$\norm {\map f x} \le M_1$ for each $x \in X$.
Since $g$ is bounded, there exists a real number $M_2 > 0$ such that:

$\norm {\map g x} \le M_2$ for each $x \in X$.
Then from Norm Axiom $\text N 3$: Triangle Inequality, we have:

$\norm {\map f x + \lambda \map g x} \le \norm {\map f x} + \norm \lambda_R \norm {\map g x}$
for each $x \in X$.
So:

$\norm {\map f x + \lambda \map g x} \le M_1 + \norm \lambda_R M_2$ for each $x \in X$.
Since $M_1 + \norm \lambda_R M_2 > 0$, we have that $f + \lambda g$ is bounded.
$\blacksquare$





