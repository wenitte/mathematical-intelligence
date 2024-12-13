# 

Source: https://proofwiki.org/wiki/Non-Zero_Multiple_of_Closed_Linear_Transformation_is_Closed

Theorem
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be Banach spaces over $\C$.
Let $\map D T$ be a linear subspace of $X$.
Let $T : \map D T \to Y$ be a closed linear transformation.
Let $\alpha \in \C \setminus \set 0$. 

Then $\alpha T : \map D T \to Y$ is closed.


Proof
Let $\sequence {x_n}_{n \in \N}$ be a convergent sequence in $\struct {X, \norm {\, \cdot \,}_X}$ valued in $\map D T$ such that $\sequence {\alpha T x_n}_{n \in \N}$ converges in $\struct {Y, \norm {\, \cdot \,}_Y}$.
Suppose that $x_n \to x$ and $\alpha T x_n \to y$. 
Then from Scalar Multiple of Convergent Sequence in Topological Vector Space is Convergent, $\alpha x_n \to \alpha x$. 
From Sequential Characterization of Closed Linear Transformation and since $T$ is linear, we have that $\alpha x \in \map D T$ and $y = \map T {\alpha x} = \alpha T x$.
Since $\map D T$ is a linear subspace of $X$ and $\alpha \ne 0$, we have $x \in \map D T$. 
Applying Sequential Characterization of Closed Linear Transformation again, we have that $\alpha T$ is closed.
$\blacksquare$





