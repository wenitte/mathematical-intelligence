# 

Source: https://proofwiki.org/wiki/Injection_iff_Left_Inverse/Proof_1

Theorem
A mapping $f: S \to T, S \ne \O$ is an injection if and only if:

$\exists g: T \to S: g \circ f = I_S$
where $g$ is a mapping.

That is, if and only if $f$ has a left inverse.


Proof
Let:

$\exists g: T \to S: g \circ f = I_S$
From Identity Mapping is Injection, $I_S$ is injective, so $g \circ f$ is injective.
So from Injection if Composite is Injection, $f$ is an injection.
Note that the existence of such a $g$ requires that $S \ne \O$.
$\Box$

Now, assume $f$ is an injection.
We now define a mapping $g: T \to S$ as follows.
As $S \ne \O$, we choose $x_0 \in S$.
By definition of injection:

$f^{-1} {\restriction_{\Img f} } \to S$ is a mapping
so it is possible to define:

$\map g y = \begin{cases}
x_0: & y \in T \setminus \Img f \\
\map {f^{-1} } y: & y \in \Img f \end{cases}$


It does not matter what the elements of $T \setminus \Img f$ are.
Using the construction given, the equation $g \circ f = I_S$ holds whatever value (or values) we choose for $g \sqbrk {T \setminus \Img f}$.
The remaining elements of $T$ can be mapped arbitrarily, and will not affect the image of any $x \in S$ under the mapping $g \circ f$.

So, for all $x \in S$:

$\map {g \circ f} x = \map g {\map f x}$
is the unique element of $S$ which $f$ maps to $\map f x$.
This unique element is $x$.
Thus $g \circ f = I_S$.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Composition of Functions: Theorem $7$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $17$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.7$: Inverses: Proposition $\text{A}.7.1$




