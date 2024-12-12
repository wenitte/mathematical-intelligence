# 

Source: https://proofwiki.org/wiki/Characterization_of_Continuity_in_terms_of_Nets



Theorem
Let $\struct {X, \tau_X}$ and $\struct {Y, \tau_Y}$ be topological spaces.
Let $f : \struct {X, \tau_X} \to \struct {Y, \tau_Y}$ be a function.
Let $x \in X$. 

Then $f$ is continuous at $x$ if and only if:

for every directed set $\struct {\Lambda, \preceq}$ and net $\family {x_\lambda}_{\lambda \in \Lambda}$ such that $\family {x_\lambda}_{\lambda \in \Lambda}$ converges to $x$ in $\struct {X, \tau_X}$, we have that:
the net $\family {\map f {x_\lambda} }_{\lambda \in \Lambda}$ converges to $\map f x$ in $\struct {Y, \tau_Y}$.


Proof
Necessary Condition
Suppose that $f$ is continuous at $x$.
Let $\struct {\Lambda, \preceq}$ be a directed set.
Let $\family {x_\lambda}_{\lambda \in \Lambda}$ be a net such that $\family {x_\lambda}_{\lambda \in \Lambda}$ converges to $x$.
Let $U$ be an open neighborhood of $\map f x$ in $\struct {Y, \tau_Y}$.
Then there exists an open neighborhood $V$ of $x$ in $\struct {X, \tau_X}$ such that: 

$f \sqbrk V \subseteq U$
Since $\family {x_\lambda}_{\lambda \in \Lambda}$ converges to $x$, there exists $\lambda_0 \in \Lambda$ such that: 

$x_n \in V$ for all $\lambda \in \Lambda$ with $\lambda_0 \preceq \lambda$.
Then: 

$\map f {x_n} \in U$
for $\lambda_0 \preceq \lambda$.
Since $U$ was an arbitrary open neighborhood of $\map f x$ in $\struct {Y, \tau_Y}$, we have that $\family {\map f {x_\lambda} }_{\lambda \in \Lambda}$ converges to $\map f x$. 
$\Box$

Sufficient Condition
Suppose that $f$ is not continuous at $x$.
Let $\Lambda$ be the set of open neighborhoods of $\map f x$. 
Then $\struct {\Lambda, \supseteq}$ is a directed set from Open Neighborhoods of Point form Directed Ordering.
Since $f$ is not continuous at $x$, there exists an open neighborhood of $\map f x$ in $\struct {Y, \tau_Y}$ such that: 

$f \sqbrk V \not \subseteq U$
for all open neighborhoods $V$ of $x$ in $\struct {X, \tau_X}$.
So for each open neighborhood $V$ of $x$, we can pick $x_V \in V$ such that: 

$\map f {x_V} \not \in U$
Since $U$ is an open neighborhood of $\map f x$, we certainly have: 

$\family {\map f {x_V} }_{V \in \Lambda}$ does not converge to $\map f x$.
We show that: 

$\family {x_U}_{U \in \Lambda}$ converges to $x$.
If $V$ is an open neighborhood of $x$ and $V \supseteq U$, we have: 

$x_U \in U$
so that: 

$x_U \in V$
So $\family {x_U}_{U \in \Lambda}$ converges to $x$.
So:

if $f$ is not continuous at $x$, there exists a directed set $\struct {\Lambda, \preceq}$ and a net $\family {x_\lambda}_{\lambda \in \Lambda}$ such that $\family {x_\lambda}_{\lambda \in \Lambda}$ converges to $x$ in $\struct {X, \tau_X}$ but $\family {\map f {x_\lambda} }_{\lambda \in \Lambda}$ does not converge to $\map f x$ in $\struct {Y, \tau_Y}$.
By contraposition, we have the demand.
$\blacksquare$





