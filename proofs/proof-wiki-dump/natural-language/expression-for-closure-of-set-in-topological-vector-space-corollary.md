# 

Source: https://proofwiki.org/wiki/Expression_for_Closure_of_Set_in_Topological_Vector_Space/Corollary

Theorem
Let $K$ be a topological field.
Let $\struct {X, \tau}$ be a topological vector space over $K$. 
Let $A \subseteq X$. 
Let $\BB$ be a local basis for ${\mathbf 0}_X$ in $\struct {X, \tau}$. 

Then:

$\ds A^- = \bigcap_{V \in \BB} \paren {A + V}$
where $A^-$ is the closure of $A$.


Proof
Let $\VV$ be the set of open neighborhoods of ${\mathbf 0}_X$ in $\struct {X, \tau}$.
From Intersection is Decreasing, we have: 

$\ds \bigcap_{V \in \mathcal V} \paren {A + V} \subseteq \bigcap_{V \in \BB} \paren {A + V}$
Conversely, suppose that:

$\ds x \in \bigcap_{V \in \BB} \paren {A + V}$
Let $O \in \VV$.
Since $\BB$ is a local basis for ${\mathbf 0}_X$ in $\struct {X, \tau}$, there exists $U \in \BB$ such that $U \subseteq O$.
Since $x \in A + V$ for each $V \in \BB$, we in particular have $x \in A + U$. 
Since $U \subseteq O$, we have that $x \in A + O$.
Since $O \in \VV$ was arbitrary, we have:

$\ds x \in \bigcap_{V \in \BB} \paren {A + V}$
$\blacksquare$





