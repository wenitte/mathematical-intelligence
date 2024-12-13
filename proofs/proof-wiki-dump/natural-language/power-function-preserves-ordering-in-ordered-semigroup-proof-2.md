# 

Source: https://proofwiki.org/wiki/Power_Function_Preserves_Ordering_in_Ordered_Semigroup/Proof_2



Theorem
Let $\struct {S, \circ, \preceq}$ be an ordered semigroup.
Let $x, y \in S$ such that $x \preceq y$.
Let $n \in \N_{>0}$ be a strictly positive integer.

Then:

$x^n \preceq y^n$
where $x^n$ is the $n$th power of $x$.


Proof
The proof proceeds by induction.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$x \preceq y \implies x^n \preceq y^n$

$\map P 1$ is the case:

$x \preceq y \implies x \preceq y$
which is trivially true.

Thus $\map P 1$ is seen to hold.


Basis for the Induction
We have:














\(\ds x\)

\(\preceq\)







\(\ds y\)














\(\ds \implies \ \ \)





\(\ds x \circ x\)

\(\preceq\)







\(\ds x \circ y\)





Ordered Semigroup Axiom $\text {OS} 2$: Compatibility of $\preceq$ with $\circ$



and:














\(\ds x\)

\(\preceq\)







\(\ds y\)














\(\ds \implies \ \ \)





\(\ds x \circ y\)

\(\preceq\)







\(\ds y \circ y\)





Ordered Semigroup Axiom $\text {OS} 2$: Compatibility of $\preceq$ with $\circ$




Hence as $\preceq$ is an ordering and hence transitive:

$x \preceq y \implies x \circ x \preceq y \circ y$
That is:

$x \preceq y \implies x^2 \preceq y^2$

Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$x \preceq y \implies x^k \preceq y^k$
from which it is to be shown that:

$x \preceq y \implies x^{k + 1} \preceq y^{k + 1}$


Induction Step
This is the induction step:














\(\ds x\)

\(\preceq\)







\(\ds y\)














\(\ds \implies \ \ \)





\(\ds x \circ x^k\)

\(\preceq\)







\(\ds x \circ y^k\)





Ordered Semigroup Axiom $\text {OS} 2$: Compatibility of $\preceq$ with $\circ$ and Induction Hypothesis



and:














\(\ds x\)

\(\preceq\)







\(\ds y\)














\(\ds \implies \ \ \)





\(\ds x \circ y^k\)

\(\preceq\)







\(\ds y \circ y^k\)





Ordered Semigroup Axiom $\text {OS} 2$: Compatibility of $\preceq$ with $\circ$




Hence as $\preceq$ is an ordering and hence transitive:

$x \preceq y \implies x \circ x^k \preceq y \circ y^k$
That is:

$x \preceq y \implies x^{k + 1} \preceq y^{k + 1}$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: x \preceq y \implies x^n \preceq y^n$
$\blacksquare$





