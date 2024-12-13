# 

Source: https://proofwiki.org/wiki/Product_Rule_for_Derivatives/General_Result



Theorem
Let $\map {f_1} x, \map {f_2} x, \ldots, \map {f_n} x$ be real functions differentiable on the open interval $I$.
then:

$\forall x \in I: \ds \map {D_x} {\prod_{i \mathop = 1}^n \map {f_i} x} = \sum_{i \mathop = 1}^n \paren {\map {D_x} {\map {f_i} x} \prod_{j \mathop \ne i} \map {f_j} x}$


$3$ Factors
Let $\map u x$, $\map v x$ and $\map w x$ be real functions differentiable on the open interval $I$.
Then:

$\forall x \in I: \map {\dfrac \d {\d x} } {u v w} = u v \dfrac {\d w} {\d x} + u w \dfrac {\d v} {\d x} + v w \dfrac {\d u} {\d x}$


Proof
Proof by Principle of Mathematical Induction:
For all $n \in \N_{\ge 1}$, let $\map P n$ be the proposition:

$\ds \map {D_x} {\prod_{i \mathop = 1}^n \map {f_i} x} = \sum_{i \mathop = 1}^n \paren {\map {D_x} {\map {f_i} x} \prod_{j \mathop \ne i} \map {f_j} x}$

$\map P 1$ is true, as this just says:

$\map {D_x} {\map {f_1} x} = \map {D_x} {\map {f_1} x}$


Basis for the Induction
$\map P 2$ is the case:

$\map {D_x} {\map {f_1} x \map {f_2} x} = \map {D_x} {\map {f_1} x} \map {f_2} x + \map {f_1} x \map {D_x} {\map {f_2} x}$
which has been proved in Product Rule for Derivatives.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \map {D_x} {\prod_{i \mathop = 1}^k \map {f_i} x} = \sum_{i \mathop = 1}^k \paren {\map {D_x} {\map {f_i} x} \prod_{j \mathop \ne i} \map {f_j} x}$

Then we need to show:

$\ds \map {D_x} {\prod_{i \mathop = 1}^{k + 1} \map {f_i} x} = \sum_{i \mathop = 1}^{k + 1} \paren {\map {D_x} {\map {f_i} x} \prod_{j \mathop \ne i} \map {f_j} x}$


Induction Step
This is our induction step:














\(\ds \map {D_x} {\prod_{i \mathop = 1}^{k + 1} \map {f_i} x}\)

\(=\)







\(\ds \map {D_x} {\paren {\prod_{i \mathop = 1}^k \map {f_i} x} \map {f_{k + 1} } x}\)




















\(\ds \)

\(=\)







\(\ds \map {D_x} {\map {f_{k + 1} } x} \paren {\prod_{i \mathop = 1}^k \map {f_i} x} + \map {D_x} {\prod_{i \mathop = 1}^k \map {f_i} x} \map {f_{k + 1} } x\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \map {D_x} {\map {f_{k + 1} } x} \paren {\prod_{i \mathop = 1}^k \map {f_i} x} + \paren {\sum_{i \mathop = 1}^k \paren {\map {D_x} {\map {f_i} x} \prod_{j \mathop \ne i} \map {f_j} x} } \map {f_{k + 1} } x\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^{k + 1} \paren {\map {D_x} {\map {f_i} x} \prod_{j \mathop \ne i} \map {f_j} x}\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \map {D_x} {\prod_{i \mathop = 1}^n \map {f_i} x} = \sum_{i \mathop = 1}^n \paren {\map {D_x} {\map {f_i} x} \prod_{j \mathop \ne i} \map {f_j} x}$ for all $n \in \N$
$\blacksquare$


Mnemonic device
$\paren {f g}' = f g' + f' g$
$\paren {f g h}' = f' g h + f g' h + f g h'$
and in general, making sure to exhaust all possible combinations, making sure that there are as many summands as there are functions being multiplied.


Also see
Derivative of Product of Real Function and Vector-Valued Function
Derivative of Vector Cross Product of Vector-Valued Functions
Derivative of Dot Product of Vector-Valued Functions




