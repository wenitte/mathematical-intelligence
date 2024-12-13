# 

Source: https://proofwiki.org/wiki/Set_in_Discrete_Topology_is_Clopen

Theorem
Let $T = \struct {S, \tau}$ be a discrete topological space.

$\forall U \subseteq S: U$ is both closed and open in $\struct {S, \tau}$.


Proof
Let $U \subseteq S$.
By definition of discrete topological space, $U \in \tau$.
By definition of closed set, $\relcomp S U$ is closed in $T$, where $\relcomp S U$ is the relative complement of $U$ in $S$. 
But from Set Difference is Subset:

$\relcomp S U = S \setminus U \subseteq S$
and so:

$\relcomp S U \in \tau$
That is, $\relcomp S U$ is both closed and open in $T$. 
Then by Relative Complement of Relative Complement:

$\relcomp S {\relcomp S U} = U$
which is seen to be both closed and open in $T$.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 2$: Topological Spaces: Exercise $6$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $1 \text { - } 3$: Discrete Topology




