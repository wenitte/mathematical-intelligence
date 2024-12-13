# 

Source: https://proofwiki.org/wiki/Product_of_Complex_Numbers_in_Polar_Form/General_Result



Theorem
Let $z_1, z_2, \ldots, z_n \in \C$ be complex numbers.
Let $z_j = \polar {r_j, \theta_j}$ be $z_j$ expressed in polar form for each $j \in \set {1, 2, \ldots, n}$.

Then:

$z_1 z_2 \cdots z_n = r_1 r_2 \cdots r_n \paren {\map \cos {\theta_1 + \theta_2 + \cdots + \theta_n} + i \map \sin {\theta_1 + \theta_2 + \cdots + \theta_n} }$


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$z_1 z_2 \cdots z_n = r_1 r_2 \cdots r_n \paren {\map \cos {\theta_1 + \theta_2 + \cdots + \theta_n} + i \map \sin {\theta_1 + \theta_2 + \cdots + \theta_n} }$
Let this be expressed as:

$\ds \prod_{j \mathop = 1}^n z_j = \prod_{j \mathop = 1}^n r_j \sum_{j \mathop = 1}^n \paren {\cos \theta_j + i \sin \theta_j}$

$\map P 1$ is the case:

$r_1 \paren {\cos x + i \sin x} = r_1 \paren {\cos x + i \sin x }$
which is trivially true.


Basis for the Induction
$\map P 2$ is the case:

$z_1 z_2 = r_1 r_2 \paren {\map \cos {\theta_1 + \theta_2} + i \map \sin {\theta_1 + \theta_2} }$
which is proved in Product of Complex Numbers in Polar Form.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \prod_{j \mathop = 1}^k z_j = \prod_{j \mathop = 1}^k r_j \sum_{j \mathop = 1}^k \paren {\cos \theta_j + i \sin \theta_j}$

Then we need to show:

$\ds \prod_{j \mathop = 1}^{k + 1} z_j = \prod_{j \mathop = 1}^{k + 1} r_j \sum_{j \mathop = 1}^{k + 1} \paren {\cos \theta_j + i \sin \theta_j}$


Induction Step
This is our induction step:














\(\ds \prod_{j \mathop = 1}^{k + 1} z_j\)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^k z_j} z_{k + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^k r_j \sum_{j \mathop = 1}^k \paren {\cos \theta_j + i \sin \theta_j} } \paren {r_{k + 1} \paren {\cos \theta_{k + 1} + i \sin \theta_{k + 1} } }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^k r_j} r_{k + 1} \paren {\sum_{j \mathop = 1}^k \paren {\cos \theta_j + i \sin \theta_j} + \cos \theta_{k + 1} + i \sin \theta_{k + 1} }\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^{k + 1} z_j = \prod_{j \mathop = 1}^{k + 1} r_j \sum_{j \mathop = 1}^{k + 1} \paren {\cos \theta_j + i \sin \theta_j}\)










Hence, by induction, for all $n \in \N_{>0}$:

$z_1 z_2 \cdots z_n = r_1 r_2 \cdots r_n \paren {\map \cos {\theta_1 + \theta_2 + \cdots + \theta_n} + i \map \sin {\theta_1 + \theta_2 + \cdots + \theta_n} }$
$\blacksquare$


Sources
1957: E.G. Phillips: Functions of a Complex Variable (8th ed.) ... (previous) ... (next): Chapter $\text I$: Functions of a Complex Variable: $\S 3$. Geometric Representation of Complex Numbers
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations: $(2.15)$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: De Moivre's Theorem
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Axiomatic Foundations of Complex Numbers: $79$




