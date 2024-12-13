# 

Source: https://proofwiki.org/wiki/Power_of_Identity_is_Identity



Theorem
Let $\struct {M, \circ}$ be a monoid whose identity element is $e$.

Then:

$\forall n \in \Z: e^n = e$


Proof
Since $e$ is invertible, the power of $e$ is defined for all $n \in \Z$.

We prove the case $n \ge 0$ by induction.


Basis for the Induction
By definition of power of monoid element:

$e^0 = e$
so the theorem holds for $n = 0$. 
This is our basis for the induction.


Induction Hypothesis
Our induction hypothesis is that the theorem is true for $n = k$:

$e^k = e$


Induction Step
In the induction step, we prove that the theorem is true for $n = k + 1$.
We have:














\(\ds e^{k + 1}\)

\(=\)







\(\ds e^k \circ e\)





Definition of Power of Element of Monoid














\(\ds \)

\(=\)







\(\ds e^k\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds e\)





Induction Hypothesis




Therefore, by Principle of Mathematical Induction:

$\forall n \in \Z_{\ge 0} : e^n = e$
$\Box$

Now we prove the case $n < 0$.
We have:














\(\ds e^n\)

\(=\)







\(\ds \paren {e^{-n} }^{-1}\)





Definition of Power of Element of Monoid














\(\ds \)

\(=\)







\(\ds e^{-1}\)





since $-n > 0$














\(\ds \)

\(=\)







\(\ds e\)





Inverse of Identity Element is Itself




Thus:

$\forall n \in \Z : e^n = e$
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 2$: The Axioms of Group Theory: $(1.8)$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.8 \ (4)$




