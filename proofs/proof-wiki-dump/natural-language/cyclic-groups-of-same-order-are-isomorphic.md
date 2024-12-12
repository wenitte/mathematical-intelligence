# 

Source: https://proofwiki.org/wiki/Cyclic_Groups_of_Same_Order_are_Isomorphic

Theorem
Two cyclic groups of the same order are isomorphic to each other.


Proof
Let $G_1$ and $G_2$ be cyclic groups, both of finite order $k$.
Let $G_1 = \gen a, G_2 = \gen b$.
Then, by the definition of a cyclic group:

$\order a = \order b = k$
Also, by definition:

$G_1 = \set {a^0, a^1, \ldots, a^{k - 1} }$
and:

$G_2 = \set {b^0, b^1, \ldots, b^{k - 1} }$

Let us set up the obvious bijection:

$\phi: G_1 \to G_2: \map \phi {a^n} = b^n$
The next task is to show that $\phi$ is an isomorphism.

Note that $\map \phi {a^n} = b^n$ holds for all $n \in \Z$, not just where $0 \le n < k$, as follows:
Let $n \in \Z: n = q k + r, 0 \le r < k$, by the Division Theorem.
Then, by Element to Power of Remainder:

$a^n = a^r, b^n = b^r$
Thus:

$\map \phi {a^n} = \map \phi {a^r} = b^r = b^n$

Now let $x, y \in G_1$.
Since $G_1 = \gen a$, it follows that:

$\exists s, t \in \Z: x = a^s, y = a^t$
Thus:














\(\ds \map \phi {x y}\)

\(=\)







\(\ds \map \phi {a^s a^t}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {a^{s + t} }\)




















\(\ds \)

\(=\)







\(\ds b^{s + t}\)




















\(\ds \)

\(=\)







\(\ds b^s b^t\)




















\(\ds \)

\(=\)







\(\ds \map \phi {a^s} \map \phi {a^t}\)




















\(\ds \)

\(=\)







\(\ds \map \phi x \map \phi y\)









So $\phi$ is a homomorphism.
As $\phi$ is bijective, $\phi$ is an isomorphism from $G_1$ to $G_2$.
Thus $G_1 \cong G_2$ and the result is proved.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 9$: Cyclic Groups
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.7$: Theorem $9$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts: Exercise $2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 46$. Isomorphic groups: Worked Example
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Example $4.8$




