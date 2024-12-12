# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Equivalent_Division_Ring_Norms/Topologically_Equivalent_implies_Convergently_Equivalent

Theorem
Let $R$ be a division ring.
Let $\norm {\, \cdot \,}_1: R \to \R_{\ge 0}$ and $\norm {\, \cdot \,}_2: R \to \R_{\ge 0}$ be norms on $R$.
Let $d_1$ and $d_2$ be the metrics induced by the norms $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ respectively.
Let $d_1$ and $d_2$ be topologically equivalent metrics.

Then:

$d_1$ and $d_2$ are convergently equivalent metrics.


Proof
Let $\sequence {x_n}$ converge to $l$ in $\norm {\, \cdot \,}_1$.
Let $\epsilon \in \R_{> 0}$ be given.

Let $\map {B_\epsilon^2} i$ denote the open ball centered on $l$ of radius $\epsilon$ in $\struct {R, \norm {\, \cdot \,}_2}$.
By Open Ball of Metric Space is Open Set then $\map {B_\epsilon^2} l$ is open set in $\struct {R, d_2}$.
Since $d_1$ and $d_2$ are topologically equivalent metrics then $\map {B_\epsilon^2} l$ is open set in $\struct {R, d_1}$.
By the definition of an open set in a metric space then:

$\exists \delta \in \R_{> 0}: \map {B_\delta^1} l \subseteq \map {B_\epsilon^2} l$
Hence:

$\forall x \in R: \norm {x - l}_1 < \delta \implies \norm {x - l}_2 < \epsilon$

Since $\sequence {x_n}$ converges to $l$ in $\norm {\, \cdot \,}_1$ then:

$\exists N \in \N: \forall n \ge N: \norm {x_n - l}_1 < \delta$
Hence:

$\exists N \in \N: \forall n \ge N: \norm {x_n - l}_2 < \epsilon$

Since $\sequence {x_n}$ and $\epsilon > 0$ were arbitrary then it has been shown that for all sequences $\sequence {x_n}$ in $R$: 

$\sequence {x_n}$ converges to $l$ in $\norm {\, \cdot \,}_1 \implies \sequence {x_n}$ converges to $l$ in $\norm {\, \cdot \,}_2$.

By a similar argument it is shown that for all sequences $\sequence {x_n}$ in $R$:

$\sequence {x_n}$ converges to $l$ in $\norm {\, \cdot \,}_2 \implies \sequence {x_n}$ converges to $l$ in $\norm {\, \cdot \,}_1$.
The result follows. 
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.1$ Absolute Values on $\Q$, Lemma $3.1.2$ and Problem $66$




