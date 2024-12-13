# 

Source: https://proofwiki.org/wiki/Interior_of_Translation_of_Set_in_Topological_Vector_Space_is_Translation_of_Interior

Theorem
Let $K$ be a topological field.
Let $\struct {X, \tau}$ be a topological vector space over $K$.
Let $E \subseteq X$. 
Let $x \in X$.

Then:

$\paren {E + x}^\circ = E^\circ + x$


Proof
Let $y \in \paren {E + x}^\circ$.
Then there exists an open neighborhood $U$ of $y$ such that $U \subseteq E + x$.
Then from Translation of Open Set in Topological Vector Space is Open, $U - x$ is an open neighborhood of $y - x$ such that $U - x \subseteq E$.
Hence $y - x \in E^\circ$.
So $y \in E^\circ + x$.
We therefore obtain $\paren {E + x}^\circ \subseteq E^\circ + x$.

Now let $y \in E^\circ + x$.
Then $y - x \in E^\circ$.
So there exists an open neighborhood $U$ of $y - x$ such that $U \subseteq E$.
Then from Translation of Open Set in Topological Vector Space is Open, $U + x$ is an open neighborhood of $y$ such that $U + x \subseteq E + x$. 
Hence $y \in \paren {E + x}^\circ$.
We therefore obtain $E^\circ + x \subseteq \paren {E + x}^\circ$.
So $\paren {E + x}^\circ = E^\circ + x$.
$\blacksquare$





