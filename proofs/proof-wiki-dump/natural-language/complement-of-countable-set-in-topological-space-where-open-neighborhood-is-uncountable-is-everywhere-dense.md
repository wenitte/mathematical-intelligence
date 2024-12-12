# 

Source: https://proofwiki.org/wiki/Complement_of_Countable_Set_in_Topological_Space_where_Open_Neighborhood_is_Uncountable_is_Everywhere_Dense

Theorem
Let $\struct {X, \tau}$ be a topological space such that:

every open set $U \in \tau$ is uncountable.
Let $A \subseteq X$ be countable.

Then $X \setminus A$ is everywhere dense in $\struct {X, \tau}$. 


Corollary
Consider the real numbers $\R$ as a normed vector space with the Euclidean norm.
Let $A \subseteq \R$ be countable.

Then $\R \setminus A$ is everywhere dense in $\R$. 


Proof
Let $a \in X$. 
Let $U$ be an open neighborhood of $a$ in $\struct {X, \tau}$. 
Then $U$ is uncountable by hypothesis.
From Uncountable Set less Countable Set is Uncountable, $U \cap \paren {X \setminus A}$ is uncountable.
In particular, $U \cap \paren {X \setminus A} \ne \O$.
Hence we have $a \in \paren {X \setminus A}^-$, where $\paren {X \setminus A}^-$ denotes the closure of $X \setminus A$.
So $X \setminus \paren {X \setminus A}^-$.
Since we have $\paren {X \setminus A}^-$ automatically, we obtain $\paren {X \setminus A}^- = X$.
So $X \setminus A$ is everywhere dense in $\struct {X, \tau}$. 
$\blacksquare$





