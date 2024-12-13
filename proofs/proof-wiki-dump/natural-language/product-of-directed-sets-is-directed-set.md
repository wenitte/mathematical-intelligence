# 

Source: https://proofwiki.org/wiki/Product_of_Directed_Sets_is_Directed_Set

Theorem
Let $\struct {\Lambda_1, \preceq_1}$ and $\struct {\Lambda_2, \preceq_2}$ be directed sets. 
Define a relation $\sqsubseteq$ on $\Lambda_1 \times \Lambda_2$ by: 

$\tuple {\lambda_1, \lambda_2} \sqsubseteq \tuple {\mu_1, \mu_2}$
for $\tuple {\lambda_1, \lambda_2}, \tuple {\mu_1, \mu_2} \in \Lambda_1 \times \Lambda_2$ if and only if:

$\lambda_1 \preceq_1 \mu_1$ and $\lambda_2 \preceq_2 \mu_2$

Then $\struct {\Lambda_1 \times \Lambda_2, \sqsubseteq}$ is a directed set.


Proof
We first show that $\sqsubseteq$ is a preordering on $\Lambda_1 \times \Lambda_2$.
Let $\tuple {\lambda, \mu} \in \Lambda_1 \times \Lambda_2$.
We have $\lambda \preceq_1 \lambda$ and $\mu \preceq_2 \mu$ since $\Lambda_1$ and $\Lambda_2$ are preorderings.
So we have $\tuple {\lambda, \mu} \sqsubseteq \tuple {\lambda, \mu}$, and so $\preceq$ is reflexive.
Now suppose that $\tuple {\lambda_1, \mu_1}, \tuple {\lambda_2, \mu_2}, \tuple {\lambda_3, \mu_3} \in \Lambda_1 \times \Lambda_2$ are such that:

$\tuple {\lambda_1, \mu_1} \sqsubseteq \tuple {\lambda_2, \mu_2}$
and:

$\tuple {\lambda_2, \mu_2} \sqsubseteq \tuple {\lambda_3, \mu_3}$
Then we have: 

$\lambda_1 \preceq_1 \lambda_2$ and $\lambda_2 \preceq_1 \lambda_3$
and:

$\mu_1 \preceq_2 \mu_2$ and $\mu_2 \preceq_2 \mu_3$
Since $\preceq_1$ is transitive, we have: 

$\lambda_1 \preceq_1 \lambda_3$
Since $\preceq_2$ is transitive, we have: 

$\mu_1 \preceq_2 \mu_3$
So we have: 

$\tuple {\lambda_1, \mu_1} \sqsubseteq \tuple {\lambda_3, \mu_3}$
So $\sqsubseteq$ is transitive.

We now show that $\sqsubseteq$ is directed. 
Let $\tuple {\lambda_1, \mu_1}, \tuple {\lambda_2, \mu_2} \in \Lambda_1 \times \Lambda_2$.
Then since $\preceq_1$ is directed, there exists $\lambda \in \Lambda_1$ such that: 

$\lambda_1 \preceq_1 \lambda$ and $\lambda_2 \preceq_2 \lambda$.
Since $\preceq_2$ is directed, there exists $\mu \in \Lambda_2$ such that:

$\mu_1 \preceq_2 \mu$ and $\mu_2 \preceq_2 \mu$.
So we have: 

$\tuple {\lambda_1, \mu_1} \sqsubseteq \tuple {\lambda, \mu}$
and:

$\tuple {\lambda_2, \mu_2} \sqsubseteq \tuple {\lambda, \mu}$
So $\tuple {\Lambda_1 \times \Lambda_2, \sqsubseteq}$ is a directed set.
$\blacksquare$





