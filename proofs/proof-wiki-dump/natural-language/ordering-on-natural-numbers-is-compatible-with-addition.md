# 

Source: https://proofwiki.org/wiki/Ordering_on_Natural_Numbers_is_Compatible_with_Addition



Theorem
Let $m, n, k \in \N$ where $\N$ is the set of natural numbers.
Then:

$m < n \iff m + k < n + k$


Corollary
Let $a, b, c, d \in \N$ where $\N$ is the set of natural numbers.
Then:

$a > b, c > d \implies a + c > b + d$


Proof
Proof by induction:
For all $k \in \N$, let $\map P k$ be the proposition:

$m < n \iff m + k < n + k$

$\map P 0$ is true, as this just says $m + 0 = m < n = n + 0$.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P j$ is true, where $j \ge 0$, then it logically follows that $\map P {j^+}$ is true.

So this is our induction hypothesis:

$m < n \iff m + j < n + j$

Then we need to show:

$m < n \iff m + j^+ < n + j^+$


Induction Step
This is our induction step:

Let $m < n$.
Then:














\(\ds m\)

\(<\)







\(\ds n\)














\(\ds \leadstoandfrom \ \ \)





\(\ds m\)

\(\subsetneq\)







\(\ds n\)





Element of Finite Ordinal iff Subset‎








\(\ds \leadstoandfrom \ \ \)





\(\ds m^+\)

\(\subset\)







\(\ds n\)





Definition of Successor Set








\(\ds \leadstoandfrom \ \ \)





\(\ds m^+\)

\(\subsetneq\)







\(\ds n^+\)





Definition of Successor Set




\(\text {(1)}: \quad\)



\(\ds \leadstoandfrom \ \ \)





\(\ds m^+\)

\(<\)







\(\ds n^+\)





Element of Finite Ordinal iff Subset‎




This gives:














\(\ds m + j\)

\(<\)







\(\ds n + j\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {m + j}^+\)

\(<\)







\(\ds \paren {n + j}^+\)





from $(1)$ above








\(\ds \leadstoandfrom \ \ \)





\(\ds m + j^+\)

\(<\)







\(\ds n + j^+\)





Definition of Addition in Minimally Inductive Set



So $\map P j \implies \map P {j^+}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m, n, k \in \N: m < n \iff m + k < n + k$
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 4$: The natural numbers
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 4$: Number systems $\text{I}$: Peano's Axioms




