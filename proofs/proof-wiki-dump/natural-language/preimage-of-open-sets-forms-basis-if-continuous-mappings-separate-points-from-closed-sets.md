# 

Source: https://proofwiki.org/wiki/Preimage_of_Open_Sets_forms_Basis_if_Continuous_Mappings_Separate_Points_from_Closed_Sets


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $X$ be a topological space.

Let $\family {Y_i}_{i \mathop \in I}$ be an indexed family of topological spaces for some indexing set $I$.
Let $\family {f_i : X \to Y_i}_{i \mathop \in I}$ be an indexed family of continuous mappings.
Let $\family {f_i}_{i \mathop \in I}$ separate points from closed sets.

Let $\BB = \set{f_i^{-1} \sqbrk V : i \in I, V \text{ is open in } Y_i}$.

Then:

$\BB$ is a basis for $X$
Proof
By definition of continuous:

$\forall B \in \BB : B$ is open in $X$

Let $U \subseteq X$ be open in $X$.
Let $x \in U$.

By definition of closed subset:

$X \setminus U$ is closed in $X$
By definition of mappings separating points from closed sets:

$\exists i \in I : \map {f_i} x \notin f_i \sqbrk {X \setminus U}^-$
Hence:

$\map {f_i} x \in Y_i \setminus f_i \sqbrk {X \setminus U}^-$
By definition of preimage of mapping:

$x \in f_i^{-1} \sqbrk {Y_i \setminus f_i \sqbrk {X \setminus U}^-}$

From Topological Closure is Closed:

$f_i \sqbrk {X \setminus U}^-$ is closed in $Y_i$
By definition of closed subset:

$Y_i \setminus f_i \sqbrk {X \setminus U}^-$ is open in $Y_i$
Hence:

$f_i^{-1} \sqbrk {Y_i \setminus f_i \sqbrk {X \setminus U}^-} \in \BB$

We have:














\(\ds y\)

\(\in\)







\(\ds f_i^{-1} \sqbrk {Y_i \setminus f_i \sqbrk {X \setminus U}^-}\)














\(\ds \leadsto \ \ \)





\(\ds \map {f_i} y\)

\(\in\)







\(\ds Y_i \setminus f_i \sqbrk {X \setminus U}^-\)





Definition of Preimage of Mapping








\(\ds \leadsto \ \ \)





\(\ds \map {f_i} y\)

\(\in\)







\(\ds Y_i \setminus f_i \sqbrk {X \setminus U}\)





Set is Subset of its Topological Closure and Set Difference with Subset is Superset of Set Difference








\(\ds \leadsto \ \ \)





\(\ds \map {f_i} y\)

\(\notin\)







\(\ds f_i \sqbrk {X \setminus U}\)





Definition of Set Difference








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\notin\)







\(\ds X \setminus U\)





Definition of Image of Mapping








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds U\)





Definition of Set Difference



By definition of subset:

$f_i^{-1} \sqbrk {Y_i \setminus f_i \sqbrk {X \setminus U}^-} \subseteq U$

We have shown that:

$\forall$ open subsets $U \subseteq X, x \in U : \exists B \in \BB : x \in B \subseteq U$
Hence by definition $\BB$ is a basis for $X$.
$\blacksquare$





