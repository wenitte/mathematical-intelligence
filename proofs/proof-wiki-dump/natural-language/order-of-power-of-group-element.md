# 

Source: https://proofwiki.org/wiki/Order_of_Power_of_Group_Element



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $g \in G$ be an element of $G$ such that:

$\order g = n$
where $\order g$ denotes the order of $g$.
Then:

$\forall m \in \Z: \order {g^m} = \dfrac n {\gcd \set {m, n} }$
where $\gcd \set {m, n}$ denotes the greatest common divisor of $m$ and $n$.


Proof
Let $\gcd \set {m, n} = d$.
From Integers Divided by GCD are Coprime: there exists $m', n' \in \Z$ such that $m = d m'$, $n = d n'$.
Then:














\(\ds \paren {g^m}^{n'}\)

\(=\)







\(\ds \paren {g^{d m'} }^{n'}\)





Definition of $m'$














\(\ds \)

\(=\)







\(\ds \paren {g^{d n'} }^{m'}\)




















\(\ds \)

\(=\)







\(\ds \paren {g^n}^{m'}\)





Definition of $n'$














\(\ds \)

\(=\)







\(\ds e^{m'}\)





$n$ is the order of $g$














\(\ds \)

\(=\)







\(\ds e\)









By Element to Power of Multiple of Order is Identity:

$\order {g^m} \divides n'$.

Aiming for a contradiction, suppose $\order {g^m} = n' ' < n'$.
By Bézout's Identity:

$\exists x, y \in \Z: m x + n y = d$













\(\ds g^{d n' '}\)

\(=\)







\(\ds g^{\paren {m x + n y} n' '}\)




















\(\ds \)

\(=\)







\(\ds \paren {g^{m n' '} }^x \paren {g^n}^{y n' '}\)




















\(\ds \)

\(=\)







\(\ds e^x \paren {g^n}^{y n' '}\)





$n' '$ is the order of $g^m$














\(\ds \)

\(=\)







\(\ds e^x e^{y n' '}\)





$n$ is the order of $g$














\(\ds \)

\(=\)







\(\ds e\)









But $d n' ' < d n' = n$, contradicting the fact that $n$ is the order of $g$.
Therefore:

$\order {g^m} = n'$

Recalling the definition of $n'$:

$\order {g^m} = \dfrac n {\gcd \set {m, n} }$
as required.
$\blacksquare$


Examples
Order of Powers of $x$ when $\order x= 20$
Let $G$ be a group.
Let $x \in G$ be such that:

$\order x = 20$
where $\order x$ denotes the order of $x$ in $G$.
Then:




\(\text {(1)}: \quad\)









\(\ds \order {x^4}\)

\(=\)







\(\ds 5\)










\(\text {(2)}: \quad\)









\(\ds \order {x^{10} }\)

\(=\)







\(\ds 2\)










\(\text {(3)}: \quad\)









\(\ds \order {x^{12} }\)

\(=\)







\(\ds 5\)











Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 41 \alpha$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts: Exercise $5 \ \text{(i)}$




