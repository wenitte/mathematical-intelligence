# 

Source: https://proofwiki.org/wiki/Factor_Spaces_are_T4_if_Product_Space_is_T4



Theorem
Let $\mathbb S = \family {\struct{S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be an indexed family of non-empty topological spaces for $\alpha$ in some indexing set $I$.
Let $\ds T = \struct {S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\mathbb S$.
Let $T$ be a $T_4$ space.

Then each of $\struct {S_\alpha, \tau_\alpha}$ is a $T_4$ space.


Proof
Since $S_\alpha \ne \O$ we also have $S \ne \O$ by the axiom of choice.
Let $z \in S$.
From Subspace of Product Space is Homeomorphic to Factor Space, every $\struct {S_\alpha, \tau_\alpha}$ is homeomorphic to the subspace $T_\alpha$ of $T$ defined by:

$T_\alpha = \set {x \in S: \forall \beta \in I \setminus \set \alpha: x_\beta = z_\beta}$
and the homeomorphism $h : S_\alpha \to T_\alpha$ is given by:

$\forall x_\alpha \in S_\alpha : \map h {x_\alpha} = x : \forall \beta \in I : x_\beta = \begin {cases} x_\alpha & \beta = \alpha \\ z_\beta & \beta \ne \alpha \end {cases}$
From Inclusion Mapping is Continuous, the inclusion mapping $i: T_\alpha \to S$ is continuous.
From Composite of Continuous Mappings is Continuous, the composite mapping $i \circ h : S_\alpha \to S$ is continuous.

Let $\pr_\alpha: S \to S_\alpha$ be the projection of $S$ to $S_\alpha$.
For all $x_\alpha \in S_\alpha$:

$\map {\pr_\alpha} {\map {i \circ h} {x_\alpha}} = x_\alpha$

Let $A, B \subseteq S_\alpha$ be an arbitrary pair of disjoint closed sets in $\struct {S_\alpha, \tau_\alpha}$.
Then:














\(\ds \map {\pr_\alpha^\gets} A \cap \map {\pr_\alpha^\gets} B\)

\(=\)







\(\ds \map {\pr_\alpha^\gets} {A \cap B}\)





Preimage of Intersection under Mapping














\(\ds \)

\(=\)







\(\ds \map {\pr_\alpha^\gets} \O\)




















\(\ds \)

\(=\)







\(\ds \O\)










From Projection from Product Topology is Open and Continuous:General Result

$\pr_\alpha: S \to S_\alpha$ is continuous.

From Continuity Defined from Closed Sets:

$\map {\pr_\alpha^\gets} A, \map {\pr_\alpha^\gets} B$ are disjoint closed sets in $T$

By definition of $T_4$ space:

$\exists U, V \in \tau : \map {\pr_\alpha^\gets} A \subseteq U, \map {\pr_\alpha^\gets} B \subseteq V : U \cap V = \O$

By definition of continuity:

$\map {\paren {i \circ h}^\gets} U, \map {\paren{i \circ h}^\gets} V$ are open sets in $S_\alpha$.

From Preimage of Intersection under Mapping:

$\map {\paren {i \circ h}^\gets} U, \map {\paren{i \circ h}^\gets} V$ are disjoint open sets in $S_\alpha$.

From Preimage of Subset is Subset of Preimage:

$\map {\paren {i \circ h}^\gets} {\map {\pr_\alpha^\gets} A} \subseteq \map {\paren{i \circ h}^\gets} U$
$\map {\paren {i \circ h}^\gets} {\map {\pr_\alpha^\gets} B} \subseteq \map {\paren{i \circ h}^\gets} V$

Now:














\(\ds x_\alpha\)

\(\in\)







\(\ds \map {\paren{i \circ h}^\gets} {\map {\pr_\alpha^\gets} A}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\paren {i \circ h} } {x_\alpha}\)

\(\in\)







\(\ds \map {\pr_\alpha^\gets} A\)





Definition of Inverse Image Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\pr_\alpha} {\map {i \circ h} {x_\alpha} }\)

\(\in\)







\(\ds A\)





Definition of Inverse Image Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds x_\alpha\)

\(\in\)







\(\ds A\)









From the definition of set equality:

$\map {\paren{i \circ h}^\gets} {\map {\pr_\alpha^\gets} A} = A$
Similarly:

$\map {\paren{i \circ h}^\gets} {\map {\pr_\alpha^\gets} B} = B$

It follows that $A$ and $B$ are contained in the disjoint open sets $\map {\paren {i \circ h}^\gets} U, \map {\paren {i \circ h}^\gets} V$, respectively.
Since $A$ and $B$ were an arbitrary pair of disjoint closed sets in $\struct {S_\alpha, \tau_\alpha}$ then $\struct {S_\alpha, \tau_\alpha}$ is a $T_4$ space.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Functions, Products, and Subspaces




