# 

Source: https://proofwiki.org/wiki/Element_of_Matroid_Base_and_Circuit_has_Substitute/Lemma_3

Lemma for Element of Matroid Base and Circuit has Substitute
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $B \subseteq S$ be a base of $M$.
Let $C \subseteq S$ be a circuit of $M$.
Let $x \in B \cap C$.
Let $X \subseteq S$ such that:

$\paren{ C \setminus \set x} \cup X$ is a base of $M$.
Then:

$\exists y \in \paren {\paren {C \setminus \set x} \cup X} \setminus \paren {B \setminus \set x} : \paren {B \setminus \set x} \cup \set y \in \mathscr I : \card {\paren {B \setminus \set x} \cup \set y} = \card {\paren {C \setminus \set x} \cup X}$


Proof
From Set Difference is Subset:

$B \setminus \set x \subseteq B$
From matroid axiom $(\text I 2)$:

$B \setminus \set x \in \mathscr I$
We have














\(\ds \card {B \setminus \set x} + 1\)

\(=\)







\(\ds \paren {\card B - \card {\set x} } + 1\)





Cardinality of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \paren {\card B - 1 } + 1\)





Cardinality of Singleton














\(\ds \)

\(=\)







\(\ds \card B\)




















\(\ds \)

\(=\)







\(\ds \card {\paren {C \setminus \set x} \cup X}\)





All Bases of Matroid have same Cardinality



From matroid axiom $(\text I 3')$:

$\exists y \in \paren {\paren {C \setminus \set x} \cup X} \setminus \paren {B \setminus \set x} : \paren {B \setminus \set x} \cup \set y \in \mathscr I : \card {\paren {B \setminus \set x} \cup \set y} = \card {\paren {C \setminus \set x} \cup X}$
$\blacksquare$





