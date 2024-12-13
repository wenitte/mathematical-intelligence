# 

Source: https://proofwiki.org/wiki/Repeated_Composition_of_Injection_is_Injection



Theorem
Let $S$ be a set.
Let $f: S \to S$ be an injection.
Let the sequence of mappings:

$f^0, f^1, f^2, \ldots, f^n, \ldots$
be defined as:

$\forall n \in \N: \map {f^n} x = \begin {cases}
x & : n = 0 \\
\map f x & : n = 1 \\
\map f {\map {f^{n - 1} } x} & : n > 1
\end{cases}$
Then for all $n \in \N$, $f^n$ is an injection.


Proof
Proof by induction:
For all $n \in \N_{\ge 0}$, let $\map P n$ be the proposition:

$f^n$ is an injection.

$\map P 0$ is true, as this is the case Identity Mapping is Injection.
$\map P 1$ is true, as this is the assertion that $f$ is an injection.


Basis for the Induction
$\map P 2$ is the assertion that $f^2$ is an injection.














\(\ds \map {f^2} x\)

\(=\)







\(\ds \map f {\map f x}\)





Definition of $f^n$














\(\ds \)

\(=\)







\(\ds \map {\paren {f \circ f} } x\)





Definition of Composition of Mappings



But $f \circ f$ is an injection by Composite of Injections is Injection.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$f^k$ is an injection.

Then we need to show:

$f^{k + 1}$ is an injection.


Induction Step
This is our induction step:














\(\ds \map {f^{k + 1} } x\)

\(=\)







\(\ds \map f {\map {f^k} x}\)





Definition of $f^n$














\(\ds \)

\(=\)







\(\ds \map {\paren {f \circ f^k} } x\)









By the induction hypothesis $f^k$ is an injection.
By Composite of Injections is Injection it follows that $f^{k + 1}$ is an injection.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore for all $n \in \N$:

$f^n$ is an injection.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 7$: Relations: Exercise $3$




