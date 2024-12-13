# 

Source: https://proofwiki.org/wiki/Measure_of_Vertical_Section_of_Cartesian_Product

Theorem
Let $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$ be measure spaces.
Let $S_1 \in \Sigma_X$ and $S_2 \in \Sigma_Y$. 
Let $x \in X$. 

Then: 

$\map {\nu} {\paren {S_1 \times S_2}_x} = \map {\nu} {S_2} \map {\chi_{S_1} } x$
where:

$\paren {S_1 \times S_2}_x$ is the $x$-vertical section of $S_1 \times S_2$
$\chi_{S_1}$ is the characteristic function for $S_1$.


Proof
From Vertical Section of Cartesian Product, we have: 

$\paren {S_1 \times S_2}_x = \begin{cases}S_2 & x \in S_1 \\ \O & x \not \in S_1\end{cases}$
So:

$\map {\nu} {\paren {S_1 \times S_2}_x} = \begin{cases}\map {\nu} {S_2} & x \in S_1 \\ 0 & x \not \in S_1\end{cases}$
That is: 

$\map {\nu} {\paren {S_1 \times S_2}_x} = \map {\nu} {S_2} \times \begin{cases}1 & x \in S_1 \\ 0 & x \not \in S_1\end{cases}$
giving:

$\map {\nu} {\paren {S_1 \times S_2}_x} = \map {\nu} {S_2} \map {\chi_{S_1} } x$
from the definition of a characteristic function.
$\blacksquare$





