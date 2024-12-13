# 

Source: https://proofwiki.org/wiki/Quotient_of_Group_by_Center_Cyclic_implies_Abelian

Theorem
Let $G$ be a group.
Let $\map Z G$ be the center of $G$.
Let $G / \map Z G$ be the quotient group of $G$ by $\map Z G$.
Let $G / \map Z G$ be cyclic.

Then $G$ is abelian, so $G = \map Z G$.
That is, the group $G / \map Z G$ cannot be a cyclic group which is non-trivial.


Proof
Suppose $G / \map Z G$ is cyclic.
Then by definition:

$\exists \tau \in G / \map Z G: G / \map Z G = \gen \tau$
Since $\tau$ is a coset by $\map Z G$:

$\exists t \in G: \tau = t \map Z G$
Thus each coset of $\map Z G$ in $G$ is equal to $\paren {t \map Z G}^i = t^i \map Z G$ for some $i \in \Z$.

Now let $x, y \in G$.
Suppose $x \in t^m \map Z G, y \in t^n \map Z G$.
Then $x = t^m z_1, y = t^n z_2$ for some $z_1, z_2 \in \map Z G$.
Thus:














\(\ds x y\)

\(=\)







\(\ds \paren {t^m z_1} \paren {t^n z_2 }\)





by hypothesis














\(\ds \)

\(=\)







\(\ds t^m \paren {z_1 t^n}  z_2\)





Subset Product within Semigroup is Associative














\(\ds \)

\(=\)







\(\ds t^m \paren {t^n z_1} z_2\)





$z_1$ commutes with all $t \in G$ since it is in the center














\(\ds \)

\(=\)







\(\ds \paren {t^m t^n} \paren {z_1 z_2}\)




















\(\ds \)

\(=\)







\(\ds t^{m + n} \paren {z_1 z_2}\)





Powers of Group Elements: Sum of Indices














\(\ds \)

\(=\)







\(\ds t^{n + m} \paren {z_2 z_1}\)




















\(\ds \)

\(=\)







\(\ds \paren {t^n t^m} \paren {z_2 z_1}\)





Powers of Group Elements: Sum of Indices














\(\ds \)

\(=\)







\(\ds t^n \paren {t^m z_2} z_1\)




















\(\ds \)

\(=\)







\(\ds t^n \paren {z_2 t^m} z_1\)





$z_2$ commutes with all $t \in G$ since it is in the center














\(\ds \)

\(=\)







\(\ds \paren {t^n z_2 } \paren {t^m z_1 }\)





Subset Product within Semigroup is Associative














\(\ds \)

\(=\)







\(\ds y x\)





by hypothesis




This holds for all $x, y \in G$, and thus $G$ is abelian.
Thus by definition of abelian group:

$\map Z G = G$
Therefore Quotient of Group by Itself it follows that $G / \map Z G$ is the trivial group.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 47 \epsilon$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 51.1$ The quotient group $G / Z$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Proposition $10.21$




