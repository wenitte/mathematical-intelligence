# 

Source: https://proofwiki.org/wiki/Power_of_Element_in_Subgroup



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $\struct {H, \circ}$ be a subgroup of $\struct {G, \circ}$.

Let $x \in H$.
Then:

$\forall n \in \Z: x^n \in H$


Proof
Proof by induction:
For all $n \in \N^*$, let $\map P n$ be the compound proposition:

$x^n \in H \text{ and } x^{-n} \in H$.

$\map P 0$ is true, as this just says $x^0 \in H$.
By Powers of Group Elements, $x^0 = e$.
This follows by Identity of Subgroup‎.


Basis for the Induction
$\map P 1$ is true, as this just says $x^1 = x \in H$.
By the Two-Step Subgroup Test, we also have that $x^{-1} \in H$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$x^k \in H \text{ and } x^{-k} \in H$.

Then we need to show:

$x^{k + 1} \in H \text{ and } x^{-\paren {k + 1} } \in H$.


Induction Step
This is our induction step:

By Powers of Group Elements, $x^{k + 1} = x \circ x^k$.
By the base case, $x \in H$.
By the induction hypothesis, $x^k \in H$.
By the closure axiom, $x \circ x^k \in H$.
By the Two-Step Subgroup Test, it follows that $x^{-\paren {k + 1} } \in H$.
So $\map P k \implies \map P {k + 1}$.
The result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: x^n \in H$
$\forall n \in \N: x^{-n} \in H$
Hence the result.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.2$. Subgroups: Example $89$




