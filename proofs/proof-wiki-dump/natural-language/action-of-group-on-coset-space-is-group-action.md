# 

Source: https://proofwiki.org/wiki/Action_of_Group_on_Coset_Space_is_Group_Action

Theorem
Let $G$ be a group whose identity is $e$.
Let $H$ be a subgroup of $G$.

Let $*: G \times G / H \to G / H$ be the action on the (left) coset space:

$\forall g \in G, \forall g' H \in G / H: g * \paren {g' H} := \paren {g g'} H$
Then $G$ is a group action.


Proof













\(\ds a * \paren {b * g' H}\)

\(=\)







\(\ds a * \paren {\paren {b g'} H}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \paren {a \paren {b g'} } H\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \paren {\paren {a b } g' } H\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {a b} \paren{g' H }\)





Subset Product within Semigroup is Associative/Corollary



demonstrating that $*$ satisfies Group Action Axiom $\text {GA} 2$.

Then:














\(\ds e * g' H\)

\(=\)







\(\ds \paren {e g'} H\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g'H\)





Group Axiom $\text G 2$: Existence of Identity Element



demonstrating that $*$ satisfies Group Action Axiom $\text {GA} 1$.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $6$: Cosets: Exercise $9$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 53$




