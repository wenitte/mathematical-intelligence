# 

Source: https://proofwiki.org/wiki/Dependent_Choice_(Fixed_First_Element)


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\RR$ be a binary relation on a non-empty set $S$.
Suppose:

$\forall a \in S: \exists b \in S: a \mathrel \RR b$
that is, that $\RR$ is a left-total relation (that is, a serial relation).
Let $s \in S$.

Then there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $S$ such that:

$x_0 = s$
$\forall n \in \N: x_n \mathrel \RR x_{n + 1}$


Proof
Let $S' = \set {y \in S: s \mathrel {\RR^+} y}$, where $\RR^+$ is the transitive closure of $\RR$.
Let $\RR'$ be the restriction of $\RR$ to $S'$. 
For each $x \in S'$, there is a $y \in S$ such that $x \mathrel \RR y$. But then $s \mathrel {\RR^+} y$, so $y \in S'$, so $x \mathrel {\RR'} y$.
Thus $\RR'$ is a left-total relation on $S'$.
$S'$ is non-empty: since $\RR$ is left-total, there is a $t \in S$ such that $s \mathrel \RR t$, so $s \mathrel {\RR^+} t$, so $t \in S'$.
By Axiom of Dependent Choice, there is a infinite sequence $\sequence {y_n}_{n \mathop \in \N}$ in $S'$ such that for each $n \in \N$, $y_n \mathrel {\RR'} y_{n + 1}$.
Then by definition of restriction, $y_n \mathrel \RR y_{n + 1}$ for each $n \in \N$.
By definition of $S'$, $s \mathrel {\RR^+} y_0$.
By definition of transitive closure, there are elements $x_0, \dots, x_m$ such that $s = x_0 \mathrel \RR x_1 \mathrel \RR \cdots \mathrel \RR x_m \mathrel \RR x_m = y_0$.
Then for $n > m$, define $x_n$ as $y_{n - m}$.
This sequence then meets the requirements.
$\blacksquare$


Axiom of Dependent Choice
This theorem depends on the Axiom of Dependent Choice.
Although not as strong as the Axiom of Choice, the Axiom of Dependent Choice is similarly independent of the Zermelo-Fraenkel axioms.
The consensus in conventional mathematics is that it is true and that it should be accepted.





