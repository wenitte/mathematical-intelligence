# 

Source: https://proofwiki.org/wiki/Linear_Transformation_between_Normed_Vector_Spaces_is_Bounded_iff_Bounded_as_Linear_Transformation_between_Topological_Vector_Spaces



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\GF$.
Let $T : X \to Y$ be linear transformations. 

Then $T$ is bounded as a linear transformation between normed vector spaces if and only if it is bounded as a linear transformation between topological vector spaces. 


Proof
Sufficient Condition
Suppose that $T$ is bounded as a linear transformation between topological vector spaces
Then:

for each von Neumann-bounded subset $E$ of $X$, $T \sqbrk E$ is von Neumann-bounded.
From Characterization of von Neumann-Boundedness in Normed Vector Space, this is equivalent to: 

if $E \subseteq X$ is such that $\norm x_X < M$ for each $x \in E$ and some $M > 0$, then there exists $M' > 0$ such that $\norm {T x}_Y < M'$ for each $x \in E$.
In particular:

there exists $M' > 0$ such that $\norm {T x}_Y < M'$ for each $x \in X$ with $\norm x_X < 1$.
Then for $x \ne \mathbf 0_X$, we have: 

$\ds \norm {\map T {\frac x {2 \norm x_X} } }_Y < M'$
so that: 

$\ds \norm {T x}_Y < 2 M' \norm x_X$
for each $x \ne \mathbf 0_X$.
Hence $\norm {T x}_Y \le 2 M' \norm x_X$ for all $x \in X$. 
So $T$ is bounded as a linear transformation between normed vector spaces.
$\Box$

Necessary Condition
Suppose that bounded as a linear transformation between normed vector spaces.
Again from Characterization of von Neumann-Boundedness in Normed Vector Space, we need to show that: 

if $E \subseteq X$ is such that $\norm x_X < M$ for each $x \in E$ and some $M > 0$, then there exists $M' > 0$ such that $\norm {T x}_Y < M'$ for each $x \in E$.
Let $E \subseteq X$ be such that $\norm x_X < M$ for each $x \in E$.
From the definition of a bounded linear transformation between normed vector spaces, there exists $K > 0$ such that: 

$\norm {T x}_Y \le K \norm x_X$
for each $x \in X$. 
Then for $x \in E$ we have $\norm {T x}_Y < M' K$.
So $T$ is bounded as a linear transformation between topological vector spaces. 
$\blacksquare$





