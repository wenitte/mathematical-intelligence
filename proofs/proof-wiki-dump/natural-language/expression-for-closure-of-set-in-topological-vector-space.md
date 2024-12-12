# 

Source: https://proofwiki.org/wiki/Expression_for_Closure_of_Set_in_Topological_Vector_Space



Theorem
Let $K$ be a topological field.
Let $X$ be a topological vector space over $K$. 
Let $A \subseteq X$. 
Let $\mathcal V$ be the set of open neighborhoods of ${\mathbf 0}_X$.

Then: 

$\ds A^- = \bigcap_{V \in \mathcal V} \paren {A + V}$
where $A^-$ is the closure of $A$.


Corollary
Let $\BB$ be a local basis for ${\mathbf 0}_X$ in $\struct {X, \tau}$. 

Then:

$\ds A^- = \bigcap_{V \in \BB} \paren {A + V}$
where $A^-$ is the closure of $A$.


Proof
From Condition for Point being in Closure: Topological Vector Space, we have $x \in A^-$ if and only if:

for each open neighborhood $V$ of ${\mathbf 0}_X$ we have $\paren {x + V} \cap A \ne \O$.
We have that $\paren {x + V} \cap A \ne \O$ if and only if there exists some $u \in X$ with $u \in A$ and $u \in x + V$.
This is equivalent to, $u \in A$ and there exists $v \in V$ such that $u = x + v$. 
This is equivalent to, $x = u - v$ for $u \in A$ and $v \in V$.
That is, equivalent to $x \in A - V$.
So, we have that $x \in A^-$ if and only if $x \in A - V$ for all open neighborhoods $V$ of ${\mathbf 0}_X$.
So, we have: 

$\ds A^- = \bigcap_{V \in \mathcal V} \paren {A - V}$
From Dilation of Open Set in Topological Vector Space is Open, we have that $-V$ is open if and only if $V$ is open.
Writing $A - V = A + \paren {-V}$, we therefore see that: 

$\ds A^- = \bigcap_{V \in \mathcal V} \paren {A + V}$
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.13$: Theorem




