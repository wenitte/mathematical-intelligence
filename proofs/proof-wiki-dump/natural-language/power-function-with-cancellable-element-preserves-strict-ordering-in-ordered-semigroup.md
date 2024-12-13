# 

Source: https://proofwiki.org/wiki/Power_Function_with_Cancellable_Element_Preserves_Strict_Ordering_in_Ordered_Semigroup



Theorem
Let $\struct {S, \circ, \preceq}$ be an ordered semigroup.
Let $x, y \in S$ be such that:

$(1): \quad x \prec y$
$(2): \quad$ either $X$ or $y$ (or both) is cancellable for $\circ$.
Let $n \in \N_{>0}$ be a strictly positive integer.

Then:

$x^n \prec y^n$
where $x^n$ is the $n$th power of $x$.


Proof
Without loss of generality, suppose $x$ is cancellable for $\circ$.

The proof proceeds by induction.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$x \prec y \implies x^n \prec y^n$

$\map P 1$ is the case:

$x \prec y \implies x \prec y$
which is trivially true.

Thus $\map P 1$ is seen to hold.


Basis for the Induction
We have:














\(\ds x\)

\(\prec\)







\(\ds y\)














\(\ds \implies \ \ \)





\(\ds x \circ x\)

\(\prec\)







\(\ds x \circ y\)





Strict Ordering Preserved under Product with Cancellable Element



and:














\(\ds x\)

\(\preceq\)







\(\ds y\)














\(\ds \implies \ \ \)





\(\ds x \circ y\)

\(\preceq\)







\(\ds y \circ y\)





Ordered Semigroup Axiom $\text {OS} 2$: Compatibility of $\preceq$ with $\circ$




Hence:

$x \prec y \implies x \circ x \prec y \circ y$
That is:

$x \prec y \implies x^2 \prec y^2$

Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$x \preceq y \implies x^k \prec y^k$
from which it is to be shown that:

$x \preceq y \implies x^{k + 1} \prec y^{k + 1}$


Induction Step
This is the induction step:














\(\ds x\)

\(\prec\)







\(\ds y\)














\(\ds \implies \ \ \)





\(\ds x \circ x^k\)

\(\prec\)







\(\ds x \circ y^k\)





Strict Ordering Preserved under Product with Cancellable Element and Induction Hypothesis



and:














\(\ds x\)

\(\prec\)







\(\ds y\)














\(\ds \implies \ \ \)





\(\ds x \circ y^k\)

\(\preceq\)







\(\ds y \circ y^k\)





Ordered Semigroup Axiom $\text {OS} 2$: Compatibility of $\preceq$ with $\circ$




Hence:

$x \prec y \implies x \circ x^k \prec y \circ y^k$
That is:

$x \prec y \implies x^{k + 1} \prec y^{k + 1}$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: x \prec y \implies x^n \prec y^n$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.4$




