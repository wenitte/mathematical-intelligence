# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Factorial



Theorem
The following definitions of the concept of Factorial are equivalent:

Definition 1
The factorial of $n$ is defined inductively as:

$n! = \begin {cases} 1 & : n = 0 \\ n \paren {n - 1}! & : n > 0 \end {cases}$
Definition 2
The factorial of $n$ is defined as:














\(\ds n!\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n k\)




















\(\ds \)

\(=\)







\(\ds 1 \times 2 \times \cdots \times \paren {n - 1} \times n\)









where $\ds \prod$ denotes continued product.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\begin {cases} 1 & : n = 0 \\ n \paren {n - 1}! & : n > 0 \end {cases} \equiv \ds \prod_{k \mathop = 1}^n k$


Basis for the Induction
$\map P 0$ is the case:

$\ds \prod_{k \mathop = 1}^0 k = 1$
which holds by definition of vacuous product.
Thus $\map P 0$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 0$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\begin {cases} 1 & : r = 0 \\ r \paren {r - 1}! & : r > 0 \end {cases} \equiv \ds \prod_{k \mathop = 1}^r k$

from which it is to be shown that:

$\begin {cases} 1 & : r = 0 \\ \paren {r + 1} r! & : r > 0 \end {cases} \equiv \ds \prod_{k \mathop = 1}^{r + 1} k$


Induction Step
This is the induction step:















\(\ds \prod_{k \mathop = 1}^{r + 1} k\)

\(=\)







\(\ds \paren {r + 1} \prod_{k \mathop = 1}^r k\)




















\(\ds \)

\(=\)







\(\ds \paren {r + 1} r!\)





Induction Hypothesis



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\begin {cases} 1 & : n = 0 \\ n \paren {n - 1}! & : n > 0 \end{cases} \equiv \ds \prod_{k \mathop = 1}^n k$
$\blacksquare$





