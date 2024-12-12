# 

Source: https://proofwiki.org/wiki/Extremally_Disconnected_by_Disjoint_Open_Sets



Theorem
The following definitions of the concept of Extremally Disconnected Space are equivalent:

Definition using Closures of Open Sets
A $T_2$ (Hausdorff) topological space $T = \struct {S, \tau}$ is extremally disconnected if and only if the closure of every open set of $T$ is open.

Definition using Interiors of Closed Sets
A $T_2$ (Hausdorff) topological space $T = \struct {S, \tau}$ is extremally disconnected if and only if the interior of every closed set of $T$ is closed.

Definition using Disjoint Open Sets
A $T_2$ (Hausdorff) topological space $T = \struct {S, \tau}$ is extremally disconnected if and only if the closures of every pair of open sets which are disjoint are also disjoint.


Proof
Definition $1$ if and only if Definition $2$
Follows directly from Complement of Interior equals Closure of Complement.
$\Box$


Definition $1$ implies Definition $3$
Let $A, B \subseteq S$ be disjoint open sets.
Then:














\(\ds A \cap B\)

\(=\)







\(\ds \O\)





Definition of Disjoint Sets








\(\ds \leadsto \ \ \)





\(\ds A^- \cap B\)

\(=\)







\(\ds \O\)





Open Set Disjoint from Set is Disjoint from Closure








\(\ds \leadsto \ \ \)





\(\ds A^- \cap B^-\)

\(=\)







\(\ds \O\)





Open Set Disjoint from Set is Disjoint from Closure; $A^-$ is open



As $A, B$ are arbitrary:

the closures of every pair of open sets which are disjoint are also disjoint.
$\Box$


Definition $3$ implies Definition $1$
Let $A \subseteq S$ be an open set.
By Topological Closure is Closed, $A^-$ is closed.
Hence $\relcomp S {A^-}$ is open.
We have:














\(\ds A\)

\(\subseteq\)







\(\ds A^-\)





Set is Subset of its Topological Closure








\(\ds \leadsto \ \ \)





\(\ds A \cap \relcomp S {A^-}\)

\(=\)







\(\ds \O\)





Empty Intersection iff Subset of Complement








\(\ds \leadsto \ \ \)





\(\ds A^- \cap \paren {\relcomp S {A^-} }^-\)

\(=\)







\(\ds \O\)





Definition 3 of Extremally Disconnected Space








\(\ds \leadsto \ \ \)





\(\ds \paren {\relcomp S {A^-} }^-\)

\(\subseteq\)







\(\ds \relcomp S {A^-}\)





Empty Intersection iff Subset of Complement








\(\ds \leadsto \ \ \)





\(\ds \paren {\relcomp S {A^-} }^-\)

\(=\)







\(\ds \relcomp S {A^-}\)





Set is Subset of its Topological Closure



By Set is Closed iff Equals Topological Closure, $\relcomp S {A^-}$ is closed.
Thus $\relcomp S {\relcomp S {A^-} } = A^-$ is open.
As $A$ is arbitrary:

the closure of every open set is open.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness: Disconnectedness




