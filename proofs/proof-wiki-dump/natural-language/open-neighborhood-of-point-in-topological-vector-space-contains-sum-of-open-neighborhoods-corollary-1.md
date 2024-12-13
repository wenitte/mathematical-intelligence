# 

Source: https://proofwiki.org/wiki/Open_Neighborhood_of_Point_in_Topological_Vector_Space_contains_Sum_of_Open_Neighborhoods/Corollary_1

Theorem
Let $K$ be a topological field.
Let $X$ be a topological vector space over $K$. 
Let $W$ be an open neighborhood of ${\mathbf 0}_X$. 

Then there exists a symmetric open neighborhood $U$ of ${\mathbf 0}_X$ such that: 

$U + U \subseteq W$


Proof
Since ${\mathbf 0}_X + {\mathbf 0}_X = {\mathbf 0}_X$, we can apply Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods to obtain an open neighborhood $V_1$ of ${\mathbf 0}_X$ and an open neighborhood $V_2$ of ${\mathbf 0}_X$ such that: 

$V_1 + V_2 \subseteq W$
Note at this point we do not necessarily have $V_1 = V_2$.
From Dilation of Open Set in Topological Vector Space is Open, $-V_1$ and $-V_2$ are open neighborhoods of ${\mathbf 0}_X$.
Let:

$U = V_1 \cap V_2 \cap \paren {-V_1} \cap \paren {-V_2}$
Since $U$ is the finite intersection of open sets, it is itself open.
Since ${\mathbf 0}_X$ is contained in each of the four sets of the intersection, we have ${\mathbf 0}_X \in U$.
So $U$ is an open neighborhood of ${\mathbf 0}_X$.
We show that $U$ is symmetric and that: 

$U + U \subseteq W$
Let $x \in U$. 
Then $x \in V_1$, $x \in V_2$, $x \in -V_1$ and $x \in -V_2$.
So we have that $-x \in -V_1$, $-x \in -V_2$, $-x \in V_1$ and $-x \in -V_2$.
So:

$-x \in \paren {-V_1} \cap \paren {-V_2} \cap V_1 \cap V_2 = U$
So we have that $U$ is symmetric.
Now let $x, y \in U$. 
We want to show that $x + y \in W$.
Since $x, y \in U$, we have $x \in V_1$ and $y \in V_2$.
So, we have $x + y \in V_1 + V_2$.
We have $V_1 + V_2 \subseteq W$, so $x + y \in W$.
So, we have $U + U \subseteq W$. 
Hence $U$ is our desired open neighborhood.
$\blacksquare$





