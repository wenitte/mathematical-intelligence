# 

Source: https://proofwiki.org/wiki/Conditions_for_Uniqueness_of_Left_Inverse_Mapping



Theorem
Let $S$ and $T$ be sets such that $S \ne \O$.
Let $f: S \to T$ be an injection.

Then a left inverse mapping of $f$ is in general not unique.

Uniqueness occurs under either of two circumstances:

$(1): \quad S$ is a singleton
$(2): \quad f$ is a bijection.


Proof
If $f$ is a bijection, then by definition $f$ is also a surjection.
Then:

$T \setminus \Img f = \O$
and we have that $g = f^{-1}$.
As $f^{-1}$ is uniquely defined $g$ is itself unique.
$\Box$

If $S$ is a singleton then there can only be one mapping $g: T \to S$:

$\forall t \in T: \map g t = s$
$\Box$

If $f$ is not a bijection, then as it is an injection it can not be a surjection.
Then:

$T \setminus \Img f \ne \O$
Let $t \in T \setminus \Img f$.
We can now choose any $x_0 \in S$ such that $\map g t = x_0$.
If $S$ is not a singleton, such an $x_0$ is not unique.
Hence the result.
$\blacksquare$


Warning
In some expositions of set theory, the case where $S$ is a singleton is not mentioned.
This should be considered a mistake.
Such sources include:

1967: George McCarty: Topology: An Introduction with Application to Topological Groups
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability


Examples
Arbitrary Example
Let $S = \set {0, 1}$.
Let $T = \set {a, b, c}$.
Let $f: S \to T$ be defined as:

$\forall x \in S: \map f x = \begin {cases} a & : x = 0 \\ b & : x = 1 \end {cases}$
Then $f$ has $2$ distinct left inverses.


Also see
Surjection iff Right Inverse/Non-Uniqueness


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.4$: Theorem $6$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Composition of Functions
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings: Exercise $6$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.7$: Inverses: Proposition $\text{A}.7.1$




