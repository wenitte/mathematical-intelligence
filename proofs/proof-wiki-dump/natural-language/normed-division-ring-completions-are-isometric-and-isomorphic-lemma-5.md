# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Completions_are_Isometric_and_Isomorphic/Lemma_5

Theorem
Let $\struct {S_1, \norm {\, \cdot \,}_1 }$ and $\struct {S_2, \norm {\, \cdot \,}_2 }$ be complete normed division rings.
Let $R_1$ be a dense subring of $S_1$.
Let $R_2$ be a dense subring of $S_2$.
Let $\psi': R_1 \to R_2$ be an isometric ring isomorphism.
Let $\psi: S_1 \to S_2$ be defined by:

$\forall x \in S_1: \map \psi x = \ds \lim_{n \mathop \to \infty} \map {\psi'} {x_n}$
where $x = \ds \lim_{n \mathop \to \infty} x_n$ for some sequence $\sequence {x_n} \subseteq R_1$.
Then:

$\psi$ is a ring isomorphism.


Proof
By Lemma $4$, $\psi$ is an isometry.
By the definition of an isometry, $\psi$ is a bijection.
By the definition of a ring isomorphism, all that remains is to show that $\psi$ is a ring homomorphism.
That is:

$(1): \quad \forall x, y \in S_1: \map \psi {x + y} = \map \psi x + \map \psi y$
$(2): \quad \forall x, y \in S_1: \map \psi {x y} = \map \psi x \map \psi y$

Let $x, y \in S_1$.
Let $x = \ds \lim_{n \mathop \to \infty} x_n$ for some sequence $\sequence {x_n} \subseteq R_1$.
Let $y = \ds \lim_{n \mathop \to \infty} y_n$ for some sequence $\sequence {y_n} \subseteq R_1$.
By Sum Rule for Sequences in Normed Division Ring then:

$x + y = \ds \lim_{n \mathop \to \infty} \paren {x_n + y_n}$
By Product Rule for Sequences in Normed Division Ring then:

$x y = \ds \lim_{n \mathop \to \infty} \paren {x_n y_n}$

Then:














\(\ds \map \psi {x + y}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {\psi'} {x_n + y_n}\)





Definition of $\psi$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\map {\psi'} {x_n} + \map {\psi'} {y_n} }\)





$\psi'$ is a ring isomorphism














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {\psi'} {x_n} + \lim_{n \mathop \to \infty} \map {\psi'} {y_n}\)





Sum Rule for Sequences in Normed Division Ring














\(\ds \)

\(=\)







\(\ds \map \psi x + \map \psi y\)





Definition of $\psi$



and:














\(\ds \map \psi {x y}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {\psi'} {x_n y_n}\)





Definition of $\psi$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\map {\psi'} {x_n} \map {\psi'} {y_n} }\)





$\psi'$ is a ring isomorphism














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {\psi'} {x_n} \lim_{n \mathop \to \infty} \map {\psi'} {y_n}\)





Product Rule for Sequences in Normed Division Ring














\(\ds \)

\(=\)







\(\ds \map \psi x \map \psi y\)





Definition of $\psi$



$\blacksquare$





