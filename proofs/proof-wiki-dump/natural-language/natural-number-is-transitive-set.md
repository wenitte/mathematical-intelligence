# 

Source: https://proofwiki.org/wiki/Natural_Number_is_Transitive_Set



Theorem
Let $n$ be a natural number.
Then $n$ is a transitive set.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$n$ is a transitive set.


Basis for the Induction
From Empty Class is Transitive, we have that $\O$ is a transitive class.
By the Axiom of the Empty Set, $\O$ is a set.
Hence $\O$ is a transitive set.
Thus $\map P 0$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$k$ is a transitive set.

from which it is to be shown that:

$k^+$ is a transitive set.


Induction Step
This is the induction step:
Let $k$ be a transitive set.
Then from Successor Set of Transitive Set is Transitive:

$k^+$ is a transitive set.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: n$ is a transitive set.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 3$ Derivation of the Peano postulates and other results: Theorem $3.1$




