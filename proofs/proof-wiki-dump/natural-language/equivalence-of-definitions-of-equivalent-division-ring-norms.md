# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Equivalent_Division_Ring_Norms



Theorem
Let $R$ be a division ring.
Let $\norm {\, \cdot \,}_1: R \to \R_{\ge 0}$ and $\norm {\, \cdot \,}_2: R \to \R_{\ge 0}$ be norms on $R$.
Let $d_1$ and $d_2$ be the metrics induced by the norms $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ respectively.

The following definitions of the concept of Equivalent Division Ring Norms are equivalent:

Topologically Equivalent
$\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ are equivalent if and only if $d_1$ and $d_2$ are topologically equivalent metrics.

Convergently Equivalent
$\norm {\,\cdot\,}_1$ and $\norm {\,\cdot\,}_2$ are equivalent if and only if for all sequences $\sequence {x_n}$ in $R$:

$\sequence {x_n}$ converges to $l$ in $\norm{\,\cdot\,}_1 \iff \sequence {x_n}$ converges to $l$ in $\norm {\,\cdot\,}_2$
Null Sequence Equivalent
$\norm {\,\cdot\,}_1$ and $\norm {\,\cdot\,}_2$ are equivalent if and only if for all sequences $\sequence {x_n}$ in $R$:

$\sequence {x_n}$ is a null sequence in $\norm{\,\cdot\,}_1 \iff \sequence {x_n}$ is a null sequence in $\norm {\,\cdot\,}_2$
Open Unit Ball Equivalent
$\norm {\,\cdot\,}_1$ and $\norm {\,\cdot\,}_2$ are equivalent if and only if $\forall x \in R: \norm x_1 < 1 \iff \norm x_2 < 1$ 

Norm is Power of Other Norm
$\norm{\,\cdot\,}_1$ and $\norm{\,\cdot\,}_2$ are equivalent if and only if $\exists \alpha \in \R_{\gt 0}: \forall x \in R: \norm{x}_1 = \norm{x}_2^\alpha$

Cauchy Sequence Equivalent
$\norm {\,\cdot\,}_1$ and $\norm {\,\cdot\,}_2$ are equivalent if and only if for all sequences $\sequence {x_n}$ in $R$:

$\sequence {x_n}$ is a Cauchy sequence in $\norm {\,\cdot\,}_1 \iff \sequence {x_n}$ is a Cauchy sequence in $\norm{\,\cdot\,}_2$


Proof
Topologically Equivalent implies Convergently Equivalent
Let $d_1$ and $d_2$ be topologically equivalent metrics.

Then:

$d_1$ and $d_2$ are convergently equivalent metrics.
$\Box$


Convergently Equivalent implies Null Sequence Equivalent
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

for all sequences $\sequence {x_n}$ in $R:\sequence {x_n}$ converges to $l$ in $\norm{\, \cdot \,}_1 \iff \sequence {x_n}$ is a converges to $l$ in $\norm {\, \cdot \,}_2$

Then for all sequences $\sequence {x_n}$ in $R$:

$\sequence {x_n}$ is a null sequence in $\norm {\, \cdot \,}_1 \iff \sequence {x_n}$ is a null sequence in $\norm {\, \cdot \,}_2$
$\Box$


Null Sequence Equivalent implies Open Unit Ball Equivalent
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

for all sequences $\sequence {x_n}$ in $R:\sequence {x_n}$ is a null sequence in $\norm {\, \cdot \,}_1  \iff \sequence {x_n}$ is a null sequence in $\norm {\, \cdot \,}_2$

Then $\forall x \in R$:

$\norm x_1 < 1 \iff \norm x_2 < 1$
$\Box$


Open Unit Ball Equivalent implies Norm is Power of Other Norm
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

$\forall x \in R: \norm x_1 < 1 \iff \norm x_2 < 1$

Then:

$\exists \alpha \in \R_{> 0}: \forall x \in R: \norm x_1 = \norm x_2^\alpha$
$\Box$


Norm is Power of Other Norm implies Topologically Equivalent
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

$\exists \alpha \in \R_{\gt 0}: \forall x \in R: \norm x_1 = \norm x_2^\alpha$

Then $d_1$ and $d_2$ are topologically equivalent metrics.
$\Box$


Norm is Power of Other Norm implies Cauchy Sequence Equivalent
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

$\exists \alpha \in \R_{> 0}: \forall x \in R: \norm x_1 = \norm x_2^\alpha$

Then for all sequences $\sequence {x_n}$ in $R$:

$\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_1$ if and only if $\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_2$
$\Box$


Cauchy Sequence Equivalent implies Open Unit Ball Equivalent
Let $R$ be a division ring.
Let $\norm {\, \cdot \,}_1: R \to \R_{\ge 0}$ and $\norm {\, \cdot \,}_2: R \to \R_{\ge 0}$ be norms on $R$.
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

for all sequences $\sequence {x_n}$ in $R$: $\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_1$ if and only if $\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_2$

Then $\forall x \in R$:

$\norm x_1 < 1 \iff \norm x_2 < 1$
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.1$ Absolute Values on $\Q$: Lemma $3.1.2$ and Problem $66$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.2$ Normed Fields: Proposition $1.10$ and Exercise $13$




