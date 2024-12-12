# 

Source: https://proofwiki.org/wiki/Continuous_Linear_Transformations_form_Subspace_of_Linear_Transformations



Theorem
The space of continuous linear transformations is a subspace of the space of linear transformations.


Proof
Let $\struct {X, \norm \cdot }$ and $\struct {Y, \norm \cdot }$ be normed vector spaces.


Closure under vector addition
Let $S, T \in \map {CL} {X, Y}$.
By Continuity of Linear Transformation between Normed Vector Spaces:

$\exists M_S \in \R : M_S > 0 : \forall x \in X : \norm {S x} \le M_S \norm x$
$\exists M_T \in \R : M_T > 0 : \forall x \in X : \norm {T x} \le M_T \norm x$
Furthremore:














\(\ds \norm {\paren {S + T} x}\)

\(=\)







\(\ds \norm {S x + T x}\)





Linear Transformation Space is Vector Space














\(\ds \)

\(\le\)







\(\ds \norm {S x} + \norm {T x}\)





Definition of Norm on Vector Space














\(\ds \)

\(\le\)







\(\ds M_S \norm x + M_T \norm x\)





Continuity of Linear Transformation between Normed Vector Spaces














\(\ds \)

\(=\)







\(\ds \paren {M_S + M_T} \norm x\)









By Continuity of Linear Transformation between Normed Vector Spaces:

$S + T \in \map {CL} {X, Y}$


Closure under scalar multiplication
Let $\alpha \in \R$.
Let $T \in \map {CL} {X, Y}$.
By Continuity of Linear Transformation between Normed Vector Spaces:

$\exists M \in \R_{> 0} : \forall x \in X : \norm {T x} \le M \norm x$
Hence:














\(\ds \norm {\paren {\alpha T} x}\)

\(=\)







\(\ds \norm {\alpha \paren {T x} }\)





Linear Transformation Space is Vector Space














\(\ds \)

\(=\)







\(\ds \size \alpha \norm {T x}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(\le\)







\(\ds \size \alpha M \norm x\)





Continuity of Linear Transformation between Normed Vector Spaces














\(\ds \)

\(=\)







\(\ds M' \norm x\)





$M' := \size \alpha M$, $M' \in \R_{> 0}$



By Continuity of Linear Transformation between Normed Vector Spaces:

$\alpha T \in \map {CL} {X, Y}$


Existence of identity element under vector addition
Let $\mathbf 0 : X \to Y$ be the zero mapping.
Then:








\(\ds \forall x \in X : \ \ \)





\(\ds \norm {\mathbf 0 x}\)

\(=\)







\(\ds \norm {\mathbf 0_Y}\)




















\(\ds \)

\(=\)







\(\ds 0\)





Norm Axiom $\text N 1$: Positive Definiteness














\(\ds \)

\(\le\)







\(\ds 1 \cdot \norm x\)









Hence:

$\mathbf 0 \in \map {CL} {X, Y}$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X, Y}$. Operator norm and the normed space $\map {CL} {X, Y}$




