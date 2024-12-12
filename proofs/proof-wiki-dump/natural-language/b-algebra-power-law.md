# 

Source: https://proofwiki.org/wiki/B-Algebra_Power_Law



Theorem
Let $\struct {X, \circ}$ be a $B$-algebra.
Let $n, m \in \N$ such that $n \ge m$.

Then:

$\forall x \in X: x^n \circ x^m = x^{n - m}$
where $x^k$ for $k \in \N$ denotes the $k$th power of the element $x$.


$B$-Algebra Power Law with Zero
$\forall x \in X: n, m \in \N_{>0} \implies x^m \circ x^n = 0 \circ x^{n - m}$


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\forall m \in \N_{> 0}, m \le n: \forall x \in X: x^n \circ x^m = x^{n - m}$


Basis for the Induction
$\map P 1$ is true, as this just says:

$x \circ x = 0$
which follows from the definition of the zeroth power in $B$-algebra.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\forall m \in \N_{> 0}, m \le k: \forall x \in X: x^k \circ x^m = x^{k - m}$

Then we need to show:

$\forall m \in \N_{> 0}, m \le k + 1: \forall x \in X: x^{k + 1} \circ x^m = x^{k + 1 - m}$


Induction Step
This is our induction step:

First we show that:

$\forall x \in X: x^{k + 1} \circ x = x^k$

Thus:














\(\ds x^{k + 1} \circ x\)

\(=\)







\(\ds \paren {x^k \circ \paren {0 \circ x} } \circ x\)





Definition of $B$-Algebra Power of Element














\(\ds \)

\(=\)







\(\ds x^k \circ \paren {x \circ \paren {0 \circ \paren {0 \circ x} } }\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds x^k \circ \paren {\paren {x \circ x} \circ 0}\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds x^k \circ \paren {x \circ x}\)





$B$-Algebra Axiom $(\text A 2)$














\(\ds \)

\(=\)







\(\ds x^k \circ 0\)





$B$-Algebra Axiom $(\text A 1)$




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x^{k + 1} \circ x\)

\(=\)







\(\ds x^k\)





$B$-Algebra Axiom $(\text A 2)$



By induction, it follows that:

$\forall n \in \N_{>0}: \forall x \in X: x^n \circ x = x^{n - 1}$

Now let $1 \le m \le k$.
We have:














\(\ds x^{k + 1} \circ x^{m + 1}\)

\(=\)







\(\ds x^{k + 1} \circ \paren {x^m \circ \paren {0 \circ x} }\)





Definition of $B$-Algebra Power of Element














\(\ds \)

\(=\)







\(\ds \paren {x^{k + 1} \circ x} \circ x^m\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds x^k \circ x^m\)





from $(1)$














\(\ds \)

\(=\)







\(\ds x^{k - m}\)





Induction Hypothesis



By induction, it follows that:

$\forall x \in X: \forall n, m \in \N: n \ge m \implies x^n \circ x^m = x^{n - m}$
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: Add a proof which uses the correspondence between B-Algebra and Group, and exploit the index laws for groups.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




