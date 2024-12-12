# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Equivalent_Division_Ring_Norms/Norm_is_Power_of_Other_Norm_implies_Cauchy_Sequence_Equivalent

Theorem
Let $R$ be a division ring.
Let $\norm {\, \cdot \,}_1: R \to \R_{\ge 0}$ and $\norm {\, \cdot \,}_2: R \to \R_{\ge 0}$ be norms on $R$.
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

$\exists \alpha \in \R_{> 0}: \forall x \in R: \norm x_1 = \norm x_2^\alpha$

Then for all sequences $\sequence {x_n}$ in $R$:

$\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_1$ if and only if $\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_2$


Proof
Let $\sequence {x_n}$ be a Cauchy sequence in $\norm {\, \cdot \,}_1$.
Let $\epsilon > 0$ be given.

Since $\sequence {x_n}$ is a Cauchy sequence then:

$\exists N \in \N: \forall n,m \ge N: \norm {x_n - x_m}_1 < \epsilon^\alpha$
Then:

$\exists N \in \N: \forall n,m \ge N: \norm {x_n - x_m}_2^\alpha < \epsilon^\alpha$
Hence:

$\exists N \in \N: \forall n,m \ge N: \norm {x_n - x_m}_2 < \epsilon$

So $\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_2$

It follows that for all sequences $\sequence {x_n}$ in $R$:

$\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_1 \implies \sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_2$
$\Box$

Let $\sequence {x_n}$ be a Cauchy sequence in $\norm {\, \cdot \,}_2$.
Let $\epsilon > 0$ be given.

Since $\sequence {x_n}$ is a Cauchy sequence then:

$\exists N \in \N: \forall n,m \ge N: \norm {x_n - x_m}_2 \lt \epsilon^{1/\alpha}$
Then:

$\exists N \in \N: \forall n, m \ge N: \norm {x_n - x_m}_2^\alpha < \epsilon$
Hence:

$\exists N \in \N: \forall n, m \ge N: \norm {x_n - x_m}_1 < \epsilon$

So $\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_1$

It follows that for all sequences $\sequence {x_n}$ in $R$:

$\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_2 \implies \sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_1$

The result follows.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$ Normed Fields, Proposition $1.10$ and Exercise $13$




