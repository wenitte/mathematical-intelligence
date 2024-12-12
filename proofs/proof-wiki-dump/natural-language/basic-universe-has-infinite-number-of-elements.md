# 

Source: https://proofwiki.org/wiki/Basic_Universe_has_Infinite_Number_of_Elements



Theorem
Let $V$ be a basic universe.
Then $V$ has an infinite number of elements.


Proof
Let $a_n$ be the class defined as:

$\forall n \in \N: a_n = \begin{cases} \O & : n = 0 \\ \set {a_{n - 1} } & : n > 0 \end {cases}$
It is shown by the Principle of Mathematical Induction that $a_n$ is a set for all $n \in \N$.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$a_n$ is a set.


Basis for the Induction
$\map P 0$ is the case:

$a_0$ is a set.
But $a_0 = \O$ by definition.
By the Axiom of the Empty Set:

$\O$ is a set.
$\O \in V$
Thus $\map P 0$ is seen to hold.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$a_k$ is a set.

from which it is to be shown that:

$a_{k + 1}$ is a set.


Induction Step
This is the induction step:

By the induction hypothesis we have that $a_k$ is a set.
From Singleton Class of Set is Set, its singleton class $\set {a_k}$ is also a set.
But by definition:

$a_{k + 1} = \set {a_k}$
Hence $a_{k + 1}$ has been shown to be a set.

So $\map P k \implies \map P {k + 1}$ and so by the Principle of Mathematical Induction, $a_n$ is a set for all $n \in \N$.
$\Box$

It is now proved that $a_m \ne a_n$ when $m \ne n$.
Without loss of generality, let $m > n$.
Aiming for a contradiction, suppose $a_n = a_{m + n}$ for some $m > 0, n \ge 0$.
Let $n = 0$.
Then we would have:

$a_m = \O$
But as $m > 0$ we have that $a_m = \set {a_{m - 1} }$ for some $m - 1 \in \N$.
But $\O \ne \set x$ for any set $x$.
Now suppose $n > 0$.
Then by Singleton Classes are Equal iff Sets are Equal:

$a_{n - 1} = a_{n - 1 + m}$
We can repeat this step a total of $n$ times to reach:

$a_0 = a_{0 + m}$
from which again it follows that $a_m = \O$ for some $m > 0$.
This has been shown to be false for all $m$.

Hence it cannot be the case that $a_n = a_{m + n}$ for some $m > 0, n \ge 0$.
Thus there exists an injection from $\N$ to $\set {a_n: n \in \N}$.
That is, $\set {a_n: n \in \N}$ is countably infinite by definition.

By definition of basic universe, $V$ is a universal class.
By definition of universal class, every set is an element of $V$.
Hence:

$\forall n \in \N: a_n \in V$
and it follows that $V$ is infinite.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 4$ The pairing axiom: Discussion




