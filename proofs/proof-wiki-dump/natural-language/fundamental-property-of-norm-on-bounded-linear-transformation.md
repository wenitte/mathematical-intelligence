# 

Source: https://proofwiki.org/wiki/Fundamental_Property_of_Norm_on_Bounded_Linear_Transformation

Theorem
Let $\HH, \KK$ be Hilbert spaces.
Let $A: \HH \to \KK$ be a bounded linear transformation.
Let $\norm A$ denote the norm of $A$ defined by:

$\norm A = \inf \set {c > 0: \forall h \in \HH: \norm {A h}_\KK \le c \norm h_\HH}$

Then:

$\forall h \in \HH: \norm {A h}_\KK \le \norm A \norm h_\HH$


Proof
From Norm on Bounded Linear Transformation is Finite:

$\norm A = \inf \set {c > 0: \forall h \in \HH: \norm {A h}_\KK \le c \norm h_\HH}$ exists
and

$\norm A < \infty$

Let $x \in \HH \setminus \set{0_\HH}$
Let $\lambda \in \set {c > 0: \forall h \in \HH: \norm {A h}_\KK \le c \norm h_\HH}$.
Then:














\(\ds \norm {A x}_K\)

\(\le\)







\(\ds \lambda \norm x_\HH\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \dfrac {\norm {A x}_\KK} {\norm x_\HH}\)

\(\le\)







\(\ds \lambda\)










As $c$ was arbitrary, then:

$\forall \lambda \in \set {c > 0: \forall h \in \HH: \norm {A h}_\KK \le c \norm h_\HH}: \dfrac {\norm {A x}_\KK} {\norm x_\HH} \le \lambda$
By the definition of the infimum:

$\dfrac {\norm {A x}_\KK} {\norm x_\HH} \le \norm A$
Hence:

$\norm {A x}_\KK \le \norm A \norm x_\HH$

Since $x$ was arbitrary:

$\forall h \in \HH \setminus \set {0_\HH}: \norm {A h}_\KK \le \norm A \norm h_\HH$

Lastly, we have:














\(\ds \norm {A 0_\HH}_\KK\)

\(=\)







\(\ds \norm {0_\KK}_\KK\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \norm A \cdot 0\)




















\(\ds \)

\(=\)







\(\ds \norm A \norm {0_\HH}\)









It follows that:

$\forall h \in \HH: \norm {A h}_\KK \le \norm A \norm h_\HH$
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\S \text {II}.1$




