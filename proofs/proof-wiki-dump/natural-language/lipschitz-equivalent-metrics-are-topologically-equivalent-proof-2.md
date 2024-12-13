# 

Source: https://proofwiki.org/wiki/Lipschitz_Equivalent_Metrics_are_Topologically_Equivalent/Proof_2

Theorem
Let $M_1 = \struct {A, d_1}$ and $M_2 = \struct {A, d_2}$ be metric spaces on the same underlying set $A$.
Let $d_1$ and $d_2$ be Lipschitz equivalent.

Then $d_1$ and $d_2$ are topologically equivalent.


Proof
By definition of Lipschitz equivalence:

$\forall x, y \in A: h \map {d_2} {x, y} \le \map {d_1} {x, y} \le k \map {d_2} {x, y}$
for some $h, k \in \R_{>0}$.
Let $x \in A$.
Let $\epsilon \in \R_{>0}$.
Let $\map {B_{h \epsilon} } {x; d_1}$ denote the open $h \epsilon$-ball with respect to $d_1$ of $x \in A$.
Then:














\(\ds y\)

\(\in\)







\(\ds \map {B_{h \epsilon} } {x; d_1}\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_1} {x, y}\)

\(<\)







\(\ds h \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {x, y}\)

\(\le\)







\(\ds \frac {\map {d_1} {x, y} } h\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \map {B_\epsilon} {x; d_2}\)














\(\ds \leadsto \ \ \)





\(\ds \map {B_{h \epsilon} } {x; d_1}\)

\(\subseteq\)







\(\ds \map {B_\epsilon} {x; d_2}\)










Similarly:














\(\ds y\)

\(\in\)







\(\ds \map {B_{\epsilon / k} } {x; d_2}\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {x, y}\)

\(<\)







\(\ds \frac \epsilon k\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_1} {x, y}\)

\(\le\)







\(\ds k \frac {\map {d_2} {x, y} } h\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \map {B_\epsilon} {x; d_1}\)














\(\ds \leadsto \ \ \)





\(\ds \map {B_{\epsilon / k} } {x; d_2}\)

\(\subseteq\)







\(\ds \map {B_\epsilon} {x; d_1}\)









Now suppose $U \subseteq A$ is $d_1$-open.
Let $x \in U$.
Then:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} {x; d_1} \subseteq U$
Thus:

$\map {B_{\epsilon / k} } {x; d_2} \subseteq \map {B_\epsilon} {x; d_1} \subseteq U$
and so $U$ is $d_2$-open.
Mutatis mutandis, if $U \subseteq A$ is $d_2$-open, it follows that $U$ is $d_1$-open.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.4$: Equivalent metrics: Proposition $2.4.4$




