# 

Source: https://proofwiki.org/wiki/Restriction_of_Measurable_Function_is_Measurable_on_Trace_Sigma-Algebra

Theorem
Let $\struct {X, \Sigma}$ be a measurable space. 
Let $f : X \to \overline \R$ be a $\Sigma$-measurable functions. 
Let $E \in \Sigma$. 
Let $\Sigma_E$ be the trace $\sigma$-algebra of $E$ in $\Sigma$. 

Then the restriction $f \restriction_E$ is $\Sigma_E$-measurable. 


Proof
From the definition of a $\Sigma_E$-measurable function, we aim to show that: 

$\set {x \in E : \map f x \le \alpha} \in \Sigma_E$
for each $\alpha \in \R$.

Let $\alpha \in \R$. 
We have: 

$\set {x \in E : \map f x \le \alpha} = \set {x \in X : \map f x \le \alpha} \cap E$
Since $f$ is $\Sigma$-measurable, we have: 

$\set {x \in X : \map f x \le \alpha} \in E$
So, from the definition of trace $\sigma$-algebra, we have: 

$\set {x \in X : \map f x \le \alpha} \cap E \in \Sigma_E$
So we have: 

$\set {x \in E : \map f x \le \alpha} \in \Sigma_E$
for each $\alpha \in \R$.

So:

$f \restriction_E$ is $\Sigma_E$-measurable.
$\blacksquare$





