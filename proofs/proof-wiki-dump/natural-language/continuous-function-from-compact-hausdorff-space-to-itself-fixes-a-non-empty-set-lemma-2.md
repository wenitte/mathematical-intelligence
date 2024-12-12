# 

Source: https://proofwiki.org/wiki/Continuous_Function_from_Compact_Hausdorff_Space_to_Itself_Fixes_a_Non-Empty_Set/Lemma_2

Lemma
Let $\struct {T, \tau}$ be a compact Hausdorff space. 
Let $f : T \to T$ be a continuous function.
Define a sequence of sets $\sequence {X_i}_{i \mathop \in \N}$ by:

$X_i = \begin{cases}X & : i = 1 \\ f \sqbrk {X_{i - 1} } & : i \ge 2\end{cases}$
Define:

$\ds A = \bigcap_{n \mathop = 1}^\infty X_n$

Then: 

$A \subseteq f \sqbrk A$


Proof
Let $y \in A$. 
Then, by the definition of set intersection:

$y \in f \sqbrk {X_i}$ for each $i \in \N$.
That is:

for each $i \in \N$, there exists $x_i \in X_i$ such that $\map f {x_i} = y$.
So the intersection $f^{-1} \sqbrk {\set y} \cap X_i$ is non-empty for each $i \in \N$.
From Continuity Defined from Closed Sets:

$f^{-1} \sqbrk {\set y}$ is closed.
From Intersection of Closed Sets is Closed in Topological Space:

$f^{-1} \sqbrk {\set y} \cap X_i$ is closed.
From Continuous Function from Compact Hausdorff Space to Itself Fixes a Non-Empty Set: Lemma 1, we have: 

$X_{i + 1} \subseteq X_i$ for each $i \in \N$.
So, from Set Intersection Preserves Subsets: 

$f^{-1} \sqbrk {\set y} \cap X_{i + 1} \subseteq {f^{-1} } \sqbrk {\set y} \cap X_i$
We can therefore apply Intersection of Nested Closed Subsets of Compact Space is Non-Empty to obtain: 

$\ds \bigcap_{i \mathop = 1}^\infty \paren {f^{-1} \sqbrk {\set y} \cap X_i} \ne \O$
We then have: 














\(\ds \bigcap_{i \mathop = 1}^\infty \paren {f^{-1} \sqbrk {\set y} \cap X_i}\)

\(=\)







\(\ds f^{-1} \sqbrk {\set y} \cap \bigcap_{i \mathop = 1}^\infty X_i\)





General Associativity of Set Intersection














\(\ds \)

\(=\)







\(\ds f^{-1} \sqbrk {\set y} \cap A\)




















\(\ds \)

\(\ne\)







\(\ds \O\)









So there exists $x \in A$ such that: 

$\map f x = y$
That is: 

$y \in f \sqbrk A$
So we obtain: 

$A \subseteq f \sqbrk A$
as required.
$\blacksquare$





