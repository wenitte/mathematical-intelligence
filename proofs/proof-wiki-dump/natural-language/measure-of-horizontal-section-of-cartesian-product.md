# 

Source: https://proofwiki.org/wiki/Measure_of_Horizontal_Section_of_Cartesian_Product

Theorem
Let $\struct {X, \Sigma_X, \mu_X}$ and $\struct {Y, \Sigma_Y, \mu_Y}$ be measure spaces.
Let $S_1 \in \Sigma_X$ and $S_2 \in \Sigma_Y$. 
Let $y \in Y$. 

Then: 

$\map {\mu_X} {\paren {S_1 \times S_2}^y} = \map {\mu_X} {S_1} \map {\chi_{S_2} } y$
where:

$\paren {S_1 \times S_2}^y$ is the $y$-horizontal section of $S_1 \times S_2$
$\chi_{S_2}$ is the characteristic function for $S_2$.


Proof
From Horizontal Section of Cartesian Product, we have: 

$\paren {S_1 \times S_2}^y = \begin{cases}S_1 & y \in S_2 \\ \O & y \not \in S_2\end{cases}$
So:

$\map {\mu_X} {\paren {S_1 \times S_2}^y} = \begin{cases}\map {\mu_X} {S_1} & y \in S_2 \\ 0 & y \not \in S_2\end{cases}$
That is: 

$\map {\mu_X} {\paren {S_1 \times S_2}^y} = \map {\mu_X} {S_1} \times \begin{cases}1 & y \in S_2 \\ 0 & y \not \in S_2\end{cases}$
giving:

$\map {\mu_X} {\paren {S_1 \times S_2}^y} = \map {\mu_X} {S_1} \map {\chi_{S_2} } y$
from the definition of a characteristic function.
$\blacksquare$





