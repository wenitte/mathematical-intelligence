# 

Source: https://proofwiki.org/wiki/Closure_for_Finite_Collection_of_Relations_and_Operations


This article needs to be tidied.In particular: Suspect that some of the $R$s and $S$s need to be their mathcal versionsPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $\RR_1, \RR_2, \ldots \RR_n$ be relations.
Let $\SS_1, \SS_2, \ldots \SS_m$ be operations.
Let $T$ be a small class.

Let the image of $\RR_i$ over any small class $x$ be small classes for $1 \le i \le n$.
Let the image of $\SS_i$ over any Cartesian product $x \times x$ be small classes for $1 \le i \le m$.

Then there exists a small class $X$ such that:

$(1): \quad$ $T \subseteq X$
$(2): \quad$ Each $\RR_i$ is closed with respect to $X$.  Each $\SS_i$ is closed with respect to $X \times X$.
$(3): \quad$ $X$ is the smallest small class satisfying conditions $(1)$ and $(2)$ above.
If $Y$ satisfies conditions $(1)$ and $(2)$, then $X \subseteq Y$.


Proof
Let $R \sqbrk x$ denote the image of $x$ under $R$.
Set:

$\ds \map G x = x \cup \bigcup_{i \mathop = 1}^n \RR_i \sqbrk x \cup \bigcup_{i \mathop = 1}^m \SS_i \sqbrk x$
Using the Principle of Recursive Definition, construct the function $F$ as follows:

$\map F 0 = T$
$\map F {n + 1} = \map G {\map F n}$
Define $X$ as follows:

$\ds X = \bigcup_{n \mathop \in \omega} \map F n$


Proof that $T \subseteq X$













\(\ds T\)

\(=\)







\(\ds \map F 0\)





Definition of $F$














\(\ds \)

\(\subseteq\)







\(\ds \bigcup_{n \mathop \in \omega} \map F n\)





Set is Subset of Union



$\Box$


Proof of Closure
Take any $\RR_i$.
Suppose $x \mathrel {\RR_i} y$ and $x \in \map F n$ for some $n$.
Then $y \in \map F {n + 1}$ by definition of image.

Thus $y \in X$ and $R_i$ is closed with respect to $X$.

Similarly, take any $\SS_i$.
Suppose $\paren {x \mathrel {S_i} y} = z$ and that $x \in X$ and $y \in X$.
It follows that $x, y \in \map F n$ for some $n$.
So:

$z \in \map F {n + 1}$
Therefore:

$z \in X$
$\Box$


Proof that $X$ is the Smallest Relational Closure
Suppose $T \subseteq Y$ and that $R_i$ and $S_i$ are closed with respect to $Y$.
$\map F n \subseteq Y$ shall be proven by induction:
For all $n \in \omega$, let $\map P n$ be the proposition:

$\map F n \subseteq Y$


Basis for the Induction
$\map P 0$ is the case:

$\map F 0 \subseteq Y$
which has been proved above.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\map F k \subseteq Y$

Then we need to show:

$\map F {k + 1} \subseteq Y$


Induction Step
This is our induction step:














\(\ds \map F k\)

\(\subseteq\)







\(\ds Y\)





Inductive Hypothesis








\(\ds \leadsto \ \ \)





\(\ds R_i \sqbrk {\map F k}\)

\(\subseteq\)







\(\ds Y\)


















\(\, \ds \land \, \)

\(\ds S_i \sqbrk {\map F k \times \map F k}\)

\(\subseteq\)







\(\ds Y\)





Image Preserves Subsets and $R_i$ and $S_i$ are closed with respect to $Y$








\(\ds \leadsto \ \ \)





\(\ds \map F k \cup \bigcup_{i \mathop = 1}^n R_i \sqbrk {\map F k} \cup \bigcup_{i \mathop = 1}^m S_i \sqbrk {\map F k}\)

\(\subseteq\)







\(\ds Y\)





Indexed Union Subset








\(\ds \leadsto \ \ \)





\(\ds \map G {\map F k}\)

\(\subseteq\)







\(\ds Y\)





Definition of $G$








\(\ds \leadsto \ \ \)





\(\ds \map F {k + 1}\)

\(\subseteq\)







\(\ds Y\)





Definition of $\map F {k + 1}$



So $\map P k \implies \map P {k + 1}$ and the result follows by Principle of Mathematical Induction.

Therefore:

$\forall n \in \omega: \map F n \subseteq R$
Hence by Indexed Union Subset:

$T \subseteq Y$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 9.6$




