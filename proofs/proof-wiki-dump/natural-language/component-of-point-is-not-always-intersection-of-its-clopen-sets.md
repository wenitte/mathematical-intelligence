# 

Source: https://proofwiki.org/wiki/Component_of_Point_is_not_always_Intersection_of_its_Clopen_Sets

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in S$.
Let $\map {\operatorname {Comp}_x} T$ denote the component of $x$ in $T$.
Let $K_x = \ds \bigcap_{x \mathop \in K} K$ clopen in $T$.

Then it is not always the case that $\map {\operatorname {Comp}_x} T = K_x$


Proof
Note that from Clopen Set contains Components of All its Points:

$\map {\operatorname {Comp}_x} T \subseteq K_x$
It remains to be demonstrated that it is not always the case that $K_x \subseteq \map {\operatorname {Comp}_x} T$.

Let $T$ be the nested rectangle space in the Euclidean plane.
Let $L_1$ and $L_2$ be the boundary lines of $T$.
Let $x \in L_1$.
From Boundary Line in Nested Rectangle Space is Component $L_1$ is a component of $T$.
That is:

$L_1 = \map {\operatorname {Comp}_x} T$

From Union of Boundary Lines in Nested Rectangle Space is Quasicomponent, $L_1 \cup L_2$ is a quasicomponent of $T$.
By Quasicomponent is Intersection of Clopen Sets:

$L_1 \cup L_2 = \ds \bigcap_{x \mathop \in K} K$ clopen in $T$
Thus, while $\map {\operatorname {Comp}_x} T \subseteq L_1 \cup L_2$, it is not the case that $L_1 \cup L_2 \subseteq \map {\operatorname {Comp}_x} T$.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




