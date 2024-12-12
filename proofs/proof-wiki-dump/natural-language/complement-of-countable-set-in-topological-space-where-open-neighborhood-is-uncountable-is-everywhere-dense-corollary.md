# 

Source: https://proofwiki.org/wiki/Complement_of_Countable_Set_in_Topological_Space_where_Open_Neighborhood_is_Uncountable_is_Everywhere_Dense/Corollary

Corollary
Consider the real numbers $\R$ as a normed vector space with the Euclidean norm.
Let $A \subseteq \R$ be countable.

Then $\R \setminus A$ is everywhere dense in $\R$. 


Proof
Let $U \subseteq \R$ be an open set.
Then there exists $a < b$ such that $\openint a b \subseteq U$. 
Taking $\epsilon > 0$ such that $a - \epsilon < b + \epsilon$, we have: 

$\closedint {a + \epsilon} {b - \epsilon} \subseteq \openint a b \subseteq U$
From Closed Interval in Reals is Uncountable, $\closedint {a + \epsilon} {b - \epsilon}$ is uncountable.
Hence $U$ is uncountable.
Hence every open subset of $\R$ is uncountable.
Hence Complement of Countable Set in Topological Space where Open Neighborhood is Uncountable is Everywhere Dense is admissable, and $\R \setminus A$ is everywhere dense in $\R$.
$\blacksquare$





