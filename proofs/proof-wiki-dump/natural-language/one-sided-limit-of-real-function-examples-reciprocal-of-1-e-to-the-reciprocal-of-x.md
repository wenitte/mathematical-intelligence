# 

Source: https://proofwiki.org/wiki/One-Sided_Limit_of_Real_Function/Examples/Reciprocal_of_1_%2B_e_to_the_Reciprocal_of_x

Examples of One-Sided Limits of Real Functions
Let $f: \R \to \R$ be the real function defined as:

$\map f x = \dfrac 1 {1 + e^{1 / x} }$
Then:














\(\ds \lim_{x \mathop \to 0^+} \map f x\)

\(=\)







\(\ds 0\)




















\(\ds \lim_{x \mathop \to 0^-} \map f x\)

\(=\)







\(\ds 1\)











Proof
  
We have:

$\dfrac 1 x \to +\infty$ as $x \to 0^+$
and so:

$1 + e^{1/x} \to +\infty$ as $x \to 0^+$
Thus:

$\dfrac 1 {1 + e^{1 / x} } \to 0$ as $x \to 0^+$
and remains positive.
$\Box$

Then we have:

$\dfrac 1 x \to -\infty$ as $x \to 0^-$
and so:

$-e^{1/x} \to 0$ as $x \to 0^-$
Thus:

$\dfrac 1 {1 + e^{1 / x} } \to 1$ as $x \to 0^-$
and remains less than $1$.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.1$ Limits and Continuity: Example $\text C$




