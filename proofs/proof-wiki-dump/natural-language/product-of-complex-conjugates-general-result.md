# 

Source: https://proofwiki.org/wiki/Product_of_Complex_Conjugates/General_Result



Theorem
Let $z_1, z_2, \ldots, z_n \in \C$ be complex numbers.
Let $\overline z$ be the complex conjugate of the complex number $z$.

Then:

$\ds \overline {\prod_{j \mathop = 1}^n z_j} = \prod_{j \mathop = 1}^n \overline {z_j}$

That is: the conjugate of the product equals the product of the conjugates.


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\ds \overline {\prod_{j \mathop = 1}^n z_j} = \prod_{j \mathop = 1}^n \overline {z_j}$

$\map P 1$ is trivially true, as this just says $\overline {z_1} = \overline {z_1}$.


Basis for the Induction
$\map P 2$ is the case:

$\overline {z_1 z_2} = \overline {z_1} \cdot \overline {z_2}$
which has been proved in Product of Complex Conjugates.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \overline {\prod_{j \mathop = 1}^k z_j} = \prod_{j \mathop = 1}^k \overline {z_j}$
Then we need to show:

$\ds \overline {\prod_{j \mathop = 1}^{k + 1} z_j} = \prod_{j \mathop = 1}^{k + 1} \overline {z_j}$


Induction Step
This is our induction step:















\(\ds \overline {\prod_{j \mathop = 1}^{k + 1} z_j}\)

\(=\)







\(\ds \overline {\paren {\prod_{j \mathop = 1}^k z_j} z_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \overline {\paren {\prod_{j \mathop = 1}^k z_j} } \cdot \overline {z_{k + 1} }\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^k \overline {z_j} } \cdot \overline {z_{k + 1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^{k + 1} \overline {z_j}\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \N: \overline {\prod_{j \mathop = 1}^n z_j} = \prod_{j \mathop = 1}^n \overline {z_j}$
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Fundamental Operations with Complex Numbers: $55$




