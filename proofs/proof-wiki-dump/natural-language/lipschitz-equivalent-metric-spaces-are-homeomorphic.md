# 

Source: https://proofwiki.org/wiki/Lipschitz_Equivalent_Metric_Spaces_are_Homeomorphic



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $M_1$ and $M_2$ be Lipschitz equivalent.

Then $M_1$ and $M_2$ are homeomorphic.


Proof
Let $M_1$ and $M_2$ be Lipschitz equivalent.
Then, by definition, $\exists h, k \in \R_{>0}$ such that:

$\forall x, y \in A_1: h \map {d_1} {x, y} \le \map {d_2} {\map f x, \map f y} \le k \map {d_1} {x, y}$

From the definition of open $\epsilon$-ball:














\(\ds y\)

\(\in\)







\(\ds \map {B_{h \epsilon} } {\map f x; d_2}\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {\map f x, \map f y}\)

\(<\)







\(\ds h \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_1} {x, y}\)

\(\le\)







\(\ds \frac {\map {d_2} {\map f x, \map f y} } h < \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \map {B_\epsilon} {x; d_1}\)










and:














\(\ds y\)

\(\in\)







\(\ds \map {B_{\epsilon / k} } {x; d_1}\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_1} {x, y}\)

\(<\)







\(\ds \frac \epsilon k\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {\map f x, \map f y}\)

\(\le\)







\(\ds k \map {d_1} {x, y} < \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \map {B_\epsilon} {\map f x; d_2}\)










Thus:

$\map {B_{h \epsilon} } {\map f x; d_2} \subseteq \map {B_\epsilon} {x; d_1}$
$\map {B_{\epsilon / k} } {x; d_1} \subseteq \map {B_\epsilon} {\map f x; d_2}$
$\Box$

Now, suppose $U$ is $d_2$-open.
Let $x \in U$.
Then:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} {\map f x; d_2} \subseteq U$.
Hence:

$\map {B_{\epsilon / k} } {x; d_1} \subseteq U$
Thus $U$ is $d_1$-open.

Similarly, suppose $U$ is $d_1$-open.
Let $x \in U$.
Then:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} {x; d_1} \subseteq U$
Hence:

$\map {B_{h \epsilon} } {\map f x; d_2} \subseteq U$
Thus $U$ is $d_2$-open.

The result follows by definition of homeomorphic metric spaces.
$\blacksquare$


Also see
Lipschitz Equivalent Metrics are Topologically Equivalent


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.4$: Equivalent metrics: Definition $2.4.8$




