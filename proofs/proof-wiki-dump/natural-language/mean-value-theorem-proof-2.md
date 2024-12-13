# 

Source: https://proofwiki.org/wiki/Mean_Value_Theorem/Proof_2

Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$ and differentiable on the open interval $\openint a b$.

Then:

$\exists \xi \in \openint a b: \map {f'} \xi = \dfrac {\map f b - \map f a} {b - a}$


Proof
Let $g : \closedint a b \to \R$ be a real function with: 

$\map g x = x$
for all $x \in \closedint a b$. 
By Power Rule for Derivatives, we have: 

$g$ is differentiable with $\map {g'} x = 1$ for all $x \in \closedint a b$.
Note that in particular: 

$\map {g'} x \ne 0$ for all $x \in \openint a b$.
Since $f$ is continuous on $\closedint a b$ and differentiable on $\openint a b$, we can apply the Cauchy Mean Value Theorem.
We therefore have that there exists $\xi \in \openint a b$ such that: 

$\dfrac {\map {f'} \xi} {\map {g'} \xi } = \dfrac {\map f b - \map f a} {\map g b - \map g a}$
Note that: 

$\map {g'} \xi = 1$
and: 

$\map g b - \map g a = b - a$
so this can be rewritten: 

$\map {f'} \xi = \dfrac {\map f b - \map f a} {b - a}$
$\blacksquare$





