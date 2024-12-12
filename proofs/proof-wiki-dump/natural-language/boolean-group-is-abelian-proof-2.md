# 

Source: https://proofwiki.org/wiki/Boolean_Group_is_Abelian/Proof_2

Theorem
Let $G$ be a Boolean group.

Then $G$ is abelian.


Proof
Let $ a, b \in G$.
By definition of Boolean group:

$\forall x \in G: x^2 = e$
where $e$ is the identity of $G$.
Then:














\(\ds a b\)

\(=\)







\(\ds a e b\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds a \paren {a b}^2 b\)





as $\forall x \in G: x^2 = e$














\(\ds \)

\(=\)







\(\ds a \paren {a b} \paren {a b} b\)




















\(\ds \)

\(=\)







\(\ds \paren {a a} \paren {b a} \paren {b b}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds a^2 \paren {b a} b^2\)




















\(\ds \)

\(=\)







\(\ds e \paren {b a} e\)





as $\forall x \in G: x^2 = e$














\(\ds \)

\(=\)







\(\ds b a\)









Thus $a b = b a$ and therefore $G$ is abelian. 
$\blacksquare$





