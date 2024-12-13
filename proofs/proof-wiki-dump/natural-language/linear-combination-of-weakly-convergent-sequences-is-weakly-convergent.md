# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Weakly_Convergent_Sequences_is_Weakly_Convergent

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\Bbb F$.
Let $x, y \in X$.
Let $\alpha, \beta \in \Bbb F$. 
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $X$ converging weakly to $x$. 
Let $\sequence {y_n}_{n \mathop \in \N}$ be a sequence in $X$ converging weakly to $y$. 

Then: 

$\alpha x_n + \beta y_n \weakconv \alpha x + \beta y$
where $\weakconv$ denotes weak convergence.


Proof
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $\struct {X, \norm \cdot}$. 
Since: 

$x_n \weakconv x$
We have: 

$\map f {x_n} \to \map f x$
for each $f \in X^\ast$.
Similarly, since: 

$y_n \weakconv y$
we have: 

$\map f {y_n} \to \map f y$
From Combined Sum Rule for Real Sequences, we therefore have: 

$\alpha \map f {x_n} + \beta \map f {y_n} \to \alpha \map f x + \beta \map f {y_n}$
Since $f$ is linear, we have: 

$\alpha \map f {x_n} + \beta \map f {y_n} = \map f {\alpha x_n + \beta y_n}$ for each $n \in \N$.
and:

$\alpha \map f x + \beta \map f y = \map f {\alpha x + \beta y}$
So we have: 

$\map f {\alpha x_n + \beta y_n} \to \map f {\alpha x + \beta y}$
for each $f \in X^\ast$. 
So, from the definition of weak convergence, we have: 

$\alpha x_n + \beta y_n \weakconv \alpha x + \beta y$
$\blacksquare$





