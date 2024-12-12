# 

Source: https://proofwiki.org/wiki/Boolean_Group_is_Abelian



Theorem
Let $G$ be a Boolean group.

Then $G$ is abelian.


Proof 1
By definition of Boolean group, all elements of $G$, other than the identity, have order $2$.
By Group Element is Self-Inverse iff Order 2 and Identity is Self-Inverse, all elements of $G$ are self-inverse.
The result follows directly from All Elements Self-Inverse then Abelian.
$\blacksquare$


Proof 2
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


Sources
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\S 1.1$: Exercise $13$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts: Exercise $3$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $9$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 44.4$ Some consequences of Lagrange's Theorem
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Exercise $1$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$: Exercise $8$




