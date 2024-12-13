# 

Source: https://proofwiki.org/wiki/Operation_over_which_Every_Commutative_Associative_Operation_is_Distributive_is_either_Left_or_Right_Operation/Lemma



Theorem
Let $S$ be a set.
Let $A \subsetneqq S$ be a proper subset of $S$.
Let $a \in A$ and $b \in \relcomp S A$.
Let $\odot$ be the operation on $S$ defined as:

$\forall x, y \in S: x \odot y = \begin {cases} a & : \set {x, y} \subseteq A \\ b & : \set {x, y} \not \subseteq A \end {cases}$

Then $\odot$ is commutative and associative.


Proof
Commutativity
Trivially:










\(\ds \forall x, y \in S: \, \)



\(\ds y \odot x\)

\(=\)







\(\ds \begin {cases} a & : \set {y, x} \subseteq A \\ b & : \set {y, x} \not \subseteq A \end {cases}\)





Definition of $\odot$














\(\ds \)

\(=\)







\(\ds \begin {cases} a & : \set {x, y} \subseteq A \\ b & : \set {x, y} \not \subseteq A \end {cases}\)





Definition of Set














\(\ds \)

\(=\)







\(\ds x \odot y\)





Definition of Set



$\Box$


Associativity
There are $2$ cases to attend to:

Case $1$
$\set {x, y, z} \subseteq A$













\(\ds x \odot \paren {y \odot z}\)

\(=\)







\(\ds x \odot \paren {\begin {cases} a & : \set {y, z} \subseteq A \\ b & : \set {y, z} \not \subseteq A \end {cases} }\)





Definition of $\odot$














\(\ds \)

\(=\)







\(\ds x \odot a\)





as $\set {y, z} \subseteq A$














\(\ds \)

\(=\)







\(\ds \begin {cases} a & : \set {x, a} \subseteq A \\ b & : \set {x, a} \not \subseteq A \end {cases}\)





Definition of Set














\(\ds \)

\(=\)







\(\ds a\)





as $\set {x, a} \subseteq A$


















\(\ds \paren {x \odot y} \odot z\)

\(=\)







\(\ds z \odot \paren {x \odot y}\)





as $\odot$ is a priori commutative














\(\ds \)

\(=\)







\(\ds a\)





from above














\(\ds \)

\(=\)







\(\ds x \odot \paren {y \odot z}\)





from above



That is:

$x \odot \paren {y \odot z} = \paren {x \odot y} \odot z = a$


Case $2$
$\set {x, y, z} \not \subseteq A$
Then at least one of $\set {x, y, z}$ is in $\relcomp S A$.
Without loss of generality, suppose $x \in \relcomp S A$.
Then:

$\forall y \in S: \set {x, y} \not \subseteq A$
and so:

$\forall y \in S: x \odot y = b$
Then we note that similarly:

$\forall y \in S: \set {b, y} \not \subseteq A$
and so:

$\forall y \in S: y \odot b = b$

Hence:

$x \odot \paren {y \odot z} = \paren {x \odot y} \odot z = b$

Both cases have been examined, and we see that:

$\forall x, y, z \in S: x \odot \paren {y \odot z} = \paren {x \odot y} \odot z$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.26 \ \text {(b)}$




