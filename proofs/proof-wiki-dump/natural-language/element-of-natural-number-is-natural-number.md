# 

Source: https://proofwiki.org/wiki/Element_of_Natural_Number_is_Natural_Number



Theorem
Let $n$ be a natural number.
Let $m \in n$.
Then $m$ is also a natural number.


Proof
The proof proceeds by induction.
For all $n \in \N$, let $\map P n$ be the proposition:

for all $m \in n$: $m$ is a natural number.


Basis for the Induction
$\map P 0$ is the case:

for all $m \in 0$: $m$ is a natural number.
This is true vacuously, as $\O$ has no elements by definition of empty class.
Thus $\map P 0$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k^+}$ is true.

So this is the induction hypothesis:

for all $m \in k$: $m$ is a natural number.

from which it is to be shown that:

for all $m \in k^+$: $m$ is a natural number.


Induction Step
This is the induction step:
Let $m \in k^+$.
Then either:

$m = k$
or: 

$m \in k$
In the first case, $m$ is the natural number $k$.
In the second case, it follows by the induction hypothesis that $m$ is a natural number.

In both cases $m$ is a natural number.

So $\map P k \implies \map P {k^+}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: \forall m \in n$: $m$ is a natural number.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 3$ Derivation of the Peano postulates and other results: Theorem $3.4$




