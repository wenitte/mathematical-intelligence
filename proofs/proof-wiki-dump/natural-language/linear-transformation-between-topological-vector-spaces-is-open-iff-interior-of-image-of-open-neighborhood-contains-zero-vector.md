# 

Source: https://proofwiki.org/wiki/Linear_Transformation_between_Topological_Vector_Spaces_is_Open_iff_Interior_of_Image_of_Open_Neighborhood_contains_Zero_Vector



Theorem
Let $K$ be a topological field.
Let $\struct {X, \tau_X}$ and $\struct {Y, \tau_Y}$ be topological vector spaces over $K$.
Let $T : X \to Y$ be a linear transformation.

Then $T$ is open if and only if:

for each open neighborhood $U$ of ${\mathbf 0}_X$, we have ${\mathbf 0}_Y \in T \sqbrk U^\circ$.


Proof
Necessary Condition
Suppose that $T$ is open.
Let $U$ be an open neighborhood of ${\mathbf 0}_X$ in $\struct {X, \tau_X}$.
Since $T$ is open, $T \sqbrk U$ is an open neighborhood of $\map T { {\mathbf 0}_X} = {\mathbf 0}_Y$ in $\struct {Y, \tau_Y}$.
In particular, from the definition of interior, we have ${\mathbf 0}_Y \in T \sqbrk U^\circ$.
$\Box$

Sufficient Condition
Suppose that:

for each open neighborhood $U$ of ${\mathbf 0}_X$, we have ${\mathbf 0}_Y \in T \sqbrk U^\circ$.
That is:

for each open neighborhood $U$ of ${\mathbf 0}_X$, there exists an open neighborhood $O$ of ${\mathbf 0}_Y$ such that $O \subseteq T \sqbrk U$.
Let $V \subseteq X$ be open in $\struct {X, \tau_X}$.
We want to show that $T \sqbrk V \subseteq Y$ is open in $\struct {Y, \tau_Y}$.
Let $x \in V$ so that $T x \in T \sqbrk V$. 
From Image of Translation of Set under Linear Transformation is Translation of Image, $T \sqbrk {V - x}$ is an open neighborhood of ${\mathbf 0}_Y$ in $\struct {Y, \tau_Y}$.
By hypothesis, there exists an open neighborhood $O_x$ of ${\mathbf 0}_X$ such that:

$O_x \subseteq T \sqbrk {V - x}$
so that:

$O_x + T x \subseteq T \sqbrk V$ for all $x \in V$.
That is: 

$\ds \bigcup_{x \mathop \in V} \paren {O_x + T x} \subseteq T \sqbrk V$
Conversely, we have:

$\ds T \sqbrk V \subseteq \bigcup_{x \mathop \in V} \paren {O_x + T x}$
So, we obtain:

$\ds T \sqbrk V = \bigcup_{x \mathop \in V} \paren {O_x + T x}$
From Image of Translation of Set under Linear Transformation is Translation of Image, $O_x + T x$ is an open neighborhood of $T x$ in $\struct {Y, \tau_Y}$.
So $T \sqbrk V$ is the union of open sets in $\struct {Y, \tau_Y}$, it is open in $\struct {Y, \tau_Y}$.
Since $V \subseteq X$ was an arbitrary open set in $\struct {X, \tau_X}$, we have that $T$ is an open mapping.
$\blacksquare$





