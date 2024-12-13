# 

Source: https://proofwiki.org/wiki/Linear_Transformation_between_Topological_Vector_Spaces_Continuous_iff_Continuous_at_Origin



Theorem
Let $K$ be a topological field.
Let $X$ and $Y$ be topological vector spaces over $K$. 
Let $T : X \to Y$ be a linear transformation.

Then $T$ is everywhere continuous if and only if it is continuous at ${\mathbf 0}_X$.


Proof
Necessary Condition
Suppose that $T$ is everywhere continuous.
Then $T$ is continuous at every point.
In particular, $T$ is continuous at ${\mathbf 0}_X$.
$\Box$


Sufficient Condition
Suppose that $T$ is continuous at ${\mathbf 0}_X$.
We aim to show that $T$ is continuous at every point.
Let $x \in X$.
Let $V$ be an open neighborhood of $T x \in Y$.
We aim to show that there exists an open neighborhood $U$ of $x$ such that: 

$T \sqbrk U \subseteq V$
From Translation of Open Set in Topological Vector Space is Open, we have that: 

$V - T x$ is an open neighborhood of ${\mathbf 0}_Y$.
Since $T$ is continuous at ${\mathbf 0}_X$ and $\map T { {\mathbf 0}_X} = {\mathbf 0}_Y$, there exists an open neighborhood $U'$ of ${\mathbf 0}_X$ such that: 

$T \sqbrk {U'} \subseteq V - T x$
Then we have, by translation by $T x$: 

$T \sqbrk {U'} + T x \subseteq V$
From Image of Translation of Set under Linear Transformation is Translation of Image, we then have: 

$T \sqbrk {U' + x} \subseteq V$
Since $U'$ is an open neighborhood of ${\mathbf 0}_X$, $U = U' + x$ is an open neighborhood of $x$ with: 

$T \sqbrk U \subseteq V$
Hence the result.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.17$: Theorem




