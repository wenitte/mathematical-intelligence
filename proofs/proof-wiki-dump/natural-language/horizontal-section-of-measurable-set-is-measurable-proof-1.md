# 

Source: https://proofwiki.org/wiki/Horizontal_Section_of_Measurable_Set_is_Measurable/Proof_1

Theorem
Let $\struct {X, \Sigma_X}$ and $\struct {Y, \Sigma_Y}$ be measurable spaces. 
Let $E \in \Sigma_X \otimes \Sigma_Y$ where $\Sigma_X \otimes \Sigma_Y$ is the product $\sigma$-algebra of $\Sigma_X$ and $\Sigma_Y$.
Let $y \in Y$. 

Then: 

$E^y \in \Sigma_X$
where $E^y$ is the $y$-horizontal section of $E$. 


Proof
Let:

$\FF = \set {E \subseteq X \times Y : E^y \in \Sigma_X}$
We will show that $\FF$ contains each $S_1 \times S_2$ with $S_1 \in \Sigma_X$ and $S_2 \in \Sigma_Y$. 
We will then show that $\FF$ is a $\sigma$-algebra, at which point we will have: 

$\map \sigma {\set {S_1 \times S_2 : S_1 \in \Sigma_X, \, S_2 \in \Sigma_Y} } \subseteq \FF$
from Sigma-Algebra Contains Generated Sigma-Algebra of Subset.
From the definition of the product $\sigma$-algebra, we will then have: 

$\Sigma_X \otimes \Sigma_Y \subseteq \FF$
We will then have the demand.

Let $S_1 \in \Sigma_X$ and $S_2 \in \Sigma_Y$. 
From Horizontal Section of Cartesian Product, we have: 

$\ds \paren {S_1 \times S_2}^y = \begin{cases}S_1 & y \in S_2 \\ \O & y \not \in S_2\end{cases}$
From the definition of a $\sigma$-algebra, we have $\O \in \Sigma_X$, so in either case we have: 

$\paren {S_1 \times S_2}^y \in \Sigma_X$
That is: 

$S_1 \times S_2 \in \FF$

It remains to show that $\FF$ is a $\sigma$-algebra.
Since $S_1 \times S_2 \in \FF$ for $S_1 \in \Sigma_X$ and $S_2 \in \Sigma_Y$.
Since $X \in \Sigma_X$ and $Y \in \Sigma_Y$, we obtain: 

$X \times Y \in \FF$
We show that $\FF$ is closed under countable union.
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence in $\FF$.
We have $\paren {E_n}^y \in \Sigma_X$ for each $n \in \N$. 
So, since $\Sigma_X$ is a $\sigma$-algebra, we have: 

$\ds \bigcup_{n \mathop = 1}^\infty \paren {E_n}^y \in \Sigma_X$
From Union of Horizontal Sections is Horizontal Section of Union, we have: 

$\ds \bigcup_{n \mathop = 1}^\infty \paren {E_n}^y = \paren {\bigcup_{n \mathop = 1}^\infty E_n}^y$
So we have: 

$\ds \paren {\bigcup_{n \mathop = 1}^\infty E_n}^y \in \Sigma_X$
That is: 

$\ds \bigcup_{n \mathop = 1}^\infty E_n \in \FF$
We finally show that $\FF$ is closed under complementation.
Let $E \in \FF$.
We then have $E^y \in \Sigma_X$.
Since $\Sigma_X$ is closed under complementation, we have $X \setminus E^y \in \Sigma_X$. 
From Complement of Horizontal Section of Set is Horizontal Section of Complement, we have: 

$X \setminus E^y = \paren {\paren {X \times Y} \setminus E}^y$
so that: 

$\paren {\paren {X \times Y} \setminus E}^y \in \Sigma_X$
giving: 

$\paren {X \times Y} \setminus E \in \FF$
So $\FF$ is a $\sigma$-algebra.

As discussed, we therefore obtain: 

$\Sigma_X \otimes \Sigma_Y \subseteq \FF$
In particular, for any $E \in \Sigma_X \otimes \Sigma_Y$, we have $E \in \FF$.
That is: 

for any $E \in \Sigma_X \otimes \Sigma_Y$ we have $E^y \in \Sigma_X$
as was the demand.
$\blacksquare$





