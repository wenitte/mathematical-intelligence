# 

Source: https://proofwiki.org/wiki/Indexed_Summation_of_Sum_of_Mappings



Theorem
Let $\mathbb A$ be one of the standard number systems $\N, \Z, \Q, \R, \C$.
Let $a, b$ be integers.
Let $\closedint a b$ denote the integer interval between $a$ and $b$.
Let $f, g: \closedint a b \to \mathbb A$ be mappings.
Let $h = f + g$ be their pointwise sum.

Then we have the equality of indexed summations:

$\ds \sum_{i \mathop = a}^b \map h i = \sum_{i \mathop = a}^b \map f i + \sum_{i \mathop = a}^b \map g i$


Proof
The proof proceeds by induction on $b$.
For all $b \in \Z_{\ge 0}$, let $\map P b$ be the proposition:

$\ds \sum_{i \mathop = a}^b \map h i = \sum_{i \mathop = a}^b \map f i + \sum_{i \mathop = a}^b \map g i$


Basis for the Induction
Let $b < a$.
Then all indexed summations are zero.
Because $0 = 0 + 0$, the result follows.


Basis for the Induction
Let $b = a$.














\(\ds \sum_{i \mathop = a}^b \map h i\)

\(=\)







\(\ds \sum_{i \mathop = a}^a \map h i\)




















\(\ds \)

\(=\)







\(\ds \map h a\)




















\(\ds \)

\(=\)







\(\ds \map f a + \map g a\)





Definition of Pointwise Addition














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^a \map f i + \sum_{i \mathop = a}^a \map g i\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^b \map f i + \sum_{i \mathop = a}^b \map g i\)





as $a = b$



Thus $\map P a$ is seen to hold.
This is our basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge a$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \sum_{i \mathop = a}^k \map h i = \sum_{i \mathop = a}^k \map f i + \sum_{i \mathop = a}^k \map g i$

from which it is to be shown that:

$\ds \sum_{i \mathop = a}^{k + 1} \map h i = \sum_{i \mathop = a}^{k + 1} \map f i + \sum_{i \mathop = a}^{k + 1} \map g i$


Induction Step
We have:














\(\ds \sum_{i \mathop = a}^{k + 1} \map h i\)

\(=\)







\(\ds \sum_{i \mathop = a}^k \map h i + \map h {k + 1}\)





Definition of Indexed Summation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^k \map h i + \map f {k + 1} + \map g {k + 1}\)





Definition of Pointwise Addition














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^k \map f i + \sum_{i \mathop = a}^k \map g i + \map f {k + 1} + \map g {k + 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^k \map f i + \map f {k + 1} + \sum_{i \mathop = a}^k \map g i + \map g {k + 1}\)





Commutative Law of Addition














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^{k + 1} \map f i + \sum_{i \mathop = a}^{k + 1} \map g i\)





Definition of Indexed Summation



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Also see
Indexed Summation of Multiple of Mapping
Summation of Sum of Mappings on Finite Set




