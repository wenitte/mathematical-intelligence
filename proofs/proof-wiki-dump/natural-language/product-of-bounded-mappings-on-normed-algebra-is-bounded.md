# 

Source: https://proofwiki.org/wiki/Product_of_Bounded_Mappings_on_Normed_Algebra_is_Bounded

Theorem
Let $\struct {R, \norm {\, \cdot \,}_R}$ be a normed division ring.
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed algebra over $R$. 
Let $S$ be a set.
Let $f, g : S \to X$ be bounded mappings.

Then $f g$ is bounded.


Proof
Since $f$ is bounded, there exists a real number $M_1 > 0$ such that:

$\norm {\map f x} \le M_1$ for each $x \in X$.
Since $g$ is bounded, there exists a real number $M_2 > 0$ such that:

$\norm {\map g x} \le M_2$ for each $x \in X$.
Since $\norm {\, \cdot \,}$ is a algebra norm, we have:

$\norm {\map f x \map g x} \le \norm {\map f x} \norm {\map g x}$ for each $x \in X$.
So we have:

$\norm {\map f x \map g x} \le M_1 M_2$
for each $x \in X$. 
Since $M_1 M_2 > 0$, we have that $f g$ is bounded.
$\blacksquare$





