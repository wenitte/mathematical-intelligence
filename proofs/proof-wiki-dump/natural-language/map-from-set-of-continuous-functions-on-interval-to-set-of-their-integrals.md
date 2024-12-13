# 

Source: https://proofwiki.org/wiki/Map_from_Set_of_Continuous_Functions_on_Interval_to_Set_of_their_Integrals

Theorem
Let $\Bbb I = \closedint a b$ be a closed interval on the set of real numbers $\R$ such that $a < b$.
Let $A$ denote the set of all continuous real functions $f: \Bbb I \to \R$.
Let $B \subseteq A$ denote the set of all functions differentiable on $\Bbb I$ whose derivative is continuous on $\Bbb I$.
Let $C \subseteq B$ denote the subset of $B$ which consists of all elements of $B$ such that $\map f a = 0$.

For each $f \in A$, let $h$ denote the mapping defined as:

$\map {\paren {\map h f} } x = \ds \int_a^x \map f t \rd t$

Then:

$h: A \to C$


Proof
Let $f \in A$ be an arbitrary continuous real function $f: \Bbb I \to \R$.
From Continuous Real Function is Darboux Integrable, $\map {\paren {\map h f} } x$ exists and is continuous on $\Bbb I$.

Let $x = a$.
Then we have:














\(\ds \map {\paren {\map h f} } x\)

\(=\)







\(\ds \int_a^x \map f t \rd t\)





Definition of $h$








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {\map h f} } a\)

\(=\)







\(\ds \int_a^a \map f t \rd t\)




















\(\ds \)

\(=\)







\(\ds 0\)





Definite Integral on Zero Interval



Thus $h$ is a continuous real function on $\Bbb I$ such that $\map h a = 0$.

Further, by definition, $\ds \int \map f t \rd t$ is the primitive of $f$, and exists by dint of the above.
It follows from the Fundamental Theorem of Calculus that $f = \map {\dfrac \d {\d x} } h$ and so $\map h x$ is functions differentiable on $\Bbb I$.
Thus it is shown that $C \subseteq B \subseteq A$ and the result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 9$: Inverse Functions, Extensions, and Restrictions: Exercise $1$




