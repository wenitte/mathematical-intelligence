# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Equivalent_Division_Ring_Norms/Cauchy_Sequence_Equivalent_implies_Open_Unit_Ball_Equivalent

Theorem
Let $R$ be a division ring.
Let $\norm {\, \cdot \,}_1: R \to \R_{\ge 0}$ and $\norm {\, \cdot \,}_2: R \to \R_{\ge 0}$ be norms on $R$.
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

for all sequences $\sequence {x_n}$ in $R$: $\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_1$ if and only if $\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_2$

Then $\forall x \in R$:

$\norm x_1 < 1 \iff \norm x_2 < 1$


Proof
The contrapositive is proved.

Let there exist $x \in R$ such that $\norm x_1 < 1$ and $\norm x_2 \ge 1$.
Let $\sequence {x_n}$ be the sequence defined by: $\forall n: x_n = x^n$.
By Sequence of Powers of Number less than One in Normed Division Ring then $\sequence {x_n}$ is a null sequence in $\norm {\, \cdot \,}_1$.
By convergent sequence in normed division ring is a Cauchy sequence then $\sequence {x_n}$ is a Cauchy sequence in $\norm {\, \cdot \,}_1$.

Let $0_R$ be the zero of $R$ and $1_R$ be the unit of $R$.
By Norm of Unity of Division Ring and the assumption $\norm x_1 < 1$:

$x \ne 1_R$
Hence:

$x - 1_R \ne 0_R$
By norm axiom $(\text N 1)$: Positive Definiteness:

$\norm {x - 1_R}_2 > 0$

Let $\epsilon = \dfrac {\norm {x - 1_R}_2} 2$.
Then $\norm {x - 1_R}_2 > \epsilon$.

We have that $\norm x_2 \ge 1$.
Hence for all $n \in \N$:














\(\ds \norm {x_n}_2\)

\(=\)







\(\ds \norm {x^n}_2\)





Definition of $x_n$














\(\ds \)

\(=\)







\(\ds \norm x_2^n\)





Norm Axiom $(\text N 2)$: Multiplicativity














\(\ds \)

\(\ge\)







\(\ds 1\)










For all $n \in \N$:














\(\ds \norm {x_{n + 1} - x_n}_2\)

\(=\)







\(\ds \norm {x^{n + 1} - x^n}_2\)




















\(\ds \)

\(=\)







\(\ds \norm {x^n x - x^n}_2\)




















\(\ds \)

\(=\)







\(\ds \norm {x^n \paren {x - 1_R} }_2\)




















\(\ds \)

\(=\)







\(\ds \norm {x^n}_2 \norm {x - 1_R}_2\)





Norm Axiom $(\text N 2)$: Multiplicativity














\(\ds \)

\(>\)







\(\ds \epsilon\)









So $\sequence {x_n}$ is not a Cauchy sequence in $\norm {\, \cdot \,}_2$.
The theorem now follows by the Rule of Transposition. 
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$ Normed Fields, Proposition $1.10$ and Exercise $13$




