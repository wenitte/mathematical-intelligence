# 

Source: https://proofwiki.org/wiki/Classification_of_Open_Neighborhoods_in_Topological_Vector_Space



Theorem
Let $K$ be a topological field.
Let $X$ be a topological vector space over $K$.
Let $U \subseteq X$.
Let $x \in X$. 

Then $U$ is an open neighborhood of $x$ if and only if $U - x$ is an open neighborhood of ${\mathbf 0}_X$.
Equivalently, the open neighborhoods of $x$ are precisely the sets of the form $V + x$ where $V$ is an open neighborhood of ${\mathbf 0}_X$. 


Proof
Necessary Condition
Suppose that $U$ is an open neighborhood of $x$.
Then ${\mathbf 0}_X \in U - x$ and from Translation of Open Set in Topological Vector Space is Open, $U - x$ is open.
So $U - x$ is an open neighborhood of ${\mathbf 0}_X$.
$\Box$


Sufficient Condition
Suppose that $U - x$ is an open neighborhood of ${\mathbf 0}_X$.
Note that $U = \paren {U - x} + x$.
So, we have $x \in U$ and from Translation of Open Set in Topological Vector Space is Open, $U$ is open.
So $U$ is an open neighborhood of $x$.
$\blacksquare$





