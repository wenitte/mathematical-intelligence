# 

Source: https://proofwiki.org/wiki/Exponential_of_Sum/Complex_Numbers/General_Result



Theorem
Let $m \in \N_{>0}$ be a natural number.
Let $z_1, z_2, \ldots, z_m \in \C$ be complex numbers.
Let $\exp z$ be the exponential of $z$.

Then:

$\ds \map \exp {\sum_{j \mathop = 1}^m z_j} = \prod_{j \mathop = 1}^m \paren {\exp z_j}$


Corollary
Let $m \in \Z_{>0}$ be a positive integer.
Let $z \in \C$ be a complex number.
Let $\exp z$ be the exponential of $z$.

Then:

$\ds \exp \paren {m z} = \paren {\exp z}^m$


Proof
The proof proceeds by induction.
For all $m \in \N_{>0}$, let $\map P m$ be the proposition:

$\ds \map \exp {\sum_{j \mathop = 1}^m z_j} = \prod_{j \mathop = 1}^m \paren {\exp z_j}$

$\map P 1$ is the case:














\(\ds \map \exp {\sum_{j \mathop = 1}^1 z_j}\)

\(=\)







\(\ds \exp z_j\)




















\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^1 \paren {\exp z_j}\)









Thus $\map P 1$ is seen to hold.


Basis for the Induction
$\map P 2$ is the case:

$\map \exp {z_1 + z_2} = \paren {\exp z_1} \paren {\exp z_2}$
This is proved in Exponential of Sum: Complex Numbers.

Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \map \exp {\sum_{j \mathop = 1}^k z_j} = \prod_{j \mathop = 1}^k \paren {\exp z_j}$

from which it is to be shown that:

$\ds \map \exp {\sum_{j \mathop = 1}^{k + 1} z_j} = \prod_{j \mathop = 1}^{k + 1} \paren {\exp z_j}$


Induction Step
This is the induction step:














\(\ds \map \exp {\sum_{j \mathop = 1}^{k + 1} z_j}\)

\(=\)







\(\ds \map \exp {\sum_{j \mathop = 1}^k z_j + z_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \map \exp {\sum_{j \mathop = 1}^k z_j} \exp z_{k + 1}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^k \paren {\exp z_j} \exp z_{k + 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds prod_{j \mathop = 1}^{k + 1} \paren {\exp z_j}\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m \in \N_{>0}: \ds \map \exp {\sum_{j \mathop = 1}^m z_j} = \prod_{j \mathop = 1}^m \paren {\exp z_j}$
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations




