# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Equivalent_Division_Ring_Norms/Open_Unit_Ball_Equivalent_implies_Norm_is_Power_of_Other_Norm/Lemma_2



Theorem
Let $R$ be a division ring.
Let $\norm {\, \cdot \,}_1: R \to \R_{\ge 0}$ and $\norm {\, \cdot \,}_2: R \to \R_{\ge 0}$ be norms on $R$.
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

$\forall x \in R:\norm x_1 < 1 \iff \norm x_2 < 1$
Let $x_0 \in R$ such that $x_0 \ne 0_R$ and $\norm {x_0}_1 < 1$.
Let $\alpha = \dfrac {\log \norm {x_0}_1 } {\log \norm {x_0}_2 }$.
Then:

$\forall x \in R: \norm x_1 = \norm x_2^\alpha$


Proof
Since $\norm {x_0}_1 < 1$ then $\norm {x_0}_2 < 1$ and:

$\log \norm {x_0}_1 < 0$
$\log \norm {x_0}_2 < 0$
Hence $\alpha > 0$

Since $\forall x \in R: \norm x_1 < 1 \iff \norm x_2 < 1$: 

Lemma 1
Then:

$\forall y \in R: \norm y_1 > 1 \iff \norm y_2 > 1$


Lemma 2
Then:

$\forall y \in R:\norm y_1 = 1 \iff \norm y_2 = 1$

Let $x \in R, x \ne 0_R$.


Case 1
Let $\norm x_1 = 1$.
By Lemma 2 then:

$\norm x_2 = 1$
Hence:

$\norm x_1 = 1 = 1^\alpha = \norm x_2^\alpha$
$\Box$ 


Case 2
Let $\norm x_1 \ne 1$.
By Lemma 2 then:

$\norm x_2 \ne 1$

Let $\beta = \dfrac {\log \norm x_1 } {\log \norm x_2 }$.
Then $\norm x_1 = \norm x_2^\beta$.


Lemma 3
$\alpha = \beta$

Hence $\norm x_1 = \norm x_2^\alpha$.

$\blacksquare$





