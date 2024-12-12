# 

Source: https://proofwiki.org/wiki/Continuous_Function_from_Compact_Hausdorff_Space_to_Itself_Fixes_a_Non-Empty_Set



Theorem
Let $\struct {X, \tau}$ be a compact Hausdorff space. 
Let $f : X \to X$ be a continuous function.

Then there exists a non-empty subset $A \subseteq X$ such that: 

$f \sqbrk A = A$


Proof
Define a sequence of sets $\sequence {X_i}_{i \mathop \in \N}$ by:

$X_i = \begin{cases} X & : i = 1 \\ f \sqbrk {X_{i - 1} } & : i \ge 2 \end{cases}$
Since:

$f \sqbrk X \subseteq X$
we have: 

$X_i \subseteq X$
for each $i \in \N$. 
Define:

$\ds A = \bigcap_{n \mathop = 1}^\infty X_n$
We have: 














\(\ds A\)

\(=\)







\(\ds \bigcap_{n \mathop = 1}^\infty X_n\)




















\(\ds \)

\(=\)







\(\ds X_1 \cap \paren {\bigcap_{n \mathop = 2}^\infty X_n}\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{n \mathop = 2}^\infty X_n\)









We aim to show that:

$f \sqbrk A = A$


Lemma 1
$X_i$ is closed
$X_i$ is non-empty
$X_{i + 1} \subseteq X_i$.
$\Box$

Since $X_{i + 1} \subseteq X_i$ for all $i \in \N$, we can apply Intersection of Nested Closed Subsets of Compact Space is Non-Empty to obtain that: 

$A$ is non-empty.

We then have:














\(\ds f \sqbrk A\)

\(=\)







\(\ds f \sqbrk {\bigcap_{n \mathop = 1}^\infty X_n}\)




















\(\ds \)

\(\subseteq\)







\(\ds \bigcap_{n \mathop = 1}^\infty f \sqbrk {X_n}\)





Image of Intersection under Mapping: General Result














\(\ds \)

\(=\)







\(\ds \bigcap_{n \mathop = 1}^\infty X_{n + 1}\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{n \mathop = 2}^\infty X_n\)




















\(\ds \)

\(=\)







\(\ds A\)









so:

$f \sqbrk A \subseteq A$
It remains to show that:

$A \subseteq f \sqbrk A$


Lemma 2
$A \subseteq f \sqbrk A$
$\Box$

We then have:

$A = f \sqbrk A$
as required.
$\blacksquare$





