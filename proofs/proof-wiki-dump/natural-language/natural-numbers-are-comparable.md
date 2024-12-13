# 

Source: https://proofwiki.org/wiki/Natural_Numbers_are_Comparable



Theorem
Let $\N$ be the natural numbers.
Let $m, n \in \N$.
Then $m$ and $n$ are comparable by the ordering relation $\le$.
That is, either:

$(1): \quad m \le n$
or:

$(2): \quad n \le m$
or possibly both.


Strong Result
Let $\N$ be the natural numbers.
Let $m, n \in \N$.
Then either:

$(1): \quad m + 1 \le n$
or:

$(2): \quad n \le m$


Proof
Let $\N$ be defined as the minimally inductive set $\omega$.
By definition of the ordering on minimally inductive set:

$m \le n \iff \begin {cases} m = n & \text {or} \\ m \in n & \end {cases}$
Thus it is sufficient to prove that exactly one of the following is the case:

$(1): \quad m \in n$
$(2): \quad m = n$
$(3): \quad n \in m$

The proof operates by induction:

For each $n \in \omega$, let $\map S n$ be the set of all $m \in \omega$ which are comparable with $n$.
Let $S$ be the set of all $n \in \N$ for which $\map S n = \omega$.
Thus the proof is equivalent to demonstrating that $S = \omega$.


Basis for the Induction
First consider $\map S 0$.
Clearly $0 \in \map S 0$ as $0 = 0$.
Let $m \in \map S 0$.
Then $m \notin 0$ as $0 = \O$.

So either:

$(1): \quad 0 = m$, in which case $0 \in m^+$ by definition of successor set
or:

$(2): \quad 0 \in m$, in which case, because $m \in m^+$ by definition of successor set, again $0 \in m^+$.

In all cases, $m \in \map S 0 \implies m^+ \in \map S 0$.
So $\map S 0 = \omega$ by induction.
This is the basis for the induction.


Induction Hypothesis
The induction hypothesis is that:

$\map S k = \omega$
for some $k \in \omega$.
It is now necessary to show that it follows that:

$\map S {k^+} = \omega$


Induction Step
This is the induction step:

Consider the set $\map S {k^+}$, given that $\map S k = \omega$.
From the basis for the induction, we have that $k^+ \in \map S 0$.
That is, $k^+$ is comparable with $0$.
So $0$ is comparable with $k^+$ and so $0 \in \map S {k^+}$.

Suppose $m \in \map S {k^+}$.
Then either:

$(1): \quad k^+ \in m$, in which case $k^+ \in m^+$
or:

$(2): \quad k^+ = m$, in which case the same applies: $k^+ \in m^+$
or:

$(3): \quad m \in k^+$.
In case $(3)$, either:

$(3 \text a): \quad m = k$, in which case $m^+ = k^+$
or:

$(3 \text b): \quad m \in k$.

Case $(3 \text b)$ is treated as follows.
We have that $m^+ \in \map S k$ by the induction hypothesis.
Therefore, either:

$(4 \text a): \quad k \in m^+$
or:

$(4 \text b): \quad k = m^+$
or:

$(4 \text c): \quad m^+ \in k$.
$(4 \text a)$ is not compatible with $m \in k$, because either:

$k \in m$
or

$k = m$
and so $k \subseteq m$ which contradicts Finite Ordinal is not Subset of one of its Elements.
Both $(4 \text b)$ and $(4 \text c)$ imply that $m^+ \in n^+$.
Hence $\map S {k^+} = \omega$.
It follows by the Principle of Finite Induction that $S = \omega$.
$\Box$

It then follows from Finite Ordinal is not Subset of one of its Elements that it is not possible for more than one of:

$(1): \quad m \in n$
$(2): \quad m = n$
$(3): \quad n \in m$
to be true at the same time.
$\blacksquare$





