# 

Source: https://proofwiki.org/wiki/Characterization_of_Hausdorff_Property_in_terms_of_Nets



Theorem
Let $\struct {X, \tau}$ be a topological space.

We have that $\struct {X, \tau}$ is Hausdorff if and only if convergent nets have a unique limit. 
That is, if and only if whenever $\struct {\Lambda, \preceq}$ is a directed set, $x, y \in X$ and $\family {x_\lambda}_{\lambda \in \Lambda}$ is a net converging to $x$ and $y$ in $\struct {X, \tau}$, we have $x = y$. 


Proof
Necessary Condition
Suppose that $\struct {X, \tau}$ is Hausdorff.
Let $\struct {\Lambda, \preceq}$ is a directed set, $x, y \in X$ and $\family {x_\lambda}_{\lambda \in \Lambda}$ is a net converging to $x$ and $y$ in $\struct {X, \tau}$.
Aiming for a contradiction, suppose suppose that $x \ne y$. 
Since $\struct {X, \tau}$ is Hausdorff there exists open neighborhoods $U$ and $V$ of $x$ and $y$ respectively such that $U \cap V = \O$.
Since $\family {x_\lambda}_{\lambda \in \Lambda}$ converges to $x$, there exists $\lambda_x \in \Lambda$ such that: 

$x_\lambda \in U$ for $\lambda_x \preceq \lambda$.
Since $\family {x_\lambda}_{\lambda \in \Lambda}$ converges to $y$, there exists $\lambda_y \in \Lambda$ such that: 

$x_\lambda \in V$ for $\lambda_y \preceq \lambda$.
Since $\struct {\Lambda, \preceq}$ is a directed set, there exists $\lambda_\ast \in \Lambda$ such that: 

$\lambda_x \preceq \lambda_\ast$ and $\lambda_y \preceq \lambda_\ast$.
Then: 

$x_{\lambda_\ast} \in U$
and:

$x_{\lambda_\ast} \in V$
But then $x_{\lambda_\ast} \in U \cap V = \O$, contradiction. 
So we have $x = y$.
$\Box$

Sufficient Condition
Suppose that $\struct {X, \tau}$ is not Hausdorff. 
Then there exists distinct $x, y \in X$ such that: 

for all open neighborhoods $U$ and $V$ of $x$ and $y$ respectively, we have $U \cap V \ne \O$.
Let: 

$\FF = \set {\tuple {U, V} : U \text { and } V \text { are open with } x \in U, \, y \in V}$
Define a preordering $\sqsubseteq$ on $\FF$ by: 

$\tuple {U, V} \sqsubseteq \tuple {U', V'}$
if and only if:

$U \supseteq U'$ and $V \supseteq V'$.
From Product of Directed Sets is Directed Set, we have that $\FF$ is directed.
For each $\tuple {U, V} \in \FF$, pick: 

$x_{\tuple {U, V} } \in U \cap V$
We show that $\family {x_{\tuple {U, V} } }_{\tuple {U, V} \in \FF}$ converges to $x$ and $y$.
Let $U'$ be an open neighborhood of $x$. 
Then for $\tuple {U', X} \in \FF$ with $\tuple {U', X} \sqsubseteq \tuple {U, V}$, we have:

$x_{\tuple {U, V} } \in U \cap V \subseteq U \subseteq U'$
Similarly, let $V'$ be an open neighborhood of $Y$.
Then for $\tuple {X, V'} \in \FF$ with $\tuple {X, V'} \sqsubseteq \tuple {U, V}$ we have: 

$x_{\tuple {U, V} } \in U \cap V \subseteq V \subseteq V'$
So $\family {x_{\tuple {U, V} } }_{\tuple {U, V} \in \FF}$ converges to $x$ and $y$ with $x \ne y$.
So:

if $\struct {X, \tau_X}$ is not Hausdorff then:
there exists $x, y \in X$ with $x \ne y$, a directed set $\struct {\Lambda, \preceq}$ and a net $\family {x_\lambda}_{\lambda \in \Lambda}$ such that $\family {x_\lambda}_{\lambda \in \Lambda}$ converges to both $x$ and $y$.
We are done by Proof by Contraposition.
$\blacksquare$





