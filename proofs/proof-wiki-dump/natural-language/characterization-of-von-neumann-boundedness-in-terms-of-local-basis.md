# 

Source: https://proofwiki.org/wiki/Characterization_of_von_Neumann-Boundedness_in_terms_of_Local_Basis



Theorem
Let $\struct {X, \tau}$ be a topological vector space.
Let $\mathcal B$ be a local basis for $\mathbf 0_X$ in $\struct {X, \tau}$.
Let $E \subseteq X$. 

Then $E$ is von Neumann-bounded if and only if:

for each $V \in \mathcal B$ there exists $s > 0$ such that $E \subseteq t V$ for each $t > s$.


Proof
Necessary Condition
Suppose that $E$ is von Neumann-bounded.
Then: 

for each open neighbourhood $V$ of ${\mathbf 0}_X$, there exists $s > 0$ such that $E \subseteq t V$ for each $t > s$
Since $\mathcal B$ consists of open neighbourhoods of ${\mathbf 0}_X$, we in particular have: 

for each $V \in \mathcal B$ there exists $s > 0$ such that $E \subseteq t V$ for each $t > s$.
$\Box$

Sufficient Condition
Suppose that:

for each $V \in \mathcal B$ there exists $s > 0$ such that $E \subseteq t V$ for each $t > s$.
Let $U$ be an open neighbourhood of ${\mathbf 0}_X$. 
Then there exists some $V \in \mathcal V$ such that $V \subseteq U$ and:

there exists $s > 0$ such that $E \subseteq t V \subseteq t U$ for each $t > s$.
So $E$ is von Neumann-bounded.
$\blacksquare$





