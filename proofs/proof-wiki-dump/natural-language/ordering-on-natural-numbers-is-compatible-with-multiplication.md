# 

Source: https://proofwiki.org/wiki/Ordering_on_Natural_Numbers_is_Compatible_with_Multiplication



Theorem
Let $m, n, k \in \N$ where $\N$ is the set of natural numbers.
Let $k \ne 0$.

Then:

$m < n \iff m \times k < n \times k$


Corollary
Let $a, b, c, d \in \N$ where $\N$ is the set of natural numbers.
Then:

$a > b, c > d \implies a c > b d$


Proof
Proof by induction:
First we note that if $k = 0$ then $m \times k = 0 = n \times k$ whatever $m$ and $n$ are, and the proposition clearly does not hold.

So, for all $k \in \N \setminus \set 0$, let $\map P k$ be the proposition:

$m < n \iff m \times k < n \times k$

From Identity Element of Natural Number Multiplication is One:

$m \times 1 = m < n = n \times 1$
and so $\map P 1$ is true.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P j$ is true, where $j \ge 1$, then it logically follows that $\map P {j^+}$ is true.

So this is our induction hypothesis:

$m < n \iff m \times j < n \times j$

Then we need to show:

$m < n \iff m \times j^+ < n \times j^+$


Induction Step
This is our induction step:

Let $m < n$.
Then:














\(\ds m\)

\(<\)







\(\ds n\)














\(\ds \leadstoandfrom \ \ \)





\(\ds m \times j\)

\(<\)







\(\ds n \times j\)





Induction Hypothesis








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {m \times j} + m\)

\(<\)







\(\ds \paren {n \times j} + m\)





Ordering on Natural Numbers is Compatible with Addition




Similarly:

$m < n \iff \paren {m \times j} + n < \paren {n \times j} + n$
But then from Ordering on Natural Numbers is Compatible with Addition, we also have:

$m < n \iff \paren {m \times j} + m < \paren {m \times j} + n$
So from Natural Number Ordering is Transitive, we have:

$m < n \iff \paren {m \times j} + m < \paren {n \times j} + n$

This gives:














\(\ds m\)

\(<\)







\(\ds n\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {m \times j} + m\)

\(<\)







\(\ds \paren {n \times j} + n\)





from above








\(\ds \leadstoandfrom \ \ \)





\(\ds m \times j^+\)

\(<\)







\(\ds n \times j^+\)





Definition of Natural Number Multiplication




So $\map P j \implies \map P {j^+}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m, n, k \in \N, k \ne 0: m \times n \iff m \times k < n \times k$
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 4$: The natural numbers
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.13: \ 2^\circ$
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 4$: Number systems $\text{I}$: Peano's Axioms




