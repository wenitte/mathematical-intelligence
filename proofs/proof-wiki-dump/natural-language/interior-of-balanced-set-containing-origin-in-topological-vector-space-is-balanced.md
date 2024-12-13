# 

Source: https://proofwiki.org/wiki/Interior_of_Balanced_Set_containing_Origin_in_Topological_Vector_Space_is_Balanced

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a topological vector space over $\Bbb F$.
Let $B \subseteq X$ be a balanced set such that: 

${\mathbf 0}_X \in B^\circ$
where $B^\circ$ is the interior of $B$.

Then $B^\circ$ is balanced.


Proof
Let $\lambda \in \Bbb F$ have $0 < \cmod \lambda \le 1$. 
Then, we have: 

$\lambda B \subseteq B$
From Interior of Subset, we have: 

$\paren {\lambda B}^\circ \subseteq B^\circ$
Then from Dilation of Interior of Set in Topological Vector Space is Interior of Dilation we have: 

$\lambda B^\circ \subseteq B^\circ$
for $\lambda \in \Bbb F$ with $0 < \cmod \lambda \le 1$.
By hypothesis, we have: 

${\mathbf 0}_X \in B^\circ$
and so:

$\set { {\mathbf 0}_X} \subseteq B^\circ$
So we have: 

$\lambda B^\circ \subseteq B^\circ$
if $\lambda = 0$. 
So:

$\lambda B^\circ \subseteq B^\circ$
for all $\lambda \in \Bbb F$ with $\cmod \lambda \le 1$, so $B^\circ$ is balanced.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.13$: Theorem




