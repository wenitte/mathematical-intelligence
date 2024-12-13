# 

Source: https://proofwiki.org/wiki/Power_of_Conjugate_equals_Conjugate_of_Power



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $x, y \in G$ such that $\exists a \in G: x \circ a = a \circ y$.
That is, let $x$ and $y$ be conjugate.

Then:

$\forall n \in \Z: y^n = \paren {a^{-1} \circ x \circ a}^n = a^{-1} \circ x^n \circ a$
It follows directly that:

$\exists b \in G: \forall n \in \Z: y^n = b \circ x^n \circ b^{-1}$

In particular:

$y^{-1} = \paren {a^{-1} \circ x \circ a}^{-1} = a^{-1} \circ x^{-1} \circ a$


Proof
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition $y^n = a^{-1} \circ x^n \circ a$.

$\map P 0$ is true, as this just says $e =  a^{-1} \circ e \circ a$.


Basis for the Induction
$\map P 1$ is the case $y = a^{-1} \circ x \circ a$, which is how conjugacy is defined for $x$ and $y$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$y^k = a^{-1} \circ x^k \circ a$

Then we need to show:

$y^{k + 1} = a^{-1} \circ x^{k + 1} \circ a$


Induction Step
This is our induction step:














\(\ds y^{k + 1}\)

\(=\)







\(\ds \paren {a^{-1} \circ x \circ a}^{k + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {a^{-1} \circ x \circ a}^k \circ \paren {a^{-1} \circ x \circ a}\)




















\(\ds \)

\(=\)







\(\ds \paren {a^{-1} \circ x^k \circ a} \circ \paren {a^{-1} \circ x \circ a}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds a^{-1} \circ x^k \circ x \circ a\)




















\(\ds \)

\(=\)







\(\ds a^{-1} \circ x^{k + 1} \circ a\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: y^n = a^{-1} \circ x^n \circ a$

Now we need to show that if $\map P n$ holds, then $\map P {-n}$ holds.
That is:

$y^{-n} = a^{-1} \circ x^{-n} \circ a$

Let $n \in \N$.
Then:














\(\ds y^{-n}\)

\(=\)







\(\ds \paren {a^{-1} \circ x \circ a}^{-n}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {a^{-1} \circ x \circ a}^n}^{-1}\)





Index Laws for Monoids: Negative Index














\(\ds \)

\(=\)







\(\ds \paren {a^{-1} \circ x^n \circ a}^{-1}\)




















\(\ds \)

\(=\)







\(\ds a^{-1} \circ \paren {x^n}^{-1} \circ \paren {a^{-1} }^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds a^{-1} \circ x^{-n} \circ a\)










Thus $\map P n$ has been shown to hold for all $n \in \Z$.
Hence the result.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.6$. Normal subgroups: Example $124 \ \text{(ii)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $12$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Exercise $7$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Proposition $10.18$




