# 

Source: https://proofwiki.org/wiki/Power_Function_is_Strictly_Increasing_over_Positive_Reals/Natural_Exponent



Theorem
Let $n \in \Z_{>0}$ be a strictly positive integer.
Let $f: \R_{>0} \to \R$ be the real function defined as:

$\map f x = x^n$
where $x^n$ denotes $x$ to the power of $n$.

Then $f$ is strictly increasing.


Proof
Proof by induction on $n$:
Let $x, y \in \R_{>0}$ be strictly positive real numbers.
For all $n \in \Z_{>0}$, let $P \left({n}\right)$ be the proposition:

$x < y \implies x^n < y^n$


Basis for the Induction
$\map P 1$ is true, as this just says:














\(\ds x^1\)

\(=\)







\(\ds x\)





Definition of Integer Power














\(\ds \)

\(<\)







\(\ds y\)





by hypothesis














\(\ds \)

\(=\)







\(\ds y^1\)





Definition of Integer Power




This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$x < y \implies x^k < y^k$

Then we need to show:

$x < y \implies x^{k + 1} < y^{k + 1}$


Induction Step
This is our induction step:
First:














\(\ds x\)

\(<\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x^k\)

\(<\)







\(\ds y^k\)





Induction Hypothesis








\(\ds \leadsto \ \ \)





\(\ds x^{k+1}\)

\(<\)







\(\ds x \times y^k\)





Multiply both sides by $x > 0$














\(\ds \)

\(<\)







\(\ds y \times y^k\)





Multiply both sides of $x < y$ by $y^k > 0$














\(\ds \)

\(=\)







\(\ds y^{k+1}\)





Definition of integer power




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>0}: x < y \implies x^n < y^n$
$\blacksquare$





