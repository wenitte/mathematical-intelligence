# 

Source: https://proofwiki.org/wiki/Characterization_of_Openness_in_terms_of_Nets



Theorem
Let $\struct {X, \tau}$ be a topological space.
Let $U \subseteq X$. 

Then $U \in \tau$ if and only if for each:

$x \in U$
directed set $\tuple {\Lambda, \preceq}$
net $\family {x_\lambda}_{\lambda \in \Lambda}$ converging to $x$
there exists $\lambda \in \Lambda$ with $x_\lambda \in U$.


Proof
Necessary Condition
Suppose that $U \in \tau$. 
Take $x \in U$, a directed set $\tuple {\Lambda, \preceq}$ and a net $\family {x_\lambda}_{\lambda \in \Lambda}$ converging to $x$.
By the definition of convergence for net, we have: 

there exists $\lambda_0 \in \Lambda$ such that for all $\lambda \in \Lambda$ with $\lambda_0 \preceq \lambda$ we have $x_\lambda \in U$.
In particular, $x_{\lambda_0} \in U$.
$\Box$

Sufficient Condition
Suppose that for each:

$x \in U$
directed set $\tuple {\Lambda, \preceq}$
net $\family {x_\lambda}_{\lambda \in \Lambda}$ converging to $x$
there exists $\lambda \in \Lambda$ with $x_\lambda \in U$.
Aiming for a contradiction, suppose $U \not \in \tau$.
Then $X \setminus U$ is not closed.
From Set is Closed iff Equals Topological Closure, we have $\map \cl {X \setminus U} \ne X \setminus U$. 
Let $x \in \map \cl {X \setminus U} \setminus \paren {X \setminus U}$. 
That is, $x \in \map \cl {X \setminus U} \cap U$. 
From Point in Set Closure iff Limit of Net:

there exists directed set $\struct {\Lambda, \preceq}$ and a net $\family {x_\lambda}_{\lambda \in \Lambda}$ in $X \setminus U$ converging to $x$.
By hypothesis, since $\family {x_\lambda}_{\lambda \in \Lambda}$ converges to $x$, there exists $\lambda \in \Lambda$ such that $x_\lambda \in U$.
This contradicts that $x_\lambda \in X \setminus U$ for each $\lambda \in \Lambda$. 
$\blacksquare$





