# 

Source: https://proofwiki.org/wiki/Dilation_of_Open_Set_in_Normed_Vector_Space_is_Open

Theorem
Let $\Bbb F$ be a subfield of $\C$. 
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\Bbb F$.
Let $U \subseteq X$ be an open set.
Let $\lambda \in \Bbb F \setminus \set 0$. 

Then:

$\lambda U$ is open.


Proof
Let:

$v \in \lambda U$
Then:

$\dfrac v \lambda \in U$
Since $U$ is open, there exists $\epsilon > 0$ such that whenever $v' \in X$ and:

$\ds \norm {\frac v \lambda - \frac {v'} \lambda} < \epsilon$
we have $v'/\lambda \in U$. 
That is, $v' \in \lambda U$. 
So, whenever: 

$\ds \norm {v - v'} < \epsilon \cmod \lambda$
we have $v' \in \lambda U$.
Since $v$ was arbitrary: 

$\lambda U$ is open.
$\blacksquare$





