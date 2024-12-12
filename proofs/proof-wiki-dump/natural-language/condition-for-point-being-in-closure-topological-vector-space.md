# 

Source: https://proofwiki.org/wiki/Condition_for_Point_being_in_Closure/Topological_Vector_Space

Theorem
Let $K$ be a topological field.
Let $X$ be a topological vector space over $K$. 
Let $A \subseteq X$. 
Let $A^-$ denote the closure of $A$ in $X$.
Let $x \in X$. 

Then $x \in A^-$ if and only if:

for each open neighborhood $V$ of ${\mathbf 0}_X$ we have $\paren {x + V} \cap A \ne \O$.


Proof
From the definition of the closure of $A$, $A^-$ is the set of adherent points of $A$.
So $x \in A^-$ if and only if for each open neighborhood $U$ of $x$ we have: 

$U \cap A \ne \O$
From Classification of Open Neighborhoods in Topological Vector Space, every such $U$ has the form $U = x + V$ for some open neighborhood $V$ of ${\mathbf 0}_X$, and conversely every set of this form is an open neighborhood of $x$. 
So we have $x \in A^-$ if and only if:

for each open neighborhood $V$ of ${\mathbf 0}_X$ we have $\paren {x + V} \cap A \ne \O$.
$\blacksquare$





