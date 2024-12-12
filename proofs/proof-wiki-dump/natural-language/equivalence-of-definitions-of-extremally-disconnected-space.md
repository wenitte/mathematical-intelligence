# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Extremally_Disconnected_Space



Theorem
The following definitions of the concept of Extremally Disconnected Space are equivalent:

Definition 1: using Closures of Open Sets
A $T_2$ (Hausdorff) topological space $T = \struct {S, \tau}$ is extremally disconnected if and only if the closure of every open set of $T$ is open.

Definition 2: using Interiors of Closed Sets
A $T_2$ (Hausdorff) topological space $T = \struct {S, \tau}$ is extremally disconnected if and only if the interior of every closed set of $T$ is closed.

Definition 3: using Disjoint Open Sets
A $T_2$ (Hausdorff) topological space $T = \struct {S, \tau}$ is extremally disconnected if and only if the closures of every pair of open sets which are disjoint are also disjoint.


Proof
$(1)$ iff $(2)$
Extremally Disconnected by Interior of Closed Sets

Let $T = \struct {S, \tau}$ be a $T_2$ (Hausdorff) topological space such that the closure of every open set of $T$ is open.
Let $V \subseteq S$ be closed in $T$.
Then $S \setminus V$ is open by definition.
Then its closure $\paren {S \setminus V}^-$ is open by hypothesis.
By Complement of Interior equals Closure of Complement we have that:

$\paren {S \setminus V}^- = S \setminus V^\circ$
where $V^\circ$ is the interior of $V$.
As $S \setminus V^\circ$ is open in $T$, it follows that $V^-$ is closed.
So the interior of every closed set of $T$ is closed.
$\Box$

By a similar argument we see that if the interior of every closed set of $T$ is closed in $T$, then the closure of every open set of $T$ is open.
Hence the result.

$\Box$


$(1)$ iff $(3)$
Extremally Disconnected by Disjoint Open Sets

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





