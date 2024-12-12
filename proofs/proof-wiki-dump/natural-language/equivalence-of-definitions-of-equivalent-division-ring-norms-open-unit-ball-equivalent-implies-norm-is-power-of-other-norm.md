# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Equivalent_Division_Ring_Norms/Open_Unit_Ball_Equivalent_implies_Norm_is_Power_of_Other_Norm



Theorem
Let $R$ be a division ring.
Let $\norm {\, \cdot \,}_1: R \to \R_{\ge 0}$ and $\norm {\, \cdot \,}_2: R \to \R_{\ge 0}$ be norms on $R$.

Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

$\forall x \in R: \norm x_1 < 1 \iff \norm x_2 < 1$

Then:

$\exists \alpha \in \R_{> 0}: \forall x \in R: \norm x_1 = \norm x_2^\alpha$


Proof
Case 1
For all $x \in R: x \ne 0_R$, let $x$ satisfy $\norm x_1 \ge 1$.


Lemma 1
$\norm {\, \cdot \,}_1$ is the trivial norm.

By assumption, for all $x \in R, x \ne 0_R$, then $\norm x_2 \ge 1$.
Similarly $\norm {\, \cdot \,}_2$ is the trivial norm.
Hence $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ are equal.
For $\alpha = 1$ the result follows.
$\Box$


Case 2
Let $x_0 \in R$ such that $x_0 \ne 0_R$ and $\norm {x_0}_1 < 1$.
By assumption then $\norm {x_0}_2 < 1$.
Let $\alpha = \dfrac {\log \norm {x_0}_1 } {\log \norm {x_0}_2 }$.
Then $\norm {x_0}_1 = \norm {x_0}_2^\alpha$.

As $\norm {x_0}_1, \norm {x_0}_2 < 1$:

$\log \norm {x_0}_1 < 0$
$\log \norm {x_0}_2 < 0$
So $\alpha > 0$.


Lemma 2
$\forall x \in R: \norm x_1 = \norm x_2^\alpha$
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.1$ Absolute Values on $\Q$, Lemma $3.1.2$ and Problem $66$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$ Normed Fields, Proposition $1.10$ and Exercise $13$




