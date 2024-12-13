# 

Source: https://proofwiki.org/wiki/Norm_of_Positive_Element_of_Unital_C*-Algebra_in_terms_of_State_Space

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $S_A$ be the set of states on $A$.
Let $a \in A$ be positive. 

Then:

$\norm a = \sup \set {\map \phi a : \phi \in S_A}$


Proof
From Evaluation Linear Transformation on Normed Vector Space is Linear Isometry, we have:

$\norm a = \sup \set {\map \phi a : \phi \in B_{A^\ast} }$
where $B_{A^\ast}$ is the closed unit ball of $A^\ast$. 
We have $S_A \subseteq B_{A^\ast}$.
Hence we have:

$\norm a \ge \sup \set {\map \phi a : \phi \in S_A}$
It remains to show:

$\norm a \le \sup \set {\map \phi a : \phi \in S_A}$
For this it suffices to find $\phi \in S_A$ such that $\map \phi a \ge \norm a$. 

We first establish the theorem for $A = \map \CC K$ for a compact Hausdorff space $K$.
Let $f \in \map \CC K$ be positive.
From Canonical Preordering of C*-Algebra of Continuous Functions Vanishing at Infinity, we have $\map f x \in \R_{\ge 0}$ for each $x \in K$. 
Then we have:

$\ds \norm f = \sup_{x \in K} \cmod {\map f x} = \sup_{x \in K} \map f x$
From Continuous Image of Compact Space is Compact: Corollary 3, there exists $y \in K$ such that:

$\norm f = \map f y$
Define $\delta_y : \map \CC K \to \C$ by:

$\map {\delta_y} f = \map f y$
for each $f \in \map \CC K$. 
From Point Evaluations are Continuous Linear Functionals on Space of Complex-Valued Continuous Functions on Compact Hausdorff Space, $\delta_k$ is a bounded linear functional with $\norm f = 1$.
Again, for each $g \in \map \CC K$ positive we have $\map g y \ge 0$ and hence $\map {\delta_y} g \ge 0$. 
Hence $\delta_y$ is a state on $\map \CC K$ with $\map {\delta_y} f = \norm f$. 
Hence we have:

$\norm a \le \sup \set {\map \phi a : \phi \in S_A}$
and hence:

$\norm a = \sup \set {\map \phi A : \phi \in S_A}$
in the case $A = \map \CC K$.

Now take $A$ to be general.
Let $a \in A$ be positive.
Let $B \subseteq A$ be the $\text C^\ast$-algebra generated by $\set { {\mathbf 1}_A, a}$.
From C*-Algebra Generated by Commutative Self-Adjoint Set is Commutative, $B$ is commutative.
From Gelfand-Naimark Theorem: Commutative Case, there exists a compact Hausdorff space $K$ and an isometric $\ast$-algebra isomorphism $\phi : B \to \map \CC K$.
By the previous case, there exists $f_1 \in S_{\map \CC K}$ such that $\map {f_1} {\map \phi a} = \norm {\map \phi a}_{\map \CC K} = \norm a$, since $\phi$ is isometric.
We first argue that $f_1 \circ \phi$ is a state on $B$.
Then from Composition of Bounded Linear Transformations is Bounded Linear Transformation, $f_1 \circ \phi$ is a bounded linear functional on $B$. 
From Image of Positive Element of C*-Algebra under *-Algebra Homomorphism is Positive, for $a \in \map \CC K$ positive, we have that $\map \phi a$ is positive.
Hence $\map {f_1} {\map \phi a} \ge 0$. 
Finally we have:














\(\ds \norm {f_1 \circ \phi}_{B^\ast}\)

\(=\)







\(\ds \sup_{a \in B_B} \cmod {\map {f_1} {\map \phi a} }\)




















\(\ds \)

\(=\)







\(\ds \sup \cmod {f_1} \sqbrk {\phi \sqbrk {B_B} }\)




















\(\ds \)

\(=\)







\(\ds \sup \cmod {f_1} \sqbrk {B_{\map \CC K} }\)





Injective Linear Transformation between Normed Vector Spaces sends Closed Unit Ball to Closed Unit Ball iff Isometric Isomorphism














\(\ds \)

\(=\)







\(\ds \norm {f_1}_{\map \CC K^\ast}\)




















\(\ds \)

\(=\)







\(\ds 1\)









Hence $f_1 \circ \psi$ is a state on $B$ with $\map {\paren {\map {f_1} \circ \psi} } a = \norm a$. 
From State on Unital C*-Subalgebra extends to whole C*-Algebra, there exists $f \in S_A$ with $\map f a = \map {\paren {\map {f_1} \circ \psi} } a = \norm a$.
Hence the demand.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {VIII}.5.16$



