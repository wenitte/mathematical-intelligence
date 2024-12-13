# 

Source: https://proofwiki.org/wiki/Limit_of_Constant_Function/Two-Sided_Limit_at_Real_Number

Theorem
Let $a, b \in \R$.
Define $f : \R \to \R$ by: 

$\map f x = a$ for each $x \in \R$.

Then: 

$\ds \lim_{x \mathop \to b} \map f x = a$
where $\ds \lim_{x \mathop \to b}$ denotes the limit as $x \to b$.


Proof
We have: 

$\size {\map f x - a} = 0$ for all $x \in \R$.
So for any $\epsilon > 0$ and $\delta > 0$, we have: 

$\size {\map f x - a} < \epsilon$ for all $x \in \R$ with $\size {x - b} < \delta$.
So by the definition of the limit as $x \to b$, we have: 

$\ds \lim_{x \mathop \to b} \map f x = a$
$\blacksquare$





