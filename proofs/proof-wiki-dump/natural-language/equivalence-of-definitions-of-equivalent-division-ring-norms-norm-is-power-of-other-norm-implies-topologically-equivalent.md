# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Equivalent_Division_Ring_Norms/Norm_is_Power_of_Other_Norm_implies_Topologically_Equivalent

Theorem
Let $R$ be a division ring.
Let $\norm {\, \cdot \,}_1: R \to \R_{\ge 0}$ and $\norm {\, \cdot \,}_2: R \to \R_{\ge 0}$ be norms on $R$.
Let $d_1$ and $d_2$ be the metrics induced by the norms $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ respectively.

Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

$\exists \alpha \in \R_{\gt 0}: \forall x \in R: \norm x_1 = \norm x_2^\alpha$

Then $d_1$ and $d_2$ are topologically equivalent metrics.


Proof
Let $x \in R$ and $\epsilon \in \R_{\gt 0}$
Then for $y \in R$:














\(\ds \norm {y - x}_1 < \epsilon\)

\(\leadstoandfrom\)







\(\ds \norm {y - x}_2^\alpha < \epsilon\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \norm {y - x}_2 < \epsilon^{1 / \alpha}\)









Hence:

$\map {B^1_\epsilon} x = \map {B^2_{\epsilon^{1 / \alpha} } } x$
where:

$\map {B^1_\epsilon} x$ is the open ball in $d_1$ centered on $x$ with radius $\epsilon$
$\map {B^2_{\epsilon^{1 / \alpha} } } x$ is the open ball in $d_2$ centered on $x$ with radius $\epsilon^{1 / \alpha}$

Since $x$ and $\epsilon$ were arbitrary then:

every $d_1$-open ball is a $d_2$-open ball.

Similarly, for $y \in R$:














\(\ds \norm {y - x}_2 < \epsilon\)

\(\leadstoandfrom\)







\(\ds \norm {y - x}_2^\alpha < \epsilon^\alpha\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \norm {y - x}_1 < \epsilon^\alpha\)









So:

every $d_2$-open ball is a $d_1$-open ball.

By the definition of an open set of a metric space it follows that $d_1$ and $d_2$ are topologically equivalent metrics,
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.1$ Absolute Values on $\Q$, Lemma $3.1.2$ and Problem $66$




