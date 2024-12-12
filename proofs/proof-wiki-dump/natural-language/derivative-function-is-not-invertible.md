# 

Source: https://proofwiki.org/wiki/Derivative_Function_is_not_Invertible

Theorem
Let $\Bbb I = \closedint a b$ be a closed interval on the set of real numbers $\R$ such that $a < b$.
Let $A$ denote the set of all continuous real functions $f: \Bbb I \to \R$.
Let $B \subseteq A$ denote the set of all functions differentiable on $\Bbb I$ whose derivative is continuous on $\Bbb I$.

Let $d: B \to A$ denote the mapping defined as:

$\forall \map f x \in B: \map d f = \map {D_x} f$
where $D_x$ denotes the derivative of $f$ with respect to $x$.

Then $d$ is not an invertible mapping.


Proof
By definition, $d$ is invertible if and only if $d$ is a bijection.
It is sufficient to demonstrate that $d$ is not an injection.
Hence a fortiori $d$ is shown to not be a bijection.

Consider a differentiable function $f \in B$.
Then consider the function $g \in B$ defined as:

$\forall x \in \Bbb I: \map g x = \map f x + C$
where $C \in \R$ is a constant.
Then we have that:














\(\ds \map {D_x} g\)

\(=\)







\(\ds \map {D_x} f\)





Derivative of Function plus Constant








\(\ds \leadsto \ \ \)





\(\ds \map d f\)

\(=\)







\(\ds \map d g\)





Definition of $d$



demonstrating that $d$ is not an injection.
The result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 9$: Inverse Functions, Extensions, and Restrictions: Exercise $1$




