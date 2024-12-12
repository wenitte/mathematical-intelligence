# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convergence_in_Normed_Division_Rings



Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\sequence {x_n}$ be a sequence in $R$.

The following definitions of the concept of Convergent Sequence in Normed Division Ring are equivalent:

Definition 1
The sequence $\sequence {x_n}$ converges to the limit $x \in R$ in the norm $\norm {\, \cdot \,}$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies \norm {x_n - x} < \epsilon$
Definition 2
The sequence $\sequence {x_n}$ converges to the limit $x \in R$ in the norm $\norm {\, \cdot \,}$ if and only if:

$\sequence {x_n}$ converges to $x$ in the metric induced by the norm $\norm {\, \cdot \,}$
Definition 3
The sequence $\sequence {x_n}$ converges to the limit $x \in R$ in the norm $\norm {\, \cdot \,}$ if and only if:

the real sequence $\sequence {\norm {x_n - x} }$ converges to $0$ in the reals $\R$
Definition 4
The sequence $\sequence {x_n}$ converges to the limit $x \in R$ in the norm $\norm {\, \cdot \,}$ if and only if:

$\sequence {x_n}$ converges to $x$ in the topology induced by the norm $\norm {\, \cdot \,}$


Proof
Definition 1 iff Definition 2
By definition, the metric induced by the norm $\norm {\, \cdot \,}$ is the mapping $d: R \times R \to \R_{\ge 0}$ defined as:

$\map d {x, y} = \norm {x - y}$
From Metric Induced by Norm on Normed Division Ring is Metric, $d$ is a metric.

By definition of a convergent sequence in a metric space, $\sequence{x_n}$ converges to $x \in R$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies \map d {x_n, x} < \epsilon$
if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies \norm {x_n - x} < \epsilon$
The result follows.
$\Box$


Definition 1 iff Definition 3
Let $x \in R$.
By definition of norm on a division ring, $\norm {\, \cdot \,}$ is a mapping $\norm {\, \cdot \,}:R \to \R_{\ge 0}$.
Then:

$\forall n \in \N: \size {\norm{x_n - x} - 0} = \size {\norm{x_n - x}} = \norm{x_n - x}$

By definition of convergence of a real sequence, the real sequence $\sequence {\norm {x_n - x} }$ converges to $0$ in the reals $\R$ if and only if

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: n > N \implies \size {\norm{x_n - x} - 0} < \epsilon$
if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: n > N \implies \norm{x_n - x} < \epsilon$
The result follows.
$\Box$


Definition 2 iff Definition 4
By definition, the metric induced by the norm $\norm {\, \cdot \,}$ is the mapping $d: R \times R \to \R_{\ge 0}$ defined as:

$\map d {x, y} = \norm {x - y}$
From Metric Induced by Norm on Normed Division Ring is Metric, $d$ is a metric.

By definition, the topology induced by the norm $\norm {\, \cdot \,}$ is the topology $\tau$ induced by the metric $d$.
From Metric Induces Topology, $\tau$ is a topology.

From Sequence Converges to Point Relative to Metric iff it Converges Relative to Induced Topology:

$\sequence {x_n}$ converges to $x$ in the metric induced by the norm $\norm {\, \cdot \,}$ if and only if $\sequence {x_n}$ converges to $x$ in the topology induced by the norm $\norm {\, \cdot \,}$
$\blacksquare$

Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.2$: Normed Fields, Definition $1.7$




